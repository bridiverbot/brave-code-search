// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AST_NODE_TYPES as Node, ESLintUtils } from '/third_party/node/node_modules/@typescript-eslint/utils/dist/index.js';
import esquery from '/third_party/node/node_modules/esquery/dist/esquery.esm.min.js';
import ts from '/third_party/node/node_modules/typescript/lib/typescript.js';
import assert from 'node:assert';
import path from 'node:path';
// NOTE: Using `\u002F` instead of a forward slash, to workaround for
// https://github.com/eslint/eslint/issues/16555,
// https://eslint.org/docs/latest/extend/selectors#known-issues
// where forward slashes are not properly escaped in regular expressions
// appearing in AST selectors.
export const LIT_IMPORT_REGEX = ['resources', 'lit', 'v3_0', 'lit.rollup.js$'].join('\\u002F');
export const POLYMER_ELEMENT_EXTENDS_MIXIN_SELECTOR = 'CallExpression[callee.name=/Mixin(Polymer)?$/][arguments.0.name="PolymerElement"]';
export function isCrLitElementType(type, checker, visited = new Set()) {
    const nonNullableType = checker.getNonNullableType(type);
    if (visited.has(nonNullableType)) {
        return false;
    }
    visited.add(nonNullableType);
    if (nonNullableType.symbol?.name === 'CrLitElement') {
        return true;
    }
    if ((nonNullableType.flags &
        (ts.TypeFlags.Any | ts.TypeFlags.Unknown | ts.TypeFlags.Never)) !== 0) {
        return false;
    }
    if ((nonNullableType.flags & ts.TypeFlags.TypeParameter) !== 0) {
        const constraint = checker.getBaseConstraintOfType(nonNullableType);
        return !!constraint && isCrLitElementType(constraint, checker, visited);
    }
    if ((nonNullableType.flags & ts.TypeFlags.Union) !== 0) {
        const union = nonNullableType;
        return union.types.length > 0 &&
            union.types.every((t) => isCrLitElementType(t, checker, visited));
    }
    if ((nonNullableType.flags & ts.TypeFlags.Intersection) !== 0) {
        const intersection = nonNullableType;
        return intersection.types.some((t) => isCrLitElementType(t, checker, visited));
    }
    if ((nonNullableType.flags & ts.TypeFlags.Object) !== 0 &&
        (nonNullableType.objectFlags &
            ts.ObjectFlags.ClassOrInterface) !== 0) {
        const baseTypes = checker.getBaseTypes(nonNullableType);
        return baseTypes.some((baseType) => isCrLitElementType(baseType, checker, visited));
    }
    return false;
}
export function isCrLitElementSubclass(node, context) {
    assert.ok(isType(node, Node.ClassDeclaration));
    if (!node.superClass || node.id?.name === 'CrLitElement') {
        return false;
    }
    const services = ESLintUtils.getParserServices(context);
    const checker = services.program.getTypeChecker();
    const tsNode = services.esTreeNodeToTSNodeMap.get(node);
    assert.ok(tsNode);
    const type = checker.getTypeAtLocation(tsNode);
    return isCrLitElementType(type, checker);
}
function hasTypeParameter(type) {
    if ((type.flags & ts.TypeFlags.TypeParameter) !== 0) {
        return true;
    }
    if ((type.flags & ts.TypeFlags.Intersection) !== 0) {
        return type.types.some(hasTypeParameter);
    }
    return false;
}
export function isMixinClass(node, context) {
    assert.ok(isType(node, Node.ClassDeclaration));
    if (!node.superClass) {
        return false;
    }
    const services = ESLintUtils.getParserServices(context);
    const checker = services.program.getTypeChecker();
    const superClassTsNode = services.esTreeNodeToTSNodeMap.get(node.superClass);
    assert.ok(superClassTsNode);
    const superClassType = checker.getTypeAtLocation(superClassTsNode);
    return hasTypeParameter(superClassType);
}
export function isPolymerElementSubclass(node, programNode) {
    assert.ok(isType(node, Node.ClassDeclaration));
    if (!node.superClass) {
        return false;
    }
    if (isType(node.superClass, Node.Identifier)) {
        if (node.superClass.name === 'PolymerElement') {
            // Case1: 'MyElement extends PolymerElement {...}'
            return true;
        }
        // Case2:
        // const MyElementBase = SomeMixin(PolymerElement);
        // MyElement extends MyElementBase {...}'
        const baseClassSelector = esquery.parse(`Program > VariableDeclaration > VariableDeclarator[id.name="${node.superClass.name}"] ${POLYMER_ELEMENT_EXTENDS_MIXIN_SELECTOR}`);
        const matchingNodes = esquery.match(programNode, baseClassSelector);
        return matchingNodes.length > 0;
    }
    if (isType(node.superClass, Node.CallExpression)) {
        // Case3: 'MyElement extends
        // SomeMixin(SomeOtherMixin(PolymerElement)) {...}'
        const selector = esquery.parse(POLYMER_ELEMENT_EXTENDS_MIXIN_SELECTOR);
        const matchingNodes = esquery.match(node.superClass, selector);
        return matchingNodes.length > 0;
    }
    return false;
}
export function isIdentifier(node) {
    return isType(node, Node.Identifier);
}
export function isLiteral(node) {
    return isType(node, Node.Literal);
}
export function isType(node, type) {
    return node.type === type;
}
export function camelCaseToDashCase(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
export function dashCaseToCamelCase(string) {
    return string.replace(/-([a-z])/g, group => group[1].toUpperCase());
}
// Extracts information about the imported element class from a Lit element
// template file.
export function extractClassImport(node, programNode) {
    assert.ok(isType(node, Node.FunctionDeclaration) && node.id.name === 'getHtml');
    const paramSelector = esquery.parse('Identifier[name="this"]');
    const matchingNodes = esquery.match(node, paramSelector);
    if (matchingNodes.length === 0) {
        // Case where there is no "this" parameter for the getHtml() method
        return {
            type: '',
            fileName: '',
        };
    }
    const typeReference = matchingNodes[0].typeAnnotation.typeAnnotation;
    const type = typeReference.typeName.name;
    // Find the URL of the import that imports the class.
    const importNodeQuery = esquery.parse('ImportDeclaration');
    const importNodes = esquery.match(programNode, importNodeQuery);
    const classImportNode = importNodes.find(importNode => {
        return importNode.specifiers.some(specifier => {
            return specifier.local.name === type;
        });
    });
    assert.ok(!!classImportNode);
    return {
        type: type,
        fileName: path.basename(classImportNode.source.value).replace('.js', '.ts'),
    };
}
function isObjectType(type, typeStr) {
    if ((type.flags &
        (ts.TypeFlags.Object | ts.TypeFlags.Intersection |
            ts.TypeFlags.TypeParameter)) !== 0) {
        return true;
    }
    return typeStr.startsWith('Record<') || typeStr.startsWith('{') ||
        typeStr === 'object';
}
export function getLitPropertyType(type, checker) {
    const nonNullableType = checker.getNonNullableType(type);
    const nonNullableTypeStr = checker.typeToString(nonNullableType);
    if (nonNullableTypeStr === 'TrustedHTML') {
        return 'String';
    }
    if (checker.isTypeAssignableTo(nonNullableType, checker.getBooleanType())) {
        return 'Boolean';
    }
    if (checker.isTypeAssignableTo(nonNullableType, checker.getStringType())) {
        return 'String';
    }
    if (checker.isTypeAssignableTo(nonNullableType, checker.getNumberType())) {
        return 'Number';
    }
    if (checker.isArrayType(nonNullableType)) {
        return 'Array';
    }
    if (isObjectType(type, nonNullableTypeStr)) {
        return 'Object';
    }
    if ((type.flags & ts.TypeFlags.Union) !== 0) {
        const union = type;
        if (union.types.every((t) => checker.isArrayType(t))) {
            return 'Array';
        }
        if (union.types.some((t) => isObjectType(t, checker.typeToString(t)))) {
            return 'Object';
        }
    }
    return null;
}
export function extractPropertiesFromClass(file, className, context) {
    const parser = context.languageOptions.parser;
    const parserOptions = context.languageOptions.parserOptions;
    assert.ok(parser && 'parse' in parser);
    const ast = parser.parse(file.text, {
        ...parserOptions,
        filePath: file.fileName,
    });
    // Handle case where `className` points to a TSTypeAliasDeclaration in the
    // same file. For example className='FooBarElement' and the code is as follows
    //
    // export class SettingsFooBarElement extends CrLitElement {}
    // export type FooBarElement = SettingsFooBarElement;
    //
    // This pattern is temporarily used when migrating Polymer to Lit to minimize
    // the diff during the migration.
    const typeAliasQuery = esquery.parse(`TSTypeAliasDeclaration[id.name="${className}"] > TSTypeReference > Identifier`);
    const typeAliasMatches = esquery.match(ast, typeAliasQuery);
    if (typeAliasMatches.length > 0) {
        className = typeAliasMatches[0].name;
    }
    // Match on class name suffix as well because some UIs use aliasing.
    const propertiesQuery = esquery.parse(`ClassDeclaration[id.name=/${className}/] > ClassBody > MethodDefinition[key.name="properties"] > FunctionExpression > BlockStatement > ReturnStatement > ObjectExpression > Property`);
    return esquery.match(ast, propertiesQuery);
}
