import type { HistoryCrossDeviceSigninPromoHandlerRemote } from 'chrome://resources/cr_components/history/history_cross_device_signin_promo.mojom-webui.js';
export declare class HistoryCrossDeviceSigninPromoBrowserProxy {
    handler: HistoryCrossDeviceSigninPromoHandlerRemote;
    constructor(handler: HistoryCrossDeviceSigninPromoHandlerRemote);
    static getInstance(): HistoryCrossDeviceSigninPromoBrowserProxy;
    static setInstance(obj: HistoryCrossDeviceSigninPromoBrowserProxy): void;
}
