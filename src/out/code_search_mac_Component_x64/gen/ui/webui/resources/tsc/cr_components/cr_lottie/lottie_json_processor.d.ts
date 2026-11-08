/**
 * A class wrapping a lottie JSON file that has been injected with dynamic
 * variables that can be hot swapped with new values at runtime.
 */
export declare class ProcessedLottieJson<T extends object = Record<string, unknown>> {
    private readonly animationData_;
    private colorReferences_;
    numMappedColors: number;
    constructor(animationData_: T);
    /**
     * Recursively traverses through a jsonObj, looking for known keys and tokens,
     * and saving them in the `shapes` and `gradients` map.
     */
    private traverseJson_;
    /**
     * Finds all dynamic colors in the underlying json file and updates their
     * values to match the current color palette in the document.
     *
     * @param styles A CSSStyleDeclaration from getComputedStyle() on the element
     * to pull css variable values from.
     * @returns A list of warnings in attempting to update the color on the json
     * file.
     */
    updateColors(styles: CSSStyleDeclaration): string[];
    getAnimationData(): T;
}
