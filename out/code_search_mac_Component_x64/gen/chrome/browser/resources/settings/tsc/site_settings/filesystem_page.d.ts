import './category_setting_exceptions.js';
import './file_system_site_list.js';
import './settings_category_default_radio_group.js';
import './site_settings_shared.css.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes } from '../site_settings/constants.js';
declare const FilesystemPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class FilesystemPageElement extends FilesystemPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        searchTerm: StringConstructor;
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
        /**
         * Whether the File System Access Persistent Permissions UI should be
         * displayed.
         */
        enablePersistentPermissions_: {
            type: BooleanConstructor;
            readOnly: boolean;
            value: () => boolean;
        };
    };
    searchTerm: string;
    private enablePersistentPermissions_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-filesystem-page': FilesystemPageElement;
    }
}
export {};
