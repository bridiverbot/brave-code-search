declare module './item-chromium.js' {
    interface ExtensionsItemElement {
        isBraveHosted_: (extensionId: string) => boolean;
        isFlaggedBySocket_: (blocklistText?: string) => boolean;
    }
}
export * from './item-chromium.js';
