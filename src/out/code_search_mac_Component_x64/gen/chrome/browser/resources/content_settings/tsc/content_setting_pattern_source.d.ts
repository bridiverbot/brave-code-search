import './value_display.js';
import './mojo_timestamp.js';
import './mojo_timedelta.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { ContentSettingPatternSource as MojoContentSettingPatternSource } from './content_settings.mojom-webui.js';
import type { PageHandlerInterface } from './content_settings_internals.mojom-webui.js';
export declare class ContentSettingPatternSourceElement extends CustomElement {
    constructor();
    configure(pageHandler: PageHandlerInterface, cs: MojoContentSettingPatternSource): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'content-setting-pattern-source': ContentSettingPatternSourceElement;
    }
}
