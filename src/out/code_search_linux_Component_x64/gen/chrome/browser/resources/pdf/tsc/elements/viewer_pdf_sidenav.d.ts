import './icons.html.js';
import './viewer_attachment_bar.js';
import './viewer_document_outline.js';
import './viewer_thumbnail_bar.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Bookmark } from '../bookmark_type.js';
import type { Attachment } from '../constants.js';
import type { ViewerAttachmentBarElement } from './viewer_attachment_bar.js';
import type { ViewerDocumentOutlineElement } from './viewer_document_outline.js';
import type { ViewerThumbnailBarElement } from './viewer_thumbnail_bar.js';
interface Tab {
    id: number;
    title: string;
    icon: string;
}
export interface ViewerPdfSidenavElement {
    $: {
        attachmentBar: ViewerAttachmentBarElement;
        content: HTMLElement;
        icons: HTMLElement;
        outline: ViewerDocumentOutlineElement;
        thumbnailBar: ViewerThumbnailBarElement;
    };
}
export declare class ViewerPdfSidenavElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        activePage: {
            type: NumberConstructor;
        };
        attachments: {
            type: ArrayConstructor;
        };
        bookmarks: {
            type: ArrayConstructor;
        };
        clockwiseRotations: {
            type: NumberConstructor;
        };
        docLength: {
            type: NumberConstructor;
        };
        sidenavCollapsed: {
            type: BooleanConstructor;
        };
        strings: {
            type: ObjectConstructor;
        };
        selectedTab_: {
            type: NumberConstructor;
        };
        tabs_: {
            type: ArrayConstructor;
        };
    };
    accessor activePage: number;
    accessor attachments: Attachment[];
    accessor bookmarks: Bookmark[];
    accessor clockwiseRotations: number;
    accessor docLength: number;
    accessor sidenavCollapsed: boolean;
    accessor strings: {
        [key: string]: string;
    } | undefined;
    private accessor selectedTab_;
    protected accessor tabs_: Tab[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeTabs_;
    protected hideIcons_(): boolean;
    protected getTabAriaSelected_(tabId: number): string;
    protected getTabIndex_(tabId: number): string;
    protected getTabSelectedClass_(tabId: number): string;
    protected onTabClick_(e: Event): void;
    protected hideThumbnailView_(): boolean;
    protected hideOutlineView_(): boolean;
    protected hideAttachmentView_(): boolean;
    protected onKeydown_(e: KeyboardEvent): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-pdf-sidenav': ViewerPdfSidenavElement;
    }
}
export {};
