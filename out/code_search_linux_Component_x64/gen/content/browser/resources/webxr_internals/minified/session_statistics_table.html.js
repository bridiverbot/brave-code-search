import{getTrustedHTML}from"//resources/js/static_types.js";export function getTemplate(){return getTrustedHTML`<!--_html_template_start_--><style>h3{color:var(--dark-text-color)}table{border-collapse:collapse;margin-top:20px;width:100%}th,td{border-bottom:1px solid var(--light-gray-color);padding:8px;text-align:start}th{background-color:var(--white-color);color:var(--dark-text-color)}</style>
<h3>Frames Statistics</h3>
<button id="copy-button">Copy Frames Statistics to Clipboard</button>
<table id="session-statistics-table">
</table><!--_html_template_end_-->`}