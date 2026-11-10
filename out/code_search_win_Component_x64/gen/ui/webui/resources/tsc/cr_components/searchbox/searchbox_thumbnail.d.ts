import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SearchboxThumbnailElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        thumbnailUrl: {
            type: StringConstructor;
        };
        isDeletable: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enableThumbnailSizingTweaks_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor thumbnailUrl: string;
    accessor isDeletable: boolean;
    protected accessor enableThumbnailSizingTweaks_: boolean;
    protected onRemoveButtonClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-searchbox-thumbnail': SearchboxThumbnailElement;
    }
}
