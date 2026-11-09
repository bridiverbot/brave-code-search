export interface CaptionBlockDelegate {
    onCaptionBlockUpdated: (blockText: string) => void;
}
export declare class CaptionBlockManager {
    private captionBlocks;
    private currentBlockIndex;
    private blockDisplayTimer;
    private lastBlockSwitchTime;
    private delegate;
    constructor(delegate: CaptionBlockDelegate);
    getLastBlockSwitchTime(): number;
    formatCaptionsText(text: string, usePersona: boolean): string;
    updateBlocks(text: string, usePersona: boolean, isPlayingAudio: boolean, audioPlaybackStartTime: number): void;
    private advanceToNextBlock;
    reset(): void;
}
export declare function getCaptionBlocks(text: string, maxLineLength?: number): string[];
export declare function formatCaptions(text: string, maxLineLength?: number, maxLines?: number): string;
