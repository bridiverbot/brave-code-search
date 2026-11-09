import type { Route } from '../router.js';
import { SettingsSearchPageIndexElement as SettingsSearchPageIndexElementChromium } from './search_page_index-chromium.js';
declare class SettingsSearchPageIndexElement extends SettingsSearchPageIndexElementChromium {
    static get is(): string;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
export { SettingsSearchPageIndexElement };
export * from './search_page_index-chromium.js';
