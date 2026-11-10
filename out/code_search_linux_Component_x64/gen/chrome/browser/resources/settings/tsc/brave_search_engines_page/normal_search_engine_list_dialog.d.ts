import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../search_page/search_engine_icon.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { SearchEngine } from '../search_page/search_engines_browser_proxy.js';
export interface SettingsNormalSearchEngineListDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const SettingsNormalSearchEngineListDialogElementBase: typeof PolymerElement & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface);
export declare class SettingsNormalSearchEngineListDialogElement extends SettingsNormalSearchEngineListDialogElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * List of search engines available.
         */
        searchEngines: {
            type: ArrayConstructor;
            observer: string;
        };
        /**
         * The id of the search engine that is selected by the user.
         */
        selectedEngineId_: {
            type: StringConstructor;
            value: string;
        };
        /**
         * Whether the checkbox to save the search engine choice in guest mode
         * should be shown.
         */
        showSaveGuestChoice_: {
            type: BooleanConstructor;
            computed: string;
        };
        /**
         * State of the checkbox to save the search engine in guest mode. Null if
         * checkbox is not displayed.
         */
        saveGuestChoice_: {
            type: BooleanConstructor;
            value: null;
            notify: boolean;
        };
        /**
         * Promoted search engine
         */
        promotedEngine_: {
            type: ObjectConstructor;
            computed: string;
        };
    };
    searchEngines: SearchEngine[];
    private promotedEngine_;
    private selectedEngineId_;
    private showSaveGuestChoice_;
    private saveGuestChoice_;
    private browserProxy_;
    ready(): void;
    private onSetAsDefaultClick_;
    private onCancelClick_;
    private searchEnginesChanged_;
    private computeShowSaveGuestChoice_;
    private isPromotedEngine_;
    private isBraveSearchEngine_;
    private computePromotedEngine_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-normal-search-engine-list-dialog': SettingsNormalSearchEngineListDialogElement;
    }
}
export {};
