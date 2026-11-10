import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_radio_group.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import './site_settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const PdfDocumentsPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class PdfDocumentsPageElement extends PdfDocumentsPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        isGuest_: {
            type: BooleanConstructor;
            value(): boolean;
        };
    };
    private isGuest_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-pdf-documents-page': PdfDocumentsPageElement;
    }
}
export {};
