import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from 'chrome://resources/cr_elements/cr_shared_style_lit.css.js';
import { getCss as getSettingsSharedLit } from '../../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `#headerLine{margin:8px}#backToSettingsButton{margin-inline-end:10px;margin-inline-start:-10px}#dialog{background-color:var(--cr-card-background-color);border:0;height:100vh;margin:0;max-height:100vh;max-width:100vw;padding:0;width:100vw}#dialog[open]{display:block}settings-privacy-guide-page::part(privacyGuideCard){background-color:transparent;box-shadow:none;margin:auto;max-width:680px;min-width:550px}`]);
}
