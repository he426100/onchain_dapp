import { getWallet } from '../utils/ws.mjs'
import { fil } from '../constants/constants.mjs'
import * as utils from '../utils/utils.mjs';
import {
    generateMnemonic,
    generateWalletFromMnemonic,
    createMessage,
    filToAttoFil,
    isValidAddress,
    getAddressInfo
} from './filecoin_utils.mjs';

const network = fil.filecoinMainnet; // 使用原生Filecoin主网 (fil:f)

async function connect() {
    const provider = await getWallet();
    let { accounts } = await provider.features["filecoin:connect"].connect(network);
    accounts = accounts.filter(account => account.chains.includes(network));
    if (accounts.length === 0) {
        throw new Error(`No approved accounts found for network "${network}". Please connect a Filecoin account in your wallet.`);
    }
    return { provider, accounts };
}

async function signMessage() {
    const { accounts, provider } = await connect();
    const message = prompt("Enter message to sign:", "Hello Filecoin!");

    const params = {
        message: message,
        address: accounts[0]
    };

    await utils.runMethod({
        method: "signMessage",
        asyncFunc: async function() {
            const result = await provider.features["filecoin:signMessage"].signMessage(params);
            return result;
        }
    });
}

async function sendTransaction() {
    const { accounts, provider } = await connect();
    const recipient = prompt("Enter recipient address:", "f1...");
    const amount = parseFloat(prompt("Enter amount in FIL:", "0.1"));

    if (!isValidAddress(recipient)) {
        alert("Invalid recipient address!");
        return;
    }

    const params = {
        from: accounts[0],
        to: recipient,
        value: filToAttoFil(amount)
    };

    await utils.runMethod({
        method: "sendTransaction",
        asyncFunc: async function() {
            const result = await provider.features["filecoin:sendTransaction"].sendTransaction(params, network);
            return result;
        }
    });
}

async function getBalance() {
    const { accounts, provider } = await connect();

    await utils.runMethod({
        method: "getBalance",
        asyncFunc: async function() {
            const params = { account: accounts[0] };
            const result = await provider.features["filecoin:getBalance"].getBalance(params);
            return result;
        }
    });
}

async function requestAccounts() {
    await utils.runMethod({
        method: "requestAccounts",
        asyncFunc: async function() {
            const provider = await getWallet();
            const result = await provider.features["filecoin:connect"].connect(network);
            return result.accounts;
        }
    });
}

async function listenOnWalletChanges() {
    const provider = await getWallet();
    provider.features["standard:events"].on('change', (properties) => {
        console.log('Wallet changed:', properties);
        utils.showResult('Wallet Changed', JSON.stringify(properties, null, 2));
    });
    utils.showResult('Event Listener', 'Now listening for wallet changes...');
}

async function listenOnNetworkChanges() {
    const provider = await getWallet();
    provider.features["standard:events"].on('change', (properties) => {
        if (properties.chains) {
            console.log('Network changed:', properties.chains);
            utils.showResult('Network Changed', JSON.stringify(properties.chains, null, 2));
        }
    });
    utils.showResult('Event Listener', 'Now listening for network changes...');
}

async function disconnect() {
    await utils.runMethod({
        method: "disconnect",
        asyncFunc: async function() {
            const provider = await getWallet();
            if (provider.features["filecoin:disconnect"]) {
                await provider.features["filecoin:disconnect"].disconnect();
                return "Disconnected successfully";
            }
            return "No disconnect method available";
        }
    });
}

// Demo functions for testing
async function generateWallet() {
    await utils.runMethod({
        method: "generateWallet",
        asyncFunc: async function() {
            const mnemonic = generateMnemonic();
            const wallet = generateWalletFromMnemonic(mnemonic);
            return {
                mnemonic: mnemonic,
                address: wallet.address,
                // Don't expose private key in demo
                hasPrivateKey: !!wallet.privateKey
            };
        }
    });
}

async function validateAddress() {
    const address = prompt("Enter Filecoin address to validate:", "f1...");
    await utils.runMethod({
        method: "validateAddress",
        asyncFunc: async function() {
            const isValid = isValidAddress(address);
            if (isValid) {
                const info = getAddressInfo(address);
                return {
                    valid: true,
                    protocol: info.protocol,
                    address: address
                };
            }
            return { valid: false, address: address };
        }
    });
}

// Global exports for HTML pages
window.onChainDapp = window.onChainDapp || {};
window.onChainDapp.fil = {
    connect,
    signMessage,
    sendTransaction,
    getBalance,
    requestAccounts,
    listenOnWalletChanges,
    listenOnNetworkChanges,
    disconnect,
    generateWallet,
    validateAddress
};