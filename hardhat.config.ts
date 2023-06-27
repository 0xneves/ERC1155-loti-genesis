import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-gas-reporter";
import dotenv from "dotenv";
dotenv.config();

const { MUMBAI, POLYGON, PRIVATE_KEY, POLYSCAN } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  // gasReporter: {
  //   enabled: true,
  // },
  etherscan: {
    apiKey: `${POLYSCAN}`,
  },
  networks: {
    mumbai: {
      url: `${MUMBAI}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    polygon: {
      url: `${POLYGON}`,
      accounts: [`${PRIVATE_KEY}`],
    },
  },
};

export default config;
