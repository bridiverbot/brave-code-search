import * as SDK from '../../core/sdk/sdk.js';
import * as UI from '../../ui/legacy/legacy.js';
export declare class RequestAdblockView extends UI.Widget.VBox {
    #private;
    constructor(request: SDK.NetworkRequest.NetworkRequest);
    performUpdate(): void;
    wasShown(): void;
    willHide(): void;
}
