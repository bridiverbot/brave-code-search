import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { Group, HashNamed, HashNameMap, Trial } from './browser_proxy.js';
declare class NameUnhasher {
    private hashNames;
    private readonly maxStoredNames;
    add(names: HashNameMap): boolean;
    displayName(named: HashNamed): string;
}
declare class SearchFilter {
    private unhasher;
    private searchText;
    private searchParts;
    constructor(unhasher: NameUnhasher, searchText: string);
    match(named: HashNamed, checkParts: boolean): MatchResult;
    private matchNameOrHash;
}
declare enum MatchResult {
    NONE = "",
    MATCH = "match",
    MISMATCH = "no-match"
}
export declare class TrialRow {
    private app;
    trial: Trial;
    root: HTMLDivElement;
    overridden: boolean;
    experimentRows: ExperimentRow[];
    constructor(app: FieldTrialsAppElement, trial: Trial);
    update(): void;
    findExperimentRow(groupHash: string): ExperimentRow | undefined;
    setMatchResult(result: MatchResult): void;
    filter(searchFilter: SearchFilter): [boolean, number];
    displayName(): string;
    sortKey(): string;
}
declare class ExperimentRow {
    private app;
    trial: Trial;
    group: Group;
    root: HTMLDivElement;
    constructor(app: FieldTrialsAppElement, trial: Trial, group: Group);
    update(): void;
    setForceEnabled(forceEnabled: boolean): void;
    setMatchResult(result: MatchResult): void;
}
export declare class FieldTrialsAppElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    private proxy_;
    dirty: boolean;
    private trials;
    unhasher: NameUnhasher;
    onUpdateForTesting: () => void;
    private el;
    constructor();
    private init_;
    forceUpdateForTesting(): void;
    private initFilter_;
    private setRestartRequired_;
    private filterUpdated_;
    private setDirty_;
    private update_;
    get filterInputElement(): HTMLInputElement;
    private findTrialRow;
    toggleForceEnable(trial: Trial, group: Group): void;
    private populateState_;
    private filterToInput_;
    private filter_;
}
declare global {
    interface HTMLElementTagNameMap {
        'field-trials-app': FieldTrialsAppElement;
    }
}
export {};
