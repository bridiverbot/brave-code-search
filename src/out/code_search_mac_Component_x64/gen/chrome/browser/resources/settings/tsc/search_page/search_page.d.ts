import '../brave_search_engines_page/brave_search_engines_page.js';
import '../brave_search_engines_page/normal_search_engine_list_dialog.js';
import '../brave_search_engines_page/private_search_engine_list_dialog.js';
import type { Route } from '../router.js';
import { SettingsSearchPageElement as SettingsSearchPageElementChromium } from './search_page-chromium.js';
declare class SettingsSearchPageElement extends SettingsSearchPageElementChromium {
    static get is(): string;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
export { SettingsSearchPageElement };
export * from './search_page-chromium.js';
