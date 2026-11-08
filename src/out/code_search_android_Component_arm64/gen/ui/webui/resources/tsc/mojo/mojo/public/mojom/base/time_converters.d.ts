import type { JSTimeDataView, JSTimeTypeMapper } from './time.mojom-converters.js';
export declare class JsTimeConverter implements JSTimeTypeMapper<Date> {
    msec(date: Date): number;
    convert(view: JSTimeDataView): Date;
}
