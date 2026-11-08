import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ProfileState } from './manage_profiles_browser_proxy.js';
export interface ProfileSwitchElement {
    $: {
        iconContainer: HTMLElement;
        profileName: HTMLElement;
        gaiaName: HTMLElement;
        cancelButton: CrButtonElement;
        switchButton: CrButtonElement;
    };
}
export declare class ProfileSwitchElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        profileState_: {
            type: ObjectConstructor;
        };
        isProfileStateInitialized_: {
            type: BooleanConstructor;
        };
    };
    protected accessor profileState_: ProfileState;
    protected accessor isProfileStateInitialized_: boolean;
    private manageProfilesBrowserProxy_;
    firstUpdated(): void;
    protected onCancelClick_(): void;
    protected onSwitchClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-switch': ProfileSwitchElement;
    }
}
