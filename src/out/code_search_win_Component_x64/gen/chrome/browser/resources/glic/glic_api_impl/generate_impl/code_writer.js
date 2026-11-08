// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Utilities for writing ts code.
 */
import { withoutIgnored } from './ts_types.js';
const OPEN_BRACE = /[{\[(]/;
const CLOSE_BRACE = /[}\])]/;
export function convertEnumKey(mojomKey) {
    let key = mojomKey;
    if (key.startsWith('k') && key.length > 1 &&
        key[1] === key[1].toUpperCase()) {
        key = key.slice(1);
    }
    return key.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
        .toUpperCase();
}
export class CodeWriter {
    lines = [];
    indentLevel = 0;
    indentSize;
    constructor(indentSize = 2) {
        this.indentSize = indentSize;
    }
    writeLine(line = '') {
        if (line === '') {
            this.lines.push('');
            return;
        }
        const trimmed = line.trim();
        if (trimmed.length > 0 && CLOSE_BRACE.test(trimmed.charAt(0))) {
            this.outdent();
        }
        const indent = ' '.repeat(this.indentLevel * this.indentSize);
        this.lines.push(indent + line);
        if (trimmed.length > 0 &&
            OPEN_BRACE.test(trimmed.charAt(trimmed.length - 1))) {
            this.indent();
        }
    }
    indent(delta = 1) {
        this.indentLevel += delta;
        this.indentLevel = Math.max(0, this.indentLevel);
    }
    outdent(delta = 1) {
        this.indent(-delta);
    }
    writeLines(comments) {
        for (const comment of comments) {
            this.writeLine(comment);
        }
    }
    writeEnum(e) {
        if (e.comments) {
            this.writeLines(e.comments);
        }
        this.writeLine(`export enum ${e.name} {`);
        for (const v of e.values) {
            if (v.comments) {
                this.writeLines(v.comments);
            }
            const convertedName = convertEnumKey(v.name);
            this.writeLine(`${convertedName} = ${v.value},`);
        }
        this.writeLine('}');
        this.writeLine();
    }
    writeEnums(enums) {
        for (const enumVal of enums) {
            this.writeEnum(enumVal);
        }
    }
    writeField(field) {
        if (field.comments) {
            this.writeLines(field.comments);
        }
        const optionalSuffix = field.typeInfo.isOptional ? '?' : '';
        this.writeLine(`${field.name}${optionalSuffix}: ${field.typeInfo.type.toString()};`);
    }
    writeInterface(i) {
        if (i.comments) {
            this.writeLines(i.comments);
        }
        this.writeLine(`export declare interface ${i.name} {`);
        for (const field of i.fields) {
            this.writeField(field);
        }
        this.writeLine('}');
        this.writeLine();
    }
    writeInterfaces(interfaces) {
        for (const i of interfaces) {
            this.writeInterface(withoutIgnored(i));
        }
    }
    toString() {
        return this.lines.join('\n');
    }
}
