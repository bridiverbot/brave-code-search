import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '/shared/settings/md_select.css.js';
export declare class BraveSettingsSocialBlockingPage extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        isGoogleSignInFeatureEnabled_: {
            readOnly: boolean;
            type: BooleanConstructor;
            value: () => boolean;
        };
    };
    private isGoogleSignInFeatureEnabled_;
}
