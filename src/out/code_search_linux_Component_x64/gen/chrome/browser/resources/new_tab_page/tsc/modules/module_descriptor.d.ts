/**
 * @fileoverview Provides the module descriptor. Each module must create a
 * module descriptor and register it at the NTP.
 */
export type InitializeModuleCallback = () => Promise<HTMLElement[] | HTMLElement | null>;
export interface Module {
    elements: HTMLElement[];
    descriptor: ModuleDescriptor;
}
export declare class ModuleDescriptor {
    private id_;
    private initializeCallback_;
    constructor(id: string, initializeCallback: InitializeModuleCallback);
    get id(): string;
    /**
     * Initializes the module and returns one or more module elements on success.
     * @param timeout Timeout in milliseconds after which initialization aborts.
     * @param onNtpLoad `true` if the module is being initialized during the
     *     initial NTP load, `false` if it's being initialized later in the NTP's
     *     lifecycle.
     */
    initialize(timeout: number, onNtpLoad?: boolean): Promise<HTMLElement[] | HTMLElement | null>;
}
