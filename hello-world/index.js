const { thorify } = require("thorify");
const Web3 = require("web3");

const web3 = new Web3();
thorify(web3, "http://localhost:8669");

web3.eth.getBlock("latest").then(res=>console.log(res));