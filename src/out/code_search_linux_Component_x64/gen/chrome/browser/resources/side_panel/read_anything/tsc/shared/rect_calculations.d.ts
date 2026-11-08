export declare const MOSTLY_VISIBLE_PERCENT = 0.8;
export declare function isRectMostlyVisible(rect: DOMRect): boolean;
export declare function isRectVisible(rect: DOMRect): boolean;
export declare function calculateTextBounds(container: HTMLElement, height: number): {
    minY: number;
    maxY: number;
    bounds: DOMRect[];
};
export declare function getMostCommonPitch(bounds: DOMRect[]): number;
export declare function getRectIndexAtY(y: number, rects: DOMRect[], isForward: boolean): number;
export declare function getLineForRect(wordRect: DOMRect, lines: DOMRect[]): DOMRect | null;
