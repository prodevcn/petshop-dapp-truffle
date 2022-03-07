const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "orange banana apple pear peach nut";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    "live": {
      network_id: 1,
      host: "127.0.0.1",
      port: 8546,
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/2831591f10d1473a8bd806ed78bfcbb2")
      },
      network_id: 3
    },
    moonbase: {
      url: "https://moonbeam-alpha.api.onfinality.io/rpc?apikey=1647bb4e-7bcf-42c9-bfb7-b1a569577841",
      accounts: [process.env.ADMIN_WALLET_PRIVATE_KEY],
      chainId: 1287,
    },
  }
};
