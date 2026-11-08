// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
<div id="content" ?hidden="${this.loadingContent_}">
  <div class="sp-scroller sp-scroller-top-of-page"
      ?hidden="${!this.isReadingListEmpty_()}">
    <sp-empty-state image-path="./images/read_later_empty.svg"
        dark-image-path="./images/read_later_empty_dark.svg"
        heading="$i18n{emptyStateHeader}"
        body="${this.getEmptyStateSubheaderText_()}">
    </sp-empty-state>
  </div>

  <div id="scroller" class="sp-scroller sp-scroller-top-of-page"
      ?hidden="${!this.getAllItems_().length}">
    <cr-lazy-list id="readingListList" class="sp-card"
        .items="${this.getAllItems_()}" .itemSize="${this.itemSize_}"
        .scrollTarget="${this.scrollTarget_}"
        ?hidden="${!this.shouldShowList_()}" @keydown="${this.onItemKeydown_}"
        @viewport-filled="${this.onViewportFilled_}"
        .restoreFocusElement="${this.focusedItem_}"
        .template="${(item,index)=>html`
          ${!item.url?html`
            <sp-heading compact hide-back-button>
              <h2 slot="heading">${item.title}</h2>
              <cr-icon-button slot="buttons"
                  aria-label="${this.getExpandButtonAriaLabel_(item.title)}"
                  title="${this.getExpandButtonAriaLabel_(item.title)}"
                  data-title="${item.title}"
                  iron-icon="${this.getExpandButtonIcon_(item.title)}"
                  @click="${this.onExpandButtonClick_}">
              </cr-icon-button>
            </sp-heading>
          `:html`
            <reading-list-item data-url="${item.url}" data-index="${index}"
                @focus="${this.onItemFocus_}"
                aria-label="${this.ariaLabel_(item)}" class="unread-item"
                .data="${item}" ?button-ripples="${this.buttonRipples}">
            </reading-list-item>
          `}
        `}">
    </cr-lazy-list>
  </div>

  <sp-footer id="footer" ?pinned="${!this.isReadingListEmpty_()}">
    <cr-button id="currentPageActionButton" class="floating-button"
        aria-label="${this.getCurrentPageActionButtonText_()}"
        @click="${this.onCurrentPageActionButtonClick_}"
        ?disabled="${this.getCurrentPageActionButtonDisabled_()}">
      <cr-icon id="currentPageActionButtonIcon" aria-hidden="true"
          slot="prefix-icon" icon="${this.getCurrentPageActionButtonIcon_()}">
      </cr-icon>
      <div id="currentPageActionButtonText" aria-hidden="true">
        ${this.getCurrentPageActionButtonText_()}
      </div>
    </cr-button>
  </sp-footer>
</div>
<!--_html_template_end_-->`}