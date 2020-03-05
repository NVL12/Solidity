
console.log('start');

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const helloPath = path.resolve(__filename, '../contracts', 'hello.sol');
const source = fs.readFileSync(helloPath, 'utf8');
const compiledSource = solc.compile(source, 1).contracts[':Hello'];

module.exports = compiledSource;

console.log('Successful');

// 'D:\\HK2-2019\\Do_An\\nodejs-ethereum\\contracts\\hello.sol'
