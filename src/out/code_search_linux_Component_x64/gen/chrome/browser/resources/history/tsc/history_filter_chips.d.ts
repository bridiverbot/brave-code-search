import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_chip/cr_chip.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Device, TimePeriodOption } from 'chrome://resources/cr_components/history/history.mojom-webui.js';
export declare class HistoryFilterChipsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showDeviceFilter: {
            type: BooleanConstructor;
        };
        devices: {
            type: ArrayConstructor;
        };
        timePeriodOptions: {
            type: ArrayConstructor;
        };
        showTimePeriodFilter: {
            type: BooleanConstructor;
        };
        showActorFilter: {
            type: BooleanConstructor;
        };
        userVisits: {
            type: BooleanConstructor;
        };
        actorVisits: {
            type: BooleanConstructor;
        };
        clientIds: {
            type: ArrayConstructor;
        };
    };
    accessor showDeviceFilter: boolean;
    accessor devices: Device[];
    accessor timePeriodOptions: TimePeriodOption[];
    accessor showTimePeriodFilter: boolean;
    accessor showActorFilter: boolean;
    accessor userVisits: boolean;
    accessor actorVisits: boolean;
    accessor clientIds: string[];
    protected isUserSelected(): boolean;
    protected isActorSelected(): boolean;
    protected isDeviceSelected_(device: Device): boolean;
    protected hasActiveFilter_(): boolean;
    protected onActorSelectMousedown_(): void;
    protected onActorSelectChange_(e: Event): void;
    protected onDeviceSelectMousedown_(): void;
    protected onDeviceSelectChange_(e: Event): void;
    protected onClearAllClick_(): Promise<void>;
    protected onUserVisitsClick_(): void;
    protected onActorVisitsClick_(): void;
    protected recordMetrics_(newUserState: boolean, newActorState: boolean): void;
    protected getUserVisitsIcon_(): string;
    protected getActorVisitsIcon_(): string;
    protected showActorFilterDropDownVersion_(): boolean;
    private isCriticalActionsEnabled_;
    private focusFirstFilter_;
    private fireChange_;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-filter-chips': HistoryFilterChipsElement;
    }
}
