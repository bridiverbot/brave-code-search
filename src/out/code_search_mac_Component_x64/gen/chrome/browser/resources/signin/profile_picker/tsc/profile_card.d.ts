import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './profile_card_menu.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ProfileState } from './manage_profiles_browser_proxy.js';
export interface ProfileCardElement {
    $: {
        gaiaName: HTMLElement;
        gaiaNameTooltip: CrTooltipElement;
        nameInput: CrInputElement;
        tooltip: CrTooltipElement;
        profileCardButton: CrButtonElement;
    };
}
declare const ProfileCardElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ProfileCardElement extends ProfileCardElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        profileState: {
            type: ObjectConstructor;
        };
        pattern_: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor profileState: ProfileState;
    accessor disabled: boolean;
    protected accessor pattern_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private manageProfilesBrowserProxy_;
    connectedCallback(): void;
    private addNameInputTooltipListeners_;
    private addGaiaNameTooltipListeners_;
    protected getNameInputTooltipText(): string;
    private isNameTruncated_;
    protected onProfileClick_(): void;
    protected onNameInputPointerenter_(): void;
    protected onNameInputPointerleave_(): void;
    /**
     * Handler for when the profile name field is changed, then blurred.
     */
    protected onProfileNameChange_(event: Event): void;
    /**
     * Handler for profile name keydowns.
     */
    protected onProfileNameKeydown_(event: KeyboardEvent): void;
    /**
     * Handler for profile name blur.
     */
    protected onProfileNameInputBlur_(): void;
    /**
     * Disables the ripple effect if any. This is needed when the tile is being
     * dragged in order not to break the visual effect of the dragging tile and
     * mouse positioning relative to the card.
     */
    private disableActiveRipple_;
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-card': ProfileCardElement;
    }
}
export {};
