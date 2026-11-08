import '//resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { WebContentsDebugState } from '../contextual_tasks_internals.mojom-webui.js';
export declare class ContextualTasksSessionStateTabElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        webContentsDebugStates_: {
            type: ArrayConstructor;
        };
    };
    protected accessor webContentsDebugStates_: WebContentsDebugState[];
    private proxy_;
    refresh(): Promise<void>;
    protected onRefreshSessionStateClick_(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-session-state-tab': ContextualTasksSessionStateTabElement;
    }
}
