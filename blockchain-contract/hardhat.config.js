require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `${process.env.ALCHEMY_ENDPOINT}`,
      accounts: [`${process.env.METAMASK_PRIVATE_KEY}`],
    },
  },
};
