import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import './combobox.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ComboboxOption, IwaDevComboboxElement } from './combobox.js';
import type { IwaDevModeAppInfo } from './iwa_dev.mojom-webui.js';
export interface UpdateOptionsSavedEventDetail {
    app: IwaDevModeAppInfo;
    selectedChannel?: string;
    pinnedVersion?: string | null;
    allowDowngrades?: boolean;
}
export declare function isValidIwaVersion(version: string): boolean;
export declare function isValidUpdateChannel(channel: string): boolean;
export interface IwaDevUpdateOptionsDialogElement {
    $: {
        dialog: CrDialogElement;
        channelCombobox: IwaDevComboboxElement;
        pinnedVersionCombobox: IwaDevComboboxElement;
    };
}
export declare class IwaDevUpdateOptionsDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        currentPinnedVersion: {
            type: StringConstructor;
        };
        currentAllowDowngrades: {
            type: BooleanConstructor;
        };
        fetchError_: {
            type: StringConstructor;
            state: boolean;
        };
        channelOptions_: {
            type: ArrayConstructor;
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
        selectedPinnedVersion_: {
            type: StringConstructor;
            state: boolean;
        };
        selectedAllowDowngrades_: {
            type: BooleanConstructor;
            state: boolean;
        };
        channelError_: {
            type: StringConstructor;
            state: boolean;
        };
        pinnedVersionError_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor app: IwaDevModeAppInfo;
    accessor currentPinnedVersion: string | null;
    accessor currentAllowDowngrades: boolean;
    protected accessor fetchError_: string;
    protected accessor channelOptions_: ComboboxOption[];
    protected accessor selectedChannel_: string;
    protected accessor versionOptions_: ComboboxOption[];
    protected accessor selectedPinnedVersion_: string;
    protected accessor selectedAllowDowngrades_: boolean;
    protected accessor channelError_: string;
    protected accessor pinnedVersionError_: string;
    connectedCallback(): void;
    protected onCrDialogOpen_(): void;
    protected onCancelClick_(): void;
    protected onChannelValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onPinnedVersionValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onAllowDowngradesChange_(e: CustomEvent<boolean>): void;
    protected getCurrentChannel_(): string;
    protected getCurrentPinnedVersion_(): string | null;
    protected isSaveDisabled_(): boolean;
    protected onSaveClick_(): void;
    private fetchManifest_;
    private compareVersions_;
    private hasChannelChange_;
    private hasPinnedVersionChange_;
    private hasAllowDowngradesChange_;
}
declare global {
    interface HTMLElementTagNameMap {
        'iwa-dev-update-options-dialog': IwaDevUpdateOptionsDialogElement;
    }
}
