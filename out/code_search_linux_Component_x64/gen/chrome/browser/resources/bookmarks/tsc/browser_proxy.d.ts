import type { BookmarkPromoType, IncognitoAvailability } from './constants.js';
export interface PromoCardData {
    promoType: BookmarkPromoType;
    canShow: boolean;
    promoTitle: string;
    promoSubtitle: string;
    actionButtonText: string;
    promoAvatarUrl?: string;
}
export interface BrowserProxy {
    getIncognitoAvailability(): Promise<IncognitoAvailability>;
    getCanEditBookmarks(): Promise<boolean>;
    getCanUploadBookmarkToAccountStorage(id: string): Promise<boolean>;
    recordInHistogram(histogram: string, bucket: number, maxBucket: number): void;
    onSingleBookmarkUploadClicked(bookmarkId: string): void;
    getPromoData(): Promise<PromoCardData>;
    onPromoShown(): void;
    onPromoClicked(): void;
    onPromoDismissed(): void;
}
export declare class BrowserProxyImpl implements BrowserProxy {
    getIncognitoAvailability(): Promise<IncognitoAvailability>;
    getCanEditBookmarks(): Promise<boolean>;
    getCanUploadBookmarkToAccountStorage(id: string): Promise<boolean>;
    recordInHistogram(histogram: string, bucket: number, maxBucket: number): void;
    onSingleBookmarkUploadClicked(bookmarkId: string): void;
    getPromoData(): Promise<PromoCardData>;
    onPromoShown(): void;
    onPromoClicked(): void;
    onPromoDismissed(): void;
    static getInstance(): BrowserProxy;
    static setInstance(obj: BrowserProxy): void;
}
