import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_components/searchbox/searchbox_input.js';
import '//resources/cr_components/searchbox/searchbox_icon.js';
import '//resources/cr_components/searchbox/searchbox_thumbnail.js';
import type { SearchboxDropdownElement } from '//resources/cr_components/searchbox/searchbox_dropdown.js';
import type { SearchboxInputElement } from '//resources/cr_components/searchbox/searchbox_input.js';
import type { SearchboxMixinInterface } from '//resources/cr_components/searchbox/searchbox_mixin.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { PageHandlerInterface } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
export interface LensSearchboxElement {
    $: {
        input: SearchboxInputElement;
        inputWrapper: HTMLElement;
    };
}
declare const LensSearchboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/searchbox/searchbox_selection_mixin.js").SearchboxSelectionMixinInterface) & (new (...args: any[]) => SearchboxMixinInterface);
export declare class LensSearchboxElement extends LensSearchboxElementBase implements SearchboxMixinInterface {
    static get is(): string;
    get isAimButtonVisible(): boolean;
    get showContextEntrypoint(): boolean;
    get virtualFocusEnabled(): boolean;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        placeholderText: {
            type: StringConstructor;
            reflect: boolean;
            notify: boolean;
        };
        /** Searchbox default icon (i.e., Google G icon or the search loupe). */
        searchboxIcon_: {
            type: StringConstructor;
        };
        thumbnailUrl_: {
            type: StringConstructor;
        };
        isThumbnailDeletable_: {
            type: BooleanConstructor;
        };
        searchboxLensSearchEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor placeholderText: string;
    protected accessor searchboxIcon_: string;
    protected accessor searchboxLensSearchEnabled_: boolean;
    protected accessor thumbnailUrl_: string;
    protected accessor isThumbnailDeletable_: boolean;
    private proxy_;
    private autocompleteResultChangedListenerId_;
    private thumbnailChangedListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    onInputWrapperFocusout(e: FocusEvent): void;
    onFocusin(e: FocusEvent): void;
    blurInput(): void;
    focusInput(): void;
    hasThumbnail(): boolean;
    getInputElement(): SearchboxInputElement;
    getDropdownElement(): SearchboxDropdownElement;
    pageHandler(): PageHandlerInterface;
    getWrapperElement(): HTMLElement;
    onSearchboxInputTextUpdated(e: CustomEvent<{
        value: string;
        isComposing: boolean;
    }>): void;
    handleKeyNavigation(e: KeyboardEvent): void;
    queryInputAutocomplete(): void;
    private computeSelectedMatch_;
    private onSetThumbnail_;
    protected onRemoveThumbnailClick_(): void;
    protected onLensSearchClick_(): void;
    protected computePlaceholderText_(placeholderText: string): string;
    protected getThumbnailTabindex_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-lens-searchbox': LensSearchboxElement;
    }
}
export {};
