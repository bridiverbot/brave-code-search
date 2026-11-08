/**
 * @fileoverview
 * 'chooser-exception-list-entry' shows a single chooser exception for a given
 * chooser type.
 */
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../settings_shared.css.js';
import './site_list_entry.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { ChooserException } from './site_settings_browser_proxy.js';
export interface ChooserExceptionListEntryElement {
    $: {
        listContainer: HTMLElement;
    };
}
export declare class ChooserExceptionListEntryElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Chooser exception object to display in the widget.
         */
        exception: ObjectConstructor;
        lastFocused_: ObjectConstructor;
    };
    exception: ChooserException;
    private lastFocused_;
}
declare global {
    interface HTMLElementTagNameMap {
        'chooser-exception-list-entry': ChooserExceptionListEntryElement;
    }
}
