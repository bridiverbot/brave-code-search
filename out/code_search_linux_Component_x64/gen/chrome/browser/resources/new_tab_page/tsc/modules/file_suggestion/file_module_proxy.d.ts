import type { DriveSuggestionHandlerRemote } from '../../drive_suggestion.mojom-webui.js';
export declare class FileProxy {
    static getHandler(): DriveSuggestionHandlerRemote;
    static setHandler(newHandler: DriveSuggestionHandlerRemote): void;
    private constructor();
}
