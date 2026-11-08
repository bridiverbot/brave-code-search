// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var AnnotationMode;
(function (AnnotationMode) {
    AnnotationMode["OFF"] = "off";
    AnnotationMode["DRAW"] = "draw";
    AnnotationMode["TEXT"] = "text";
    AnnotationMode["SIGNATURE"] = "signature";
})(AnnotationMode || (AnnotationMode = {}));
// The different types of annotation brushes.
export var AnnotationBrushType;
(function (AnnotationBrushType) {
    AnnotationBrushType["ERASER"] = "eraser";
    AnnotationBrushType["HIGHLIGHTER"] = "highlighter";
    AnnotationBrushType["PEN"] = "pen";
})(AnnotationBrushType || (AnnotationBrushType = {}));
export var TextAnnotationSource;
(function (TextAnnotationSource) {
    TextAnnotationSource["USER"] = "user";
    TextAnnotationSource["UNDO"] = "undo";
    TextAnnotationSource["REDO"] = "redo";
})(TextAnnotationSource || (TextAnnotationSource = {}));
// LINT.IfChange(TextAlignment)
export var TextAlignment;
(function (TextAlignment) {
    TextAlignment["LEFT"] = "left";
    TextAlignment["CENTER"] = "center";
    TextAlignment["RIGHT"] = "right";
})(TextAlignment || (TextAlignment = {}));
// LINT.ThenChange(//pdf/pdf_ink_text.h:TextAlignment)
export var TextStyle;
(function (TextStyle) {
    TextStyle["BOLD"] = "bold";
    TextStyle["ITALIC"] = "italic";
    TextStyle["UNDERLINE"] = "underline";
    TextStyle["STRIKETHROUGH"] = "strikethrough";
})(TextStyle || (TextStyle = {}));
// LINT.IfChange(TextTypeface)
export var TextTypeface;
(function (TextTypeface) {
    TextTypeface["SANS_SERIF"] = "sans-serif";
    TextTypeface["SERIF"] = "serif";
    TextTypeface["MONOSPACE"] = "monospace";
})(TextTypeface || (TextTypeface = {}));
export var DisplayAnnotationsAction;
(function (DisplayAnnotationsAction) {
    DisplayAnnotationsAction["DISPLAY_ANNOTATIONS"] = "display-annotations";
    DisplayAnnotationsAction["HIDE_ANNOTATIONS"] = "hide-annotations";
})(DisplayAnnotationsAction || (DisplayAnnotationsAction = {}));
/** Enumeration of page fitting types and bounding box fitting types. */
export var FittingType;
(function (FittingType) {
    FittingType["NONE"] = "none";
    FittingType["FIT_TO_PAGE"] = "fit-to-page";
    FittingType["FIT_TO_WIDTH"] = "fit-to-width";
    FittingType["FIT_TO_HEIGHT"] = "fit-to-height";
    FittingType["FIT_TO_BOUNDING_BOX"] = "fit-to-bounding-box";
    FittingType["FIT_TO_BOUNDING_BOX_WIDTH"] = "fit-to-bounding-box-width";
    FittingType["FIT_TO_BOUNDING_BOX_HEIGHT"] = "fit-to-bounding-box-height";
})(FittingType || (FittingType = {}));
/**
 * The different types of form fields that can be focused.
 */
export var FormFieldFocusType;
(function (FormFieldFocusType) {
    // LINT.IfChange(FocusFieldTypes)
    FormFieldFocusType["NONE"] = "none";
    FormFieldFocusType["NON_TEXT"] = "non-text";
    FormFieldFocusType["TEXT"] = "text";
    // LINT.ThenChange(//pdf/pdf_view_web_plugin.cc:FocusFieldTypes)
})(FormFieldFocusType || (FormFieldFocusType = {}));
// 
export var SaveToDriveState;
(function (SaveToDriveState) {
    SaveToDriveState["UNINITIALIZED"] = "uninitialized";
    SaveToDriveState["UPLOADING"] = "uploading";
    SaveToDriveState["SUCCESS"] = "success";
    SaveToDriveState["CONNECTION_ERROR"] = "connection-error";
    SaveToDriveState["STORAGE_FULL_ERROR"] = "storage-full-error";
    SaveToDriveState["SESSION_TIMEOUT_ERROR"] = "session-timeout-error";
    SaveToDriveState["UNKNOWN_ERROR"] = "unknown-error";
})(SaveToDriveState || (SaveToDriveState = {}));
export var SaveToDriveBubbleRequestType;
(function (SaveToDriveBubbleRequestType) {
    SaveToDriveBubbleRequestType["CANCEL_UPLOAD"] = "cancel-upload";
    SaveToDriveBubbleRequestType["MANAGE_STORAGE"] = "manage-storage";
    SaveToDriveBubbleRequestType["OPEN_IN_DRIVE"] = "open-in-drive";
    SaveToDriveBubbleRequestType["RETRY"] = "retry";
    SaveToDriveBubbleRequestType["DIALOG_CLOSED"] = "dialog-closed";
})(SaveToDriveBubbleRequestType || (SaveToDriveBubbleRequestType = {}));
// 
