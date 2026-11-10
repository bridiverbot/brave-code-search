import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import '//resources/cr_elements/cr_shared_vars.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{--avatar-size:92px;--avatar-animation-size:200px;--avatar-animation-offset:-80px;--title-font-size:60px;align-items:center;color:var(--cr-primary-text-color);display:flex;gap:48px;flex-direction:column;height:100%;justify-content:center}#headerContainer{display:grid;height:var(--avatar-size);justify-items:center;width:100%}#avatarAnimation,#avatar{grid-area:1/1}#avatarAnimation{height:var(--avatar-animation-size);pointer-events:none;transform:translateY(var(--avatar-animation-offset))}#avatar{border-radius:50%;display:block;height:var(--avatar-size);width:var(--avatar-size);z-index:1}.title{box-sizing:border-box;font-size:var(--title-font-size);margin:0;padding-inline:48px;text-align:center;width:100%}@media screen and ((max-width:780px) or (max-height:600px)){:host{--avatar-size:64px;--avatar-animation-size:140px;--avatar-animation-offset:-56px;--title-font-size:32px;gap:32px}}`]);
}