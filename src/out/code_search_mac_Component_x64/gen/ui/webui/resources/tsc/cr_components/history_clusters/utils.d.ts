import type { MatchPosition } from './history_cluster_types.mojom-webui.js';
/**
 * Populates `container` with the highlighted `text` based on the mojom provided
 * `match_positions`. This function takes care of converting from the mojom
 * format to the format expected by search_highlight_utils.
 */
export declare function insertHighlightedTextWithMatchesIntoElement(container: HTMLElement, text: string, matches: MatchPosition[]): void;
