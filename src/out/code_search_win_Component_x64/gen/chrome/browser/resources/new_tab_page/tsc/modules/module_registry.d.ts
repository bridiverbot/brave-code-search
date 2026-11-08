import type { Module, ModuleDescriptor } from './module_descriptor.js';
export declare class ModuleRegistry {
    static getInstance(): ModuleRegistry;
    static setInstance(newInstance: ModuleRegistry): void;
    private descriptors_;
    /** Creates a registry populated with a list of descriptors. */
    constructor(descriptors: ModuleDescriptor[]);
    /**
     * Initializes enabled modules as reported by `getModulesIdNames` excluding
     * those that have been disabled for the current profile and returns the
     * initialized modules.
     * @param timeout Timeout in milliseconds after which initialization of a
     *     particular module aborts.
     */
    initializeModules(timeout: number): Promise<Module[]>;
    /**
     * Initializes a given list of modules based on the provided module ids.
     * Serves as a convenience method for cases where the caller already knows the
     * desired list of module ids to load.
     *
     * @param moduleIds A list of module ids to be leveraged when determining the
     *     modules to be initialized.
     * @param timeout Timeout in milliseconds after which initialization of a
     *     particular module aborts.
     */
    initializeModulesHavingIds(modulesIds: string[], timeout: number): Promise<Module[]>;
    /**
     * Initializes a module based on the provided module id.
     * Serves as a convenience method for cases where the caller already knows the
     * desired module id to load.
     *
     * @param moduleId A module id to be leveraged when determining the
     *     module to be initialized.
     * @param timeout Timeout in milliseconds after which initialization of a
     *     the module aborts.
     */
    initializeModuleById(id: string, timeout: number): Promise<Module | null>;
}
