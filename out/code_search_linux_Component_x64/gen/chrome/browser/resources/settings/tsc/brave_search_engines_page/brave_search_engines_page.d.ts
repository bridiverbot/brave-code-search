import '../search_page/search_engine_icon.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const BraveSearchEnginesPageBase: typeof PolymerElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin.js").PrefServiceObserverMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface);
declare class BraveSearchEnginesPage extends BraveSearchEnginesPageBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        privateSearchEngines_: {
            readOnly: boolean;
            type: ArrayConstructor;
        };
        defaultPrivateSearchEngine_: {
            type: ObjectConstructor;
            computed: string;
        };
        showPrivateSearchEngineListDialog_: BooleanConstructor;
        confirmationToastLabel_: StringConstructor;
        defaultSearchProviderPref_: ObjectConstructor;
        webDiscoveryEnabledPref_: ObjectConstructor;
    };
    private privateSearchEngines_;
    private showPrivateSearchEngineListDialog_;
    private defaultPrivateSearchEngine_;
    private confirmationToastLabel_;
    private defaultSearchProviderPref_;
    private webDiscoveryEnabledPref_;
    browserProxy_: import("./brave_search_engines_page_browser_proxy.js").BraveSearchEnginesPageBrowserProxy;
    connectedCallback(): void;
    ready(): void;
    currentRouteChanged(): void;
    private onOpenPrivateDialogButtonClick_;
    private onPrivateSearchEngineListDialogClose_;
    private onPrivateSearchEngineChangedInDialog_;
    private shouldShowSearchSuggestToggle_;
    private shouldShowPrivateSearchProvider_;
    private isPrefManaged_;
    private isWebDiscoveryNativeEnabled_;
    private computeDefaultPrivateSearchEngine_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-search-page': BraveSearchEnginesPage;
    }
}
export {};
