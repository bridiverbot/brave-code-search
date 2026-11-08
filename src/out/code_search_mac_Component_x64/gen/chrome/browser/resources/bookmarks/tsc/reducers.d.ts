import type { Action } from 'chrome://resources/js/store.js';
import type { BookmarksPageState, FolderOpenState, NodeMap, SelectionState } from './types.js';
export declare function updateSelection(selection: SelectionState, action: Action): SelectionState;
export declare function updateNodes(nodes: NodeMap, action: Action): NodeMap;
export declare function updateFolderOpenState(folderOpenState: FolderOpenState, action: Action, nodes: NodeMap): FolderOpenState;
export declare function reduceAction(state: BookmarksPageState, action: Action): BookmarksPageState;
