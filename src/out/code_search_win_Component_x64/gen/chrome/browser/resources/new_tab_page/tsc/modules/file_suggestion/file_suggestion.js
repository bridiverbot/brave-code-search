// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { RecommendationType } from '../../file_suggestion.mojom-webui.js';
import { recordEnumeration, recordSmallCount } from '../../metrics_utils.js';
import { getCss } from './file_suggestion.css.js';
import { getHtml } from './file_suggestion.html.js';
/**
 * Actions the user can perform within a file suggestion module (Drive,
 * MicrosoftFiles). This enum must match the numbering for NTPFileAction in
 * histogram/enums.xml. These values are persisted to logs. Entries should not
 * be renumbered, removed or reused.
 */
// LINT.IfChange(FileAction)
export var FileAction;
(function (FileAction) {
    FileAction[FileAction["FILE_SUGGESTION_CLICKED"] = 0] = "FILE_SUGGESTION_CLICKED";
    FileAction[FileAction["SEE_MORE_CLICKED"] = 1] = "SEE_MORE_CLICKED";
    FileAction[FileAction["MAX_VALUE"] = 1] = "MAX_VALUE";
})(FileAction || (FileAction = {}));
/**
 * Shared component for file modules, which serve as an inside look to recent
 * activity within a user's Google Drive or Microsoft Sharepoint.
 */
export class FileSuggestionElement extends CrLitElement {
    static get is() {
        return 'ntp-file-suggestion';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            files: { type: Array },
            moduleName: { type: String },
            seeMoreUrl: { type: String },
            seeMoreText: { type: String },
            seeMoreAriaLabel: { type: String },
        };
    }
    #files_accessor_storage = [];
    get files() { return this.#files_accessor_storage; }
    set files(value) { this.#files_accessor_storage = value; }
    #moduleName_accessor_storage = '';
    get moduleName() { return this.#moduleName_accessor_storage; }
    set moduleName(value) { this.#moduleName_accessor_storage = value; }
    #seeMoreUrl_accessor_storage = '';
    get seeMoreUrl() { return this.#seeMoreUrl_accessor_storage; }
    set seeMoreUrl(value) { this.#seeMoreUrl_accessor_storage = value; }
    #seeMoreText_accessor_storage = '';
    get seeMoreText() { return this.#seeMoreText_accessor_storage; }
    set seeMoreText(value) { this.#seeMoreText_accessor_storage = value; }
    #seeMoreAriaLabel_accessor_storage = '';
    get seeMoreAriaLabel() { return this.#seeMoreAriaLabel_accessor_storage; }
    set seeMoreAriaLabel(value) { this.#seeMoreAriaLabel_accessor_storage = value; }
    recordFileAction_(action) {
        recordEnumeration(`NewTabPage.${this.moduleName}.UserAction`, action, FileAction.MAX_VALUE + 1);
    }
    onFileClick_(e) {
        const clickFileEvent = new Event('usage', { composed: true, bubbles: true });
        this.dispatchEvent(clickFileEvent);
        const currentTarget = e.currentTarget;
        const index = Number(currentTarget.dataset['index']);
        recordSmallCount(`NewTabPage.${this.moduleName}.FileClick`, index);
        const file = this.files[index];
        assert(file);
        if (file.recommendationType !== null) {
            recordEnumeration(`NewTabPage.${this.moduleName}.RecommendationTypeClick`, file.recommendationType, RecommendationType.MAX_VALUE + 1);
        }
        this.recordFileAction_(FileAction.FILE_SUGGESTION_CLICKED);
    }
    onSeeMoreClick_() {
        this.dispatchEvent(new Event('usage', { composed: true, bubbles: true }));
        this.recordFileAction_(FileAction.SEE_MORE_CLICKED);
    }
}
customElements.define(FileSuggestionElement.is, FileSuggestionElement);
