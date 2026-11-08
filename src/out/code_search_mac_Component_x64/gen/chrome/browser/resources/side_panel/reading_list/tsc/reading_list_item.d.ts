import 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { CrUrlListItemElement } from 'chrome://resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ReadLaterEntry } from './reading_list.mojom-webui.js';
export declare const MARKED_AS_READ_UI_EVENT = "reading-list-marked-as-read";
export interface ReadingListItemElement {
    $: {
        crUrlListItem: CrUrlListItemElement;
        updateStatusButton: CrIconButtonElement;
        deleteButton: HTMLElement;
    };
}
declare const ReadingListItemElementBase: typeof CrLitElement;
export declare class ReadingListItemElement extends ReadingListItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
        buttonRipples: {
            type: BooleanConstructor;
        };
    };
    accessor data: ReadLaterEntry;
    accessor buttonRipples: boolean;
    private apiProxy_;
    firstUpdated(): void;
    focus(): void;
    private onAuxClick_;
    private onClick_;
    private onContextMenu_;
    private onKeyDown_;
    protected onUpdateStatusClick_(e: Event): void;
    protected onItemDeleteClick_(e: Event): void;
    /**
     * @return The appropriate icon for the current state
     */
    protected getUpdateStatusButtonIcon_(): string;
    /**
     * @return The appropriate tooltip for the current state
     */
    protected getUpdateStatusButtonTooltip_(markAsUnreadTooltip: string, markAsReadTooltip: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'reading-list-item': ReadingListItemElement;
    }
    interface HTMLElementEventMap {
        [MARKED_AS_READ_UI_EVENT]: CustomEvent;
    }
}
export {};
