import '/shared/icon_from_table.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { SelectedKeywordState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
export declare class SelectedKeywordElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedKeywordState: {
            type: ObjectConstructor;
        };
    };
    accessor selectedKeywordState: SelectedKeywordState;
}
declare global {
    interface HTMLElementTagNameMap {
        'selected-keyword': SelectedKeywordElement;
    }
}
