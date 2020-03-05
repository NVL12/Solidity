console.log('starting...');

const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

console.log('1');

const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    process.env.INFURA_URL
);

var web3 = new Web3(provider);

console.log('2');

// console.log(provider);

async function getTran () {
    var transaction = await web3.eth.getTransaction('0xa884d4e5507236a63b0f8a3eca628228afcbd39f6482fc4e49c8924320aa1ff2');
    console.log(transaction);
} 

getTran();


