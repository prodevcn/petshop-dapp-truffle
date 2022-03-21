require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    "prod": {
      provider: () => new HDWalletProvider(process.env.ADMIN_WALLET_PRIVKEY, `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.ADMIN_WALLET_PRIVKEY, `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    moonbase: {
      provider: () => new HDWalletProvider(process.env.ADMIN_WALLET_PRIVKEY, process.env.MOONBASE),
      network_id: 1287,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  }
};
