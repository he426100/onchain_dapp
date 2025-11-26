import { getAllEIP6963Wallets } from '../utils/ws.mjs'
import * as utils from '../utils/utils.mjs';
import { ethereum } from '../constants/constants.mjs'

const network = ethereum.eip155WsTestnetNetwrk;
let selectedWallet = null;  // 存储用户选择的钱包

/**
 * 发现并显示所有可用的 EIP-6963 钱包
 * 用户可以选择要连接的钱包
 */
async function discoverWallets() {
  const wallets = await getAllEIP6963Wallets();

  if (wallets.length === 0) {
    throw new Error("未发现任何 EIP-6963 钱包。请安装 MetaMask、Rainbow 或其他支持 EIP-6963 的钱包。");
  }

  // 在控制台显示发现的钱包
  console.log("=== 发现的 EIP-6963 钱包 ===");
  wallets.forEach((wallet, index) => {
    console.log(`${index + 1}. ${wallet.info.name} (${wallet.info.rdns})`);
    console.log(`   UUID: ${wallet.info.uuid}`);
    console.log(`   Icon: ${wallet.info.icon.substring(0, 50)}...`);
  });

  // 更新页面显示钱包列表
  updateWalletList(wallets);

  return wallets;
}

/**
 * 更新页面上的钱包列表显示
 */
function updateWalletList(wallets) {
  const container = document.getElementById('wallet-list');
  if (!container) return;

  container.innerHTML = '<h3>可用钱包:</h3>';

  wallets.forEach((wallet, index) => {
    const button = document.createElement('button');
    button.className = 'wallet-item';
    button.onclick = () => selectWallet(wallet);

    button.innerHTML = `
      <img src="${wallet.info.icon}" alt="${wallet.info.name}" style="width: 32px; height: 32px; margin-right: 10px;">
      <span>${wallet.info.name}</span>
    `;

    container.appendChild(button);
  });
}

/**
 * 选择钱包
 */
async function selectWallet(wallet) {
  selectedWallet = wallet;
  console.log('已选择钱包:', wallet.info.name);

  // 标记选中状态
  const container = document.getElementById('wallet-list');
  if (container) {
    const buttons = container.querySelectorAll('.wallet-item');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
  }

  // 更新连接状态显示
  const status = document.getElementById('wallet-status');
  if (status) {
    status.innerHTML = `已选择: ${wallet.info.name}`;
  }

  alert(`已选择钱包: ${wallet.info.name}\n点击 "Connect" 按钮连接`);
}

/**
 * 连接到选中的钱包
 */
async function connect() {
  // 如果没有选择钱包,先发现钱包
  if (!selectedWallet) {
    const wallets = await discoverWallets();

    if (wallets.length === 1) {
      // 只有一个钱包,自动选择
      selectedWallet = wallets[0];
    } else {
      // 多个钱包,提示用户选择
      throw new Error(`发现 ${wallets.length} 个钱包。请先选择一个钱包,然后点击 "Connect"。`);
    }
  }

  const provider = selectedWallet.provider;
  const params = [network];
  const accounts = await provider.request({ method: "eth_requestAccounts", params });

  if (accounts.length === 0) {
    throw new Error(`No approved accounts found for network "${network} (Ethereum Sepolia testnet)". Please connect an account in your wallet.`);
  }

  // 更新连接状态
  const status = document.getElementById('wallet-status');
  if (status) {
    status.innerHTML = `
      已连接: ${selectedWallet.info.name}<br>
      地址: ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}
    `;
  }

  console.log('已连接到钱包:', selectedWallet.info.name);
  console.log('账户地址:', accounts[0]);

  return { provider, accounts };
}


async function personalSign() {
  const { accounts, provider } = await connect();
  const message = prompt("Please enter a message you want to sign: ", "is a test message.");
  const params = [message || "is a test message.", accounts[0]];
  await utils.runMethod({
    method: "personal_sign",
    asyncFunc: async function name() {
      const signature = await provider.request({ method: "personal_sign", params });
      return signature;
    }
  })
}
async function ethSign() {
  const { accounts, provider } = await connect();
  const message = prompt("Please enter a message you want to sign: ", "is a test message.");
  const params = [accounts[0], message || "is a test message."];
  await utils.runMethod({
    method: "eth_sign",
    asyncFunc: async function name() {
      const signature = await provider.request({ method: "eth_sign", params });
      return signature;
    }
  })
}
async function requestAccounts() {
  const { provider } = await connect();
  await utils.runMethod({
    method: "eth_requestAccounts",
    asyncFunc: async function name() {
      const accounts = await provider.request({ method: "eth_requestAccounts" });
      return accounts;
    }
  })
}
async function signTypedDataV1() {
  const { accounts, provider } = await connect();
  const params = [JSON.stringify(ethereum.ethereumExapleTypedDataV1), accounts[0]];
  await utils.runMethod({
    method: "eth_signTypedData",
    asyncFunc: async function name() {
      const signature = await provider.request({ method: "eth_signTypedData", params });
      return signature;
    }
  })
}
async function signTypedDataV4() {
  const { accounts, provider } = await connect();
  const params = [accounts[0], ethereum.ethereumExapleTypedDataV4];
  await utils.runMethod({
    method: "eth_signTypedData_v4",
    asyncFunc: async function name() {
      const signature = await provider.request({ method: "eth_signTypedData_v4", params });
      return signature;
    }
  })
}
async function importNewEthereumChain() {
  const { provider } = await connect();
  const params = [ethereum.ethereumNewChainExapleParams];
  await utils.runMethod({
    method: "wallet_addEthereumChain",
    asyncFunc: async function name() {
      const chainId = await provider.request({ method: "wallet_addEthereumChain", params });
      return chainId;
    }
  })
}
async function sendTransaction() {
  const { accounts, provider } = await connect();
  const input = prompt("Please enter a valid destionation address: ", "0x372cC9e4Fa8E834237e106235e26A2fb7E9082D2");
  const txParams = { to: input, from: accounts[0], data: "0x", value: "0x01", type: "0x2" }
  const params = [txParams];
  await utils.runMethod({
    method: "eth_sendTransaction",
    asyncFunc: async function name() {
      const txId = await provider.request({ method: "eth_sendTransaction", params });
      return txId;
    }
  })
}



async function listenOnChainChanged() {
  const { provider } = await connect();
  provider.on("chainChanged", function (s) {
    console.log("chain changed: " + JSON.stringify(s));

  });
}

async function listenOnAccountChanged() {
  const { provider } = await connect();
  provider.on("accountsChanged", function (s) {
    console.log("accounts changed: " + JSON.stringify(s));

  });
}
async function listeonOnMessage() {
  const { provider } = await connect();
  provider.on("message", function (s) {
    console.log("accounts changed: " + JSON.stringify(s));

  });
}

async function subscribe() {
  const { provider } = await connect();
  const params = ["newHeads"];
  await utils.runMethod({
    method: "eth_subscribe",
    asyncFunc: async function name() {
      const subId = await provider.request({ method: "eth_subscribe", params });
      return subId;
    }
  })
}
async function getBalance() {
  const { accounts, provider } = await connect();
  const params = [accounts[0], "latest"];
  await utils.runMethod({
    method: "eth_getBalance",
    asyncFunc: async function name() {
      const balance = await provider.request({ method: "eth_getBalance", params });
      return balance;
    }
  })
}
async function disconnect() {
  const { provider } = await connect();
  await utils.runMethod({
    method: "disconnect",
    asyncFunc: async function name() {
      const disconnect = await provider.disconnect();
      return disconnect;
    }
  })
}


const onChain = {
  ethereum: {
    discoverWallets: discoverWallets,
    connect: connect,
    personalSign: personalSign,
    ethSign: ethSign,
    signTypedDataV1: signTypedDataV1,
    signTypedDataV4: signTypedDataV4,
    importNewEthereumChain: importNewEthereumChain,
    sendTransaction: sendTransaction,
    requestAccount: requestAccounts,
    listenOnChainChanged: listenOnChainChanged,
    listenOnAccountChanged: listenOnAccountChanged,
    listeonOnMessage: listeonOnMessage,
    disconnect: disconnect,
    subscribe: subscribe,
    getBalance: getBalance
  }
};
window.onChainDapp = {
  ...(window.onChainDapp || {}),
  ...onChain
};

