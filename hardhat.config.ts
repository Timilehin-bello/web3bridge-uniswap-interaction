import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const { API_URL, PRIVATE_KEY }: any = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks: {
    hardhat: {
      forking: {
        url: API_URL,
        blockNumber: 19313577,
      },
    },
    // localhost: {
    //   url: "http://127.0.0.1:8545",
    // },
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
