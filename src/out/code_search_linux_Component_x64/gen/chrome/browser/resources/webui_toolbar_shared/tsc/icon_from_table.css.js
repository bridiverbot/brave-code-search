import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `:host{align-items:center;display:inline-flex;flex-shrink:0;justify-content:center;height:var(--icon-size);width:var(--icon-size)}:host-context([dir=rtl]):host([flip-in-rtl]:not([is-full-color])){transform:scaleX(-1)}#container{display:inline-block;height:100%;width:100%}#maskIconContainer,#colorfulIconContainer{height:100%;width:100%}#maskIconContainer{background-color:currentColor;mask-position:center;mask-repeat:no-repeat;mask-size:contain}#colorfulIconContainer{background-size:contain;background-position:center;background-repeat:no-repeat}cr-icon{--iron-icon-width:var(--icon-size);--iron-icon-height:var(--icon-size);width:100%;height:100%;display:block}`]);
}
