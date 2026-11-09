import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>:host{height:100%;width:100%}#shaderCanvas{height:100%;width:100%}#sparklesImgContainer{display:none}</style>
<canvas id="shaderCanvas"
    style$="height: [[canvasHeight]]px; width: [[canvasWidth]]px;"></canvas>
<!-- Provides image source for canvas; element is not displayed. -->
<div id="sparklesImgContainer">
  <image id="sparklesSvg" src="sparkles.svg" on-load="onSparklesLoad">
</div>
<!--_html_template_end_-->`;
}