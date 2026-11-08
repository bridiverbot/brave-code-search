// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ESLintUtils } from '/third_party/node/node_modules/@typescript-eslint/utils/dist/index.js';
import assert from 'node:assert';
import { isIdentifier, isPolymerElementSubclass } from './query_utils.js';
export const polymerPropertyClassMemberRule = ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'problem',
        docs: {
            description: 'Ensures that Polymer properties are also declared as class members',
        },
        messages: {
            missingClassMember: 'Polymer property \'{{propName}}\' in class \'{{className}}\' must also be declared as a class member.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        let isPolymerElement = false;
        let polymerProperties = null;
        let currentClass = null;
        return {
            'ClassDeclaration'(node) {
                isPolymerElement =
                    isPolymerElementSubclass(node, context.sourceCode.ast);
                if (!isPolymerElement) {
                    polymerProperties = null;
                    currentClass = null;
                    return;
                }
                polymerProperties = new Map();
                currentClass = node;
            },
            'ClassDeclaration > ClassBody > MethodDefinition[key.name="properties"] > FunctionExpression > BlockStatement > ReturnStatement > ObjectExpression > Property'(node) {
                if (!isPolymerElement) {
                    return;
                }
                assert.ok(polymerProperties);
                assert.ok(isIdentifier(node.key));
                polymerProperties.set(node.key.name, node);
            },
            'ClassDeclaration > ClassBody > PropertyDefinition'(node) {
                if (!isPolymerElement) {
                    return;
                }
                assert.ok(polymerProperties);
                assert.ok(isIdentifier(node.key));
                if (polymerProperties.has(node.key.name)) {
                    polymerProperties.delete(node.key.name);
                }
            },
            'ClassDeclaration:exit'(node) {
                if (!isPolymerElement) {
                    return;
                }
                assert.ok(polymerProperties);
                assert.ok(currentClass);
                assert.ok(currentClass.id);
                for (const [key, value] of polymerProperties) {
                    if (key.endsWith('Enum_') || key.endsWith('Enum')) {
                        continue;
                    }
                    context.report({
                        node,
                        messageId: 'missingClassMember',
                        data: {
                            propName: key,
                            className: currentClass.id.name,
                        },
                        loc: value.loc,
                    });
                }
            },
        };
    },
});
