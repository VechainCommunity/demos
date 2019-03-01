# Hello World

GOAL: To print out latest block

## Steps

- Make sure you install [golang](https://golang.org/doc/install) v1.10.0^ and [node](https://nodejs.org/en/) v8.0.0^
- Make sure you setup `$GOPATH`, and git clone [thor](https://github.com/vechain/thor) under the src folder
- Follow the official [docs](https://github.com/vechain/thor) to build and run the testnet
- Your thor is ready on `http://localhost:8669/`
- We want to use [thorify](https://github.com/vechain/thorify) to interact with this endpoint
- index.js

```js
const { thorify } = require("thorify");
const Web3 = require("web3");

const web3 = new Web3();
thorify(web3, "http://localhost:8669");

web3.eth.getBlock("latest").then(res=>console.log(res));
```

- sample result

```js
{ 
  number: 8983,
  id: '0x000023171ce22cd3af3c121acf9dd2be8c1c4108f05a046455d6907ba1edf1e2',
  size: 238,
  parentID: '0x00002316794515d22b331e973aa167f462a6d2e3fabd0f258d447ef33a2dedc3',
  timestamp: 1528518580,
  gasLimit: 10000000,
  beneficiary: '0x25ae0ef84da4a76d5a1dfe80d3789c2c46fee30a',
  gasUsed: 0,
  totalScore: 16094,
  txsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
  stateRoot: '0x1b939e21eb0814fc355aeb0f2812b8bab25a0c6e8d3e8bd6c89d0787a1867409',
  receiptsRoot: '0x45b0cfc220ceec5b7c1c62c4d4193d38e4eba48e8815729ce75f9c0ab0e4c1c0',
  signer: '0x25ae0ef84da4a76d5a1dfe80d3789c2c46fee30a',
  isTrunk: true,
  transactions: [] 
}
```