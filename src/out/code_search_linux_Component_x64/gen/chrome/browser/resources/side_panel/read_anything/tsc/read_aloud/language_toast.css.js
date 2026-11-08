import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `#toast{background:#303030;bottom:0;box-sizing:border-box;left:50%;margin-left:0;margin-right:0;min-width:245px;transform:translateX(-50%);width:clamp(245px,80%,100vw - 48px)}#toastDiv{line-height:1.2;white-space:normal;color:#F2F2F2}#toastTitle{display:block;font-size:1em}#toastMessage{display:block;font-size:1em}`]);
}
