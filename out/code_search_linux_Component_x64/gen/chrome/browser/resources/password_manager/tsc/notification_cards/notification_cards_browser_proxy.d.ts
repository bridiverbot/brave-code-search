export interface NotificationCard {
    id: string;
    title: string;
    description: string;
    actionButtonText?: string;
    actionButtonAvatarUrl?: string;
    isDismissible: boolean;
}
export interface NotificationCardsProxy {
    /**
     * Returns a notification card to show, or null if there are no available
     * notification cards.
     */
    getAvailableNotificationCard(): Promise<NotificationCard | null>;
    /**
     * Records dismissal of a notification card. This is important to determine
     * whether the notification should be shown in the future.
     */
    recordNotificationDismissed(id: string): void;
    /**
     * Triggers Chrome sign-in from the sign-in promo notification card.
     */
    signInFromNotificationCard(): void;
}
export declare class NotificationCardsProxyImpl implements NotificationCardsProxy {
    getAvailableNotificationCard(): Promise<NotificationCard | null>;
    recordNotificationDismissed(id: string): void;
    signInFromNotificationCard(): void;
    static getInstance(): NotificationCardsProxy;
    static setInstance(obj: NotificationCardsProxy): void;
}
