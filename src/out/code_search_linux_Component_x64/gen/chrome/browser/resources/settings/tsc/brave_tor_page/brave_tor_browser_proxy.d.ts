export interface BridgesConfig {
    use_bridges: number;
    use_builtin_bridges: number;
    requested_bridges: string[];
    provided_bridges: string[];
}
export interface BridgesCaptcha {
    captcha: string;
}
export interface BridgesCaptchaResponse {
    bridges: Object[];
}
export interface BraveTorBrowserProxy {
    getBridgesConfig: () => Promise<BridgesConfig>;
    setBridgesConfig: (config: BridgesConfig) => Promise<void>;
    requestBridgesCaptcha: () => Promise<BridgesCaptcha>;
    resolveBridgesCaptcha: (captcha: string) => Promise<BridgesCaptchaResponse>;
    setTorEnabled: (value: boolean) => void;
    isTorEnabled: () => Promise<boolean>;
    isTorManaged: () => Promise<boolean>;
    isSnowflakeExtensionAllowed: () => Promise<boolean>;
    isSnowflakeExtensionEnabled: () => Promise<boolean>;
    enableSnowflakeExtension: (enable: boolean) => Promise<boolean>;
}
export declare class BraveTorBrowserProxyImpl implements BraveTorBrowserProxy {
    static getInstance(): BraveTorBrowserProxy;
    getBridgesConfig(): Promise<BridgesConfig>;
    setBridgesConfig(config: BridgesConfig): Promise<void>;
    requestBridgesCaptcha(): Promise<BridgesCaptcha>;
    resolveBridgesCaptcha(captcha: string): Promise<BridgesCaptchaResponse>;
    setTorEnabled(value: boolean): void;
    isTorEnabled(): Promise<boolean>;
    isTorManaged(): Promise<boolean>;
    isSnowflakeExtensionAllowed(): Promise<boolean>;
    isSnowflakeExtensionEnabled(): Promise<boolean>;
    enableSnowflakeExtension(enable: boolean): Promise<boolean>;
}
