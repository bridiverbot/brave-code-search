import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrSharedStyleLit } from '//resources/cr_elements/cr_shared_style_lit.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { getCss as getSettingsSharedLit } from '../settings_shared_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrSharedStyleLit(), getSettingsSharedLit()], css `:host{--cr-section-padding:0;--shown-avatar-size:40px}#avatarRow{max-width:280px}#userInfo{padding-top:0;padding-bottom:0}.account-icon{border-radius:50%;flex-shrink:0;height:var(--shown-avatar-size);width:var(--shown-avatar-size)}`]);
}
