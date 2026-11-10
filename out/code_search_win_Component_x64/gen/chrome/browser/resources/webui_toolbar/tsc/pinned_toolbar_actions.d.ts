import './pinned_toolbar_action.js';
import './toolbar_divider.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PinnedToolbarActionState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { OverflowableToolbarActionElement } from './overflowable_toolbar_action_mixin.js';
declare const PinnedToolbarActionsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./toolbar_action_container_mixin.js").ToolbarActionContainerMixinInterface<import("/shared/toolbar_ui_api_data_model.mojom-webui.js").PinnedToolbarActionStateMojoType>) & (new (...args: any[]) => import("./overflowable_toolbar_action_container_mixin.js").OverflowableToolbarActionContainer);
export declare class PinnedToolbarActionsElement extends PinnedToolbarActionsElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        dividerIndex: {
            type: NumberConstructor;
        };
    };
    /**
     * The index of the divider within `keyedStates`, or -1 if there is no
     * divider. Updated by onKeyedStatesChanged().
     */
    accessor dividerIndex: number;
    onKeyedStatesChanged(): void;
    getActions(): OverflowableToolbarActionElement[];
    getKey(state: PinnedToolbarActionState): string;
    isInitialUpdate(newStates: PinnedToolbarActionState[]): boolean;
    moveItem(id: string, index: number): void;
    moveItemBy(id: string, delta: number): void;
    getMimeType(): string;
    getBroadcastChannelName(): string;
    get childTagName(): string;
    isDraggable(state: PinnedToolbarActionState, index: number): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'pinned-toolbar-actions': PinnedToolbarActionsElement;
    }
}
export {};
