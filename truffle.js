const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => {
        const mnemonic = fs.readFileSync(".secret").toString().trim();
        return new HDWalletProvider(mnemonic, `https://rpc.ankr.com/eth_goerli`)
      },
      network_id: 5,
    },
  },
  compilers: {
    solc: {
      version: "0.6.2"
    }
  }
};
