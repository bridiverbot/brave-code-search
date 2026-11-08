import { css } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `#historyGraph{margin-top:16px;margin-bottom:16px}.tick{fill:var(--cr-secondary-text-color);font-size:11px;line-height:16px;user-select:none}.axis,.circle,.path{stroke-width:2px}.divider,.dash-line{stroke-width:1px}.axis,.divider{stroke:var(--color-side-panel-commerce-graph-axis);stroke-linecap:round}.path{fill:none;stroke-linejoin:round;stroke-linecap:round}.dash-line{stroke-dasharray:3,3;stroke-linecap:square}.circle{fill:var(--color-side-panel-card-background)}.bubble{fill:var(--color-side-panel-commerce-graph-bubble-background);stroke:none}.tooltip-text{fill:var(--cr-primary-text-color);font-size:11px;line-height:16px;text-anchor:middle}.path,.dash-line,.circle{stroke:var(--color-side-panel-commerce-graph-line)}`]);
}
