export interface ResolverOption {
    name: string;
    value: string;
    policy: string;
}
/**
 * Contains the possible string values for the secure DNS mode. This must be
 * kept in sync with the mode names in chrome/browser/net/secure_dns_config.h.
 */
export declare enum SecureDnsMode {
    OFF = "off",
    AUTOMATIC = "automatic",
    SECURE = "secure"
}
/**
 * Contains the possible management modes. This should be kept in sync with
 * the management modes in chrome/browser/net/secure_dns_config.h.
 */
export declare enum SecureDnsUiManagementMode {
    NO_OVERRIDE = 0,
    DISABLED_MANAGED = 1,
    DISABLED_PARENTAL_CONTROLS = 2
}
/** Contains the current secure DNS configuration and its status. */
export interface SecureDnsSetting {
    mode: SecureDnsMode;
    config: string;
    managementMode: SecureDnsUiManagementMode;
}
/** Handles interprocess communication for the security page. */
export interface SecurityPageBrowserProxy {
    /** @return A list of possible secure DNS providers. */
    getSecureDnsResolverList(): Promise<ResolverOption[]>;
    /** @return The current secure DNS setting. */
    getSecureDnsSetting(): Promise<SecureDnsSetting>;
    /**
     * @param entry The config string to validate.
     * @return True if the config string is syntactically valid.
     */
    isValidConfig(entry: string): Promise<boolean>;
    /**
     * @param entry The config string to probe.
     * @return True if a test query succeeded in the specified DoH
     *     configuration or the probe was cancelled.
     */
    probeConfig(entry: string): Promise<boolean>;
}
export declare class SecurityPageBrowserProxyImpl implements SecurityPageBrowserProxy {
    getSecureDnsResolverList(): Promise<ResolverOption[]>;
    getSecureDnsSetting(): Promise<SecureDnsSetting>;
    isValidConfig(entry: string): Promise<boolean>;
    probeConfig(entry: string): Promise<boolean>;
    static getInstance(): SecurityPageBrowserProxy;
    static setInstance(obj: SecurityPageBrowserProxy): void;
}
