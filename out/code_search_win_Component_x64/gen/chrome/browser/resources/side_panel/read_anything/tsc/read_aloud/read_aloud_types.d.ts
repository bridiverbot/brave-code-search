import { NodeStore } from '../content/node_store.js';
export declare abstract class ReadAloudNode {
    abstract equals(other: ReadAloudNode | undefined | null): boolean;
    abstract domNode(): Node | undefined;
    static createFromAxNode(axNodeId: number, nodeStore?: NodeStore): ReadAloudNode | undefined;
    static create(node: Node, nodeStore?: NodeStore): ReadAloudNode | undefined;
}
export declare class AxReadAloudNode extends ReadAloudNode {
    readonly axNodeId: number;
    private readonly nodeStore_;
    protected constructor(axNodeId: number, nodeStore_?: NodeStore);
    equals(other: ReadAloudNode | undefined | null): boolean;
    domNode(): Node | undefined;
}
export declare class DomReadAloudNode extends ReadAloudNode {
    protected node: Node;
    private readonly nearestBlockAncestor_;
    private isSuperscript_?;
    protected constructor(node: Node);
    equals(other: ReadAloudNode | undefined | null): boolean;
    getText(): string;
    domNode(): Node | undefined;
    refresh(newNode: Node): void;
    isSuperscript(): boolean;
    getBlockAncestor(): Node | undefined;
    private getNearestBlockAncestor_;
}
export interface Segment {
    node: ReadAloudNode;
    start: number;
    length: number;
}
export interface Sentence {
    text: string;
    index: number;
}
export interface SegmentedSentence {
    sentenceInfo: Sentence;
    segments: Segment[];
}
export interface OffsetByNode {
    node: DomReadAloudNode;
    startOffset: number;
}
export interface AncestorNode {
    node: Node;
    offset: number;
}
