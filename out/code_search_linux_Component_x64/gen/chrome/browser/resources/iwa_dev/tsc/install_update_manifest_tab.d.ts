import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import './combobox.js';
import type { Url } from '//resources/mojo/url/mojom/url.mojom-webui.js';
import type { ComboboxOption } from './combobox.js';
import { IwaDevInstallTabElement } from './install_tab.js';
export interface VersionComboboxOption extends ComboboxOption {
    src: Url;
}
export declare const PLACEHOLDER_URL = "https://example.com/update_manifest.json";
export declare const MIN_FETCH_DELAY_MS = 750;
export declare class IwaDevInstallUpdateManifestTabElement extends IwaDevInstallTabElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        url_: {
            type: StringConstructor;
            state: boolean;
        };
        urlError_: {
            type: StringConstructor;
            state: boolean;
        };
        isFetching_: {
            type: BooleanConstructor;
            state: boolean;
        };
        isManifestFetched_: {
            type: BooleanConstructor;
            state: boolean;
        };
        selectedVersion_: {
            type: StringConstructor;
            state: boolean;
        };
        selectedChannel_: {
            type: StringConstructor;
            state: boolean;
        };
        versionOptions_: {
            type: ArrayConstructor;
            state: boolean;
        };
        channelOptions_: {
            type: ArrayConstructor;
            state: boolean;
        };
    };
    accessor disabled: boolean;
    protected accessor url_: string;
    protected accessor urlError_: string;
    protected accessor isFetching_: boolean;
    protected accessor isManifestFetched_: boolean;
    protected accessor selectedVersion_: string;
    protected accessor selectedChannel_: string;
    protected accessor versionOptions_: VersionComboboxOption[];
    protected accessor channelOptions_: ComboboxOption[];
    isValid(): boolean;
    submit(): void;
    private onManifestFetched_;
    protected onFetchClick_(): Promise<void>;
    protected onUrlValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInputKeydown_(e: KeyboardEvent): void;
    protected onSelectKeydown_(e: KeyboardEvent): void;
    protected onVersionValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onChannelValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    private compareVersions_;
    private isValidUrl_;
}
declare global {
    interface HTMLElementTagNameMap {
        'iwa-dev-install-update-manifest-tab': IwaDevInstallUpdateManifestTabElement;
    }
}
