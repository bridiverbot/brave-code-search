import type { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * Specifies all possible routes in settings.
 */
export interface SettingsRoutes {
    ABOUT: Route;
    ACCESSIBILITY: Route;
    ADDRESSES: Route;
    ADVANCED: Route;
    AI: Route;
    AI_MODE_SEARCH: Route;
    AI_SUGGESTIONS: Route;
    APPEARANCE: Route;
    AUTOFILL: Route;
    BASIC: Route;
    CAPTIONS: Route;
    CLEAR_BROWSER_DATA: Route;
    COMPARE: Route;
    CONTACT_INFO: Route;
    COOKIES: Route;
    DEFAULT_BROWSER: Route;
    DICTATION: Route;
    DOWNLOADS: Route;
    EDIT_DICTIONARY: Route;
    FONTS: Route;
    GEMINI: Route;
    GEMINI_LOGIN: Route;
    GEMINI_ENTERPRISE: Route;
    GLIC_SECTION: Route;
    HISTORY_SEARCH: Route;
    IDENTITY_DOCS: Route;
    INLINE_CUE_MENU: Route;
    LANGUAGES: Route;
    MANAGE_PROFILE: Route;
    OFFER_WRITING_HELP: Route;
    ON_STARTUP: Route;
    PASSKEYS: Route;
    PAYMENTS: Route;
    PEOPLE: Route;
    PERFORMANCE: Route;
    PRELOADING: Route;
    PRIVACY: Route;
    PRIVACY_GUIDE: Route;
    RESET: Route;
    RESET_DIALOG: Route;
    SAFETY_HUB: Route;
    SEARCH: Route;
    SEARCH_ENGINES: Route;
    SECURITY: Route;
    SECURITY_KEYS: Route;
    SHOPPING: Route;
    SITE_SETTINGS: Route;
    SITE_SETTINGS_ADS: Route;
    SITE_SETTINGS_ALL: Route;
    SITE_SETTINGS_AR: Route;
    SITE_SETTINGS_AUTOMATIC_DOWNLOADS: Route;
    SITE_SETTINGS_AUTOMATIC_FULLSCREEN: Route;
    SITE_SETTINGS_AUTO_PICTURE_IN_PICTURE: Route;
    SITE_SETTINGS_AUTO_VERIFY: Route;
    SITE_SETTINGS_BACKGROUND_SYNC: Route;
    SITE_SETTINGS_BLUETOOTH_DEVICES: Route;
    SITE_SETTINGS_BLUETOOTH_SCANNING: Route;
    SITE_SETTINGS_CAMERA: Route;
    SITE_SETTINGS_CAPTURED_SURFACE_CONTROL: Route;
    SITE_SETTINGS_CLIPBOARD: Route;
    SITE_SETTINGS_COOKIES: Route;
    SITE_SETTINGS_FEDERATED_IDENTITY_API: Route;
    SITE_SETTINGS_HANDLERS: Route;
    SITE_SETTINGS_HAND_TRACKING: Route;
    SITE_SETTINGS_HID_DEVICES: Route;
    SITE_SETTINGS_IDLE_DETECTION: Route;
    SITE_SETTINGS_IMAGES: Route;
    SITE_SETTINGS_KEYBOARD_LOCK: Route;
    SITE_SETTINGS_LOCAL_FONTS: Route;
    SITE_SETTINGS_LOCAL_NETWORK: Route;
    SITE_SETTINGS_LOCAL_NETWORK_ACCESS: Route;
    SITE_SETTINGS_LOOPBACK_NETWORK: Route;
    SITE_SETTINGS_MIXEDSCRIPT: Route;
    SITE_SETTINGS_JAVASCRIPT: Route;
    SITE_SETTINGS_JAVASCRIPT_OPTIMIZER: Route;
    SITE_SETTINGS_SENSORS: Route;
    SITE_SETTINGS_SOUND: Route;
    SITE_SETTINGS_LOCATION: Route;
    SITE_SETTINGS_MICROPHONE: Route;
    SITE_SETTINGS_MIDI_DEVICES: Route;
    SITE_SETTINGS_FILE_SYSTEM_WRITE: Route;
    SITE_SETTINGS_FILE_SYSTEM_WRITE_DETAILS: Route;
    SITE_SETTINGS_NOTIFICATIONS: Route;
    SITE_SETTINGS_PAYMENT_HANDLER: Route;
    SITE_SETTINGS_PDF_DOCUMENTS: Route;
    SITE_SETTINGS_POINTER_LOCK: Route;
    SITE_SETTINGS_POPUPS: Route;
    SITE_SETTINGS_PROTECTED_CONTENT: Route;
    SITE_SETTINGS_SERIAL_PORTS: Route;
    SITE_SETTINGS_SMART_CARD_READERS: Route;
    SITE_SETTINGS_SITE_DATA: Route;
    SITE_SETTINGS_SITE_DETAILS: Route;
    SITE_SETTINGS_STORAGE_ACCESS: Route;
    SITE_SETTINGS_USB_DEVICES: Route;
    SITE_SETTINGS_VR: Route;
    SITE_SETTINGS_WEB_APP_INSTALLATION: Route;
    SITE_SETTINGS_WINDOW_MANAGEMENT: Route;
    SITE_SETTINGS_ZOOM_LEVELS: Route;
    SITE_SETTINGS_WEB_PRINTING: Route;
    SKILLS: Route;
    SUGGESTIONS_FROM_GEMINI: Route;
    SYNC: Route;
    SYNC_ADVANCED: Route;
    SYSTEM: Route;
    TRAVEL: Route;
    TRIGGERED_RESET_DIALOG: Route;
    ACCOUNT: Route;
    GOOGLE_SERVICES: Route;
    IMPORT_DATA: Route;
    SIGN_OUT: Route;
    GET_STARTED: Route;
    ORIGIN: Route;
    SHIELDS: Route;
    SOCIAL_BLOCKING: Route;
    EXTENSIONS: Route;
    EXTENSIONS_V2: Route;
    BRAVE_SYNC: Route;
    BRAVE_SYNC_SETUP: Route;
    BRAVE_WALLET: Route;
    BRAVE_WEB3: Route;
    BRAVE_NEW_TAB: Route;
    THEMES: Route;
    SITE_SETTINGS_AUTOPLAY: Route;
    SITE_SETTINGS_GOOGLE_SIGN_IN: Route;
    SITE_SETTINGS_BRAVE_OPEN_AI_CHAT: Route;
    SITE_SETTINGS_ETHEREUM: Route;
    SITE_SETTINGS_SOLANA: Route;
    SITE_SETTINGS_CARDANO: Route;
    SITE_SETTINGS_SHIELDS_STATUS: Route;
    SHIELDS_ADBLOCK: Route;
    SHORTCUTS: Route;
    BRAVE_WALLET_NETWORKS: Route;
    BRAVE_LEO_ASSISTANT: Route;
    BRAVE_LEO_CUSTOMIZATION: Route;
    BRAVE_LEO_ADD_MODEL: Route;
    BRAVE_CONTENT: Route;
    DEFAULT_SEARCH: Route;
    PRIVATE_SEARCH: Route;
    EMAIL_ALIASES: Route;
}
/** Class for navigable routes. */
export declare class Route {
    path: string;
    parent: Route | null;
    depth: number;
    title: string | undefined;
    /**
     * Whether this route corresponds to a navigable dialog. Those routes must
     * belong to a "section".
     */
    isNavigableDialog: boolean;
    section: string;
    constructor(path: string, title?: string);
    /**
     * Returns a new Route instance that's a child of this route.
     * @param path Extends this route's path if it doesn't contain a
     *     leading slash.
     */
    createChild(path: string, title?: string): Route;
    /**
     * Returns a new Route instance that's a child section of this route.
     * TODO(tommycli): Remove once we've obsoleted the concept of sections.
     */
    createSection(path: string, section: string, title?: string): Route;
    /**
     * Returns the absolute path string for this Route, assuming this function
     * has been called from within chrome://settings.
     */
    getAbsolutePath(): string;
    /**
     * Returns true if this route matches or is an ancestor of the parameter.
     */
    contains(route: Route): boolean;
    /**
     * Returns true if this route is a subpage of a section.
     */
    isSubpage(): boolean;
}
export declare class Router {
    /**
     * List of available routes. This is populated taking into account current
     * state (like guest mode).
     */
    private routes_;
    /**
     * The current active route. This updated is only by settings.navigateTo
     * or settings.initializeRouteFromUrl.
     */
    currentRoute: Route;
    /**
     * The current query parameters. This is updated only by
     * settings.navigateTo or settings.initializeRouteFromUrl.
     */
    private currentQueryParameters_;
    private wasLastRouteChangePopstate_;
    private previousRoute_;
    private initializeRouteFromUrlCalled_;
    private routeObservers_;
    /** @return The singleton instance. */
    static getInstance(): Router;
    static setInstance(instance: Router): void;
    static resetInstanceForTesting(instance: Router): void;
    constructor(availableRoutes: SettingsRoutes);
    addObserver(observer: RouteObserverMixinInterface): void;
    removeObserver(observer: RouteObserverMixinInterface): void;
    getRoute(routeName: string): Route;
    getRoutes(): SettingsRoutes;
    /**
     * Helper function to set the current route and notify all observers.
     */
    setCurrentRoute(route: Route, queryParameters: URLSearchParams, isPopstate: boolean): void;
    /**
     * Updates the page title to reflect the current route.
     */
    private updateTitle_;
    getCurrentRoute(): Route;
    getPreviousRoute(): Route | null;
    getQueryParameters(): URLSearchParams;
    lastRouteChangeWasPopstate(): boolean;
    private routeDictionary_;
    /**
     * @return The matching canonical route, or null if none matches.
     */
    getRouteForPath(path: string): Route | null;
    /**
     * Updates the URL parameters of the current route via exchanging the
     * window history state. This changes the Settings route path, but doesn't
     * change the route itself, hence does not push a new route history entry.
     * Notifies routeChangedObservers.
     */
    updateRouteParams(params: URLSearchParams): void;
    /**
     * Navigates to a canonical route and pushes a new history entry.
     * @param dynamicParameters Navigations to the same
     *     URL parameters in a different order will still push to history.
     * @param removeSearch Whether to strip the 'search' URL
     *     parameter during navigation. Defaults to false.
     */
    navigateTo(route: Route, dynamicParameters?: URLSearchParams, removeSearch?: boolean): void;
    /**
     * Navigates to the previous route if it has an equal or lesser depth.
     * If there is no previous route in history meeting those requirements,
     * this navigates to the immediate parent. This will never exit Settings.
     */
    navigateToPreviousRoute(): void;
    /**
     * Initialize the route and query params from the URL.
     */
    initializeRouteFromUrl(): void;
    /**
     * Make a UMA note about visiting this URL path.
     * @param urlPath The url path (only).
     */
    recordMetrics(urlPath: string): void;
    resetRouteForTesting(): void;
}
type Constructor<T> = new (...args: any[]) => T;
export declare const RouteObserverMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<RouteObserverMixinInterface>;
export declare const RouteObserverMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<RouteObserverMixinInterface>;
export interface RouteObserverMixinInterface {
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
}
export {};
