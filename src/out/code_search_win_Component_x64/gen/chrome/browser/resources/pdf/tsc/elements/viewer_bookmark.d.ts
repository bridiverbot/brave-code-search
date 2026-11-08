import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Bookmark } from '../bookmark_type.js';
export declare enum ChangePageOrigin {
    BOOKMARK = "bookmark",
    THUMBNAIL = "thumbnail",
    PAGE_SELECTOR = "pageSelector"
}
export interface ChangePageAndXyDetail {
    page: number;
    x: number;
    y: number;
    origin: ChangePageOrigin;
}
export interface ChangePageDetail {
    page: number;
    origin: ChangePageOrigin;
}
export interface ChangeZoomDetail {
    zoom: number;
}
export interface NavigateDetail {
    newtab: boolean;
    uri: string;
}
declare global {
    interface HTMLElementEventMap {
        'change-page-and-xy': CustomEvent<ChangePageAndXyDetail>;
        'change-page': CustomEvent<ChangePageDetail>;
        'change-zoom': CustomEvent<ChangeZoomDetail>;
        'navigate': CustomEvent<NavigateDetail>;
    }
}
export interface ViewerBookmarkElement {
    $: {
        item: HTMLElement;
        expand: CrIconButtonElement;
    };
}
export declare class ViewerBookmarkElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        bookmark: {
            type: ObjectConstructor;
        };
        depth: {
            type: NumberConstructor;
        };
        childrenShown_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor bookmark: Bookmark;
    accessor depth: number;
    protected accessor childrenShown_: boolean;
    firstUpdated(): void;
    protected getItemStartPaddingStyle_(): string;
    protected getChildDepth_(): number;
    protected getExpandHidden_(): boolean;
    protected onClick_(): void;
    private onEnter_;
    private onSpace_;
    protected onExpandClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-bookmark': ViewerBookmarkElement;
    }
}
