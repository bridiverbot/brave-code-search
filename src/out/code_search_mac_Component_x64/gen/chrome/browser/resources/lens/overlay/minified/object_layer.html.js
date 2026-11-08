import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>.object{pointer-events:all;position:absolute}:host([debug-mode]) .object{border:2px solid green;opacity:50%}#highlightImgContainer{display:none}#objectSelectionCanvas{top:0;left:0;position:absolute;pointer-events:none}</style>
<canvas id="objectSelectionCanvas" height="[[canvasPhysicalHeight]]"
  width="[[canvasPhysicalWidth]]"
  style$="height: [[canvasHeight]]px; width: [[canvasWidth]]px;"></canvas>
<template id="objectsContainer" is="dom-repeat" items="[[renderedObjects]]">
  <div style$="[[getObjectStyle(item)]]" class="object"
    on-pointerenter="handlePointerEnter" on-pointerleave="handlePointerLeave">
  </div>
</template>
<!-- Provides image source for canvas; element is not displayed. -->
<div id="highlightImgContainer">
  <canvas id="highlightImgCanvas">
</div>
<!--_html_template_end_-->`}