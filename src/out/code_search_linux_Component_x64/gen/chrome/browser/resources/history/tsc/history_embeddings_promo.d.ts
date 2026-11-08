import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const HISTORY_EMBEDDINGS_PROMO_SHOWN_KEY: string;
export declare const HISTORY_EMBEDDINGS_ANSWERS_PROMO_SHOWN_KEY: string;
export interface HistoryEmbeddingsPromoElement {
    $: {
        close: HTMLElement;
        promo: HTMLElement;
    };
}
export declare class HistoryEmbeddingsPromoElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        isAnswersEnabled_: {
            type: BooleanConstructor;
        };
        shown_: {
            type: BooleanConstructor;
        };
    };
    protected accessor isAnswersEnabled_: boolean;
    protected accessor shown_: boolean;
    protected onCloseClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'history-embeddings-promo': HistoryEmbeddingsPromoElement;
    }
}
