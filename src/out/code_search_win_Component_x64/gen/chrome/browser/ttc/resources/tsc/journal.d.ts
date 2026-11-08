import type { PageContextManager } from './page_context_manager.js';
export declare enum JournalEntryType {
    TURN = "turn",
    NEW_PAGE = "new_page"
}
export interface Turn {
    inputTranscript: string;
    outputTranscript: string;
    isComplete: boolean;
}
export interface PersistedPageContext {
    url: string;
    title: string | null;
    content: unknown | null;
}
export declare enum ChunkAccumulationMode {
    REPLACE = "replace",
    APPEND = "append"
}
export interface UpdateTurnOptions {
    inputMode?: ChunkAccumulationMode;
    outputMode?: ChunkAccumulationMode;
}
export interface JournalEntry {
    timestamp: number;
    type: JournalEntryType;
    data: Turn | PersistedPageContext;
}
/**
 * Journal is a persistent session journal for the conversation. It registers
 * entries for updates to the page context as well as transcription in session
 * turns.
 */
export declare class Journal {
    private readonly entries;
    constructor(pageContextManager: PageContextManager);
    getEntries(): JournalEntry[];
    getTurnEntries(): Turn[];
    getPageVisitEntries(): PersistedPageContext[];
    /**
     * Updates the supplied input and output transcriptions on the latest Turn.
     * If the latest turn is completed or no turn yet exists, a new Turn entry is
     * first created.
     *
     * Note on chunking behavior (`options`):
     * Different speech/streaming APIs yield text differently:
     * - Local/client speech recognizers (like Web Speech or Gemini live input)
     *   often send accumulating full snapshots ("hello" -> "hello world"),
     * requiring `ChunkAccumulationMode.REPLACE` (default for `input`).
     * - Model response streams (like Gemini Live output) typically yield delta
     *   chunks ("hello" -> " world" -> "!!"), requiring
     *   `ChunkAccumulationMode.APPEND` (default for `output`).
     */
    updateCurrentTurn(input?: string, output?: string, options?: UpdateTurnOptions): void;
    completeTurn(): void;
    private getOrCreateLastTurn;
    private getLastPageEntry;
    private onPageContextChange;
}
