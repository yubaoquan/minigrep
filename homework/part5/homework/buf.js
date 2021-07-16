const fs = require('fs');

const buffer = Buffer.from('hello world');
const ws = fs.createWriteStream('./test.txt');
ws.write(buffer);
ws.close();
