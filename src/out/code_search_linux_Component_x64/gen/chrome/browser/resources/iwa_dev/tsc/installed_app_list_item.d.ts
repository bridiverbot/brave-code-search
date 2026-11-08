import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { IwaDevModeAppInfo } from './iwa_dev.mojom-webui.js';
interface SourceMetadata {
    label: string;
    description: string;
}
export declare class InstalledAppListItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        sourceMetadata: {
            type: ObjectConstructor;
        };
        isUpdating: {
            type: BooleanConstructor;
        };
        copied_: {
            type: BooleanConstructor;
            state: boolean;
        };
        subAppsExpanded_: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    accessor app: IwaDevModeAppInfo;
    accessor isUpdating: boolean;
    protected accessor sourceMetadata: SourceMetadata;
    protected accessor copied_: boolean;
    protected accessor subAppsExpanded_: boolean;
    private copiedTimeoutId_;
    disconnectedCallback(): void;
    protected isManifestApp_(): boolean;
    protected onCopyClick(): void;
    protected onLaunchClick(e: Event): void;
    protected onUpdateOptionsClick(): void;
    protected onUpdateClick(): void;
    protected onUninstallClick(e: Event): void;
    protected onToggleSubAppsClick(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Returns the metadata to be displayed for the app's installation source.
     */
    private computeSourceMetadata;
}
declare global {
    interface HTMLElementTagNameMap {
        'installed-app-list-item': InstalledAppListItemElement;
    }
}
export {};
