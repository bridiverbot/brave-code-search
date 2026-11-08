// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageContextChangeType } from './page_context_manager.js';
export var JournalEntryType;
(function (JournalEntryType) {
    JournalEntryType["TURN"] = "turn";
    JournalEntryType["NEW_PAGE"] = "new_page";
})(JournalEntryType || (JournalEntryType = {}));
export var ChunkAccumulationMode;
(function (ChunkAccumulationMode) {
    /* Replaces existing text (e.g. for accumulating snapshot recognizers). */
    ChunkAccumulationMode["REPLACE"] = "replace";
    /* Appends to existing text (e.g. for delta chunk streams). */
    ChunkAccumulationMode["APPEND"] = "append";
})(ChunkAccumulationMode || (ChunkAccumulationMode = {}));
/**
 * Journal is a persistent session journal for the conversation. It registers
 * entries for updates to the page context as well as transcription in session
 * turns.
 */
export class Journal {
    entries = [];
    constructor(pageContextManager) {
        // Note: The initial page context entry is handled by the listener as the
        // Conversation constructor will call createNewPageContext after this
        // constructor finishes.
        pageContextManager.registerListener((event) => this.onPageContextChange(event));
    }
    getEntries() {
        return this.entries;
    }
    getTurnEntries() {
        return this.entries.filter(e => e.type === JournalEntryType.TURN)
            .map(e => e.data);
    }
    getPageVisitEntries() {
        return this.entries.filter(e => e.type === JournalEntryType.NEW_PAGE)
            .map(e => e.data);
    }
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
    updateCurrentTurn(input, output, options = {
        inputMode: ChunkAccumulationMode.REPLACE,
        outputMode: ChunkAccumulationMode.APPEND,
    }) {
        const turn = this.getOrCreateLastTurn();
        if (input !== undefined) {
            if (options.inputMode === ChunkAccumulationMode.APPEND) {
                turn.inputTranscript += input;
            }
            else {
                turn.inputTranscript = input;
            }
        }
        if (output !== undefined) {
            if (options.outputMode === ChunkAccumulationMode.REPLACE) {
                turn.outputTranscript = output;
            }
            else {
                turn.outputTranscript += output;
            }
        }
    }
    // Completes the most recent turn entry. If there is none or the latest turn
    // entry is already completed this will create and complete a new turn entry.
    completeTurn() {
        this.getOrCreateLastTurn().isComplete = true;
    }
    getOrCreateLastTurn() {
        let lastTurnEntry = this.entries.findLast(entry => entry.type === JournalEntryType.TURN);
        if (!lastTurnEntry || lastTurnEntry.data.isComplete) {
            lastTurnEntry = {
                timestamp: Date.now(),
                type: JournalEntryType.TURN,
                data: {
                    inputTranscript: '',
                    outputTranscript: '',
                    isComplete: false,
                },
            };
            this.entries.push(lastTurnEntry);
        }
        return lastTurnEntry.data;
    }
    getLastPageEntry() {
        const lastPageEntry = this.entries.findLast(entry => entry.type === JournalEntryType.NEW_PAGE);
        return lastPageEntry?.data;
    }
    onPageContextChange(event) {
        if (event.type === PageContextChangeType.NEW_PAGE) {
            this.entries.push({
                timestamp: Date.now(),
                type: JournalEntryType.NEW_PAGE,
                data: {
                    url: event.newContext.url,
                    title: event.newContext.title,
                    content: event.newContext.content,
                },
            });
        }
        else if (event.type === PageContextChangeType.UPDATE_CURRENT) {
            const pageData = this.getLastPageEntry();
            if (pageData) {
                pageData.title = event.newContext.title;
                pageData.content = event.newContext.content;
            }
        }
    }
}
