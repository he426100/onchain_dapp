import * as utils from '../utils/utils.mjs';
import {
    generateMnemonic,
    generateWalletFromMnemonic,
    createMessage,
    filToAttoFil,
    isValidAddress,
    getAddressInfo
} from './filecoin_utils.mjs';

// WalletConnect v2 with Filecoin support
let universalProvider = null;
let session = null;

async function connectWalletConnect() {
    try {
        universalProvider = await window.UniversalProvider.init({
            projectId: 'eca409135e9616e51b4e4de241abe322', // WalletConnect project ID
            metadata: {
                name: 'Filecoin DApp',
                description: 'Filecoin integration demo',
                url: window.location.origin,
                icons: ['https://avatars.githubusercontent.com/u/37784886']
            }
        });

        session = await universalProvider.connect({
            namespaces: {
                fil: {
                    methods: [
                        'fil_getBalance',
                        'fil_sendTransaction',
                        'fil_signMessage',
                        'fil_getAccounts'
                    ],
                    chains: ['fil:f'], // Filecoin native mainnet
                    events: ['accountsChanged', 'chainChanged']
                }
            }
        });

        return session;
    } catch (error) {
        console.error('Failed to connect via WalletConnect:', error);
        throw error;
    }
}

async function wcConnect() {
    await utils.runMethod({
        method: "wcConnect",
        asyncFunc: async function() {
            const session = await connectWalletConnect();
            return {
                accounts: Object.values(session.namespaces)[0]?.accounts || [],
                chains: Object.values(session.namespaces)[0]?.chains || []
            };
        }
    });
}

async function wcSignMessage() {
    if (!session || !universalProvider) {
        alert('Please connect first!');
        return;
    }

    const message = prompt("Enter message to sign:", "Hello Filecoin!");
    const accounts = Object.values(session.namespaces)[0]?.accounts || [];

    if (accounts.length === 0) {
        alert('No accounts available');
        return;
    }

    const account = accounts[0].split(':').slice(2).join(':'); // Extract address

    await utils.runMethod({
        method: "wcSignMessage",
        asyncFunc: async function() {
            const result = await universalProvider.request({
                method: 'fil_signMessage',
                params: {
                    address: account,
                    message: message
                }
            });
            return result;
        }
    });
}

async function wcSendTransaction() {
    if (!session || !universalProvider) {
        alert('Please connect first!');
        return;
    }

    const recipient = prompt("Enter recipient address:", "f1...");
    const amount = parseFloat(prompt("Enter amount in FIL:", "0.1"));

    if (!isValidAddress(recipient)) {
        alert("Invalid recipient address!");
        return;
    }

    const accounts = Object.values(session.namespaces)[0]?.accounts || [];
    if (accounts.length === 0) {
        alert('No accounts available');
        return;
    }

    const fromAccount = accounts[0].split(':').slice(2).join(':');

    await utils.runMethod({
        method: "wcSendTransaction",
        asyncFunc: async function() {
            const transaction = {
                from: fromAccount,
                to: recipient,
                value: filToAttoFil(amount),
                gasLimit: '1000000',
                gasFeeCap: '1000',
                gasPremium: '100'
            };

            const result = await universalProvider.request({
                method: 'fil_sendTransaction',
                params: transaction
            });
            return result;
        }
    });
}

async function wcGetBalance() {
    if (!session || !universalProvider) {
        alert('Please connect first!');
        return;
    }

    const accounts = Object.values(session.namespaces)[0]?.accounts || [];
    if (accounts.length === 0) {
        alert('No accounts available');
        return;
    }

    const account = accounts[0].split(':').slice(2).join(':');

    await utils.runMethod({
        method: "wcGetBalance",
        asyncFunc: async function() {
            const result = await universalProvider.request({
                method: 'fil_getBalance',
                params: { address: account }
            });
            return result;
        }
    });
}

async function wcRequestAccounts() {
    if (!universalProvider) {
        alert('Please connect first!');
        return;
    }

    await utils.runMethod({
        method: "wcRequestAccounts",
        asyncFunc: async function() {
            const result = await universalProvider.request({
                method: 'fil_getAccounts'
            });
            return result;
        }
    });
}

async function wcDisconnect() {
    await utils.runMethod({
        method: "wcDisconnect",
        asyncFunc: async function() {
            if (universalProvider && session) {
                await universalProvider.disconnect();
                universalProvider = null;
                session = null;
                return "Disconnected successfully";
            }
            return "No active session to disconnect";
        }
    });
}

// Event listeners
function setupEventListeners() {
    if (universalProvider) {
        universalProvider.on('session_event', (args) => {
            console.log('Session event:', args);
            utils.showResult('Session Event', JSON.stringify(args, null, 2));
        });

        universalProvider.on('session_update', (args) => {
            console.log('Session update:', args);
            utils.showResult('Session Update', JSON.stringify(args, null, 2));
        });

        universalProvider.on('session_delete', (args) => {
            console.log('Session deleted:', args);
            utils.showResult('Session Deleted', JSON.stringify(args, null, 2));
            session = null;
            universalProvider = null;
        });
    }
}

async function wcListenEvents() {
    setupEventListeners();
    utils.showResult('Event Listeners', 'WalletConnect event listeners are now active');
}

// Global exports for HTML pages
window.onChainDapp = window.onChainDapp || {};
window.onChainDapp.filWc = {
    connect: wcConnect,
    signMessage: wcSignMessage,
    sendTransaction: wcSendTransaction,
    getBalance: wcGetBalance,
    requestAccounts: wcRequestAccounts,
    disconnect: wcDisconnect,
    listenEvents: wcListenEvents
};