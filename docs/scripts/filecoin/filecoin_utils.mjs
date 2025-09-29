/**
 * Filecoin utility functions using iso-filecoin
 */

/**
 * Generate a new Filecoin wallet from mnemonic
 * @param {string} mnemonic - BIP39 mnemonic phrase
 * @param {string} path - Derivation path (default: "m/44'/461'/0'/0/0")
 * @returns {Object} Account object with address and private key
 */
export function generateWalletFromMnemonic(mnemonic, path = "m/44'/461'/0'/0/0") {
    const account = window.Filecoin.Wallet.accountFromMnemonic(
        mnemonic,
        1, // SECP256K1 = 1, BLS = 2
        path
    );
    return {
        address: account.address.toString(),
        privateKey: account.privateKey,
        publicKey: account.publicKey
    };
}

/**
 * Generate a new random mnemonic phrase
 * @returns {string} BIP39 mnemonic phrase
 */
export function generateMnemonic() {
    return window.Filecoin.Wallet.generateMnemonic();
}

/**
 * Create a Filecoin message
 * @param {Object} params - Message parameters
 * @param {string} params.from - Sender address
 * @param {string} params.to - Recipient address
 * @param {string} params.value - Value in attoFIL
 * @param {number} params.nonce - Nonce
 * @param {string} params.gasLimit - Gas limit
 * @param {string} params.gasFeeCap - Gas fee cap
 * @param {string} params.gasPremium - Gas premium
 * @returns {Object} Message object
 */
export function createMessage(params) {
    const {
        from,
        to,
        value = '0',
        nonce = 0,
        gasLimit = 1000000,
        gasFeeCap = '1000',
        gasPremium = '100'
    } = params;

    return new window.Filecoin.Message.Message({
        from,
        to,
        value,
        nonce,
        gasLimit,
        gasFeeCap,
        gasPremium,
        method: 0, // Transfer method
        params: ''
    });
}

/**
 * Convert FIL to attoFIL
 * @param {number} fil - Amount in FIL
 * @returns {string} Amount in attoFIL
 */
export function filToAttoFil(fil) {
    try {
        // 检查 Token 类是否可用
        console.log("window.Filecoin.Token:", window.Filecoin.Token);
        console.log("Available methods:", Object.getOwnPropertyNames(window.Filecoin.Token));

        if (!window.Filecoin.Token.fromFIL) {
            // 如果 fromFIL 不可用，手动计算
            console.warn("fromFIL method not available, using manual conversion");
            const filValue = parseFloat(fil);
            const attoValue = filValue * Math.pow(10, 18);
            return attoValue.toLocaleString('fullwide', {useGrouping:false});
        }

        return window.Filecoin.Token.fromFIL(fil).toString();
    } catch (error) {
        console.error("Error in filToAttoFil:", error);
        // 回退到手动计算
        const filValue = parseFloat(fil);
        const attoValue = filValue * Math.pow(10, 18);
        return attoValue.toLocaleString('fullwide', {useGrouping:false});
    }
}

/**
 * Convert attoFIL to FIL
 * @param {string} attoFil - Amount in attoFIL
 * @returns {string} Amount in FIL
 */
export function attoFilToFil(attoFil) {
    try {
        if (!window.Filecoin.Token.fromAttoFIL) {
            // 如果 fromAttoFIL 不可用，手动计算
            console.warn("fromAttoFIL method not available, using manual conversion");
            const attoValue = parseFloat(attoFil);
            const filValue = attoValue / Math.pow(10, 18);
            return filValue.toString();
        }

        return window.Filecoin.Token.fromAttoFIL(attoFil).toFIL().toString();
    } catch (error) {
        console.error("Error in attoFilToFil:", error);
        // 回退到手动计算
        const attoValue = parseFloat(attoFil);
        const filValue = attoValue / Math.pow(10, 18);
        return filValue.toString();
    }
}

/**
 * Validate Filecoin address
 * @param {string} address - Filecoin address
 * @returns {boolean} True if valid address
 */
export function isValidAddress(address) {
    try {
        window.Filecoin.Address.fromString(address);
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * Get address info (protocol, payload)
 * @param {string} address - Filecoin address
 * @returns {Object} Address info
 */
export function getAddressInfo(address) {
    try {
        const addr = window.Filecoin.Address.fromString(address);
        return {
            protocol: addr.protocol,
            payload: addr.payload,
            toString: () => addr.toString()
        };
    } catch (error) {
        throw new Error(`Invalid Filecoin address: ${address}`);
    }
}