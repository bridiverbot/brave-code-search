/**
 * @fileoverview PDF plugin native API.
 */
/** A more specific interface for the PDF plugin. */
export interface PdfPluginElement extends HTMLEmbedElement {
    postMessage(message: unknown, transfer?: Transferable[]): void;
}
