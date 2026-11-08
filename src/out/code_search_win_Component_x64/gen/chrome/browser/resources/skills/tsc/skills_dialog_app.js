// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_loading_gradient/cr_loading_gradient.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './error_page.js';
import './icons.html.js';
import './skills_emoji_picker.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { SkillsDialogType, SkillSource } from './skill.mojom-webui.js';
import { SkillsPromptRefinementOutcome } from './skill_metrics.mojom-webui.js';
import { getCss } from './skills_dialog.css.js';
import { getHtml } from './skills_dialog_app.html.js';
import { SkillsDialogBrowserProxy } from './skills_dialog_browser_proxy.js';
const DEFAULT_EMOJI = '⚡';
export const MAX_NAME_CHAR_COUNT = loadTimeData.getInteger('MAX_NAME_CHAR_COUNT');
export const MAX_PROMPT_CHAR_COUNT = loadTimeData.getInteger('MAX_PROMPT_CHAR_COUNT');
// The amount of pixels the user can be from the very bottom of the skills
// dialog before the gradient is removed.
export const BOTTOM_SCROLL_OFFSET_PX = 5;
export const REFINE_SKILL_TIMEOUT_MS = 5000;
export const AUTOCOMPLETE_MIN_CHARS = 20;
let windowProxyInstance = null;
export var PromptError;
(function (PromptError) {
    PromptError[PromptError["NONE"] = 0] = "NONE";
    PromptError[PromptError["REFINE"] = 1] = "REFINE";
    PromptError[PromptError["CHAR_LIMIT"] = 2] = "CHAR_LIMIT";
})(PromptError || (PromptError = {}));
export class WindowProxyImpl {
    setTimeout(handler, timeout) {
        return window.setTimeout(handler, timeout);
    }
    static getInstance() {
        return windowProxyInstance || (windowProxyInstance = new WindowProxyImpl());
    }
    static setInstance(obj) {
        windowProxyInstance = obj;
    }
}
export class SkillsDialogAppElement extends CrLitElement {
    static get is() {
        return 'skills-dialog-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            skill_: { type: Object },
            dialogTitle_: { type: String },
            canUndoRefine_: { type: Boolean },
            canRedoRefine_: { type: Boolean },
            shouldShowErrorPage_: { type: Boolean },
            signedInEmail_: { type: String },
            promptError_: { type: Number },
            isRefineLoading_: { type: Boolean },
            isAutoGenerationLoading_: { type: Boolean },
            hasSaveError_: { type: Boolean },
            hasNameCharLimitError_: { type: Boolean },
            isAddDialog_: { type: Boolean },
            showEmojiPicker_: { type: Boolean },
            generatedName_: { type: String },
            generatedIcon_: { type: String },
            isNameInputFocused_: { type: Boolean },
            hasSeenGeneratedSuggestion_: { type: Boolean },
            webuiRoundedIconsEnabled_: { type: Boolean },
        };
    }
    #skill__accessor_storage = {
        id: '',
        sourceSkillId: '',
        name: '',
        icon: '',
        prompt: '',
        // Default to user created since these are added by the user via the UI.
        source: SkillSource.kUserCreated,
        description: '',
        curatedBy: '',
        imageUrl: '',
        creationTime: { internalValue: 0n },
        lastUpdateTime: { internalValue: 0n },
        category: '',
        enabled: true,
    };
    /** The object will be manipulated by submitSkill(). */
    get skill_() { return this.#skill__accessor_storage; }
    set skill_(value) { this.#skill__accessor_storage = value; }
    #dialogTitle__accessor_storage = '';
    get dialogTitle_() { return this.#dialogTitle__accessor_storage; }
    set dialogTitle_(value) { this.#dialogTitle__accessor_storage = value; }
    #hasSaveError__accessor_storage = false;
    get hasSaveError_() { return this.#hasSaveError__accessor_storage; }
    set hasSaveError_(value) { this.#hasSaveError__accessor_storage = value; }
    #hasNameCharLimitError__accessor_storage = false;
    get hasNameCharLimitError_() { return this.#hasNameCharLimitError__accessor_storage; }
    set hasNameCharLimitError_(value) { this.#hasNameCharLimitError__accessor_storage = value; }
    #showEmojiPicker__accessor_storage = false;
    get showEmojiPicker_() { return this.#showEmojiPicker__accessor_storage; }
    set showEmojiPicker_(value) { this.#showEmojiPicker__accessor_storage = value; }
    #canUndoRefine__accessor_storage = false;
    get canUndoRefine_() { return this.#canUndoRefine__accessor_storage; }
    set canUndoRefine_(value) { this.#canUndoRefine__accessor_storage = value; }
    #canRedoRefine__accessor_storage = false;
    get canRedoRefine_() { return this.#canRedoRefine__accessor_storage; }
    set canRedoRefine_(value) { this.#canRedoRefine__accessor_storage = value; }
    #shouldShowErrorPage__accessor_storage = !loadTimeData.getBoolean('isGlicEnabled');
    get shouldShowErrorPage_() { return this.#shouldShowErrorPage__accessor_storage; }
    set shouldShowErrorPage_(value) { this.#shouldShowErrorPage__accessor_storage = value; }
    #signedInEmail__accessor_storage = '';
    get signedInEmail_() { return this.#signedInEmail__accessor_storage; }
    set signedInEmail_(value) { this.#signedInEmail__accessor_storage = value; }
    #promptError__accessor_storage = PromptError.NONE;
    get promptError_() { return this.#promptError__accessor_storage; }
    set promptError_(value) { this.#promptError__accessor_storage = value; }
    #isRefineLoading__accessor_storage = false;
    get isRefineLoading_() { return this.#isRefineLoading__accessor_storage; }
    set isRefineLoading_(value) { this.#isRefineLoading__accessor_storage = value; }
    #isAutoGenerationLoading__accessor_storage = false;
    get isAutoGenerationLoading_() { return this.#isAutoGenerationLoading__accessor_storage; }
    set isAutoGenerationLoading_(value) { this.#isAutoGenerationLoading__accessor_storage = value; }
    #isAddDialog__accessor_storage = true;
    get isAddDialog_() { return this.#isAddDialog__accessor_storage; }
    set isAddDialog_(value) { this.#isAddDialog__accessor_storage = value; }
    #generatedName__accessor_storage = '';
    get generatedName_() { return this.#generatedName__accessor_storage; }
    set generatedName_(value) { this.#generatedName__accessor_storage = value; }
    #generatedIcon__accessor_storage = '';
    get generatedIcon_() { return this.#generatedIcon__accessor_storage; }
    set generatedIcon_(value) { this.#generatedIcon__accessor_storage = value; }
    #isNameInputFocused__accessor_storage = false;
    get isNameInputFocused_() { return this.#isNameInputFocused__accessor_storage; }
    set isNameInputFocused_(value) { this.#isNameInputFocused__accessor_storage = value; }
    #hasSeenGeneratedSuggestion__accessor_storage = false;
    get hasSeenGeneratedSuggestion_() { return this.#hasSeenGeneratedSuggestion__accessor_storage; }
    set hasSeenGeneratedSuggestion_(value) { this.#hasSeenGeneratedSuggestion__accessor_storage = value; }
    #webuiRoundedIconsEnabled__accessor_storage = loadTimeData.getBoolean('webuiRoundedIconsEnabled');
    get webuiRoundedIconsEnabled_() { return this.#webuiRoundedIconsEnabled__accessor_storage; }
    set webuiRoundedIconsEnabled_(value) { this.#webuiRoundedIconsEnabled__accessor_storage = value; }
    originalPrompt_ = '';
    refinedPrompt_ = '';
    undoCount_ = 0;
    redoCount_ = 0;
    hasUserRefined_ = false;
    textareaResizeObserver_ = null;
    dialogResizeObserver_ = null;
    get trimmedName_() {
        return this.skill_.name ?
            this.skill_.name.trim().substring(0, MAX_NAME_CHAR_COUNT) :
            '';
    }
    get trimmedPrompt_() {
        return this.skill_.prompt ?
            this.skill_.prompt.trim().substring(0, MAX_PROMPT_CHAR_COUNT) :
            '';
    }
    isSaveButtonDisabled() {
        return this.trimmedName_.length === 0 || this.trimmedPrompt_.length === 0;
    }
    isRefinementEnabled_() {
        return loadTimeData.getBoolean('isRefinementEnabled');
    }
    hasPromptError_() {
        return this.promptError_ !== PromptError.NONE;
    }
    /** Initializes dialog. */
    connectedCallback() {
        super.connectedCallback();
        ColorChangeUpdater.forDocument().start();
        SkillsDialogBrowserProxy.getInstance().handler.getInitialState().then(({ initialDialogState }) => {
            if (initialDialogState) {
                this.skill_ = initialDialogState.skill;
                this.skill_.source =
                    initialDialogState.skill.source || SkillSource.kUserCreated;
                switch (initialDialogState.dialogType) {
                    case SkillsDialogType.kAdd:
                        this.dialogTitle_ = loadTimeData.getString('addSkillHeader');
                        this.autoPopulateNameAndIcon_();
                        this.isAddDialog_ = true;
                        break;
                    case SkillsDialogType.kEdit:
                        this.dialogTitle_ = loadTimeData.getString('editSkillHeader');
                        this.isAddDialog_ = false;
                        break;
                    default:
                        break;
                }
            }
        });
        SkillsDialogBrowserProxy.getInstance().handler.getSignedInEmail().then(({ email }) => {
            this.signedInEmail_ = email;
        });
        if (window.ResizeObserver) {
            this.textareaResizeObserver_ = new ResizeObserver(() => {
                this.checkTextareaOverflow_();
            });
            // Need to explicitly observe the native dialog element because cr-dialog
            // always has size 0x0, so does not trigger child size changes required to
            // expand the dialog.
            this.dialogResizeObserver_ = new ResizeObserver(() => {
                const dialog = this.shadowRoot.querySelector('#dialog')
                    ?.getNative();
                if (dialog) {
                    document.body.style.height = `${dialog.offsetHeight}px`;
                }
            });
        }
    }
    disconnectTextareaResizeObserver_() {
        if (this.textareaResizeObserver_) {
            this.textareaResizeObserver_.disconnect();
            this.textareaResizeObserver_ = null;
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.disconnectTextareaResizeObserver_();
        if (this.dialogResizeObserver_) {
            this.dialogResizeObserver_.disconnect();
            this.dialogResizeObserver_ = null;
        }
    }
    firstUpdated() {
        this.attachTextareaResizeObserver_();
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('skill_')) {
            this.promptError_ = this.skill_.prompt.length >= MAX_PROMPT_CHAR_COUNT ?
                PromptError.CHAR_LIMIT :
                PromptError.NONE;
            this.hasNameCharLimitError_ =
                this.skill_.name.length >= MAX_NAME_CHAR_COUNT;
            // Only check overflow if the textarea is currently in the DOM
            if (!this.isRefineLoading_) {
                this.checkTextareaOverflow_();
            }
        }
        // If the loading state changed, the textarea might have been removed from
        // the DOM.
        if (changedProperties.has('isRefineLoading_') && this.isRefineLoading_) {
            // Wait for the DOM to be fully updated.
            this.updateComplete.then(() => {
                this.disconnectTextareaResizeObserver_();
            });
        }
        const dialog = this.shadowRoot.querySelector('#dialog');
        if (this.dialogResizeObserver_ && dialog) {
            this.dialogResizeObserver_.observe(dialog.getNative());
        }
    }
    attachTextareaResizeObserver_() {
        const textarea = this.instructionsTextarea_;
        this.disconnectTextareaResizeObserver_();
        this.textareaResizeObserver_ = new ResizeObserver(() => {
            this.checkTextareaOverflow_();
        });
        // Observe the current textarea
        this.textareaResizeObserver_.observe(textarea);
        textarea.onscroll = () => this.checkTextareaOverflow_();
    }
    checkTextareaOverflow_() {
        // During a loading state, the textarea is removed from the DOM.
        if (this.isRefineLoading_) {
            return;
        }
        const textarea = this.instructionsTextarea_;
        const hasScrollbar = textarea.scrollHeight > textarea.clientHeight;
        // Add a small offset so the user doesn't have to scroll to the absolute
        // bottom
        const isScrolledToBottom = textarea.scrollTop + textarea.clientHeight + BOTTOM_SCROLL_OFFSET_PX >=
            textarea.scrollHeight;
        textarea.classList.toggle('has-overflow', hasScrollbar && !isScrolledToBottom);
    }
    get instructionsTextarea_() {
        const el = this.shadowRoot.querySelector('#instructionsText');
        assert(el);
        return el;
    }
    onEmojiBtnClick_() {
        this.showEmojiPicker_ = !this.showEmojiPicker_;
    }
    onEmojiSelected_(event) {
        this.skill_ = { ...this.skill_, icon: event.detail.emoji };
        this.showEmojiPicker_ = false;
        this.shadowRoot.querySelector('#emojiTrigger').focus();
    }
    onEmojiPickerClose_() {
        this.showEmojiPicker_ = false;
        this.shadowRoot.querySelector('#emojiTrigger').focus();
    }
    onEmojiKeydown_(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.onEmojiBtnClick_();
            return;
        }
    }
    onKeydown_(event) {
        if (event.key === 'Escape' && this.showEmojiPicker_) {
            this.onEmojiPickerClose_();
            event.preventDefault();
            event.stopPropagation();
            return;
        }
    }
    onEmojiInput_(event) {
        const input = event.target;
        const rawValue = input.value;
        if (!rawValue) {
            this.skill_ = { ...this.skill_, icon: DEFAULT_EMOJI };
            input.value = DEFAULT_EMOJI;
            return;
        }
        // Sanitize input: Take ONLY the last grapheme cluster
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        const segments = [...segmenter.segment(rawValue)];
        const lastEmoji = segments[segments.length - 1]?.segment || DEFAULT_EMOJI;
        this.skill_ = { ...this.skill_, icon: lastEmoji };
        input.value = lastEmoji;
        input.blur();
    }
    isRefineDisabled_() {
        return this.trimmedPrompt_.length === 0 || this.isRefineLoading_;
    }
    isUndoDisabled_() {
        return !this.canUndoRefine_ || this.isRefineLoading_;
    }
    isRedoDisabled_() {
        return !this.canRedoRefine_ || this.isRefineLoading_;
    }
    onNameValueChanged_(e) {
        this.skill_ = { ...this.skill_, name: e.detail.value };
    }
    onInstructionsInput_(e) {
        const target = e.target;
        const newValue = target.value;
        this.canUndoRefine_ = false;
        this.canRedoRefine_ = false;
        this.originalPrompt_ = '';
        this.refinedPrompt_ = '';
        this.skill_ = { ...this.skill_, prompt: newValue };
        // Clear generated suggestions as the user changed the prompt manually
        this.generatedName_ = '';
        this.generatedIcon_ = '';
    }
    onUndoClick_() {
        this.undoCount_++;
        // Undo is only enabled after a successful refinement, at which point
        // originalPrompt_ is guaranteed to be populated.
        this.skill_ = { ...this.skill_, prompt: this.originalPrompt_ };
        this.canUndoRefine_ = false;
        this.canRedoRefine_ = true;
        this.updateComplete.then(() => {
            this.instructionsTextarea_.focus();
        });
    }
    onRedoClick_() {
        this.redoCount_++;
        this.skill_ = { ...this.skill_, prompt: this.refinedPrompt_ };
        this.canUndoRefine_ = true;
        this.canRedoRefine_ = false;
        this.updateComplete.then(() => {
            this.instructionsTextarea_.focus();
        });
    }
    onRefineClick_() {
        this.hasUserRefined_ = true;
        if (this.isRefineLoading_) {
            return;
        }
        this.undoCount_ = 0;
        this.redoCount_ = 0;
        if (!this.originalPrompt_) {
            this.originalPrompt_ = this.skill_.prompt;
        }
        const skillToRefine = {
            ...this.skill_,
            prompt: this.originalPrompt_,
        };
        this.isRefineLoading_ = true;
        // Race the request against the timeout
        return this.requestRefinedSkillWithTimeout_(skillToRefine)
            .then(({ refinedSkill }) => {
            // If the server returned null, do not overwrite the current state.
            if (refinedSkill && this.promptError_ !== PromptError.REFINE) {
                // Only update if we have a valid result.
                this.skill_ = {
                    ...this.skill_,
                    // If the refined prompt is missing or empty, keep the original
                    // prompt
                    prompt: refinedSkill.prompt || this.skill_.prompt,
                };
                this.refinedPrompt_ = refinedSkill.prompt;
                this.canUndoRefine_ = true;
                this.canRedoRefine_ = false;
            }
        })
            .catch(() => {
            this.promptError_ = PromptError.REFINE;
        })
            .finally(() => {
            this.isRefineLoading_ = false;
            this.updateComplete.then(() => {
                this.attachTextareaResizeObserver_();
                this.checkTextareaOverflow_();
                this.instructionsTextarea_.focus();
            });
        });
    }
    /** Submits skill and closes the dialog. */
    onSubmitSkillClick_() {
        this.hasSaveError_ = false;
        const isFirstParty = this.skill_.source === SkillSource.kFirstParty;
        const skill = {
            ...this.skill_,
            icon: this.skill_.icon || DEFAULT_EMOJI,
            name: this.trimmedName_,
            prompt: this.trimmedPrompt_,
            // If remixing first party skill, set parent and clear ID.
            ...(isFirstParty && {
                id: '',
                sourceSkillId: this.skill_.id,
                source: SkillSource.kDerivedFromFirstParty,
            }),
        };
        let refinementOutcome = SkillsPromptRefinementOutcome.kNotRefined;
        if (this.hasUserRefined_) {
            if (this.undoCount_ === this.redoCount_) {
                refinementOutcome = SkillsPromptRefinementOutcome.kUsedRefinedPrompt;
            }
            else if (this.undoCount_ > this.redoCount_) {
                refinementOutcome = SkillsPromptRefinementOutcome.kRevertedAndNotUsed;
            }
        }
        SkillsDialogBrowserProxy.getInstance()
            .handler.submitSkill(skill, refinementOutcome)
            .then(({ success }) => {
            this.hasSaveError_ = !success;
        });
    }
    onCancelClick_(e) {
        this.cancel_(e);
    }
    onClose_(e) {
        this.cancel_(e);
    }
    /** Deletes skill and closes the dialog. */
    onDeleteSkillClick_() {
        SkillsDialogBrowserProxy.getInstance().handler.deleteSkill(this.skill_.id);
    }
    /** Click listener for the cancel button and closing dialog. */
    cancel_(e) {
        e.preventDefault();
        SkillsDialogBrowserProxy.getInstance().handler.closeDialog();
    }
    onNameFocus_() {
        this.isNameInputFocused_ = true;
        if (this.generatedName_ || this.generatedIcon_) {
            this.hasSeenGeneratedSuggestion_ = true;
        }
        else if (this.skill_.prompt.length >= AUTOCOMPLETE_MIN_CHARS &&
            !this.skill_.name && !this.skill_.icon &&
            !this.hasSeenGeneratedSuggestion_) {
            this.generateAutocompleteNameAndIcon_();
        }
    }
    onNameBlur_() {
        this.isNameInputFocused_ = false;
    }
    onNameKeydown_(e) {
        if (e.key === 'Tab' && (this.generatedName_ || this.generatedIcon_)) {
            this.skill_ = {
                ...this.skill_,
                name: this.skill_.name || this.generatedName_,
                icon: this.skill_.icon || this.generatedIcon_,
            };
            this.generatedName_ = '';
            this.generatedIcon_ = '';
            e.preventDefault();
        }
    }
    generateAutocompleteNameAndIcon_() {
        this.requestGenerateNameAndEmojiWithTimeout_(this.skill_)
            .then(({ refinedSkill }) => {
            // Check again that no name was entered during the request
            if (refinedSkill && !this.skill_.name && !this.skill_.icon) {
                this.generatedName_ = refinedSkill.name;
                this.generatedIcon_ = refinedSkill.icon;
                if (this.isNameInputFocused_) {
                    this.hasSeenGeneratedSuggestion_ = true;
                }
            }
        })
            .catch(() => {
            // Silently fail, do not show error on UI
        });
    }
    autoPopulateNameAndIcon_() {
        if (!this.skill_.prompt || this.skill_.name) {
            return;
        }
        this.isAutoGenerationLoading_ = true;
        return this.requestGenerateNameAndEmojiWithTimeout_(this.skill_)
            .then(({ refinedSkill }) => {
            if (refinedSkill) {
                const newName = (!this.skill_.name || this.skill_.name.trim() === '') ?
                    refinedSkill.name :
                    this.skill_.name;
                const newIcon = ((this.skill_.icon === DEFAULT_EMOJI || !this.skill_.icon) &&
                    refinedSkill.icon) ?
                    refinedSkill.icon :
                    this.skill_.icon;
                if (newName !== this.skill_.name || newIcon !== this.skill_.icon) {
                    this.skill_ = {
                        ...this.skill_,
                        name: newName || '',
                        icon: newIcon || DEFAULT_EMOJI,
                    };
                }
            }
        })
            .catch(() => {
            // Silently fail for auto-population; do not show error UI to
            // user as this is a background enhancement.
        })
            .finally(() => {
            this.isAutoGenerationLoading_ = false;
        });
    }
    requestRefinedSkillWithTimeout_(skillToRefine) {
        const refineRequest = SkillsDialogBrowserProxy.getInstance().handler.refineSkill(skillToRefine);
        const timeout = new Promise((_, reject) => {
            WindowProxyImpl.getInstance().setTimeout(() => reject(new Error('Refine skill timed out')), REFINE_SKILL_TIMEOUT_MS);
        });
        return Promise.race([refineRequest, timeout]);
    }
    requestGenerateNameAndEmojiWithTimeout_(skillToRefine) {
        if (!loadTimeData.getBoolean('isAutocompleteEnabled')) {
            return Promise.resolve({ refinedSkill: null });
        }
        const generateRequest = SkillsDialogBrowserProxy.getInstance().handler.generateNameAndEmoji(skillToRefine);
        const timeout = new Promise((_, reject) => {
            WindowProxyImpl.getInstance().setTimeout(() => reject(new Error('Generate name and emoji timed out')), REFINE_SKILL_TIMEOUT_MS);
        });
        return Promise.race([generateRequest, timeout]);
    }
    shouldShowGeneratedPlaceholder_() {
        return this.isNameInputFocused_ && !!this.generatedName_ &&
            !this.skill_.name;
    }
    getNamePlaceholder_() {
        return this.isNameInputFocused_ && this.generatedName_ ?
            '' :
            loadTimeData.getString('namePlaceholder');
    }
    shouldHideEmojiZeroState_() {
        return !!this.skill_.icon ||
            !!(this.isNameInputFocused_ && this.generatedIcon_);
    }
    getEmojiTriggerClass_() {
        return this.isNameInputFocused_ && this.generatedIcon_ &&
            !this.skill_.icon ?
            'placeholder-icon' :
            '';
    }
    getEmojiTriggerValue_() {
        return this.skill_.icon ||
            (this.isNameInputFocused_ ? this.generatedIcon_ : '');
    }
}
customElements.define(SkillsDialogAppElement.is, SkillsDialogAppElement);
