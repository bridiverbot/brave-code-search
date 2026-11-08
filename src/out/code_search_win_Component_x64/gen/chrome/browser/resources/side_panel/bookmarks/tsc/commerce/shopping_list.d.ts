import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import './icons.html.js';
import type { BookmarkProductInfo } from '//resources/cr_components/commerce/shared.mojom-webui.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare const LOCAL_STORAGE_EXPAND_STATUS_KEY = "shoppingListExpanded";
export declare const ACTION_BUTTON_TRACK_IMAGE = "shopping-list:notification-add";
export declare const ACTION_BUTTON_TRACK_IMAGE_OLD = "shopping-list:shopping-list-track-icon-old";
export declare const ACTION_BUTTON_UNTRACK_IMAGE = "shopping-list:notifications-active-filled";
export declare const ACTION_BUTTON_UNTRACK_IMAGE_OLD = "shopping-list:shopping-list-untrack-icon-old";
export interface ShoppingListElement {
    $: {
        errorToast: CrToastElement;
    };
}
export declare class ShoppingListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        open_: {
            type: BooleanConstructor;
        };
        untrackedItems_: {
            type: ArrayConstructor;
        };
        productInfos: {
            type: ArrayConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor productInfos: BookmarkProductInfo[];
    private accessor untrackedItems_;
    protected accessor open_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private bookmarksApi_;
    private priceTrackingProxy_;
    private listenerIds_;
    private retryOperationCallback_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues): void;
    protected getFaviconUrl_(url: string): string;
    protected onFolderClick_(event: Event): void;
    private getProductInfoFromEvent_;
    protected onProductAuxclick_(event: MouseEvent): void;
    protected onProductClick_(event: MouseEvent): void;
    protected onProductContextmenu_(event: MouseEvent): void;
    protected onActionButtonClick_(event: MouseEvent): void;
    protected getIconForItem_(item: BookmarkProductInfo): string;
    protected getButtonDescriptionForItem_(item: BookmarkProductInfo): string;
    private onBookmarkPriceTracked;
    private onBookmarkPriceUntracked;
    private isSameProduct_;
    protected onProductImageLoad_(): void;
    protected onImageLoadError_(event: Event): void;
    private onBookmarkOperationFailed;
    protected onErrorRetryClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'shopping-list': ShoppingListElement;
    }
}
