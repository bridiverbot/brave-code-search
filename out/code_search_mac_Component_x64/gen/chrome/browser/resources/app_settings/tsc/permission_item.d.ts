import './app_management_shared_style.css.js';
import './toggle_row.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import type { PermissionTypeIndex } from 'chrome://resources/cr_components/app_management/permission_constants.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PermissionItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The name of the permission, to be displayed to the user.
         */
        permissionLabel: {
            type: StringConstructor;
        };
        /**
         * A string version of the permission type. Must be a value of the
         * permission type enum in appManagement.mojom.PermissionType.
         */
        permissionType: {
            type: StringConstructor;
            reflect: boolean;
        };
        icon: {
            type: StringConstructor;
        };
        /**
         * If set to true, toggling the permission item will not set the
         * permission in the backend. Call `syncPermission()` to set the
         * permission to reflect the current UI state.
         */
        syncPermissionManually: {
            type: BooleanConstructor;
        };
        app: {
            type: ObjectConstructor;
        };
        /**
         * True if the permission type is available for the app.
         */
        available_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor app: App;
    accessor permissionLabel: string;
    accessor permissionType: PermissionTypeIndex;
    accessor icon: string;
    private accessor syncPermissionManually;
    protected accessor available_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    private isAvailable_;
    protected isManaged_(): boolean;
    protected isDisabled_(): boolean;
    protected getValue_(): boolean;
    resetToggle(): void;
    private onClick_;
    private togglePermission_;
    /**
     * Set the permission to match the current UI state. This only needs to be
     * called when `syncPermissionManually` is set.
     */
    syncPermission(): void;
    /**
     * Gets the permission boolean based on the toggle's UI state.
     */
    private getUiPermissionBoolean_;
    /**
     * Gets the permission tristate based on the toggle's UI state.
     */
    private getUiPermissionTriState_;
    private getUserMetricActionForPermission_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-permission-item': PermissionItemElement;
    }
}
