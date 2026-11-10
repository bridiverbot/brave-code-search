import { VisualBrowserProxyImpl } from '../app/visual_browser_proxy.js';
import { SpeechController } from '../read_aloud/speech_controller.js';
import { isForwardArrow, isLineFocusShortcut, isVerticalArrow } from '../shared/keyboard_util.js';
import { ReadAnythingLogger } from '../shared/read_anything_logger.js';
import { LineFocusModel } from './line_focus_model.js';
import { LineFocusCursorMoveMode, LineFocusNoneMoveMode, LineFocusStaticMoveMode } from './line_focus_move_mode.js';
import { LineFocusLineStyleMode, LineFocusNoneStyleMode, LineFocusWindowStyleMode } from './line_focus_style_mode.js';
import { getLineFocusValues, LineFocusMovement, LineFocusStyle, LineFocusType } from './read_anything_types.js';
// Coordinates the business logic for managing the line focus feature by
// managing the line focus model and delegating movement and style behaviors
// to specialized strategies.
export class LineFocusController {
    model_;
    listeners_ = [];
    speechController_ = SpeechController.getInstance();
    logger_ = ReadAnythingLogger.getInstance();
    visualBrowserProxy_ = VisualBrowserProxyImpl.getInstance();
    constructor(model_ = new LineFocusModel()) {
        this.model_ = model_;
        const styleMode = new LineFocusNoneStyleMode(LineFocusStyle.defaultValue(), this.model_);
        this.model_.setCurrentStyleMode(styleMode);
        this.model_.setCurrentMoveMode(new LineFocusNoneMoveMode(this.model_, styleMode, this, LineFocusMovement.STATIC));
    }
    getCurrentLineFocusType() {
        if (!this.isEnabled()) {
            return LineFocusType.NONE;
        }
        return this.model_.getCurrentStyleMode().getStyle().type;
    }
    getCurrentLineFocusStyle() {
        return this.model_.getCurrentStyleMode().getStyle();
    }
    getCurrentLineFocusMovement() {
        return this.model_.getCurrentMoveMode().getMovement();
    }
    addListener(listener) {
        this.listeners_.push(listener);
    }
    isEnabled() {
        return this.visualBrowserProxy_.isLineFocusEnabled() &&
            this.model_.isSessionActive();
    }
    onKeyDown(e, container, height) {
        if (!this.visualBrowserProxy_.isLineFocusEnabled()) {
            return false;
        }
        if (isLineFocusShortcut(e)) {
            this.toggle(!this.isEnabled(), container, height);
            this.logger_.logLineFocusToggled(this.isEnabled());
            return true;
        }
        if (isVerticalArrow(e.key) && !this.speechController_.isSpeechActive()) {
            return this.model_.getCurrentMoveMode().snapToNextLine(isForwardArrow(e.key));
        }
        return false;
    }
    onScrollEnd(newScrollTop) {
        if (this.visualBrowserProxy_.isLineFocusEnabled()) {
            this.model_.getCurrentMoveMode().onScrollEnd(newScrollTop);
        }
    }
    onMouseMove(y) {
        if (this.visualBrowserProxy_.isLineFocusEnabled() &&
            !this.speechController_.isSpeechActive()) {
            this.model_.getCurrentMoveMode().onMouseMove(y);
        }
    }
    onMouseMoveInToolbar(y) {
        if (this.visualBrowserProxy_.isLineFocusEnabled() &&
            !this.speechController_.isSpeechActive()) {
            this.model_.getCurrentMoveMode().onMouseMoveInToolbar(y);
        }
    }
    onAllMenusClose() {
        // Notify listeners when all menus close so the visual Line Focus highlight
        // adapts to layout changes made in settings menus (e.g. font size) while
        // not resetting paused speech when changing voices or menu settings.
        if (this.isEnabled()) {
            this.notifyMoveWithVisualPositionChange();
        }
    }
    onWordBoundary(segments) {
        if (this.visualBrowserProxy_.isLineFocusEnabled()) {
            this.model_.getCurrentMoveMode().onWordBoundary(segments);
        }
    }
    onTextLocationsChange(container, height) {
        if (this.visualBrowserProxy_.isLineFocusEnabled()) {
            this.model_.getCurrentMoveMode().onTextLocationsChange(container, height);
        }
    }
    restoreFromPrefs(lastEnabledValue, isOn, container, height) {
        const lineFocusValues = getLineFocusValues();
        const lastEnabled = lineFocusValues[lastEnabledValue];
        if (lastEnabled) {
            this.setStyleAndMovement_(lastEnabled.style, lastEnabled.movement, container, height, isOn);
            this.listeners_.forEach(l => l.onLineFocusModesChanged());
        }
    }
    onStyleChange(style, container, height) {
        this.setStyleAndMovement_(style, this.getCurrentLineFocusMovement(), container, height, this.model_.isSessionActive());
    }
    onMovementChange(movement, container, height) {
        this.setStyleAndMovement_(this.getCurrentLineFocusStyle(), movement, container, height, this.model_.isSessionActive());
    }
    setStyleAndMovement_(style, movement, container, height, isOn) {
        this.updateStrategies_(style, movement, isOn);
        this.model_.getCurrentMoveMode().onActivated(container, height);
        // Propagating line focus should be last so it captures the newly activated
        // move mode above.
        this.propagateLineFocus_(style, movement, isOn);
    }
    updateStrategies_(style, movement, isOn) {
        if (!isOn) {
            const styleMode = new LineFocusNoneStyleMode(style, this.model_);
            this.model_.setCurrentStyleMode(styleMode);
            this.model_.setCurrentMoveMode(new LineFocusNoneMoveMode(this.model_, styleMode, this, movement));
            return;
        }
        const styleMode = style.type === LineFocusType.LINE ?
            new LineFocusLineStyleMode(style, this.model_) :
            new LineFocusWindowStyleMode(style, this.model_);
        this.model_.setCurrentStyleMode(styleMode);
        const moveMode = movement === LineFocusMovement.STATIC ?
            new LineFocusStaticMoveMode(this.model_, styleMode, this) :
            new LineFocusCursorMoveMode(this.model_, styleMode, this);
        this.model_.setCurrentMoveMode(moveMode);
    }
    propagateLineFocus_(style, movement, isOn) {
        if (!this.visualBrowserProxy_.isLineFocusEnabled()) {
            return;
        }
        const lineFocusValue = isOn ? this.lineFocusToEnumValue_(style, movement) :
            this.visualBrowserProxy_.getLineFocusOff();
        const lastNonDisabledLineFocus = this.lineFocusToEnumValue_(style, movement);
        if (lineFocusValue !== null && lastNonDisabledLineFocus !== null) {
            this.visualBrowserProxy_.onLineFocusChanged(lineFocusValue, lastNonDisabledLineFocus);
        }
    }
    lineFocusToEnumValue_(style, movement) {
        const lineFocusValues = getLineFocusValues();
        const key = Object.keys(lineFocusValues).find(key => {
            const lineFocus = lineFocusValues[Number(key)];
            return lineFocus?.style === style && lineFocus?.movement === movement;
        });
        return key ? Number(key) : null;
    }
    toggle(isOn, container, height) {
        if (!this.visualBrowserProxy_.isLineFocusEnabled()) {
            return;
        }
        if (this.isEnabled() === isOn) {
            return;
        }
        const wasActive = this.model_.isSessionActive();
        // Setting the style and movement must come *before* ending the session
        // because setStyleAndMovement_ propagates the new value to the C++ which
        // also handles logging the session. It checks the current line focus value
        // there first, so if `onSessionEnd()` came first, it would not actually log
        // the session.
        this.setStyleAndMovement_(this.getCurrentLineFocusStyle(), this.getCurrentLineFocusMovement(), container, height, isOn);
        if (!isOn && wasActive) {
            this.onSessionEnd();
        }
        this.listeners_.forEach(l => l.onLineFocusModesChanged());
    }
    // MoveModeDelegate methods.
    notifyMoveWithContentPositionChange() {
        this.listeners_.forEach(l => l.onLineFocusContentPositionChange(this.model_.getTop(), this.model_.getWindowHeight(), this.model_.getFocalPoint()));
    }
    notifyMoveWithVisualPositionChange() {
        this.listeners_.forEach(l => l.onLineFocusVisualPositionChange(this.model_.getTop(), this.model_.getWindowHeight()));
    }
    notifyScroll(scrollDiff, instant) {
        this.listeners_.forEach(l => l.onNeedScrollForLineFocus(scrollDiff, instant));
    }
    notifyScrollToTop() {
        this.listeners_.forEach(l => l.onNeedScrollToTop());
    }
    notifyScrollBuffer(needsBuffer) {
        this.listeners_.forEach(l => l.onScrollBufferForLineFocusChange(needsBuffer));
    }
    onSessionEnd() {
        this.logger_.logLineFocusSession();
    }
    static getInstance() {
        return instance || (instance = new LineFocusController());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
