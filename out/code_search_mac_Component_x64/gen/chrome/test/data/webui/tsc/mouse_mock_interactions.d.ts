interface Point {
    x: number;
    y: number;
}
/**
 * Returns the (x,y) coordinates representing the middle of a node.
 */
export declare function middleOfNode(node: HTMLElement): Point;
/**
 * Returns the (x,y) coordinates representing the top left corner of a node.
 */
export declare function topLeftOfNode(node: HTMLElement): Point;
/**
 * Simulates a mouse move action by firing a `move` mouse event on a
 * specific node, between a set of coordinates.
 *
 * @param from The (x,y) coordinates the dragging should start from.
 * @param to The (x,y) coordinates the dragging should end at.
 * @param steps The numbers of steps in the move motion.
 */
export declare function move(node: HTMLElement, from: Point, to: Point, steps?: number): void;
/**
 * Simulates a mouse dragging action originating in the middle of a specific
 * node.
 *
 * @param dx The horizontal displacement.
 * @param dy The vertical displacement
 * @param steps The numbers of steps in the dragging motion.
 */
export declare function track(target: HTMLElement, dx?: number, dy?: number, steps?: number): void;
/**
 * Fires a `mousedown` MouseEvent on a specific node, at a given set of
 * coordinates. This event bubbles and is cancellable. If the (x,y) coordinates
 * are not specified, the middle of the node will be used instead.
 */
export declare function down(node: HTMLElement, xy?: Point): void;
/**
 * Fires a `mouseup` MouseEvent on a specific node, at a given set of
 * coordinates. This event bubbles and is cancellable. If the (x,y) coordinates
 * are not specified, the middle of the node will be used instead.
 */
export declare function up(node: HTMLElement, xy?: Point): void;
export {};
