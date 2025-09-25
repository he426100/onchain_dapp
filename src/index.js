import { Buffer } from 'buffer';
import { createAppKit } from '@reown/appkit'
import { Client, decode } from 'xrpl';
import * as FilecoinWallet from 'iso-filecoin/wallet';
import * as FilecoinMessage from 'iso-filecoin/message';
import * as FilecoinToken from 'iso-filecoin/token';
import * as FilecoinAddress from 'iso-filecoin/address';
import * as FilecoinRPC from 'iso-filecoin/rpc';
import * as FilecoinSignature from 'iso-filecoin/signature';
import * as FilecoinUtils from 'iso-filecoin/utils';
import { WalletAdapterFilsnap } from 'iso-filecoin-wallets/filsnap';
import { WalletAdapterHd } from 'iso-filecoin-wallets/hd';
import { WalletAdapterLedger } from 'iso-filecoin-wallets/ledger';
import { WalletAdapterRaw } from 'iso-filecoin-wallets/local';
import { mainnet, arbitrum } from '@reown/appkit/networks'
import UniversalProvider from '@walletconnect/universal-provider';
import ecc from '@bitcoinerlab/secp256k1';
import bitcoin from 'bitcoinjs-lib';
window.Buffer = Buffer;
window.mainnet = mainnet;
window.ecc = ecc;
bitcoin.initEccLib(ecc);
window.bitcoin = bitcoin;

window.XRPL = {
    Client, decode
}/// TransactionWitnessSet

window.Filecoin = {
    Wallet: FilecoinWallet,
    Message: FilecoinMessage,
    Token: FilecoinToken,
    Address: FilecoinAddress,
    RPC: FilecoinRPC,
    Signature: FilecoinSignature,
    Utils: FilecoinUtils,
    Adapters: {
        Filsnap: WalletAdapterFilsnap,
        Hd: WalletAdapterHd,
        Ledger: WalletAdapterLedger,
        Raw: WalletAdapterRaw
    }
}

window.UniversalProvider = UniversalProvider;
window.createAppKit = createAppKit;

