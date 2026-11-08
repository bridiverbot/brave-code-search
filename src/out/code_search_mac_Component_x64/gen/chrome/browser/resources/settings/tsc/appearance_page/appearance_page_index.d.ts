import type { Route } from '../router.js';
import { SettingsAppearancePageIndexElement as SettingsAppearancePageIndexElementChromium } from './appearance_page_index-chromium.js';
import '../brave_appearance_page/tabs.js';
import '../brave_appearance_page/sidebar.js';
declare class SettingsAppearancePageIndexElement extends SettingsAppearancePageIndexElementChromium {
    static get is(): string;
    currentRouteChanged(newRoute: Route): void;
}
export { SettingsAppearancePageIndexElement };
export * from './appearance_page_index-chromium.js';
