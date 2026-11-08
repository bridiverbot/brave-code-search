// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AST_NODE_TYPES as Node, ESLintUtils } from '/third_party/node/node_modules/@typescript-eslint/utils/dist/index.js';
import assert from 'node:assert';
import path from 'node:path';
import { dashCaseToCamelCase, isCrLitElementSubclass, isIdentifier, isLiteral, isType } from './query_utils.js';
function extractDomIdsFromTemplateLiteral(node) {
    // Regular expression to extract all DOM ids from a string.
    const DOM_ID_REGEX = /id\s*=\s*"(?<domId>[A-Za-z0-9\-]+)"/g;
    const ids = [];
    for (const quasi of node.quasis) {
        const matches = Array.from(quasi.value.raw.matchAll(DOM_ID_REGEX));
        for (const match of matches) {
            assert.ok(match.groups);
            ids.push(match.groups['domId']);
        }
    }
    return ids;
}
function collectTemplateLiterals(node, results = []) {
    if (node.type === Node.TemplateLiteral) {
        results.push(node);
    }
    for (const key of Object.keys(node)) {
        if (key === 'parent') {
            continue;
        }
        const child = node[key];
        if (Array.isArray(child)) {
            for (const item of child) {
                if (item && typeof item === 'object' && 'type' in item) {
                    collectTemplateLiterals(item, results);
                }
            }
        }
        else if (child && typeof child === 'object' && 'type' in child) {
            collectTemplateLiterals(child, results);
        }
    }
    return results;
}
function extractTemplateFromFile(context, templateFile) {
    const parser = context.languageOptions.parser;
    const parserOptions = context.languageOptions.parserOptions;
    assert.ok(parser && 'parse' in parser);
    const templateAst = parser.parse(templateFile.text, {
        ...parserOptions,
        filePath: templateFile.fileName,
    });
    for (const statement of templateAst.body) {
        const decl = statement.type === Node.ExportNamedDeclaration ?
            statement.declaration :
            statement;
        if (decl.type === Node.FunctionDeclaration && decl.id.name === 'getHtml') {
            return decl.body;
        }
    }
    return null;
}
// Necessary info to track about each CrLitElement subclass definition
// encountered in the current file.
class ClassInfo {
    context;
    name;
    templateFile;
    inlinedRenderBlock = null;
    interfaceMembers = [];
    topLevelDomIds = [];
    nestedDomIds = [];
    constructor(context, name, dollarProperty, templateFile) {
        this.context = context;
        this.name = name;
        this.templateFile = templateFile;
        assert.ok(dollarProperty.typeAnnotation);
        const typeAnnotation = dollarProperty.typeAnnotation.typeAnnotation;
        assert.ok(isType(typeAnnotation, Node.TSTypeLiteral));
        for (const member of typeAnnotation.members) {
            assert.ok(isType(member, Node.TSPropertySignature));
            this.interfaceMembers.push(member);
        }
    }
    visitTemplateBlock(templateBlock) {
        const returnStatement = templateBlock.body.find((statement) => statement.type === Node.ReturnStatement);
        assert.ok(returnStatement && returnStatement.argument);
        assert.ok(returnStatement.argument.type === Node.TaggedTemplateExpression &&
            returnStatement.argument.quasi.type === Node.TemplateLiteral);
        const topLevelTemplateLiteral = returnStatement.argument.quasi;
        const allTemplateLiterals = collectTemplateLiterals(templateBlock);
        for (const node of allTemplateLiterals) {
            const ids = extractDomIdsFromTemplateLiteral(node);
            if (node === topLevelTemplateLiteral) {
                this.topLevelDomIds.push(...ids);
            }
            else {
                this.nestedDomIds.push(...ids);
            }
        }
    }
    runIncorrectDollarSignNotationCheck() {
        for (const member of this.interfaceMembers) {
            if (!isLiteral(member.key)) {
                continue;
            }
            this.context.report({
                node: member,
                messageId: 'incorrectDollarSignNotation',
                data: {
                    className: this.name,
                    incorrectIdentifier: member.key.value,
                    suggestedName: dashCaseToCamelCase(member.key.value),
                },
            });
        }
    }
    runMissingIdCheck() {
        for (const member of this.interfaceMembers) {
            if (!isIdentifier(member.key)) {
                continue;
            }
            const domId = member.key.name;
            if (this.topLevelDomIds.includes(domId) ||
                this.nestedDomIds.includes(domId)) {
                continue;
            }
            if (this.templateFile) {
                this.context.report({
                    node: member,
                    messageId: 'missingId',
                    data: {
                        domId,
                        className: this.name,
                        templateFile: path.basename(this.templateFile.fileName),
                    },
                });
                continue;
            }
            this.context.report({
                node: member,
                messageId: 'missingIdNoTemplateFile',
                data: {
                    domId,
                    className: this.name,
                },
            });
        }
    }
    runConditionalIdCheck() {
        for (const member of this.interfaceMembers) {
            if (!isIdentifier(member.key)) {
                continue;
            }
            const domId = member.key.name;
            if (!this.nestedDomIds.includes(domId)) {
                continue;
            }
            if (this.templateFile) {
                this.context.report({
                    node: member,
                    messageId: 'conditionalId',
                    data: {
                        domId,
                        className: this.name,
                        templateFile: path.basename(this.templateFile.fileName),
                    },
                });
                continue;
            }
            this.context.report({
                node: member,
                messageId: 'conditionalIdNoTemplateFile',
                data: {
                    domId,
                    className: this.name,
                },
            });
        }
    }
}
export const litElementInvalidInterface = ESLintUtils.RuleCreator.withoutDocs({
    meta: {
        type: 'problem',
        docs: {
            description: 'Ensures that all ids referenced in a Lit element\'s interface actually exist unconditionally in its template',
        },
        messages: {
            incorrectDollarSignNotation: 'Use camelCase identifiers, not dash-case literals, for DOM ids in the interface. Change \'{{incorrectIdentifier}}\' to {{suggestedName}} in the interface for {{className}}.',
            missingId: 'Id \'{{domId}}\' is listed in the interface definition for {{className}}, but no element with that ID was found in the template file \'{{templateFile}}\'.',
            missingIdNoTemplateFile: 'Id \'{{domId}}\' is listed in the interface definition for {{className}}, but no element with that ID was found in the template.',
            conditionalId: 'Id \'{{domId}}\' is listed in the interface definition for {{className}}, but the element is conditionally rendered in the template file \'{{templateFile}}\'.',
            conditionalIdNoTemplateFile: 'Id \'{{domId}}\' is listed in the interface definition for {{className}}, but the element is conditionally rendered in the template.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = ESLintUtils.getParserServices(context);
        const compilerOptions = services.program.getCompilerOptions();
        const sourceFiles = services.program.getSourceFiles().filter(f => f.fileName.startsWith(compilerOptions.rootDir + '/'));
        const classFilename = context.filename.replaceAll('\\', '/');
        const templateFilename = classFilename.replace(/\.ts$/, '.html.ts');
        const templateFile = sourceFiles.find(f => f.fileName === templateFilename) || null;
        // Dollar sign property signatures in this file, keyed by interface name.
        const dollarProperties = new Map();
        // Info about all the CrLitElement subclass definitions encountered in this
        // file.
        const classInfos = new Map();
        let currentClassInfo = null;
        return {
            'ClassDeclaration'(node) {
                if (!isCrLitElementSubclass(node, context)) {
                    currentClassInfo = null;
                    return;
                }
                assert.ok(node.id);
                const dollarProperty = dollarProperties.get(node.id.name) || null;
                if (!dollarProperty) {
                    currentClassInfo = null;
                    return;
                }
                currentClassInfo =
                    new ClassInfo(context, node.id.name, dollarProperty, templateFile);
                classInfos.set(node.id.name, currentClassInfo);
            },
            'ClassDeclaration > ClassBody > MethodDefinition[key.name="render"]'(node) {
                if (currentClassInfo && node.value.body) {
                    currentClassInfo.inlinedRenderBlock = node.value.body;
                }
            },
            'TSInterfaceDeclaration > TSInterfaceBody > TSPropertySignature[key.name="$"]'(node) {
                assert.ok(node.parent && node.parent.parent);
                assert.ok(isType(node.parent.parent, Node.TSInterfaceDeclaration));
                dollarProperties.set(node.parent.parent.id.name, node);
            },
            'Program:exit'() {
                for (const classInfo of classInfos.values()) {
                    const templateBlock = templateFile ?
                        extractTemplateFromFile(context, templateFile) :
                        classInfo.inlinedRenderBlock;
                    assert.ok(templateBlock);
                    classInfo.visitTemplateBlock(templateBlock);
                    classInfo.runIncorrectDollarSignNotationCheck();
                    classInfo.runMissingIdCheck();
                    classInfo.runConditionalIdCheck();
                }
            },
        };
    },
});
