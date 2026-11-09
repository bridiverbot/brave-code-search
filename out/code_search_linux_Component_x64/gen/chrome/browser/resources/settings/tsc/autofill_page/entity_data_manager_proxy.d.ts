type AccountInfo = chrome.autofillPrivate.AccountInfo;
type AttributeType = chrome.autofillPrivate.AttributeType;
type EntityInstance = chrome.autofillPrivate.EntityInstance;
type EntityInstanceWithLabels = chrome.autofillPrivate.EntityInstanceWithLabels;
type EntityType = chrome.autofillPrivate.EntityType;
type UpsertPassDetails = chrome.autofillPrivate.UpsertPassDetails;
export type EntityInstancesChangedListener = (entityInstances: EntityInstanceWithLabels[]) => void;
/**
 * This interface defines the autofill API wrapper that combines entity data
 * manager related methods.
 */
export interface EntityDataManagerProxy {
    /**
     * Gets currently signed-in user account info, or undefined if not signed-in.
     */
    getAccountInfo(): Promise<AccountInfo | undefined>;
    /**
     * Adds a new entity instance if it doesn't exist yet. Otherwise, it updates
     * the entity instance.
     */
    addOrUpdateEntityInstance(entityInstance: EntityInstance): Promise<void>;
    /**
     * Remove the entity instance by its id.
     */
    removeEntityInstance(guid: string): void;
    /**
     * Returns the user's entity instances with labels.
     */
    loadEntityInstances(): Promise<EntityInstanceWithLabels[]>;
    /**
     * Returns the entity instance by its guid.
     */
    getEntityInstanceByGuid(guid: string): Promise<EntityInstance>;
    /**
     * Returns a list of all enabled entity types which are not read only.
     */
    getWritableEntityTypes(): Promise<EntityType[]>;
    /**
     * Returns a list of all attribute types that can be set on an entity
     * instance.
     */
    getAllAttributeTypesForEntityTypeName(entityTypeName: number): Promise<AttributeType[]>;
    /**
     * Returns a list of all attribute types that are required to save an entity
     * instance. The list represents a disjunction: presenting any one attribute
     * is sufficient.
     */
    getRequiredAttributeTypesForEntityTypeName(entityTypeName: number): Promise<AttributeType[]>;
    /**
     * Adds a listener to changes in the entity instances.
     */
    addEntityInstancesChangedListener(listener: EntityInstancesChangedListener): void;
    /**
     * Removes a listener to changes in the entity instances.
     */
    removeEntityInstancesChangedListener(listener: EntityInstancesChangedListener): void;
    /**
     * Authenticates the user before viewing entity data. Returns true if
     * authentication was successful or if no authentication was required.
     */
    authenticateUserBeforeViewingEntityData(): Promise<boolean>;
    /**
     * Updates the pref that controls whether users need to authenticate
     * to view sensitive entity information. This method itself triggers
     * reauthentication
     */
    toggleAutofillAiReauthRequirement(): void;
    /**
     * Gets the opt-in status for AutofillAi for the current user.
     */
    getOptInStatus(): Promise<boolean>;
    /**
     * Sets the opt-in status for AutofillAi for the current user. Returns whether
     * setting was successful, which more precisely means whether the user is
     * eligible to opt into Autofill AI.
     */
    setOptInStatus(optedIn: boolean): Promise<boolean>;
    /**
     * Gets the opt-in status for walletable pass detection for the current user.
     */
    getWalletablePassDetectionOptInStatus(): Promise<boolean>;
    /**
     * Sets the opt-in status for walletable pass detection for the current user.
     */
    setWalletablePassDetectionOptInStatus(optedIn: boolean): Promise<boolean>;
    /**
     * Preloads legal disclosure lines and context token for upserting a public
     * pass into the backend cache.
     */
    preloadDetailsForUpsertPass(entityTypeName: number): void;
    /**
     * Fetches legal disclosure lines and context token for upserting a public
     * pass.
     */
    getDetailsForUpsertPass(entityTypeName: number): Promise<UpsertPassDetails | null>;
}
export declare class EntityDataManagerProxyImpl implements EntityDataManagerProxy {
    getAccountInfo(): Promise<AccountInfo | undefined>;
    addOrUpdateEntityInstance(entityInstance: EntityInstance): Promise<void>;
    removeEntityInstance(guid: string): void;
    loadEntityInstances(): Promise<chrome.autofillPrivate.EntityInstanceWithLabels[]>;
    getEntityInstanceByGuid(guid: string): Promise<chrome.autofillPrivate.EntityInstance>;
    getWritableEntityTypes(): Promise<chrome.autofillPrivate.EntityType[]>;
    getAllAttributeTypesForEntityTypeName(entityTypeName: number): Promise<chrome.autofillPrivate.AttributeType[]>;
    getRequiredAttributeTypesForEntityTypeName(entityTypeName: number): Promise<AttributeType[]>;
    addEntityInstancesChangedListener(listener: EntityInstancesChangedListener): void;
    removeEntityInstancesChangedListener(listener: EntityInstancesChangedListener): void;
    authenticateUserBeforeViewingEntityData(): Promise<boolean>;
    toggleAutofillAiReauthRequirement(): void;
    getOptInStatus(): Promise<boolean>;
    setOptInStatus(optedIn: boolean): Promise<boolean>;
    getWalletablePassDetectionOptInStatus(): Promise<boolean>;
    setWalletablePassDetectionOptInStatus(optedIn: boolean): Promise<boolean>;
    preloadDetailsForUpsertPass(entityTypeName: number): void;
    getDetailsForUpsertPass(entityTypeName: number): Promise<UpsertPassDetails | null>;
    static getInstance(): EntityDataManagerProxy;
    static setInstance(obj: EntityDataManagerProxy): void;
}
export {};
