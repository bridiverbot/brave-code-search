import 'chrome://resources/brave/polymer_overriding.js';
import 'chrome://resources/cr_components/theme_color_picker/theme_color_picker.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { AvatarIcon } from 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
import type { CrViewManagerElement } from 'chrome://resources/cr_elements/cr_view_manager/cr_view_manager.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ProfileCustomizationAppElement {
    $: {
        doneButton: CrButtonElement;
        nameInput: CrInputElement;
        title: HTMLElement;
        viewManager: CrViewManagerElement;
    };
}
declare const ProfileCustomizationAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class ProfileCustomizationAppElement extends ProfileCustomizationAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Whether the account is managed (Enterprise). */
        isManaged_: {
            type: BooleanConstructor;
        };
        /** Local profile name, editable by user input. */
        profileName_: {
            type: StringConstructor;
        };
        /** URL for the profile picture. */
        pictureUrl_: {
            type: StringConstructor;
        };
        /** Welcome title for the bubble. */
        welcomeTitle_: {
            type: StringConstructor;
        };
        /** List of available profile icon URLs and labels. */
        availableIcons_: {
            type: ArrayConstructor;
        };
        /** The currently selected profile avatar, if any. */
        selectedAvatar_: {
            type: ObjectConstructor;
        };
        isLocalProfileCreation_: {
            type: BooleanConstructor;
        };
        /** Exposed to CSS as 'is-refreshed-ui_'. */
        isRefreshedUI_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        hasEnterpriseLabel: {
            type: BooleanConstructor;
        };
    };
    protected accessor isManaged_: boolean;
    protected accessor hasEnterpriseLabel: boolean;
    protected accessor profileName_: string;
    protected accessor pictureUrl_: string;
    protected accessor welcomeTitle_: string;
    protected accessor availableIcons_: AvatarIcon[];
    protected accessor selectedAvatar_: AvatarIcon | null;
    private confirmedAvatar_;
    protected accessor isLocalProfileCreation_: boolean;
    protected accessor isRefreshedUI_: boolean;
    private profileCustomizationBrowserProxy_;
    firstUpdated(): void;
    /**
     * Called when the Done button is clicked. Sends the profile name back to
     * native.
     */
    protected onDoneCustomizationClick_(): void;
    protected isDoneButtonDisabled_(): boolean;
    private setProfileInfo_;
    protected getNameInputPlaceHolder_(): string;
    protected shouldShowCancelButton_(): boolean;
    protected onSkipCustomizationClick_(): void;
    protected onDeleteProfileClick_(): void;
    protected onCustomizeAvatarClick_(): void;
    private setAvailableIcons_;
    protected onSelectAvatarConfirmClick_(): void;
    protected onSelectAvatarBackClick_(): void;
    private closeSelectAvatar_;
    protected onNameInputBlur_(): void;
    protected onProfileNameValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSelectedAvatarChanged_(e: CustomEvent<{
        value: AvatarIcon;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-customization-app': ProfileCustomizationAppElement;
    }
}
export {};
