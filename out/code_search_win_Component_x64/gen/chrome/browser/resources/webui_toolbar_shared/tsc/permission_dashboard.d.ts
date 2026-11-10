import './permission_chip.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PermissionChipDelegate } from './permission_chip_delegate.js';
import type { PermissionDashboardState } from './toolbar_ui_api_data_model.mojom-webui.js';
export declare class PermissionDashboardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        dashboardState: {
            type: ObjectConstructor;
        };
    };
    accessor delegate: PermissionChipDelegate | null;
    accessor dashboardState: PermissionDashboardState | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'permission-dashboard': PermissionDashboardElement;
    }
}
