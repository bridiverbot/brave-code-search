import type { App } from '//resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { WindowMode } from '//resources/cr_components/app_management/app_management.mojom-webui.js';
export declare class WindowModeItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        windowModeLabel: {
            type: StringConstructor;
        };
        app: {
            type: ObjectConstructor;
        };
    };
    get tabStripSettingsEnabled_(): boolean;
    get windowModes(): {
        label: string;
        value: WindowMode;
    }[];
    accessor windowModeLabel: string;
    accessor app: App;
    onChange(e: {
        value: string;
    }): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-window-mode-item': WindowModeItemElement;
    }
}
