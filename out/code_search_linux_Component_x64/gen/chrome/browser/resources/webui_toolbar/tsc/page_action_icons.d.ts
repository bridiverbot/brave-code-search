import './page_action_icon.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageActionState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { PageActionIconElement } from './page_action_icon.js';
export declare class PageActionIconsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageActionStates: {
            type: ArrayConstructor;
        };
        isCapsule: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    willUpdate(changedProperties: PropertyValues<this>): void;
    aiModePageAction(): PageActionIconElement | null;
    accessor isCapsule: boolean;
    accessor pageActionStates: PageActionState[];
}
declare global {
    interface HTMLElementTagNameMap {
        'page-action-icons': PageActionIconsElement;
    }
}
