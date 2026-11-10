import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';


let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[], css`:host{--favicon-size:16px;flex-basis:auto;max-width:180px;min-width:30px;overflow:hidden}.bookmark{height:30px;display:flex;align-items:center;position:relative;padding-left:7px;padding-right:7px;margin-right:8px}.bookmark:hover{background-color:rgba(0,0,0,0.1);border-radius:15px}.bookmarkTitle{max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;margin-left:7px}#folderIcon{width:16px;height:16px;min-width:16px;min-height:16px}#favicon{height:var(--favicon-size);width:var(--favicon-size);background-size:contain;background-image:var(--favicon-url)}`]);
}