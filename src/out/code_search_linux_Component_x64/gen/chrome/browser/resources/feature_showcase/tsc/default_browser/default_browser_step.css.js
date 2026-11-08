import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{height:100%}feature-showcase-step{height:100%}#illustration{content:url(images/refresh_showcase_illustration.png)}`]);
}
