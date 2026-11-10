import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
/**
 * This mixin bundles functionality required to show a password to the user.
 */
export declare const ShowPasswordMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<ShowPasswordMixinInterface>;
export interface ShowPasswordMixinInterface {
    isPasswordVisible: boolean;
    /**
     * Gets the password input's type. Should be 'text' when password is visible
     * or when there's federated text otherwise 'password'.
     */
    getPasswordInputType(): string;
    /**
     * Gets the a11y label for the show/hide button.
     */
    getShowHideButtonLabel(): string;
    /**
     * Get the right icon to display when hiding/showing a password.
     */
    getShowHideButtonIconClass(): string;
    /** Handler for clicking the show/hide button. */
    onShowHidePasswordButtonClick(): void;
}
export {};
