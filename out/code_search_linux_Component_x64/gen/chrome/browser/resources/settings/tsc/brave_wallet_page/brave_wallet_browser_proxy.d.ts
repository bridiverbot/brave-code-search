export type Currency = {
    symbol: string;
    name: string;
    decimals: number;
};
export type NetworkInfo = {
    chainId: string;
    chainName: string;
    blockExplorerUrls: string[];
    iconUrls: string[];
    activeRpcEndpointIndex: number;
    rpcUrls: string[];
    coin: number;
    is_eip1559: boolean;
    nativeCurrency: Currency;
};
export type NetworksList = {
    defaultNetwork: string;
    networks: NetworkInfo[];
    knownNetworks: string[];
    customNetworks: string[];
    hiddenNetworks: string[];
};
export type Option = {
    name: string;
    value: number;
};
export type SolanaProvider = Option;
export type CardanoProvider = Option;
export interface BraveWalletBrowserProxy {
    resetWallet: () => void;
    resetZCashSyncState: () => void;
    getWeb3ProviderList: () => Promise<string>;
    getSolanaProviderOptions: () => Promise<SolanaProvider[]>;
    getCardanoProviderOptions: () => Promise<CardanoProvider[]>;
    getTransactionSimulationOptInStatusOptions: () => Promise<Option[]>;
    isBitcoinEnabled: () => Promise<boolean>;
    isZCashEnabled: () => Promise<boolean>;
    isZCashShieldedTxEnabled: () => Promise<boolean>;
    isCardanoEnabled: () => Promise<boolean>;
    isPolkadotEnabled: () => Promise<boolean>;
    isCardanoDAppSupportEnabled: () => Promise<boolean>;
    getAutoLockMinutes: () => Promise<number>;
    getNetworksList: (coin: number) => Promise<NetworksList>;
    getPrepopulatedNetworksList: () => Promise<NetworkInfo[]>;
    removeChain: (chainId: string, coin: number) => Promise<boolean>;
    resetChain: (chainId: string, coin: number) => Promise<boolean>;
    addChain: (value: NetworkInfo) => Promise<[boolean, string]>;
    addHiddenNetwork: (chainId: string, coin: number) => Promise<boolean>;
    removeHiddenNetwork: (chainId: string, coin: number) => Promise<boolean>;
    setDefaultNetwork: (chainId: string, coin: number) => Promise<boolean>;
    resetTransactionInfo: () => void;
    isTransactionSimulationsFeatureEnabled: () => Promise<boolean>;
    getWalletInPrivateWindowsEnabled: () => Promise<boolean>;
    setWalletInPrivateWindowsEnabled: (enabled: boolean) => Promise<boolean>;
}
export declare class BraveWalletBrowserProxyImpl implements BraveWalletBrowserProxy {
    resetWallet(): void;
    resetZCashSyncState(): void;
    resetTransactionInfo(): void;
    getNetworksList(coin: number): Promise<NetworksList>;
    getPrepopulatedNetworksList(): Promise<NetworkInfo[]>;
    setDefaultNetwork(chainId: string, coin: number): Promise<boolean>;
    removeChain(chainId: string, coin: number): Promise<boolean>;
    resetChain(chainId: string, coin: number): Promise<boolean>;
    addChain(payload: NetworkInfo): Promise<[boolean, string]>;
    addHiddenNetwork(chainId: string, coin: number): Promise<boolean>;
    removeHiddenNetwork(chainId: string, coin: number): Promise<boolean>;
    getWeb3ProviderList(): Promise<string>;
    getAutoLockMinutes(): Promise<number>;
    getSolanaProviderOptions(): Promise<Option[]>;
    getCardanoProviderOptions(): Promise<Option[]>;
    isBitcoinEnabled(): Promise<boolean>;
    isZCashEnabled(): Promise<boolean>;
    isZCashShieldedTxEnabled(): Promise<boolean>;
    isCardanoEnabled(): Promise<boolean>;
    isCardanoDAppSupportEnabled(): Promise<boolean>;
    isPolkadotEnabled(): Promise<boolean>;
    getTransactionSimulationOptInStatusOptions(): Promise<Option[]>;
    isTransactionSimulationsFeatureEnabled(): Promise<boolean>;
    getWalletInPrivateWindowsEnabled(): Promise<boolean>;
    setWalletInPrivateWindowsEnabled(value: boolean): Promise<boolean>;
    static getInstance(): BraveWalletBrowserProxy;
}
