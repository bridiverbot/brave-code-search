import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
/**
 * Valid route pathnames.
 */
export declare enum Routes {
    MAIN = "main-view",
    NEW_PROFILE = "new-profile",
    PROFILE_SWITCH = "profile-switch"
}
/**
 * Valid profile creation flow steps.
 */
export declare enum ProfileCreationSteps {
    PROFILE_TYPE_CHOICE = "profileTypeChoice",
    LOCAL_PROFILE_CUSTOMIZATION = "localProfileCustomization",
    LOAD_SIGNIN = "loadSignIn",
    LOAD_FORCE_SIGNIN = "loadForceSignIn"
}
export declare function recordPageVisited(step: string): void;
export declare function navigateTo(route: Routes): void;
/**
 * Navigates to the previous route if it belongs to the profile picker.
 */
export declare function navigateToPreviousRoute(): void;
/**
 * Returns whether there's a previous route. This is true iff some navigation
 * within the app already took place.
 */
export declare function hasPreviousRoute(): boolean;
export declare function navigateToStep(route: Routes, step: string): void;
type Constructor<T> = new (...args: any[]) => T;
export declare const NavigationMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<NavigationMixinInterface>;
export interface NavigationMixinInterface {
    onRouteChange(route: Routes, step: string): void;
}
export {};
