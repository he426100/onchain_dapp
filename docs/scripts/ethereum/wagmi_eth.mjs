/**
 * Ethereum Wagmi 标准实现
 * 完全对标 Scaffold-ETH-2 和 RainbowKit 的最佳实践
 */

// 从 bundle.js 暴露的全局对象获取 wagmi 和 viem
const {
  connect: wagmiConnect,
  disconnect: wagmiDisconnect,
  getAccount,
  getChainId,
  switchChain,
  watchAccount,
  sendTransaction: wagmiSendTransaction,
  signMessage: wagmiSignMessage,
  signTypedData: wagmiSignTypedData,
  getBalance,
  waitForTransactionReceipt,
} = window.wagmi.core;

const { parseEther } = window.viem;

import { wagmiConfig, getBlockExplorerUrl, chains } from './wagmi-config.mjs';
import { stateManager } from './state-manager.mjs';
import { notification, parseError, createTxNotification } from '../utils/notifications.mjs';

/**
 * 连接钱包 - Wagmi 标准实现
 * ✅ 符合 EIP-1193 规范
 * ✅ 自动状态管理
 * ✅ 支持多种钱包
 * ✅ 用户可选择钱包
 * ✅ 测试模式：每次都触发钱包交互
 */
async function connect() {
  try {
    const account = getAccount(wagmiConfig);

    // 如果已连接，询问是否重新连接
    if (account.isConnected) {
      const reconnect = confirm(
        `当前已连接到:\n${account.address}\n\n` +
        `连接器: ${account.connector?.name}\n\n` +
        `是否要断开并重新连接？`
      );

      if (!reconnect) {
        notification.info('保持当前连接');
        return account;
      }

      // 先断开当前连接
      try {
        await wagmiDisconnect(wagmiConfig);
        notification.info('已断开连接，准备重新连接...');
        // 给一点时间让状态更新
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (disconnectError) {
        // 如果断开失败，继续尝试连接（某些连接器可能不支持 disconnect）
        console.warn('Disconnect failed, continuing with reconnect:', disconnectError);
        notification.info('准备重新连接...');
      }
    }

    // 获取可用的连接器
    const { connectors } = wagmiConfig;
    if (connectors.length === 0) {
      throw new Error('没有可用的钱包连接器');
    }

    // 显示可用的钱包连接器供用户选择
    const connectorList = connectors
      .map((connector, index) => `${index + 1}. ${connector.name}`)
      .join('\n');

    const choice = prompt(`选择要连接的钱包:\n${connectorList}\n\n请输入序号 (直接回车默认选择第1个):`);

    if (choice === null) {
      notification.info('已取消连接');
      return;
    }

    // 默认选择第一个
    let selectedIndex = 0;
    if (choice && choice.trim() !== '') {
      selectedIndex = parseInt(choice) - 1;
      if (selectedIndex < 0 || selectedIndex >= connectors.length) {
        notification.error('无效的选择，使用默认钱包');
        selectedIndex = 0;
      }
    }

    const selectedConnector = connectors[selectedIndex];
    const loadingId = notification.loading(`正在连接 ${selectedConnector.name}...`);

    try {
      const result = await wagmiConnect(wagmiConfig, {
        connector: selectedConnector,
      });

      notification.remove(loadingId);
      notification.success(`已连接 ${selectedConnector.name}: ${result.accounts[0].substring(0, 6)}...${result.accounts[0].substring(38)}`);

      return result;
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('Connect error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 断开连接 - Wagmi 标准实现
 * ✅ 正确的实现方式
 * ✅ 自动清理应用状态
 * ✅ 符合规范
 */
async function disconnect() {
  try {
    // wagmi disconnect - 这是标准实现
    await wagmiDisconnect(wagmiConfig);

    notification.success('已断开连接');
    return 'Disconnected successfully';
  } catch (error) {
    console.error('Disconnect error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 获取账户信息
 */
function getAccountInfo() {
  const account = getAccount(wagmiConfig);
  const state = stateManager.getState();

  return {
    ...account,
    ...state,
  };
}

/**
 * 个人签名 - Personal Sign
 */
async function personalSign() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    const message = prompt('请输入要签名的消息:', '这是一条测试消息');
    if (!message) return;

    const loadingId = notification.loading('等待签名确认...');

    try {
      const signature = await wagmiSignMessage(wagmiConfig, {
        message,
      });

      notification.remove(loadingId);
      notification.success('签名成功!');

      return signature;
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('Personal sign error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * TypedData 签名 V4
 */
async function signTypedDataV4() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    const typedData = {
      domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: account.chainId,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      },
      types: {
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person' },
          { name: 'contents', type: 'string' },
        ],
      },
      primaryType: 'Mail',
      message: {
        from: {
          name: 'Cow',
          wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
          name: 'Bob',
          wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
      },
    };

    const loadingId = notification.loading('等待签名确认...');

    try {
      const signature = await wagmiSignTypedData(wagmiConfig, typedData);

      notification.remove(loadingId);
      notification.success('TypedData 签名成功!');

      return signature;
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('SignTypedData error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 发送交易 - 完整的生命周期管理
 * ✅ 用户确认通知
 * ✅ 等待区块确认
 * ✅ 区块浏览器链接
 * ✅ 成功/失败通知
 */
async function sendTransaction() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    const recipient = prompt('请输入接收地址:', '0x372cC9e4Fa8E834237e106235e26A2fb7E9082D2');
    if (!recipient) return;

    const amount = prompt('请输入金额 (ETH):', '0.001');
    if (!amount) return;

    // 1. 等待用户确认
    const loadingId = notification.loading('等待钱包确认...');

    try {
      // 2. 发送交易
      const hash = await wagmiSendTransaction(wagmiConfig, {
        to: recipient,
        value: parseEther(amount),
      });

      notification.remove(loadingId);

      // 3. 等待确认
      const explorerUrl = getBlockExplorerUrl(account.chainId, hash, 'tx');
      const waitingId = notification.loading(
        createTxNotification('交易已提交，等待确认...', explorerUrl)
      );

      try {
        const receipt = await waitForTransactionReceipt(wagmiConfig, {
          hash,
          confirmations: 2,
        });

        notification.remove(waitingId);

        // 4. 检查状态
        if (receipt.status === 'success') {
          notification.success(
            createTxNotification('交易确认成功! 🎉', explorerUrl),
            { duration: 5000 }
          );
        } else {
          throw new Error('交易失败');
        }

        return hash;
      } catch (waitError) {
        notification.remove(waitingId);
        throw waitError;
      }
    } catch (sendError) {
      notification.remove(loadingId);
      throw sendError;
    }
  } catch (error) {
    console.error('Send transaction error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 切换网络 - 自动添加网络
 */
async function switchNetwork() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    // 显示可用网络
    const networkList = chains
      .filter(chain => chain.id !== account.chainId)
      .map((chain, index) => `${index + 1}. ${chain.name} (Chain ID: ${chain.id})`)
      .join('\n');

    const choice = prompt(`选择要切换的网络:\n${networkList}\n\n请输入序号:`);
    if (!choice) return;

    const index = parseInt(choice) - 1;
    const targetChain = chains.filter(chain => chain.id !== account.chainId)[index];

    if (!targetChain) {
      notification.error('无效的网络选择');
      return;
    }

    const loadingId = notification.loading(`正在切换到 ${targetChain.name}...`);

    try {
      // wagmi switchChain 会自动处理:
      // 1. 调用 wallet_switchEthereumChain
      // 2. 如果失败,自动调用 wallet_addEthereumChain
      await switchChain(wagmiConfig, {
        chainId: targetChain.id,
      });

      notification.remove(loadingId);
      notification.success(`已切换到 ${targetChain.name}`);
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('Switch network error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 获取余额
 */
async function getAccountBalance() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    const loadingId = notification.loading('正在获取余额...');

    try {
      const balance = await getBalance(wagmiConfig, {
        address: account.address,
      });

      notification.remove(loadingId);

      const formattedBalance = `${Number(balance.formatted).toFixed(6)} ${balance.symbol}`;
      notification.success(`余额: ${formattedBalance}`);

      return balance;
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('Get balance error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 监听账户变化
 */
function listenAccountChanges() {
  const unwatch = watchAccount(wagmiConfig, {
    onChange(account) {
      console.log('Account changed:', account);

      if (account.isConnected) {
        notification.info(
          `账户已更新: ${account.address?.substring(0, 6)}...${account.address?.substring(38)}`
        );
      } else {
        notification.info('账户已断开');
      }
    },
  });

  notification.success('已开始监听账户变化 (查看控制台)');
  console.log('Account watcher started. Call the returned function to stop watching.');

  return unwatch;
}

/**
 * 请求账户 - Request Accounts
 * 符合 EIP-1193 eth_requestAccounts
 */
async function requestAccounts() {
  try {
    const account = getAccount(wagmiConfig);

    if (!account.isConnected) {
      // 如果未连接，触发连接流程
      await connect();
      return;
    }

    // 已连接，返回账户地址
    const accounts = account.address ? [account.address] : [];

    notification.success(`账户地址: ${account.address?.substring(0, 6)}...${account.address?.substring(38)}`);
    console.log('Accounts:', accounts);

    return accounts;
  } catch (error) {
    console.error('Request accounts error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 添加自定义网络 - Import Chain
 * 使用 wallet_addEthereumChain
 */
async function addEthereumChain() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    // 提示用户输入网络参数
    const chainIdInput = prompt('请输入 Chain ID (十进制):', '11155111');
    if (!chainIdInput) return;
    const chainId = parseInt(chainIdInput);

    const chainName = prompt('请输入网络名称:', 'Sepolia Test Network');
    if (!chainName) return;

    const rpcUrl = prompt('请输入 RPC URL:', 'https://rpc.sepolia.org');
    if (!rpcUrl) return;

    const currencySymbol = prompt('请输入货币符号:', 'ETH');
    if (!currencySymbol) return;

    const explorerUrl = prompt('请输入区块浏览器 URL (可选):', 'https://sepolia.etherscan.io');

    // 获取 WalletClient
    const { getWalletClient } = window.wagmi.core;
    const walletClient = await getWalletClient(wagmiConfig);

    if (!walletClient) {
      throw new Error('无法获取钱包客户端');
    }

    const loadingId = notification.loading(`正在添加网络 ${chainName}...`);

    try {
      // 调用 wallet_addEthereumChain
      await walletClient.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: `0x${chainId.toString(16)}`,
          chainName: chainName,
          nativeCurrency: {
            name: currencySymbol,
            symbol: currencySymbol,
            decimals: 18,
          },
          rpcUrls: [rpcUrl],
          blockExplorerUrls: explorerUrl ? [explorerUrl] : undefined,
        }],
      });

      notification.remove(loadingId);
      notification.success(`网络 ${chainName} 添加成功!`);
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('Add Ethereum chain error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * Sign TypedData V3 - eth_signTypedData (无版本后缀)
 * EIP-1193 标准使用的版本
 */
async function signTypedDataV3() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    // V3 格式的 TypedData (与 EIP-1193 对应)
    const typedDataV3 = {
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person' },
          { name: 'contents', type: 'string' },
        ],
      },
      primaryType: 'Mail',
      domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: account.chainId,
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      },
      message: {
        from: {
          name: 'Cow',
          wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
          name: 'Bob',
          wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
      },
    };

    const loadingId = notification.loading('等待 TypedData V3 签名确认...');

    try {
      // 获取 WalletClient
      const { getWalletClient } = window.wagmi.core;
      const walletClient = await getWalletClient(wagmiConfig);

      if (!walletClient) {
        throw new Error('无法获取钱包客户端');
      }

      // 使用 eth_signTypedData (V3, 无版本后缀)
      // 参数顺序: [data, address] (与 EIP-1193 一致)
      const signature = await walletClient.request({
        method: 'eth_signTypedData',
        params: [JSON.stringify(typedDataV3), account.address],
      });

      notification.remove(loadingId);
      notification.success('TypedData V3 签名成功!');
      console.log('TypedData V3 signature:', signature);

      return signature;
    } catch (error) {
      notification.remove(loadingId);
      throw error;
    }
  } catch (error) {
    console.error('SignTypedData V3 error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 监听链切换 - Listen on Chain Changed
 * 独立的链切换监听器
 */
function listenOnChainChanged() {
  const { watchChainId } = window.wagmi.core;

  const unwatch = watchChainId(wagmiConfig, {
    onChange: (chainId) => {
      console.log('Chain changed to:', chainId);

      const chain = chains.find(c => c.id === chainId);
      const chainName = chain?.name || `Chain ${chainId}`;

      notification.info(`网络已切换到: ${chainName} (${chainId})`);
    },
  });

  notification.success('已开始监听链切换事件 (查看控制台)');
  console.log('Chain watcher started. Call the returned function to stop watching.');

  return unwatch;
}

/**
 * 监听消息 - Listen on Message
 * 监听 provider 的 message 事件
 */
async function listenOnMessage() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    // 获取 provider
    const { connector } = account;
    if (!connector) {
      throw new Error('无法获取连接器');
    }

    const provider = await connector.getProvider();
    if (!provider) {
      throw new Error('无法获取 Provider');
    }

    // 监听 message 事件
    const messageHandler = (message) => {
      console.log('Provider message received:', message);
      notification.info('收到 Provider 消息 (查看控制台)');
    };

    provider.on('message', messageHandler);

    notification.success('已开始监听 Provider 消息 (查看控制台)');
    console.log('Message listener started. Provider:', provider);

    // 返回清理函数
    return () => {
      provider.removeListener('message', messageHandler);
      console.log('Message listener stopped.');
    };
  } catch (error) {
    console.error('Listen on message error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 订阅事件 - Subscribe
 * 提供多种订阅选项：新区块、区块号
 */
async function subscribe() {
  try {
    const account = getAccount(wagmiConfig);
    if (!account.isConnected) {
      await connect();
      return;
    }

    // 选择订阅类型
    const subscribeOptions =
      '选择订阅类型:\n' +
      '1. 新区块 (New Blocks)\n' +
      '2. 区块号 (Block Number)\n\n' +
      '请输入序号:';

    const choice = prompt(subscribeOptions);
    if (!choice) return;

    const { getPublicClient } = window.wagmi.core;
    const publicClient = getPublicClient(wagmiConfig);

    if (!publicClient) {
      throw new Error('无法获取 PublicClient');
    }

    let unwatch;

    switch (choice) {
      case '1':
        // 订阅新区块
        const { watchBlocks } = window.wagmi.core;
        unwatch = watchBlocks(publicClient, {
          onBlock: (block) => {
            console.log('New block:', block);
            notification.info(`新区块: #${block.number}`);
          },
        });
        notification.success('已开始订阅新区块 (查看控制台)');
        break;

      case '2':
        // 订阅区块号
        const { watchBlockNumber } = window.wagmi.core;
        unwatch = watchBlockNumber(publicClient, {
          onBlockNumber: (blockNumber) => {
            console.log('Block number:', blockNumber);
            notification.info(`区块号: #${blockNumber}`);
          },
        });
        notification.success('已开始订阅区块号 (查看控制台)');
        break;

      default:
        notification.error('无效的选择');
        return;
    }

    console.log('Subscription started. Call the returned function to unsubscribe.');
    return unwatch;
  } catch (error) {
    console.error('Subscribe error:', error);
    notification.error(parseError(error));
    throw error;
  }
}

/**
 * 导出 API
 */
const wagmiEthereum = {
  connect,
  disconnect,
  requestAccounts,
  getAccountInfo,
  personalSign,
  signTypedDataV3,
  signTypedDataV4,
  addEthereumChain,
  sendTransaction,
  switchNetwork,
  getBalance: getAccountBalance,
  listenAccountChanges,
  listenOnChainChanged,
  listenOnMessage,
  subscribe,
};

// 挂载到全局对象
window.onChainDapp = {
  ...(window.onChainDapp || {}),
  wagmiEthereum,
};

export default wagmiEthereum;
