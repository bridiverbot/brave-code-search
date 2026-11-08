import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { SearchResultItem } from './history_embeddings.mojom-webui.js';
export declare class HistoryEmbeddingsResultImageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hasImage: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        imageUrl_: {
            type: StringConstructor;
        };
        inSidePanel: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        searchResult: {
            type: ObjectConstructor;
        };
    };
    accessor hasImage: boolean;
    protected accessor imageUrl_: string | null;
    accessor inSidePanel: boolean;
    accessor searchResult: SearchResultItem | null;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private fetchImageForSearchResult_;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-history-embeddings-result-image': HistoryEmbeddingsResultImageElement;
    }
}
