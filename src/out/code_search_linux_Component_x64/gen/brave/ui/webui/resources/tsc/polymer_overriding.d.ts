type ModificationsMap = {
    [tagName: string]: (DocumentFragment: any) => unknown;
};
type IconOverridesMap = {
    [iconName: string]: string;
};
export declare function RegisterPolymerComponentBehaviors(behaviorsMap: any): void;
export declare function RegisterPolymerComponentProperties(propertiesMap: any): void;
export declare function RegisterPolymerPrototypeModification(modifications: {
    [element: string]: (prototype: any) => void;
}): void;
export declare function RegisterPolymerTemplateModifications(modificationsMap: ModificationsMap): void;
export declare function RegisterPolymerComponentReplacement(name: any, component: any): void;
export declare function RegisterPolymerComponentToIgnore(name: any): void;
export declare function RegisterStyleOverrideName(componentName: string, polymerStyleModuleName: string): void;
export declare function RegisterStyleOverride(componentName: string, styleTemplate: HTMLTemplateElement): void;
export declare function OverrideIronIcons(iconSetName: string, overridingIconSetName: string, iconOverrides: IconOverridesMap): void;
export declare function define(name: any, component: any, options?: any): void;
/**
 * Allows regular string tagged templating before parsing as html elements.
 * Differs from polymer's html function only in that it allows strings and
 * does not allow nested htmlelements.
 * Named html for syntax highlighting in some IDEs.
 * @param {*} strings
 * @param  {...any} values
 * @returns HTMLTEmplateElement
 */
export declare function html(strings: any, ...values: any[]): Node;
export {};
