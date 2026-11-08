import { html } from '//resources/lit/v3_0/lit.rollup.js';
import { nothing } from '//resources/lit/v3_0/lit.rollup.js';
export function getHtml() {
    return html `<!--_html_template_start_--><!-- #html_wrapper_imports_start
import {nothing} from '//resources/lit/v3_0/lit.rollup.js';
#html_wrapper_imports_end -->
<iframe id="iframe" allow="${this.allow || nothing}" .src="${this.getSrc_()}">
</iframe>
<!--_html_template_end_-->`;
}
