import './viewer_bookmark.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Bookmark } from '../bookmark_type.js';
export declare class ViewerDocumentOutlineElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        bookmarks: {
            type: ArrayConstructor;
        };
    };
    accessor bookmarks: Bookmark[];
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-document-outline': ViewerDocumentOutlineElement;
    }
}
