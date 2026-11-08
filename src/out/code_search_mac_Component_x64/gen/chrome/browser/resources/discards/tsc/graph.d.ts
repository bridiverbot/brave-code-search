import 'chrome://resources/d3/d3.min.js';
import type { FavIconInfo, FrameInfo, GraphChangeStreamInterface, PageInfo, ProcessInfo, WorkerInfo } from './discards.mojom-webui.js';
declare class ToolTip {
    floating: boolean;
    x: number;
    y: number;
    node: GraphNode;
    private graph_;
    private div_;
    private titleSpan_;
    private descriptionJson_;
    private collapsedSections_;
    constructor(div: Element, node: GraphNode, graph: Graph);
    nodeMoved(): void;
    /**
     * @return The [x, y] center of the ToolTip's div element.
     */
    getCenter(): [number, number];
    goAway(): void;
    private isSectionCollapsed_;
    private toggleSection_;
    private updateRowVisibility_;
    private flattenObjectRec_;
    private flattenDescription_;
    /**
     * Updates the description displayed.
     */
    onDescription(descriptionJson: string): void;
    private onDragStart_;
    private onDrag_;
}
declare class GraphNode implements d3.SimulationNodeDatum {
    id: bigint;
    color: string;
    iconUrl: string;
    tooltip: ToolTip | null;
    /**
     * Implementation of the d3.SimulationNodeDatum interface.
     * See https://github.com/d3/d3-force#simulation_nodes.
     */
    index?: number;
    x: number;
    y: number;
    vx?: number;
    vy?: number;
    fx: number | null;
    fy: number | null;
    constructor(id: bigint);
    get title(): string;
    get defaultDescriberName(): string;
    /**
     * Sets the initial x and y position of this node, also resets
     * vx and vy.
     * @param graphWidth Width of the graph view (svg).
     * @param graphHeight Height of the graph view (svg).
     */
    setInitialPosition(graphWidth: number, graphHeight: number): void;
    /**
     * @param graphHeight Height of the graph view (svg).
     */
    targetPositionY(graphHeight: number): number;
    /**
     * @return The strength of the force that pulls the node towards
     *     its target y position.
     */
    get targetYPositionStrength(): number;
    /**
     * @return A scaling factor applied to the strength of links to this
     *     node.
     */
    get linkStrengthScalingFactor(): number;
    /**
     * @param graphHeight Height of the graph view.
     */
    allowedRangeY(graphHeight: number): [number, number];
    /** @return The strength of the repulsion force with other nodes. */
    get manyBodyStrength(): number;
    /** @return an array of node ids. */
    get linkTargets(): bigint[];
    /**
     * Dashed links express ownership relationships. An object can own multiple
     * things, but be owned by exactly one (per relationship type). As such, the
     * relationship is expressed on the *owned* object. These links are drawn with
     * an arrow at the beginning of the link, pointing to the owned object.
     * @return an array of node ids.
     */
    get dashedLinkTargets(): bigint[];
    /**
     * Selects a color string from an id.
     * @param id The id the returned color is selected from.
     */
    selectColor(id: bigint): string;
}
export declare class Graph implements GraphChangeStreamInterface {
    private svg_;
    private div_;
    private wasResized_;
    private width_;
    private height_;
    private simulation_;
    /** A selection for the top-level <g> node that contains all tooltip links. */
    private toolTipLinkGroup_;
    /** A selection for the top-level <g> node that contains all separators. */
    private separatorGroup_;
    /** A selection for the top-level <g> node that contains all nodes. */
    private nodeGroup_;
    /** A selection for the top-level <g> node that contains all edges. */
    private linkGroup_;
    /** A selection for the top-level <g> node that contains all dashed edges. */
    private dashedLinkGroup_;
    private nodes_;
    private links_;
    private dashedLinks_;
    /** The interval timer used to poll for node descriptions. */
    private pollDescriptionsInterval_;
    /** The d3.drag instance applied to nodes. */
    private drag_;
    constructor(svg: SVGElement, div: Element);
    initialize(): void;
    frameCreated(frame: FrameInfo): void;
    pageCreated(page: PageInfo): void;
    processCreated(process: ProcessInfo): void;
    workerCreated(worker: WorkerInfo): void;
    frameChanged(frame: FrameInfo): void;
    pageChanged(page: PageInfo): void;
    processChanged(process: ProcessInfo): void;
    workerChanged(worker: WorkerInfo): void;
    favIconDataAvailable(iconInfo: FavIconInfo): void;
    nodeDeleted(nodeId: bigint): void;
    nodeDescriptions(nodeDescriptions: Map<bigint, string>): void;
    /** Updates floating tooltip positions as well as links to pinned tooltips */
    updateToolTipLinks(): void;
    private removeNodeLinks_;
    private removeDashedNodeLinks_;
    private pollForNodeDescriptions_;
    closeToolTip(node: GraphNode): void;
    private onGraphNodeClick_;
    /**
     * Renders nodes_ and edges_ to the SVG DOM.
     *
     * Each edge is a line element.
     * Each node is represented as a group element with three children:
     *   1. A circle that has a color and which animates the node on creation
     *      and deletion.
     *   2. An image that is provided a data URL for the nodes favicon, when
     *      available.
     *   3. A title element that presents the nodes URL on hover-over, if
     *      available.
     * Deleted nodes are classed '.dead', and CSS takes care of hiding their
     * image element if it's been populated with an icon.
     */
    private render_;
    private onTick_;
    /**
     * Adds a new node to the graph, populates its links and gives it an initial
     * position.
     */
    private addNode_;
    /**
     * Adds all the links for a node to the graph.
     */
    private addNodeLinks_;
    /**
     * Adds all the dashed links for a node to the graph.
     */
    private addDashedNodeLinks_;
    /**
     * @param d The dragged node.
     */
    private onDragStart_;
    /**
     * @param d The dragged node.
     */
    private onDrag_;
    /**
     * @param d The dragged node.
     */
    private onDragEnd_;
    private getTargetPositionY_;
    private getTargetPositionStrengthY_;
    private getManyBodyStrength_;
    /**
     * @param graphWidth Width of the graph view (svg).
     * @param graphHeight Height of the graph view (svg).
     */
    private updateSeparators_;
    private restartSimulation_;
    /**
     * Resizes and restarts the animation after a size change.
     */
    onResize(): void;
}
export {};
