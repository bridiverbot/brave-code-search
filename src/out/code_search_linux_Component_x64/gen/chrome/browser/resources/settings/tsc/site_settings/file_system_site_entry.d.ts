/**
 * @fileoverview
 * 'file-system-site-entry' is an element representing a single origin's
 * permission grant(s), granted via the File System Access API.
 */
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './file_system_site_entry_item.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { OriginFileSystemGrants } from './file_system_site_list.js';
declare const FileSystemSiteEntryElementBase: typeof PolymerElement & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface);
export declare class FileSystemSiteEntryElement extends FileSystemSiteEntryElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * An Object representing an origin and its associated permission grants.
         */
        grantsPerOrigin: ObjectConstructor;
    };
    grantsPerOrigin: OriginFileSystemGrants;
    private onNavigateToDetailsPageClick_;
    private onRemoveGrantsClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'file-system-site-entry': FileSystemSiteEntryElement;
    }
}
export {};
