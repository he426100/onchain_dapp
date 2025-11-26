import { createCompleter } from '../utils/utils.mjs';
let _walletStandard;
let _eip6963Wallets = [];  // 存储所有发现的 EIP-6963 钱包


async function getWallet() {
    if (_walletStandard) return _walletStandard;
    const completer = createCompleter();
    window.addEventListener("wallet-standard:register-wallet", function s(e) {
        e.detail({
            register: function _(params) {
                if (params !== undefined && params?.name !== undefined && params.name == 'OnChain') {
                    completer.resolve(params)
                }
            }
        })
    });
    const event = new CustomEvent('wallet-standard:app-ready', {
        detail: {}
    });
    window.dispatchEvent(event);
    _walletStandard = await completer.promise;
    return _walletStandard;

}


function getTipWallet() {
    if (window.tron !== undefined && window.tron?.isOnChain !== undefined && window.tron?.isOnChain) {
        return window.tron;
    }
    throw Error("OnChain injected wallet not found.")
}
function getEIPWallet() {
    if (window.ethereum !== undefined && window.ethereum?.isOnChain !== undefined && window.ethereum?.isOnChain) {
        return window.ethereum;
    }
    if (window.ethereum !== undefined) {
        return window.ethereum;
    }
    throw Error("OnChain injected wallet not found.")
}


/**
 * 获取所有 EIP-6963 钱包
 * 符合 EIP-6963 标准的钱包发现机制
 * 参考: https://eips.ethereum.org/EIPS/eip-6963
 */
async function getAllEIP6963Wallets() {
    return new Promise((resolve) => {
        // 监听钱包公告事件
        function onAnnouncement(event) {
            if (event.detail && event.detail.info && event.detail.provider) {
                // 基于 UUID 去重
                const exists = _eip6963Wallets.some(w => w.info.uuid === event.detail.info.uuid);
                if (!exists) {
                    _eip6963Wallets.push(event.detail);
                    console.log('Discovered EIP-6963 wallet:', event.detail.info.name);
                }
            }
        }

        window.addEventListener("eip6963:announceProvider", onAnnouncement);

        // 触发钱包发现请求
        const requestEvent = new CustomEvent('eip6963:requestProvider');
        window.dispatchEvent(requestEvent);

        // 等待一段时间收集所有钱包响应
        setTimeout(() => {
            window.removeEventListener("eip6963:announceProvider", onAnnouncement);
            resolve(_eip6963Wallets);
        }, 100);
    });
}

/**
 * 获取单个 EIP-6963 钱包 (向后兼容)
 * 如果有多个钱包,返回第一个
 */
async function getEIP6963Wallet() {
    const wallets = await getAllEIP6963Wallets();
    if (wallets.length === 0) {
        throw new Error("No EIP-6963 wallet found. Please install a compatible wallet.");
    }
    return wallets[0].provider;
}


export { getWallet, getTipWallet, getEIPWallet, getEIP6963Wallet, getAllEIP6963Wallets };