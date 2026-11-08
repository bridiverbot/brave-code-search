import '//resources/cr_components/searchbox/searchbox_dropdown.js';
import '//resources/cr_elements/icons.html.js';
import './omnibox_popup_contextual_entrypoint.js';
import '/strings.m.js';
import type { SearchboxDropdownElement } from '//resources/cr_components/searchbox/searchbox_dropdown.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { AutocompleteResult, OmniboxPopupSelection } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
declare const OmniboxPopupAppElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/searchbox/searchbox_selection_mixin.js").SearchboxSelectionMixinInterface);
export declare class OmniboxPopupAppElement extends OmniboxPopupAppElement_base {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the secondary side can be shown based on the feature state and
         * the width available to the dropdown.
         */
        canShowSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasSecondarySide: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the app is in debug mode.
         */
        isDebug: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether matches are visible, as some may be hidden by filtering rules
         * (e.g., Gemini suggestions).
         */
        hasVisibleMatches_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        result_: {
            type: ObjectConstructor;
        };
        isAimButtonVisible_: {
            type: BooleanConstructor;
        };
        webuiOmniboxPopupSelectionControlEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor canShowSecondarySide: boolean;
    accessor hasSecondarySide: boolean;
    accessor isDebug: boolean;
    protected accessor hasVisibleMatches_: boolean;
    protected accessor result_: AutocompleteResult | null;
    protected accessor webuiOmniboxPopupSelectionControlEnabled_: boolean;
    protected accessor isAimButtonVisible_: boolean;
    get isAimButtonVisible(): boolean;
    get showContextEntrypoint(): boolean;
    private searchboxBrowserProxy_;
    private eventTracker_;
    private listenerIds_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    getDropdown(): SearchboxDropdownElement;
    private onCanShowSecondarySideChanged_;
    private onAutocompleteResultChanged_;
    private getContextualEntrypointButton_;
    protected onDropdownDomChange_(): void;
    private onUpdateSelection_;
    setSelection(selection: OmniboxPopupSelection, notify?: boolean): void;
    private stepSelection_;
    private openCurrentSelection_;
    protected onHasSecondarySideChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'omnibox-popup-app': OmniboxPopupAppElement;
    }
}
export {};
