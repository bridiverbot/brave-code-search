import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixinInterface } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { NetworkInfo, BraveWalletBrowserProxy } from './brave_wallet_browser_proxy.js';
import { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import '../ui/searchable_drop_down_cros.js';
declare const SettingsBraveAddWalletNetworkDialogElementBase: {
    new (): PolymerElement & I18nMixinInterface;
};
export interface Url {
    value: string;
}
export interface ExtendedNetworkInfo extends NetworkInfo {
    searchString: string;
}
export type UrlType = 'rpc' | 'icon' | 'block';
export declare class SettingsBraveAddWalletNetworkDialogElement extends SettingsBraveAddWalletNetworkDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        addNewAllowed: {
            type: BooleanConstructor;
            value: boolean;
        };
        coin: {
            type: NumberConstructor;
            value: number;
        };
        networks: {
            type: ArrayConstructor;
            value(): never[];
        };
        selectedRpcUrl: {
            type: StringConstructor;
            value: string;
        };
        rpcUrls: {
            type: ArrayConstructor;
            value(): {
                value: string;
            }[];
        };
        iconUrls: {
            type: ArrayConstructor;
            value(): {
                value: string;
            }[];
        };
        blockUrls: {
            type: ArrayConstructor;
            value(): {
                value: string;
            }[];
        };
        isRpcPlusButtonDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isIconPlusButtonDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isBlockPlusButtonDisabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isSubmitButtonEnabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
        chainIdValue_: StringConstructor;
        invalidChainIdMessage_: StringConstructor;
        chainIdInvalid_: {
            type: BooleanConstructor;
            value: boolean;
        };
        chainNameValue_: StringConstructor;
        chainNameInvalid_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isCurrencyErrorHidden_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isSubmissionErrorHidden_: {
            type: BooleanConstructor;
            value: boolean;
        };
        submissionErrorMessage_: {
            type: StringConstructor;
            value: boolean;
        };
        selected: {
            type: ObjectConstructor;
            value: {};
        };
        currencyNameValue_: StringConstructor;
        currencySymbolValue_: StringConstructor;
        currencyDecimalsValue_: NumberConstructor;
        prepopulatedNetworks_: {
            type: ArrayConstructor;
            value: never[];
        };
        searchValue_: {
            type: StringConstructor;
            value: string;
            observer: string;
        };
        searchItems_: {
            type: ArrayConstructor;
            value: never[];
        };
    };
    private addNewAllowed;
    private coin;
    private networks;
    private selectedRpcUrl;
    private rpcUrls;
    private iconUrls;
    private blockUrls;
    private isRpcPlusButtonDisabled_;
    private isIconPlusButtonDisabled_;
    private isBlockPlusButtonDisabled_;
    private isSubmitButtonEnabled_;
    private chainIdValue_;
    private invalidChainIdMessage_;
    private chainIdInvalid_;
    private chainNameValue_;
    private chainNameInvalid_;
    private isCurrencyErrorHidden_;
    private isSubmissionErrorHidden_;
    private submissionErrorMessage_;
    private selected;
    private currencyNameValue_;
    private currencySymbolValue_;
    private currencyDecimalsValue_;
    private prepopulatedNetworks_;
    private searchValue_;
    private searchItems_;
    browserProxy_: BraveWalletBrowserProxy;
    ready(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updatePrepopulatedNetworks(): void;
    validateURL(value: string): boolean;
    chainIdChanged_(): void;
    chainNameChanged_(): void;
    isInvalidInputForList_(value: string, list: string): boolean;
    getTailOfUrlsArray(list: UrlType): string;
    updatePlusButtonState(list: UrlType): void;
    updateSubmitButtonState_(): void;
    nativeCurrencyChanged_(): void;
    urlChangedImpl_(element: CrInputElement, list: UrlType): void;
    hasValidRPCUrls(): Url | undefined;
    urlChangedIcons_(event: Event): void;
    urlChangedRpc_(event: Event): void;
    urlChangedBlock_(event: Event): void;
    onAddRpcUrlTap_(): void;
    onAddIconUrlTap_(): void;
    onAddBlockUrlTap_(): void;
    transformListForSerializaion_(list: Url[]): string[] | null;
    showCurrencyError(): void;
    setSubmissionResult(success: boolean, errorMessage: string): void;
    addNewNetwork(payload: NetworkInfo): void;
    getHexNumber(value: string): string;
    onAddNetworkTap_(): void;
    onSearchValueChanged_(newValue: string): void;
}
export {};
