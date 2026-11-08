import '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class PowerBookmarksAddFolderButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        compact: {
            type: BooleanConstructor;
        };
    };
    accessor disabled: boolean;
    accessor compact: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'power-bookmarks-add-folder-button': PowerBookmarksAddFolderButtonElement;
    }
}
