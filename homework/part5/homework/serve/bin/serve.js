#!/usr/bin/env node

const { program } = require('commander');

const options = [
  ['-p, --port <dir>', {
    description: 'init server port',
    example: 'myserve -p 1234',
  }],
  ['-d, --directory <dir>', {
    description: 'init server directory',
    example: 'myserve -d c:',
  }],
];

const formatConfig = (config, cb) => config.forEach(([key, val]) => cb(key, val));

formatConfig(options, (cmd, val) => program.option(cmd, val.description));

program.name('myserve');
program.version(require('../package.json').version);

program.on('--help', () => {
  console.info('Examples: ');
  formatConfig(options, (key, val) => console.info(val.example));
});

program.parse();

const Server = require('../main.js');

const server = new Server(program.opts());
server.start();
