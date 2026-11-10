import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {CalendarEventElement} from './calendar_event.js';

export function getHtml(this: CalendarEventElement) {
  return html`<!--_html_template_start_--><a id="header" href="${this.event.url}" @click="${this.onHeaderClick_}"
    title="${this.event.title}">
  <div id="hoverContainer"></div>
  <span id="startTime">${this.formattedStartTime_}</span>
  <span id="title">${this.event.title}</span>
  <span id="timeStatus" ?hidden="${!this.timeStatus_}">
    ${this.timeStatus_}
  </span>
</a>
${this.expanded ? html`
  <div id="expandedInfo">
    <div id="location" ?hidden="${!this.showLocation_()}">
      <div id="location-icon" class="cr-icon"></div>
      <p>${this.event.location}</p>
    </div>
    <div id="attachments" ?hidden="${!this.showAttachments_()}">
      <div id="attachment-icon" class="cr-icon"></div>
      <div id="attachmentList" class="${this.attachmentListClass_}">
        ${this.event.attachments.map((item, index) => html`
          <cr-chip data-index="${index}" @click="${this.onAttachmentClick_}"
              chip-role="link" class="attachment" title="${item.title}"
              ?disabled="${this.isAttachmentDisabled_(index)}">
            <img is="cr-auto-img" auto-src="${item.iconUrl}" alt="">
            <div class="attachment-text">${item.title}</div>
          </cr-chip>
        `)}
      </div>
    </div>
    <div id="conference" ?hidden="${!this.showConferenceButton_()}">
      <cr-button role="link"
          @click="${this.onVideoConferenceClick_}"
          class="action-button"
          aria-label="${this.getConferenceButtonAriaLabel_()}">
        $i18n{modulesCalendarJoinMeetingButtonText}
      </cr-button>
    </div>
  </div>
` : ''}
<!--_html_template_end_-->`;
}