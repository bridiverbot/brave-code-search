/**
 * @fileoverview
 * 'file-system-site-entry-item' is an element representing a single
 * permission grant for a given origin, granted via the File System Access API.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { FileSystemGrant } from './file_system_site_list.js';
declare const FileSystemSiteEntryItemElementBase: typeof PolymerElement & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface);
export interface FileSystemSiteEntryItemElement {
    $: {
        removeGrant: HTMLElement;
    };
}
export declare class FileSystemSiteEntryItemElement extends FileSystemSiteEntryItemElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * An Object representing an origin and its associated permission grants.
         */
        grant: ObjectConstructor;
    };
    grant: FileSystemGrant;
    private getClassForListItem_;
    private onRemoveGrantClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'file-system-site-entry-item': FileSystemSiteEntryItemElement;
    }
}
export {};
