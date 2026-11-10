import type { String16DataView, String16TypeMapper } from './string16.mojom-converters.js';
export declare class String16Converter implements String16TypeMapper<string> {
    data(str: string): number[];
    convert(view: String16DataView): string;
    convertImpl(data: number[]): string;
}
