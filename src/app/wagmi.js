import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  hardhat,
} from "wagmi/chains";

// Only the Alchemy key comes from environment variables
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

const transports = {
  [mainnet.id]: http(`https://eth-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [polygon.id]: http(`https://polygon-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [optimism.id]: http(`https://opt-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [arbitrum.id]: http(`https://arb-mainnet.g.alchemy.com/v2/${alchemyKey}`),
  [base.id]: http("https://mainnet.base.org"),
  [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
  [hardhat.id]: http("http://127.0.0.1:8545"),
};

export const config = getDefaultConfig({
  appName: "My DApp", // Hardcoded app name
  projectId: process.env.NEXT_PUBLIC_PROJECTID, // Hardcoded WalletConnect ID
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    hardhat, // Always include Hardhat
  ],
  transports,
  ssr: true,
});
