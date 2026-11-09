// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { isBrowserSigninAllowed, isForceSigninEnabled, isSignInProfileCreationSupported } from './profile_picker_flags.js';
// LINT.IfChange(ProfilePickerPages)
/**
 * ProfilePickerPages enum.
 * These values are persisted to logs and should not be renumbered or
 * re-used.
 * See tools/metrics/histograms/metadata/profile/enums.xml.
 */
var Pages;
(function (Pages) {
    Pages[Pages["MAIN_VIEW"] = 0] = "MAIN_VIEW";
    Pages[Pages["PROFILE_TYPE_CHOICE"] = 1] = "PROFILE_TYPE_CHOICE";
    Pages[Pages["LOCAL_PROFILE_CUSTOMIZATION"] = 2] = "LOCAL_PROFILE_CUSTOMIZATION";
    Pages[Pages["LOAD_SIGNIN"] = 3] = "LOAD_SIGNIN";
    Pages[Pages["LOAD_FORCE_SIGNIN"] = 4] = "LOAD_FORCE_SIGNIN";
    Pages[Pages["PROFILE_SWITCH"] = 5] = "PROFILE_SWITCH";
    Pages[Pages["ACCOUNT_SELECTION_LACROS_DEPRECATED"] = 6] = "ACCOUNT_SELECTION_LACROS_DEPRECATED";
    Pages[Pages["COUNT"] = 7] = "COUNT";
})(Pages || (Pages = {}));
// LINT.ThenChange(//tools/metrics/histograms/metadata/profile/enums.xml:ProfilePickerPages)
/**
 * Valid route pathnames.
 */
export var Routes;
(function (Routes) {
    Routes["MAIN"] = "main-view";
    Routes["NEW_PROFILE"] = "new-profile";
    Routes["PROFILE_SWITCH"] = "profile-switch";
})(Routes || (Routes = {}));
/**
 * Valid profile creation flow steps.
 */
export var ProfileCreationSteps;
(function (ProfileCreationSteps) {
    ProfileCreationSteps["PROFILE_TYPE_CHOICE"] = "profileTypeChoice";
    ProfileCreationSteps["LOCAL_PROFILE_CUSTOMIZATION"] = "localProfileCustomization";
    ProfileCreationSteps["LOAD_SIGNIN"] = "loadSignIn";
    ProfileCreationSteps["LOAD_FORCE_SIGNIN"] = "loadForceSignIn";
})(ProfileCreationSteps || (ProfileCreationSteps = {}));
function computeStep(route) {
    switch (route) {
        case Routes.MAIN:
            return 'mainView';
        case Routes.NEW_PROFILE:
            if (isForceSigninEnabled()) {
                return ProfileCreationSteps.LOAD_FORCE_SIGNIN;
            }
            // TODO(msalama): Adjust once sign in profile creation is supported.
            if (!isSignInProfileCreationSupported() || !isBrowserSigninAllowed()) {
                return ProfileCreationSteps.LOCAL_PROFILE_CUSTOMIZATION;
            }
            return ProfileCreationSteps.PROFILE_TYPE_CHOICE;
        case Routes.PROFILE_SWITCH:
            return 'profileSwitch';
        default:
            assertNotReached();
    }
}
// Sets up history state based on the url path, unless it's already set.
if (!history.state || !history.state.route || !history.state.step) {
    const path = window.location.pathname.replace(/\/$/, '');
    switch (path) {
        case `/${Routes.NEW_PROFILE}`:
            assert(history.length === 1);
            // Enable accessing the main page when navigating back.
            history.replaceState({ route: Routes.MAIN, step: computeStep(Routes.MAIN), isFirst: true }, '', '/');
            history.pushState({
                route: Routes.NEW_PROFILE,
                step: computeStep(Routes.NEW_PROFILE),
                isFirst: false,
            }, '', path);
            break;
        case `/${Routes.PROFILE_SWITCH}`:
            history.replaceState({
                route: Routes.PROFILE_SWITCH,
                step: computeStep(Routes.PROFILE_SWITCH),
                isFirst: true,
            }, '');
            break;
        default:
            history.replaceState({ route: Routes.MAIN, step: computeStep(Routes.MAIN), isFirst: true }, '', '/');
    }
    recordPageVisited(history.state.step);
}
export function recordPageVisited(step) {
    let page = Pages.MAIN_VIEW;
    switch (step) {
        case 'mainView':
            page = Pages.MAIN_VIEW;
            break;
        case ProfileCreationSteps.PROFILE_TYPE_CHOICE:
            page = Pages.PROFILE_TYPE_CHOICE;
            break;
        case ProfileCreationSteps.LOCAL_PROFILE_CUSTOMIZATION:
            page = Pages.LOCAL_PROFILE_CUSTOMIZATION;
            break;
        case ProfileCreationSteps.LOAD_SIGNIN:
            page = Pages.LOAD_SIGNIN;
            break;
        case ProfileCreationSteps.LOAD_FORCE_SIGNIN:
            page = Pages.LOAD_FORCE_SIGNIN;
            break;
        case 'profileSwitch':
            page = Pages.PROFILE_SWITCH;
            break;
        default:
            assertNotReached();
    }
    chrome.metricsPrivate.recordEnumerationValue('ProfilePicker.UiVisited', page, Pages.COUNT);
}
const routeObservers = new Set();
// Notifies all the elements that extended NavigationBehavior.
function notifyObservers() {
    const route = history.state.route;
    const step = history.state.step;
    recordPageVisited(step);
    routeObservers.forEach(observer => observer.onRouteChange(route, step));
}
// Notifies all elements when browser history is popped.
window.addEventListener('popstate', notifyObservers);
export function navigateTo(route) {
    assert([
        Routes.MAIN,
        Routes.NEW_PROFILE,
        Routes.PROFILE_SWITCH,
    ].includes(route));
    navigateToStep(route, computeStep(route));
}
/**
 * Navigates to the previous route if it belongs to the profile picker.
 */
export function navigateToPreviousRoute() {
    window.history.back();
}
/**
 * Returns whether there's a previous route. This is true iff some navigation
 * within the app already took place.
 */
export function hasPreviousRoute() {
    return !history.state.isFirst;
}
export function navigateToStep(route, step) {
    history.pushState({
        route: route,
        step: step,
        isFirst: false,
    }, '', route === Routes.MAIN ? '/' : `/${route}`);
    notifyObservers();
}
export const NavigationMixin = (superClass) => {
    class NavigationMixin extends superClass {
        connectedCallback() {
            super.connectedCallback();
            assert(!routeObservers.has(this));
            routeObservers.add(this);
            // history state was set when page loaded, so when the element first
            // attaches, call the route-change handler to initialize first.
            this.onRouteChange(history.state.route, history.state.step);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            assert(routeObservers.delete(this));
        }
        /**
         * Elements can override onRouteChange to handle route changes.
         */
        onRouteChange(_route, _step) { }
    }
    return NavigationMixin;
};
