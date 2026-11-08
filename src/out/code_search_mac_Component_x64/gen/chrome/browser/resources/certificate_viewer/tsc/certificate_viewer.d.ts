import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import 'chrome://resources/cr_elements/cr_tree/cr_tree.js';
import 'chrome://resources/cr_elements/cr_tree/cr_tree_item.js';
import './browser_proxy.js';
import './modifications_panel.js';
import type { CrTreeItemElement } from 'chrome://resources/cr_elements/cr_tree/cr_tree_item.js';
export declare enum CertificateTrust {
    CERTIFICATE_TRUST_DISTRUSTED = 0,
    CERTIFICATE_TRUST_UNSPECIFIED = 1,
    CERTIFICATE_TRUST_TRUSTED = 2
}
export interface TreeItemDetail {
    payload: {
        val?: string;
        index?: number;
    };
    children: {
        [key: string | number]: CrTreeItemElement;
    };
}
