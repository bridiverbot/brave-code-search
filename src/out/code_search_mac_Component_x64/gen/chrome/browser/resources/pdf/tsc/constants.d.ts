type Typeface = chrome.pdfViewerPrivate.Typeface;
export declare enum AnnotationMode {
    OFF = "off",
    DRAW = "draw",
    TEXT = "text",
    SIGNATURE = "signature"
}
export declare enum AnnotationBrushType {
    ERASER = "eraser",
    HIGHLIGHTER = "highlighter",
    PEN = "pen"
}
export declare enum TextAnnotationSource {
    USER = "user",
    UNDO = "undo",
    REDO = "redo"
}
export interface Color {
    r: number;
    g: number;
    b: number;
}
export interface AnnotationBrush {
    type: AnnotationBrushType;
    color?: Color;
    size?: number;
}
export interface DeleteTextAnnotationMessageData {
    id: number;
    pageIndex: number;
    source: TextAnnotationSource;
}
export interface TextAnnotation {
    id: number;
    mojoTextInfo: ArrayBuffer;
    pageIndex: number;
    pdfZoom: number;
    text: string;
    textAttributes: TextAttributes;
    textBoxRect: TextBoxRect;
    textOrientation: number;
    viewportOrientation: number;
}
export interface TextAnnotationMessageData extends TextAnnotation {
    isEdited: boolean;
    newTypefaces: Typeface[];
    source: TextAnnotationSource;
}
export declare enum TextAlignment {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
export declare enum TextStyle {
    BOLD = "bold",
    ITALIC = "italic",
    UNDERLINE = "underline",
    STRIKETHROUGH = "strikethrough"
}
export declare enum TextTypeface {
    SANS_SERIF = "sans-serif",
    SERIF = "serif",
    MONOSPACE = "monospace"
}
export type TextStyles = {
    [key in TextStyle]: boolean;
};
export interface TextAttributes {
    typeface: TextTypeface;
    size: number;
    color: Color;
    alignment: TextAlignment;
    styles: TextStyles;
}
export interface TextBoxRect {
    height: number;
    locationX: number;
    locationY: number;
    width: number;
}
export interface Attachment {
    name: string;
    size: number;
    readable: boolean;
}
export declare enum DisplayAnnotationsAction {
    DISPLAY_ANNOTATIONS = "display-annotations",
    HIDE_ANNOTATIONS = "hide-annotations"
}
export interface DocumentMetadata {
    author: string;
    canSerializeDocument: boolean;
    creationDate: string;
    creator: string;
    fileSize: string;
    keywords: string;
    linearized: boolean;
    modDate: string;
    pageSize: string;
    producer: string;
    subject: string;
    title: string;
    version: string;
}
/** Enumeration of page fitting types and bounding box fitting types. */
export declare enum FittingType {
    NONE = "none",
    FIT_TO_PAGE = "fit-to-page",
    FIT_TO_WIDTH = "fit-to-width",
    FIT_TO_HEIGHT = "fit-to-height",
    FIT_TO_BOUNDING_BOX = "fit-to-bounding-box",
    FIT_TO_BOUNDING_BOX_WIDTH = "fit-to-bounding-box-width",
    FIT_TO_BOUNDING_BOX_HEIGHT = "fit-to-bounding-box-height"
}
/**
 * The different types of form fields that can be focused.
 */
export declare enum FormFieldFocusType {
    NONE = "none",
    NON_TEXT = "non-text",
    TEXT = "text"
}
export interface NamedDestinationMessageData {
    messageId: string;
    pageIndex: number;
    namedDestinationView?: string;
}
export interface Point {
    x: number;
    y: number;
}
export interface ScrollData extends Point {
    forceSmoothScroll: boolean;
}
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export type ExtendedKeyEvent = KeyboardEvent & {
    fromScriptingAPI?: boolean;
    fromPlugin?: boolean;
};
export declare enum SaveToDriveState {
    UNINITIALIZED = "uninitialized",
    UPLOADING = "uploading",
    SUCCESS = "success",
    CONNECTION_ERROR = "connection-error",
    STORAGE_FULL_ERROR = "storage-full-error",
    SESSION_TIMEOUT_ERROR = "session-timeout-error",
    UNKNOWN_ERROR = "unknown-error"
}
export declare enum SaveToDriveBubbleRequestType {
    CANCEL_UPLOAD = "cancel-upload",
    MANAGE_STORAGE = "manage-storage",
    OPEN_IN_DRIVE = "open-in-drive",
    RETRY = "retry",
    DIALOG_CLOSED = "dialog-closed"
}
export {};
