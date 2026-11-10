import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>#scrimContainer{opacity:80%}#initialGradientScrim{background:linear-gradient(180deg,rgba(var(--color-scrim-rgb),0.64) 0px,rgba(var(--color-scrim-rgb),0.4) 104px,rgba(var(--color-scrim-rgb),0) 100%);height:250px;left:0;opacity:0;position:absolute;top:0;transition:opacity 300ms ease-in-out;width:100%}:host([scrim-visible]) #initialGradientScrim{opacity:100%}:host([should-hide-scrim]) #scrimContainer{transition:visibility 0s;transition-delay:300ms;visibility:hidden}</style>
<div id="scrimContainer">
  <div id="initialGradientScrim"></div>
</div>
<!--_html_template_end_-->`}