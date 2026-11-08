// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Types representing typescript types.
export const BUILTIN_TS_TYPES = new Set(['string', 'boolean', 'number', 'any', 'ArrayBuffer', 'Uint8Array']);
export class TsType {
    typeParams = [];
}
export class TsNamedType extends TsType {
    name;
    constructor(name, typeParams = []) {
        super();
        this.name = name;
        this.typeParams = typeParams;
    }
    toString() {
        if (this.typeParams.length > 0) {
            return `${this.name}<${this.typeParams.map(p => p.toString()).join(', ')}>`;
        }
        return this.name;
    }
}
export class TsArrayType extends TsType {
    elementType;
    constructor(elementType) {
        super();
        this.elementType = elementType;
    }
    toString() {
        return `${this.elementType.toString()}[]`;
    }
}
export function parseTsType(typeStr) {
    typeStr = typeStr.trim();
    if (typeStr.endsWith('[]')) {
        return new TsArrayType(parseTsType(typeStr.slice(0, -2)));
    }
    if (typeStr.includes('<')) {
        const start = typeStr.indexOf('<');
        const end = typeStr.lastIndexOf('>');
        const name = typeStr.slice(0, start).trim();
        const paramsStr = typeStr.slice(start + 1, end).trim();
        // Assuming single param for now as in Python ParseTsType
        return new TsNamedType(name, [parseTsType(paramsStr)]);
    }
    return new TsNamedType(typeStr);
}
export function withoutIgnored(i) {
    return {
        name: i.name,
        comments: i.comments,
        fields: i.fields.filter(f => !f.isIgnored),
    };
}
