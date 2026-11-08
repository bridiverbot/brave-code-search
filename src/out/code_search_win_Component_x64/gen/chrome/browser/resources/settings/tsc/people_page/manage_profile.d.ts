/**
 * @fileoverview
 * 'settings-manage-profile' is the settings subpage containing controls to
 * edit a profile's name, icon, and desktop shortcut.
 */
import 'chrome://resources/cr_components/theme_color_picker/theme_color_picker.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '../settings_page/settings_subpage.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { AvatarIcon } from 'chrome://resources/cr_elements/cr_profile_avatar_selector/cr_profile_avatar_selector.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
declare const SettingsManageProfileElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export interface SettingsManageProfileElement {
    $: {
        nameInput: CrInputElement;
    };
}
export declare class SettingsManageProfileElement extends SettingsManageProfileElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The newly selected avatar. Defaults to null, populated only if the user
         * manually changes the avatar selection. The observer ensures that the
         * changes are propagated to the C++.
         */
        profileAvatar_: {
            type: ObjectConstructor;
        };
        /**
         * The current profile name.
         */
        profileName_: {
            type: StringConstructor;
        };
        /**
         * True if the current profile has a shortcut.
         */
        hasProfileShortcut_: {
            type: BooleanConstructor;
        };
        /**
         * The available icons for selection.
         */
        availableIcons: {
            type: ArrayConstructor;
        };
        /**
         * True if the profile shortcuts feature is enabled.
         */
        isProfileShortcutSettingVisible_: {
            type: BooleanConstructor;
        };
        hasEnterpriseLabel_: {
            type: BooleanConstructor;
        };
        /**
         * TODO(dpapad): Move this back to the HTML file when the Polymer2 version
         * of the code is deleted. Because of "\" being a special character in a
         * JS string, can't satisfy both Polymer2 and Polymer3 at the same time
         * from the HTML file.
         */
        pattern_: {
            type: StringConstructor;
        };
    };
    protected accessor profileAvatar_: AvatarIcon | null;
    protected accessor profileName_: string;
    protected accessor hasProfileShortcut_: boolean;
    accessor availableIcons: AvatarIcon[];
    protected accessor isProfileShortcutSettingVisible_: boolean;
    protected accessor hasEnterpriseLabel_: boolean;
    protected accessor pattern_: string;
    private browserProxy_;
    connectedCallback(): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onProfileInfoChanged_;
    /**
     * Handler for when the profile name field is changed, then blurred.
     */
    protected onNameInputChange_(event: Event): void;
    /**
     * Handler for profile name keydowns.
     */
    protected onNameInputKeydown_(event: KeyboardEvent): void;
    /**
     * Handler for when the profile avatar is changed by the user.
     */
    private profileAvatarChanged_;
    protected onSelectedAvatarChanged_(e: CustomEvent<{
        value: AvatarIcon;
    }>): void;
    /**
     * Handler for when the profile shortcut toggle is changed.
     */
    protected onHasProfileShortcutChange_(event: CustomEvent<boolean>): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-manage-profile': SettingsManageProfileElement;
    }
}
export {};
