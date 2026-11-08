import { RuleOperationError, TrafficRule } from '../traffic_control.mojom-webui.js';
export declare const kUnsetLabel = "\u2014";
export declare function urlFilterOf(rule: TrafficRule): string;
export declare function urlFilterPatternsOf(rule: TrafficRule): string[];
export declare function firstUrlFilterOf(rule: TrafficRule): string;
export declare function urlFilterListLabel(rule: TrafficRule): string;
export declare function createEmptyRule(): TrafficRule;
export declare function cloneRuleForEdit(rule: TrafficRule): TrafficRule;
export declare function ruleOperationErrorMessage(error: RuleOperationError): string;
