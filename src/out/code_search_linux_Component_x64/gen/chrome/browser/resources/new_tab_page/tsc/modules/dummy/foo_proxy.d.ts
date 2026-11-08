import type { FooHandlerRemote } from '../../foo.mojom-webui.js';
export declare class FooProxy {
    static getHandler(): FooHandlerRemote;
    static setHandler(newHandler: FooHandlerRemote): void;
    private constructor();
}
