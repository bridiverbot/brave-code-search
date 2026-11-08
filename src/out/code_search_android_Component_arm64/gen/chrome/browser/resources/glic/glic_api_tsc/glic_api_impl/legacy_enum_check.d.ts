type CamelCaseToSnakeCase<S extends string> = S extends `${infer First}${infer Rest}` ? First extends Lowercase<First> ? `${First}${CamelCaseToSnakeCase<Rest>}` : `${CamelCaseToSnakeCase<Rest> extends '' ? Uppercase<First> : `_${Uppercase<First>}${CamelCaseToSnakeCase<Rest>}`}` : S;
type RemoveFirstK<S extends string> = S extends `k${infer Rest}` ? Rest : S;
type RemoveFirstUnderscore<S extends string> = S extends `_${infer Rest}` ? Rest : S;
type ConvertKey<T extends string> = RemoveFirstUnderscore<Uppercase<CamelCaseToSnakeCase<RemoveFirstK<T>>>>;
type AllMojomEnumKeysAsUppercase<E> = keyof {
    [K in Exclude<keyof E, 'MIN_VALUE' | 'MAX_VALUE'> as K extends string ? ConvertKey<K> : never]: void;
};
type AllEnumKeys<E> = keyof {
    [K in keyof E as K extends string ? K : never]: void;
};
type AnnotateError<T, M> = T extends never ? never : [M, T];
export type CheckEnumCompatibility<MojoEnum, TsEnum> = AnnotateError<Exclude<AllMojomEnumKeysAsUppercase<MojoEnum>, AllEnumKeys<TsEnum>>, 'typescript enum missing value'> | AnnotateError<Exclude<AllEnumKeys<TsEnum>, AllMojomEnumKeysAsUppercase<MojoEnum>>, 'mojo enum missing value'>;
export {};
