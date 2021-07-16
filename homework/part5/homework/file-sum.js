const fs = require('fs');
const path = require('path');

function analyse(filePath, showDetail) {
  const stats = fs.statSync(filePath);
  if (stats.isFile()) return stats.size;
  if (stats.isDirectory()) {
    return fs.readdirSync(filePath).reduce((sum, filename) => {
      const subPath = path.resolve(filePath, filename);
      const size = analyse(subPath, showDetail);
      if (showDetail) console.info(subPath, '---', size);
      return size + sum;
    }, 0);
  }

  return 0;
}

function entry(inputPath, showDetail) {
  if (!inputPath) return console.error('Please input folder path.');

  const filePath = path.resolve(process.cwd(), inputPath);
  if (!fs.existsSync(filePath)) return console.error(`File or folder "${filePath}" not exists`);

  const stats = fs.statSync(filePath);
  if (stats.isFile()) console.info(`Total size: ${stats.size} bytes.`);
  if (stats.isDirectory()) console.info(`Total size: ${analyse(filePath, showDetail)} bytes.`);
}

entry(process.argv[2], process.argv[3] === 'i');
