import type { ReadingModeSelection, SelectionWithIds } from './read_anything_types.js';
export declare class TranslatedSelectionMapper {
    private nodeStore_;
    getReadingModeSelection(axSelection: SelectionWithIds, contentContainer: Node): ReadingModeSelection | null;
    private getBlockElement_;
}
