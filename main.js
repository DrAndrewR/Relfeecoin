const SHA256 = require('crypto-js/sha256');

class Block{
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data
    this.previousHash = previousHash;
    this.hash = this.calculatehash();
  }
  
  CalculateHash(){
       return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }  
}

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock(){
    return new Block(0, "05/11/2018", "Genesis block", "0");
  }
  
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }
  
  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chan.push(newBlock);
  }
}

let relfeecoin = new Blockchain();
relfeeCoin.addBlock(new Block(1, "01/11/2018", {amount: 4 }));
relfeeCoin.addBlock(new Block(2, "02/11/2018", {amount: 10 }));

Console.log(JSON.stringify(RelfeeCoin, null, 4));
