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
                connected: currentAdapter.connected
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
            console.log("Starting Filsnap connection...");

            // 创建Filsnap钱包适配器
            currentAdapter = new window.Filecoin.Adapters.Filsnap();
            console.log("Filsnap adapter created:", currentAdapter);

            // 连接到主网
            const result = await currentAdapter.connect({ network: 'mainnet' });
            console.log("Connection result:", result);
            console.log("Current adapter state:", {
                connected: currentAdapter.connected,
                account: currentAdapter.account,
                network: currentAdapter.network
            });

            if (!currentAdapter.connected) {
                throw new Error("Failed to connect to Filsnap");
            }

            return {
                type: 'Filsnap (MetaMask)',
                address: currentAdapter.account.address.toString(),
                network: currentAdapter.network,
                connected: currentAdapter.connected
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
                connected: currentAdapter.connected
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
                connected: currentAdapter.connected
            };
        }
    });
}

/**
 * 获取账户信息
 */
async function getAccountInfo() {
    console.log("Getting account info...");
    console.log("Current adapter:", currentAdapter);
    console.log("Is connected:", currentAdapter?.connected);

    if (!currentAdapter || !currentAdapter.connected) {
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
    console.log("=== Starting network switch ===");
    console.log("Current adapter:", currentAdapter);
    console.log("Is connected:", currentAdapter?.connected);

    if (!currentAdapter || !currentAdapter.connected) {
        alert('Please connect a wallet first!');
        return;
    }

    console.log("Current network before switch:", currentAdapter.network);

    // 根据当前网络动态生成提示信息
    const currentNetwork = currentAdapter.network;
    const targetNetwork = currentNetwork === 'mainnet' ? 'testnet' : 'mainnet';
    const shouldSwitch = confirm(`Current network: ${currentNetwork}\nSwitch to ${targetNetwork}?`);
    const network = shouldSwitch ? targetNetwork : currentNetwork;

    console.log(`User chose to switch: ${shouldSwitch}, target network: ${network}`);

    await utils.runMethod({
        method: "switchNetwork",
        asyncFunc: async function() {
            try {
                console.log("About to call changeNetwork with:", network);
                console.log("Current network is:", currentAdapter.network);

                // 记录切换前的网络
                const oldNetwork = currentAdapter.network;

                // 检查是否尝试切换到相同的网络
                if (oldNetwork === network) {
                    console.log("Already on the target network, no change needed");
                    return {
                        oldNetwork: oldNetwork,
                        newNetwork: network,
                        message: "Already on the target network"
                    };
                }

                // 注意：changeNetwork 方法接收网络名称作为直接参数，不是对象
                const result = await currentAdapter.changeNetwork(network);
                console.log("Network switch result:", result);

                // 验证网络是否真的切换了
                console.log("Network after switch - currentAdapter.network:", currentAdapter.network);
                console.log("Network after switch - result.network:", result.network);

                return {
                    oldNetwork: oldNetwork,
                    newNetwork: result.network, // 使用 result.network 而不是 currentAdapter.network
                    newAddress: result.account.address.toString(),
                    actualCurrentNetwork: currentAdapter.network
                };
            } catch (error) {
                console.error("Error in changeNetwork:", error);
                console.error("Error details:", {
                    message: error.message,
                    stack: error.stack,
                    cause: error.cause
                });
                throw error;
            }
        }
    });
}

/**
 * 签名消息
 */
async function signMessage() {
    if (!currentAdapter || !currentAdapter.connected) {
        alert('Please connect a wallet first!');
        return;
    }

    const message = prompt("Enter message to sign:", "Hello Filecoin!");

    await utils.runMethod({
        method: "signMessage",
        asyncFunc: async function() {
            try {
                // 尝试使用基本的 sign 方法而不是 personalSign
                const messageBytes = new TextEncoder().encode(message);
                const signature = await currentAdapter.sign(messageBytes);
                return {
                    message: message,
                    signature: signature,
                    address: currentAdapter.account.address.toString()
                };
            } catch (error) {
                console.error("Error in signing:", error);

                // 如果 sign 方法失败，尝试使用 signMessage 方法
                try {
                    console.log("Trying signMessage method...");
                    const messageObj = {
                        data: message
                    };
                    const signature = await currentAdapter.signMessage(messageObj);
                    return {
                        message: message,
                        signature: signature.toString(),
                        address: currentAdapter.account.address.toString(),
                        method: "signMessage"
                    };
                } catch (error2) {
                    console.error("Both signing methods failed:", error2);
                    throw new Error(`Signing failed: ${error.message} and ${error2.message}`);
                }
            }
        }
    });
}

/**
 * 发送交易
 */
async function sendTransaction() {
    if (!currentAdapter || !currentAdapter.connected) {
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

            const signedMessage = await currentAdapter.signMessage(message);

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