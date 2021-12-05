module.exports = {
  contracts_directory: './src/contracts',
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 5000000,
    },
  },
  compilers: {
    solc: {
      version: '>=0.4.22 <0.9.0',
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
