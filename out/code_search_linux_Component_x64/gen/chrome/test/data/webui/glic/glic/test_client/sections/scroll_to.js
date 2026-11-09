// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getBrowser, logMessage, readStream } from '../client.js';
import { $ } from '../page_element_types.js';
function getDocumentIdAndNodes(annotatedPageContent) {
    function traverseTree(result, node) {
        if (!node || !node.contentAttributes) {
            return;
        }
        const contentAttributes = node.contentAttributes;
        const domNodeId = contentAttributes.commonAncestorDomNodeId;
        if (!domNodeId) {
            return;
        }
        result.nodes.push({
            'nodeId': domNodeId,
            'attributeType': contentAttributes.attributeType,
            'text': contentAttributes.textData?.textContent,
        });
        if (node.childrenNodes) {
            for (const child of node.childrenNodes) {
                traverseTree(result, child);
            }
        }
    }
    const result = {
        documentId: annotatedPageContent.mainFrameData.documentIdentifier.serializedToken,
        nodes: [],
    };
    traverseTree(result, annotatedPageContent.rootNode);
    return result;
}
function getURL(annotatedPageContent) {
    return annotatedPageContent.mainFrameData.url;
}
async function scrollTo(selector) {
    const documentId = $.scrollToDocumentId.innerText;
    const url = $.scrollToURL.innerText;
    const params = {
        selector,
        documentId: documentId === 'null' ? undefined : documentId,
        url: url === 'null' ? undefined : url,
        highlight: true,
    };
    logMessage(`scrollTo called with ${JSON.stringify(params)}`);
    await getBrowser().scrollTo(params);
    logMessage('scrollTo succeeded!');
}
function getNodeId(selectElement) {
    let searchRangeStartNodeId = undefined;
    if (!selectElement.disabled) {
        searchRangeStartNodeId = parseInt(selectElement.value) || undefined;
    }
    return searchRangeStartNodeId;
}
$.scrollToFetchAPCBn.addEventListener('click', async () => {
    let annotatedPageContentBytes;
    try {
        const pageContent = await getBrowser().getContextFromFocusedTab({ annotatedPageContent: true });
        if (pageContent.annotatedPageData?.annotatedPageContent) {
            annotatedPageContentBytes =
                await readStream(pageContent.annotatedPageData.annotatedPageContent);
        }
    }
    catch (err) {
        logMessage(`fetching APC failed: ${err}`);
        return;
    }
    if (!annotatedPageContentBytes) {
        logMessage('fetching APC failed');
        return;
    }
    const postResponse = await fetch('/parse-apc', { method: 'POST', body: annotatedPageContentBytes });
    const annotatedPageContent = await postResponse.json();
    const result = getDocumentIdAndNodes(annotatedPageContent);
    $.scrollToDocumentId.innerText = result.documentId;
    $.scrollToURL.innerText = getURL(annotatedPageContent);
    for (const selectElement of [$.scrollToExactTextSearchStart,
        $.scrollToTextFragmentSearchStart, $.scrollToNode]) {
        selectElement.innerHTML = '';
        selectElement.disabled = false;
        function addOption(value, text) {
            const option = document.createElement('option');
            option.value = value;
            option.text = text;
            selectElement.appendChild(option);
        }
        addOption('N/A', '<No Value>');
        addOption('-1', '<Invalid Value>');
        for (const node of result.nodes) {
            const value = node.nodeId;
            let optionText = node.attributeType.replace('CONTENT_ATTRIBUTE_', '');
            if (node.text) {
                optionText += ` ${node.text}`;
            }
            addOption(value.toString(), optionText);
        }
    }
});
$.scrollToBn.addEventListener('click', async () => {
    if (!(getBrowser().scrollTo)) {
        logMessage('scrollTo is not enabled. Run with --enable-features=GlicScrollTo.');
        return;
    }
    try {
        const exactText = $.scrollToExactText.value;
        if (exactText) {
            const searchRangeStartNodeId = getNodeId($.scrollToExactTextSearchStart);
            await scrollTo({ exactText: { text: exactText, searchRangeStartNodeId } });
            return;
        }
        const textStart = $.scrollToTextFragmentTextStart.value;
        const textEnd = $.scrollToTextFragmentTextEnd.value;
        if (textStart && textEnd) {
            const searchRangeStartNodeId = getNodeId($.scrollToTextFragmentSearchStart);
            await scrollTo({ textFragment: { textStart, textEnd, searchRangeStartNodeId } });
            return;
        }
        const nodeId = getNodeId($.scrollToNode);
        if (nodeId) {
            await scrollTo({ node: { nodeId } });
            return;
        }
        logMessage('scrollTo: no selector specified');
    }
    catch (error) {
        logMessage(`scrollTo failed: ${error}`);
    }
});
$.dropScrollToHighlightBtn.addEventListener('click', () => {
    getBrowser().dropScrollToHighlight();
});
$.mqlsClientIdBtn.addEventListener('click', () => {
    const clientId = getBrowser().getModelQualityClientId();
    logMessage(`MQLS Client ID: ${clientId}`);
});
