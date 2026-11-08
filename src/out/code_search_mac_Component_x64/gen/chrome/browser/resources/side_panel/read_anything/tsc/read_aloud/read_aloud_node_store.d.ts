import type { DomReadAloudNode } from './read_aloud_types.js';
export declare class ReadAloudNodeStore {
    private domNodeToReadAloudNodes_;
    register(domReadAloudNode: DomReadAloudNode): void;
    update(current: Node, replacer: Node): void;
    static getInstance(): ReadAloudNodeStore;
    static setInstance(obj: ReadAloudNodeStore): void;
}
