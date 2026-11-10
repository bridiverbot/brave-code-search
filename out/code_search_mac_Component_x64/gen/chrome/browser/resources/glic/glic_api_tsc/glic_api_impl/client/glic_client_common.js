// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
export function createDelegationProxy(target, delegates) {
    const registeredMethods = new Set();
    const excludes = new Set(['constructor', 'initialize']);
    const untypedDelegates = delegates;
    for (const delegate of untypedDelegates) {
        const proto = Object.getPrototypeOf(delegate);
        if (!proto) {
            continue;
        }
        for (const method of Object.getOwnPropertyNames(proto)) {
            if (excludes.has(method)) {
                continue;
            }
            const val = delegate[method];
            if (typeof val === 'function') {
                const isStandardProperty = Reflect.has(Object.prototype, method);
                if (registeredMethods.has(method) ||
                    (!isStandardProperty && Reflect.has(target, method))) {
                    throw new Error(`Method conflict detected: '${method}' is defined on multiple delegates ` +
                        `or is shadowed by a property on the target object.`);
                }
                registeredMethods.add(method);
            }
        }
    }
    const methodCache = new Map();
    return new Proxy(target, {
        get(t, prop, receiver) {
            const cachedMethod = methodCache.get(prop);
            if (cachedMethod !== undefined) {
                return cachedMethod;
            }
            if (Reflect.has(t, prop)) {
                const val = Reflect.get(t, prop, receiver);
                if (typeof val === 'function') {
                    const bound = val.bind(t);
                    methodCache.set(prop, bound);
                    return bound;
                }
                return val;
            }
            for (const delegate of untypedDelegates) {
                const val = Reflect.get(delegate, prop, delegate);
                if (val !== undefined) {
                    if (typeof val === 'function') {
                        const bound = val.bind(delegate);
                        methodCache.set(prop, bound);
                        return bound;
                    }
                    return val;
                }
            }
            return undefined;
        },
    });
}
