// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { isMac } from '//resources/js/platform.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { SettingsSystemPageElement as SettingsSystemPageElementChromium } from './system_page-chromium.js';
// Upstream's HTMLElementTagNameMap entry for this tag points at the upstream
// class, and TypeScript rejects a second entry with a different type.
// eslint-disable-next-line @webui-eslint/lit-element-structure
class SettingsSystemPageElement extends SettingsSystemPageElementChromium {
    static get is() {
        return 'settings-system-page';
    }
    static get properties() {
        return {
            ...super.properties,
            shortcutsSupported_: { type: Boolean },
            isMac_: { type: Boolean },
            warnBeforeQuittingLabel_: { type: String },
        };
    }
    #shortcutsSupported__accessor_storage = loadTimeData.getBoolean('areShortcutsSupported');
    get shortcutsSupported_() { return this.#shortcutsSupported__accessor_storage; }
    set shortcutsSupported_(value) { this.#shortcutsSupported__accessor_storage = value; }
    #isMac__accessor_storage = isMac;
    get isMac_() { return this.#isMac__accessor_storage; }
    set isMac_(value) { this.#isMac__accessor_storage = value; }
    #warnBeforeQuittingLabel__accessor_storage = isMac ? loadTimeData.getString('warnBeforeQuitting') : '';
    // 'warnBeforeQuitting' is only registered as a localized string on mac
    // (see settings_localized_strings_provider.cc), so this must not be read
    // unconditionally: doing so would CHECK-fail on every other platform. The
    // `isMac` guard (evaluated at field-initialization time, not a reactive
    // read) keeps it from ever calling into loadTimeData outside of mac.
    get warnBeforeQuittingLabel_() { return this.#warnBeforeQuittingLabel__accessor_storage; }
    set warnBeforeQuittingLabel_(value) { this.#warnBeforeQuittingLabel__accessor_storage = value; }
    onShortcutsClick_() {
        Router.getInstance().navigateTo(routes.SHORTCUTS);
    }
}
export { SettingsSystemPageElement };
export * from './system_page-chromium.js';
// Register the Brave subclass instead of the upstream class. The matching
// `customElements.define` in upstream system_page.ts is patched out (see
// patches/chrome-browser-resources-settings-system_page-system_page.ts.patch).
customElements.define(SettingsSystemPageElement.is, SettingsSystemPageElement);
