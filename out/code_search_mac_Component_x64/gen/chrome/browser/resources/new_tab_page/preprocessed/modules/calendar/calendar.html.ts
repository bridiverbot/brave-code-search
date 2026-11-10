import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {CalendarElement} from './calendar.js';

export function getHtml(this: CalendarElement) {
  return html`<!--_html_template_start_-->${this.events.map((item, index) => html`
  <ntp-calendar-event
      class="row"
      ?double-booked="${this.isDoubleBooked_(index)}"
      ?expanded="${this.isExpanded_(index)}"
      .event="${item}"
      .index="${index}"
      .moduleName="${this.moduleName}">
  </ntp-calendar-event>
  ${this.isExpanded_(index) && this.hasDoubleBooked_() ? html`
    <div class="divider"><hr></hr></div>
  ` : ''}
`)}
<div id="seeMore" class="row">
  <a href="${this.calendarLink}" @click="${this.onSeeMoreClick_}"
      aria-label="$i18n{modulesCalendarSeeMoreAcc}">
    $i18n{modulesCalendarSeeMore}
    <div id="hoverContainer"></div>
  </a>
</div>
<!--_html_template_end_-->`;
}