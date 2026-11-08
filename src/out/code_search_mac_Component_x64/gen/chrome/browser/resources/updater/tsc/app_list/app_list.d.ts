import '../scope_icon.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { AppState } from '../updater_ui.mojom-webui.js';
export interface AppStateDisplay extends AppState {
    scope: 'SYSTEM' | 'USER';
    displayName: string;
}
export declare class AppListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        apps: {
            type: ArrayConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
    };
    accessor apps: AppStateDisplay[];
    accessor error: boolean;
    protected shouldShowNoAppsMessage(): boolean;
    protected shouldShowTable(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-list': AppListElement;
    }
}
