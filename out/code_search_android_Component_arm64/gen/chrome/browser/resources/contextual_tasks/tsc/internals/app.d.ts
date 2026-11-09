import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_slider/cr_slider.js';
import '//resources/cr_elements/cr_tab_box/cr_tab_box.js';
import '//resources/cr_elements/cr_textarea/cr_textarea.js';
import '/strings.m.js';
import './session_state_tab.js';
import type { CrSliderElement } from '//resources/cr_elements/cr_slider/cr_slider.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Time } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
import type { EligibilityState, Tab } from '../contextual_tasks_internals.mojom-webui.js';
import type { ContextualTasksSessionStateTabElement } from './session_state_tab.js';
export declare class EventLogMessage {
    eventTime: Date;
    sourceLinkText: string;
    sourceLinkURL: string;
    message: string;
    constructor(eventTime: Time, sourceFile: string, sourceLine: bigint, message: string);
    setSourceLink(sourceFile: string, sourceLine: bigint): void;
    /**
     * Returns a string for dumping the message to logs.
     */
    toLogDump(): string;
}
export interface ContextualTasksInternalsAppElement {
    $: {
        tabSelectionModeSelect: HTMLSelectElement;
        minModelScoreSlider: CrSliderElement;
        sessionStateTab: ContextualTasksSessionStateTabElement;
    };
}
export declare class ContextualTasksInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        relevantTabs_: {
            type: ArrayConstructor;
        };
        query_: {
            type: StringConstructor;
        };
        isQueryPending_: {
            type: BooleanConstructor;
        };
        tabSelectionMode_: {
            type: StringConstructor;
        };
        minModelScore_: {
            type: NumberConstructor;
        };
        eventLogMessages_: {
            type: ArrayConstructor;
        };
        forcedHost_: {
            type: StringConstructor;
        };
        currentHost_: {
            type: StringConstructor;
        };
        eligibilityState_: {
            type: ObjectConstructor;
        };
    };
    protected accessor relevantTabs_: Tab[];
    protected accessor query_: string;
    protected accessor isQueryPending_: boolean;
    protected accessor tabSelectionMode_: string;
    protected accessor minModelScore_: number;
    protected accessor eventLogMessages_: EventLogMessage[];
    protected accessor forcedHost_: string;
    protected accessor currentHost_: string;
    protected accessor eligibilityState_: EligibilityState | null;
    private proxy_;
    private keydownListener_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private refreshAll_;
    private onKeydown_;
    private syncTabsWithUrlHash_;
    private refreshEligibility_;
    private refreshCurrentHost_;
    protected onTabSelectionModeChange_(): void;
    protected onMinModelScoreCrSliderValueChanged_(): void;
    protected onQueryValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onForcedHostValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSetForcedHostClick_(): Promise<void>;
    protected onResetForcedHostClick_(): Promise<void>;
    protected onSubmitClick_(): Promise<void>;
    private onLogMessageAdded_;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-internals-app': ContextualTasksInternalsAppElement;
    }
}
