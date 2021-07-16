const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const ejs = require('ejs');
const { promisify } = require('util');

const { createReadStream } = fs;

const supportedExtNames = ['.jpg', '.html', '.css', '.js', '.png', '.gif', '.jpeg'];
module.exports = class Server {
  constructor(config) {
    this.config = {
      port: 1234,
      directory: process.cwd(),
      ...config,
    };
  }

  start() {
    const server = http.createServer(this.serveHanele);
    server.listen(this.config.port, () => {
      console.info(`Server started at http://localhost:${this.config.port}`);
    });
  }

  serveHanele = async (req, res) => {
    const { pathname } = url.parse(req.url);
    const parsedPath = decodeURIComponent(pathname);
    const finalPath = path.join(this.config.directory, parsedPath);
    console.info(finalPath);

    try {
      const stats = fs.statSync(finalPath);
      if (stats.isFile()) {
        const ext = path.extname(finalPath);
        if (!supportedExtNames.includes(ext)) {
          this.errorHandle(req, res, `File type ${ext} not supported`);
        } else {
          this.fileHandle(req, res, finalPath);
        }
      } else if (stats.isDirectory()) {
        const dirs = fs.readdirSync(finalPath).map((item) => {
          const itemPath = path.join(finalPath, item);
          const itemStats = fs.statSync(itemPath);
          const itemExt = path.extname(itemPath);
          const isUnsupportedFile = itemStats.isFile() && !supportedExtNames.includes(itemExt);
          return {
            path: path.join(pathname, item),
            title: item,
            isUnsupportedFile,
          };
        });

        const renderFile = promisify(ejs.renderFile);
        const ret = await renderFile(path.resolve(__dirname, 'template.html'), {
          dirs,
          parent: pathname !== '/',
          parentPath: path.dirname(pathname),
          title: path.basename(finalPath),
        });
        res.end(ret);
      } else {
        this.errorHandle(req, res);
      }
    } catch (e) {
      console.error(e);
      this.errorHandle(req, res, 'Not Found');
    }
  };

  errorHandle = (req, res, errMsg = 'Not Found') => {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html;charset=utf-8');
    res.end(errMsg);
  };

  // eslint-disable-next-line class-methods-use-this
  fileHandle(req, res, filepath) {
    res.statusCode = 200;
    res.setHeader('Content-type', `${mime.getType(filepath)};charset=utf-8`);
    createReadStream(filepath).pipe(res);
  }
};
