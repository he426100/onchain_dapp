/**
 * Wagmi 配置 - Ethereum 标准实现
 * 参考: Scaffold-ETH-2 和 RainbowKit 最佳实践
 */

// 从 bundle.js 暴露的全局对象获取 wagmi 和 viem
const { createConfig, http } = window.wagmi.core;
const { mainnet, sepolia, hardhat } = window.wagmi.chains;
const { injected, walletConnect, coinbaseWallet, metaMask } = window.wagmi.connectors;

// 支持的网络
export const chains = [sepolia, mainnet, hardhat];

// WalletConnect Project ID (从环境变量或配置文件获取)
const WALLETCONNECT_PROJECT_ID = 'f78e6f92b05505a61100ab9429b2a82e'; // TODO: 替换为实际的 Project ID

// 创建 wagmi 配置
export const wagmiConfig = createConfig({
  chains,
  connectors: [
    // MetaMask (优先检测)
    metaMask({
      dappMetadata: {
        name: 'OnChain DApp',
        url: window.location.origin,
      },
    }),

    // 注入钱包 (EIP-6963)
    injected({
      shimDisconnect: true,
    }),

    // Coinbase Wallet
    coinbaseWallet({
      appName: 'OnChain DApp',
      appLogoUrl: `${window.location.origin}/statics/favicon.ico`,
    }),

    // WalletConnect
    walletConnect({
      projectId: WALLETCONNECT_PROJECT_ID,
      metadata: {
        name: 'OnChain DApp',
        description: 'Multi-chain wallet connection testing tool',
        url: window.location.origin,
        icons: [`${window.location.origin}/statics/favicon.ico`],
      },
      showQrModal: true,
    }),
  ],

  // RPC 配置 (支持降级)
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http('http://127.0.0.1:8545'),
  },
});

/**
 * 网络元数据
 */
export const NETWORK_METADATA = {
  [mainnet.id]: {
    color: '#627EEA',
    icon: '⬥',
  },
  [sepolia.id]: {
    color: '#A855F7',
    icon: '⬥',
  },
  [hardhat.id]: {
    color: '#FFF04D',
    icon: '⚒️',
  },
};

/**
 * 获取网络显示名称
 */
export function getNetworkDisplayName(chainId) {
  const chain = chains.find(c => c.id === chainId);
  return chain?.name || `Chain ${chainId}`;
}

/**
 * 获取区块浏览器 URL
 */
export function getBlockExplorerUrl(chainId, hash, type = 'tx') {
  const chain = chains.find(c => c.id === chainId);
  if (!chain?.blockExplorers?.default) return null;

  return `${chain.blockExplorers.default.url}/${type}/${hash}`;
}
