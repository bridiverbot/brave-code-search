type ExcludedKeys = 'initialize' | 'constructor';
type CleanMethods<T, N> = {
    [Property in keyof T as Property extends ExcludedKeys ? never : (Exclude<T[Property], undefined> extends Function ? Property : never)]: [
        N
    ];
};
type MapDelegates<D extends unknown[]> = {
    [I in keyof D]: CleanMethods<D[I], I>;
};
type TupleToIntersection<T extends unknown[]> = T extends [infer Head, ...infer Tail] ? Pick<Head, keyof Head> & TupleToIntersection<Tail> : unknown;
interface Collisions<T> {
    collision: {
        [K in keyof T]-?: [Exclude<T[K], undefined>] extends [never] ? K : never;
    }[keyof T];
}
export type CheckCollisions<T, D extends unknown[]> = Collisions<TupleToIntersection<[CleanMethods<T, 'target'>, ...MapDelegates<D>]>>['collision'];
type CheckDelegation<T, D extends unknown[]> = CheckCollisions<T, D> extends never ? unknown : {
    'Error: Method name collision detected!': CheckCollisions<T, D>;
};
/**
 * Creates a Proxy that forwards property access to a target object, and falls
 * back to a list of delegate objects if the property is not found on the
 * target. Note that this assumes that once a function is looked up, it is
 * cached permanently.
 *
 * Enforces compile-time disjointness: if any two delegates share a method name,
 * or if a delegate shadows a method implemented on the target, compilation will
 * fail. Also performs runtime checks at creation time to prevent
 * shadowing/conflicts.
 */
export declare function createDelegationProxy<T extends object, D extends unknown[]>(target: T, delegates: [...D] & CheckDelegation<T, D>): Pick<T, keyof T> & TupleToIntersection<D>;
export {};
