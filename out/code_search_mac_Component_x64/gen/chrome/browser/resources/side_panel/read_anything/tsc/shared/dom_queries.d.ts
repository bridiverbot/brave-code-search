import type { Segment } from '../read_aloud/read_aloud_types.js';
export declare function getTextNodeOffsets(rootNode: Node, start: number): {
    node: Node;
    offset: number;
};
export declare function getRectsForSegments(segments: Segment[]): DOMRect[];
export declare function isBackwardSelection(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): boolean;
export declare function getNearestTextBoundaryPoint(node: Node, offset: number, container: Node, isStart: boolean, isValidTarget?: (node: Node) => boolean): {
    node: Node;
    offset: number;
};
export declare function getFirstTextNodeAtOrAfter(node: Node, offset: number, container: Node): Text | null;
export declare function getLastTextNodeBefore(node: Node, offset: number, container: Node): Text | null;
export declare function getNextTextNode(node: Node, container: Node, isValidTarget?: (node: Node) => boolean): Text | null;
export declare function getPreviousTextNode(node: Node, container: Node, isValidTarget?: (node: Node) => boolean): Text | null;
