import type { SettingsRoutes } from './router.js';
import { Route, Router } from './router.js';
/**
 * @return A router with the browser settings routes.
 */
export declare function buildRouter(): Router;
export declare function resetRouterForTesting(router?: Router): void;
export declare let routes: SettingsRoutes;
export declare function getTopLevelRoute(): Route;
