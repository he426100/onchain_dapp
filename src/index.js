import { Buffer } from 'buffer';
import * as AptosSDK from "@aptos-labs/ts-sdk";
import * as Sui from "@mysten/sui/transactions";
import * as SuiClient from "@mysten/sui/client";
import { createAppKit } from '@reown/appkit'
import { SigningStargateClient } from "@cosmjs/stargate";
import {
    Registry,
    encodePubkey,
    makeAuthInfoBytes,
    makeSignDoc,
    makeSignBytes,
} from "@cosmjs/proto-signing";
import { Client, decode } from 'xrpl';
import { coins, encodeSecp256k1Pubkey } from "@cosmjs/amino";
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
import { TxBody, AuthInfo, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx.js";
import { Any } from "cosmjs-types/google/protobuf/any.js";
import { mainnet, arbitrum } from '@reown/appkit/networks'
import UniversalProvider from '@walletconnect/universal-provider';
import ecc from '@bitcoinerlab/secp256k1';
import bitcoin from 'bitcoinjs-lib';
import { ApiPromise, WsProvider } from '@polkadot/api'
window.Buffer = Buffer;
window.Polkadot = { WsProvider, ApiPromise };
window.mainnet = mainnet;
window.ecc = ecc;
bitcoin.initEccLib(ecc);
window.bitcoin = bitcoin;
window.Cosmos = {
    SigningStargateClient, Registry,
    encodePubkey,
    makeAuthInfoBytes,
    makeSignDoc,
    coins,
    TxBody, AuthInfo,
    Any, makeSignBytes,
    encodeSecp256k1Pubkey,
    TxRaw
}

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

window.Sui = Sui
window.aptosSDK = AptosSDK
window.SuiClient = SuiClient
window.UniversalProvider = UniversalProvider;
window.createAppKit = createAppKit;


