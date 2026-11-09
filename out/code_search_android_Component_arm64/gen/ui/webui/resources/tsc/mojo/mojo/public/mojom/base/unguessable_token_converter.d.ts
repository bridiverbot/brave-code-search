import type { UnguessableTokenDataView, UnguessableTokenTypeMapper } from './unguessable_token.mojom-converters.js';
export declare class UnguessableTokenConverter implements UnguessableTokenTypeMapper<string> {
    private validate;
    high(token: string): bigint;
    low(token: string): bigint;
    convert(view: UnguessableTokenDataView): string;
}
