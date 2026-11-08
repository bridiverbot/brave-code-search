import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
export interface CwtKeyInfo {
    issued_at?: string;
    expiration_time?: string;
    algorithm?: number;
    config_properties?: string;
    access_policy?: string;
    signature?: string;
    key_id?: string;
    key_algorithm?: number;
    key_curve?: number;
    key_ops?: number[];
    key_x?: string;
    key_d?: string;
}
export declare class PrivateMetricsAppElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    private browserProxy_;
    onUpdateForTesting: () => void;
    constructor();
    private init_;
    private onEncryptionPublicKeyChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'private-metrics-app': PrivateMetricsAppElement;
    }
}
