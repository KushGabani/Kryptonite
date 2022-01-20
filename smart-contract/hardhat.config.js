require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/TTtL-N_uLGz08XVXn20IcpxaQsFQ3alt",
      accounts: [
        "424c3d28e7e48f6220ead3a363cd70841125e75373b9763017f3c3d941476e93",
      ],
    },
  },
};
