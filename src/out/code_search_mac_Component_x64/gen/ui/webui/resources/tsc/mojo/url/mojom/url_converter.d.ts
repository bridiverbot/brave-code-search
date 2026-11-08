import type { UrlDataView, UrlTypeMapper } from './url.mojom-converters.js';
export declare class UrlConverter implements UrlTypeMapper<string> {
    url(url: string): string;
    convert(view: UrlDataView): string;
}
