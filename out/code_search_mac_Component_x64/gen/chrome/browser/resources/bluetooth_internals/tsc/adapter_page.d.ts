/**
 * Javascript for AdapterPage, served from chrome://bluetooth-internals/.
 */
import './object_fieldset.js';
import type { AdapterInfo } from './adapter.mojom-webui.js';
import type { ObjectFieldsetElement } from './object_fieldset.js';
import { Page } from './page.js';
/**
 * Page that contains an ObjectFieldSet that displays the latest AdapterInfo.
 */
export declare class AdapterPage extends Page {
    adapterFieldSet: ObjectFieldsetElement;
    private refreshBtn_;
    constructor();
    /**
     * Sets the information to display in fieldset.
     */
    setAdapterInfo(info: AdapterInfo): void;
}
