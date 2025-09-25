import * as utils from '../utils/utils.mjs';
import {
    filToAttoFil,
    isValidAddress
} from './filecoin_utils.mjs';

// 钱包适配器实例
let currentAdapter = null;

/**
 * 连接HD钱包（助记词）
 */
async function connectHDWallet() {
    await utils.runMethod({
        method: "connectHDWallet",
        asyncFunc: async function() {
            const mnemonic = prompt("Enter your mnemonic phrase:", "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about");

            if (!mnemonic) {
                throw new Error("Mnemonic is required");
            }

            // 创建HD钱包适配器
            currentAdapter = new window.Filecoin.Adapters.Hd({
                mnemonic: mnemonic,
                index: 0 // 账户索引
            });

            // 连接到主网
            await currentAdapter.connect({ network: 'mainnet' });

            return {
                type: 'HD Wallet',
                address: currentAdapter.account.address.toString(),
                network: currentAdapter.network,
                connected: currentAdapter.isConnected
            };
        }
    });
}

/**
 * 连接Filsnap (MetaMask Snap)
 */
async function connectFilsnap() {
    await utils.runMethod({
        method: "connectFilsnap",
        asyncFunc: async function() {
            // 创建Filsnap钱包适配器
            currentAdapter = new window.Filecoin.Adapters.Filsnap();

            // 连接到主网
            await currentAdapter.connect({ network: 'mainnet' });

            return {
                type: 'Filsnap (MetaMask)',
                address: currentAdapter.account.address.toString(),
                network: currentAdapter.network,
                connected: currentAdapter.isConnected
            };
        }
    });
}

/**
 * 连接Ledger硬件钱包
 */
async function connectLedger() {
    await utils.runMethod({
        method: "connectLedger",
        asyncFunc: async function() {
            // 创建Ledger钱包适配器
            currentAdapter = new window.Filecoin.Adapters.Ledger({
                index: 0 // 账户索引
            });

            // 连接到主网
            await currentAdapter.connect({ network: 'mainnet' });

            return {
                type: 'Ledger Hardware Wallet',
                address: currentAdapter.account.address.toString(),
                network: currentAdapter.network,
                connected: currentAdapter.isConnected
            };
        }
    });
}

/**
 * 连接私钥钱包
 */
async function connectRawWallet() {
    await utils.runMethod({
        method: "connectRawWallet",
        asyncFunc: async function() {
            const privateKey = prompt("Enter your private key (hex format):", "");

            if (!privateKey) {
                throw new Error("Private key is required");
            }

            // 创建私钥钱包适配器
            currentAdapter = new window.Filecoin.Adapters.Raw({
                privateKey: privateKey
            });

            // 连接到主网
            await currentAdapter.connect({ network: 'mainnet' });

            return {
                type: 'Raw Private Key',
                address: currentAdapter.account.address.toString(),
                network: currentAdapter.network,
                connected: currentAdapter.isConnected
            };
        }
    });
}

/**
 * 获取账户信息
 */
async function getAccountInfo() {
    if (!currentAdapter || !currentAdapter.isConnected) {
        alert('Please connect a wallet first!');
        return;
    }

    await utils.runMethod({
        method: "getAccountInfo",
        asyncFunc: async function() {
            return {
                adapter: currentAdapter.name,
                address: currentAdapter.account.address.toString(),
                network: currentAdapter.network,
                signatureType: currentAdapter.account.type,
                path: currentAdapter.account.path || 'N/A'
            };
        }
    });
}

/**
 * 切换网络
 */
async function switchNetwork() {
    if (!currentAdapter || !currentAdapter.isConnected) {
        alert('Please connect a wallet first!');
        return;
    }

    const network = confirm("Switch to testnet? (Cancel for mainnet)") ? 'testnet' : 'mainnet';

    await utils.runMethod({
        method: "switchNetwork",
        asyncFunc: async function() {
            const result = await currentAdapter.changeNetwork({ network });
            return {
                oldNetwork: currentAdapter.network,
                newNetwork: result.network,
                newAddress: result.account.address.toString()
            };
        }
    });
}

/**
 * 签名消息
 */
async function signMessage() {
    if (!currentAdapter || !currentAdapter.isConnected) {
        alert('Please connect a wallet first!');
        return;
    }

    const message = prompt("Enter message to sign:", "Hello Filecoin!");

    await utils.runMethod({
        method: "signMessage",
        asyncFunc: async function() {
            const signature = await currentAdapter.signMessage(message);
            return {
                message: message,
                signature: signature.toString(),
                address: currentAdapter.account.address.toString()
            };
        }
    });
}

/**
 * 发送交易
 */
async function sendTransaction() {
    if (!currentAdapter || !currentAdapter.isConnected) {
        alert('Please connect a wallet first!');
        return;
    }

    const recipient = prompt("Enter recipient address:", "f1...");
    const amount = parseFloat(prompt("Enter amount in FIL:", "0.1"));

    if (!isValidAddress(recipient)) {
        alert("Invalid recipient address!");
        return;
    }

    await utils.runMethod({
        method: "sendTransaction",
        asyncFunc: async function() {
            const message = {
                from: currentAdapter.account.address.toString(),
                to: recipient,
                value: filToAttoFil(amount),
                nonce: 0, // 实际应用中需要从链上获取
                gasLimit: 1000000,
                gasFeeCap: '1000',
                gasPremium: '100',
                method: 0
            };

            const signedMessage = await currentAdapter.signTransaction(message);

            // 实际应用中这里应该广播交易到网络
            return {
                from: message.from,
                to: message.to,
                value: amount + ' FIL',
                signedMessage: signedMessage.toString(),
                note: 'Transaction signed but not broadcasted (demo mode)'
            };
        }
    });
}

/**
 * 断开连接
 */
async function disconnect() {
    if (!currentAdapter) {
        alert('No wallet connected!');
        return;
    }

    await utils.runMethod({
        method: "disconnect",
        asyncFunc: async function() {
            const walletName = currentAdapter.name;
            await currentAdapter.disconnect();
            currentAdapter = null;
            return `Disconnected from ${walletName}`;
        }
    });
}

// Global exports for HTML pages
window.onChainDapp = window.onChainDapp || {};
window.onChainDapp.filAdapter = {
    connectHDWallet,
    connectFilsnap,
    connectLedger,
    connectRawWallet,
    getAccountInfo,
    switchNetwork,
    signMessage,
    sendTransaction,
    disconnect
};