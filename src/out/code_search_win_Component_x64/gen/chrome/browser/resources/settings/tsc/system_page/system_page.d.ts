import { SettingsSystemPageElement as SettingsSystemPageElementChromium } from './system_page-chromium.js';
declare module './system_page-chromium.js' {
    interface SettingsSystemPageElement {
        shortcutsSupported_: boolean;
        isMac_: boolean;
        warnBeforeQuittingLabel_: string;
        onShortcutsClick_(): void;
    }
}
declare class SettingsSystemPageElement extends SettingsSystemPageElementChromium {
    static get is(): string;
    static get properties(): {
        isProxyEnforcedByPolicy_: {
            type: BooleanConstructor;
        };
        isProxyDefault_: {
            type: BooleanConstructor;
        };
        isProxyEnforcedByMultipleSources_: {
            type: BooleanConstructor;
        };
        showProcessIsolationSetting_: {
            type: BooleanConstructor;
        };
        proxyPref_: {
            type: ObjectConstructor;
        };
        proxyOverrideRulesPref_: {
            type: ObjectConstructor;
        };
        hardwareAccelerationModeEnabledPref_: {
            type: ObjectConstructor;
        };
        isolationStateEnabledPref_: {
            type: ObjectConstructor;
        };
        shortcutsSupported_: {
            type: BooleanConstructor;
        };
        isMac_: {
            type: BooleanConstructor;
        };
        warnBeforeQuittingLabel_: {
            type: StringConstructor;
        };
    };
    accessor shortcutsSupported_: boolean;
    accessor isMac_: boolean;
    accessor warnBeforeQuittingLabel_: string;
    onShortcutsClick_(): void;
}
export { SettingsSystemPageElement };
export * from './system_page-chromium.js';
