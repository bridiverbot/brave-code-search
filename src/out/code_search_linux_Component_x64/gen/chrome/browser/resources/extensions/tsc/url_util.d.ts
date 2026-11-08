export declare const SUBDOMAIN_SPECIFIER = "*.";
/**
 * Returns a favicon url for a given site.
 */
export declare function getFaviconUrl(site: string): string;
/**
 * Returns if the given site matches all of its subdomains.
 */
export declare function matchesSubdomains(site: string): boolean;
