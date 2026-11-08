// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { assertNotReached } from '//resources/js/assert.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss } from './installed_app_list_item.css.js';
import { getHtml } from './installed_app_list_item.html.js';
/**
 * Converts a mojo origin into a user-readable string, omitting default ports.
 * @param origin Origin to convert.
 */
function originToText(origin) {
    if (origin.host.length === 0) {
        return 'null';
    }
    const url = new URL(`${origin.scheme}://${origin.host}`);
    if (origin.port !== 0) {
        url.port = origin.port.toString();
    }
    return url.origin;
}
/**
 * Converts a mojo representation of `base::FilePath` into a user-readable
 * string.
 * @param filePath File path to convert
 */
function filePathToText(filePath) {
    if (typeof filePath.path === 'string') {
        return filePath.path;
    }
    // On Windows, base::FilePath is represented as a UTF-16 code unit array
    // rather than a string.
    const decoder = new TextDecoder('utf-16');
    return decoder.decode(new Uint16Array(filePath.path));
}
export class InstalledAppListItemElement extends CrLitElement {
    static get is() {
        return 'installed-app-list-item';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            app: { type: Object },
            sourceMetadata: { type: Object },
            isUpdating: { type: Boolean },
            copied_: { type: Boolean, state: true },
            subAppsExpanded_: { type: Boolean, state: true },
        };
    }
    #app_accessor_storage = {
        appId: '',
        webBundleId: '',
        name: '',
        source: {
            proxyOrigin: {
                scheme: '',
                host: '',
                port: 0,
                nonceIfOpaque: null,
            },
        },
        installedVersion: '',
        subApps: [],
    };
    get app() { return this.#app_accessor_storage; }
    set app(value) { this.#app_accessor_storage = value; }
    #isUpdating_accessor_storage = false;
    get isUpdating() { return this.#isUpdating_accessor_storage; }
    set isUpdating(value) { this.#isUpdating_accessor_storage = value; }
    #sourceMetadata_accessor_storage = {
        label: '',
        description: '',
    };
    get sourceMetadata() { return this.#sourceMetadata_accessor_storage; }
    set sourceMetadata(value) { this.#sourceMetadata_accessor_storage = value; }
    #copied__accessor_storage = false;
    get copied_() { return this.#copied__accessor_storage; }
    set copied_(value) { this.#copied__accessor_storage = value; }
    #subAppsExpanded__accessor_storage = false;
    get subAppsExpanded_() { return this.#subAppsExpanded__accessor_storage; }
    set subAppsExpanded_(value) { this.#subAppsExpanded__accessor_storage = value; }
    copiedTimeoutId_ = null;
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.copiedTimeoutId_ !== null) {
            window.clearTimeout(this.copiedTimeoutId_);
            this.copiedTimeoutId_ = null;
        }
    }
    isManifestApp_() {
        return !!this.app.source.updateInfo;
    }
    onCopyClick() {
        if (this.app.source.updateInfo) {
            navigator.clipboard.writeText(this.app.source.updateInfo.updateManifestUrl);
            this.copied_ = true;
            if (this.copiedTimeoutId_ !== null) {
                window.clearTimeout(this.copiedTimeoutId_);
            }
            this.copiedTimeoutId_ = window.setTimeout(() => {
                this.copied_ = false;
                this.copiedTimeoutId_ = null;
            }, 2000);
        }
    }
    onLaunchClick(e) {
        const appId = e.currentTarget.dataset['appId'] ?? this.app.appId;
        this.fire('request-launch', { appId });
    }
    onUpdateOptionsClick() {
        this.fire('request-update-options', { app: this.app });
    }
    onUpdateClick() {
        this.fire('request-update', { app: this.app });
    }
    onUninstallClick(e) {
        const appId = e.currentTarget.dataset['appId'] ?? this.app.appId;
        this.fire('request-uninstall', { appId });
    }
    onToggleSubAppsClick() {
        this.subAppsExpanded_ = !this.subAppsExpanded_;
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('app')) {
            this.sourceMetadata = this.computeSourceMetadata();
            if (this.app.subApps.length === 0) {
                this.subAppsExpanded_ = false;
            }
        }
    }
    /**
     * Returns the metadata to be displayed for the app's installation source.
     */
    computeSourceMetadata() {
        if (this.app.source.proxyOrigin) {
            return {
                label: 'Dev mode proxy',
                description: originToText(this.app.source.proxyOrigin),
            };
        }
        if (this.app.source.bundlePath) {
            return {
                label: 'Local Bundle',
                description: filePathToText(this.app.source.bundlePath),
            };
        }
        if (this.app.source.updateInfo) {
            const info = this.app.source.updateInfo;
            return {
                label: 'Update manifest',
                description: `${info.updateManifestUrl}`,
            };
        }
        assertNotReached();
    }
}
customElements.define(InstalledAppListItemElement.is, InstalledAppListItemElement);
