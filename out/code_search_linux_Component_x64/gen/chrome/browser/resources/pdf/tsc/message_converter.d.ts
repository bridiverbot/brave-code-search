import type { ExtendedKeyEvent, FormFieldFocusType } from './constants.js';
import type { DocumentDimensionsMessageData } from './pdf_viewer_utils.js';
export declare function convertDocumentDimensionsMessage(message: unknown): DocumentDimensionsMessageData;
export declare function convertFormFocusChangeMessage(message: unknown): {
    focused: FormFieldFocusType;
};
export declare function convertLoadProgressMessage(message: unknown): {
    progress: number;
};
export declare function convertSendKeyEventMessage(message: unknown): ExtendedKeyEvent;
