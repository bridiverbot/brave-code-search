import type { JsErrorDataView, JsErrorTypeMapper } from './jserror.mojom-converters.js';
export declare class JsErrorConverter implements JsErrorTypeMapper<Object> {
    name(e: Object): (string | null);
    cause(e: Object): (string | null);
    message(e: Object): (string | null);
    convert(view: JsErrorDataView): Object;
}
