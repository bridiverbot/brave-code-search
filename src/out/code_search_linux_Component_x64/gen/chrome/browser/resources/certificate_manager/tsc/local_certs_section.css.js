import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getCrPageHostStyleLit } from '//resources/cr_elements/cr_page_host_style_lit.css.js';
import { getCss as getCertificateManagerStyle } from './certificate_manager_style.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getCrPageHostStyleLit(), getCertificateManagerStyle()], css `#importOsCerts{margin-inline-start:auto}.enterprise-icon{padding-inline-start:5px}`]);
}
