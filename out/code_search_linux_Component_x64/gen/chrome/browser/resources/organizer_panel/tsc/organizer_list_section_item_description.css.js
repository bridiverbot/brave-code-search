import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getCrHiddenStyleLit } from '//resources/cr_elements/cr_hidden_style_lit.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getCrHiddenStyleLit()], css `:host{display:flex;min-width:0;width:100%}.description-parts{align-items:center;color:var(--color-organizer-panel-foreground-subtle,var(--cr-secondary-text-color));display:flex;font-size:11px;font-weight:400;height:14px;min-width:0;width:100%}.description-part{align-items:center;display:flex;flex:1;max-width:fit-content;min-width:0}.prefix{align-items:center;display:flex;flex-shrink:0;margin-inline-end:4px}.description-text{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.description-text.elide-from-start{direction:rtl;text-align:left}:host-context([dir=rtl]) .description-text.elide-from-start{direction:ltr;text-align:right}.separator{color:var(--color-organizer-panel-foreground-subtle,var(--cr-secondary-text-color));flex-shrink:0;font-size:11px;font-weight:400;margin-inline:4px}`]);
}
