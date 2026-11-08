import { css } from '//resources/lit/v3_0/lit.rollup.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[], css `h2{margin:0}#header p{color:white;display:inline;font-size:0.72rem;font-style:italic;padding-inline-start:6px}#second-row{display:flex;gap:0.5rem}#second-row h2{color:rgb(58,117,189);display:inline-block;font-size:0.92rem;font-weight:normal}#spinner{display:none;background-image:url(chrome://resources/images/throbber_small.svg);background-size:100%;height:20px;width:20px}:host([loading]) #spinner{display:block}key-value-pair-entry:nth-child(odd){background:rgb(239,243,255)}button{font-family:inherit}`]);
}
