import type { CenterRotatedBox } from './geometry.mojom-webui.js';
import type { Word } from './text.mojom-webui.js';
interface Vertex {
    x: number;
    y: number;
}
interface BoundingBox {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export declare enum ClippingEdge {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3
}
export interface WordsInRegionResult {
    startIndex: number;
    endIndex: number;
    iou: number;
}
export declare function findWordsInRegion(words: Word[], selectionRegion: CenterRotatedBox, imageBounds: DOMRect): WordsInRegionResult;
export declare function toPolygon(box: CenterRotatedBox, imageBounds: DOMRect): Vertex[];
export declare function areaOfPolygon(polygon: Vertex[]): number;
export declare function rotate(anchor: Vertex, angleRadian: number, target: Vertex, imageBounds: DOMRect): Vertex;
export declare function clip(polygon: Vertex[], selectionBounds: BoundingBox): Vertex[];
export declare function isInsideEdge(vertex: Vertex, selectionBounds: BoundingBox, edge: ClippingEdge): boolean;
export declare function intersectionWithEdge(v0: Vertex, v1: Vertex, selectionBounds: BoundingBox, edge: ClippingEdge): Vertex;
export {};
