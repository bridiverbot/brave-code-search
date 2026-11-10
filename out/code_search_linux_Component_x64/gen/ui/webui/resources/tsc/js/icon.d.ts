/**
 * Generates a CSS url string.
 * @param s The URL to generate the CSS url for.
 * @return The CSS url string.
 */
export declare function getUrlForCss(s: string): string;
/**
 * A URL for the filetype icon for |filePath|. OS and theme dependent.
 */
export declare function getFileIconUrl(filePath: string): string;
/**
 * Returns the URL of the image, or an image set of URLs for the provided
 * path.  Resources in chrome://theme have multiple supported scale factors.
 *
 * @param path The path of the image.
 * @return The url, or an image set of URLs.
 */
export declare function getImage(path: string): string;
/**
 * Returns whether `url` is a favicon request URL, i.e. one that was or could
 * have been produced by `getFavicon()` or `getFaviconUrl()`. In extension pages
 * this is the `/_favicon/` URL of the extension, otherwise chrome://favicon2.
 */
export declare function isFaviconUrl(url: string): boolean;
/**
 * Creates a CSS image-set for a favicon.
 *
 * @param url URL of the favicon
 * @return image-set for the favicon
 */
export declare function getFavicon(url: string): string;
/** The list of optional parameters that can be passed to `getFaviconUrl()`. */
export interface GetFaviconUrlParams {
    isSyncedUrlForHistoryUi?: boolean;
    remoteIconUrlForUma?: string;
    size?: number;
    forceLightMode?: boolean;
    fallbackToHost?: boolean;
    forceEmptyDefaultFavicon?: boolean;
    scaleFactor?: string;
}
/**
 * Creates a favicon request URL based on the given parameters.
 *
 * @param url URL of the original page
 * @param optionalParams Options object that specifies additional parameters to
 *     configure the favicon request URL that's constructed by this function.
 *
 * @return URL for the favicon request.
 */
export declare function getFaviconUrl(url: string, optionalParams?: GetFaviconUrlParams): string;
/**
 * Creates a CSS image-set for a favicon request based on a page URL.
 *
 * @param url URL of the original page
 * @param isSyncedUrlForHistoryUi Should be set to true only if the
 *     caller is an UI aimed at displaying user history, and the requested url
 *     is known to be present in Chrome sync data.
 * @param remoteIconUrlForUma In case the entry is contained in sync
 *     data, we can pass the associated icon url.
 * @param size The favicon size.
 * @param forceLightMode Flag to force the service to show the light
 *     mode version of the default favicon.
 * @param fallbackToHost To allow for disabling the best match fallback
 *     behavior.
 * @param forceEmptyDefaultFavicon Flag to force the service to return an empty
 *     image as the default favicon.
 * @param scaleFactor The scale factor for the requested favicon (e.g. '2x').
 *
 * @return image-set for the favicon.
 */
export declare function getFaviconForPageURL(url: string, isSyncedUrlForHistoryUi: boolean, remoteIconUrlForUma?: string, size?: number, forceLightMode?: boolean, fallbackToHost?: boolean, forceEmptyDefaultFavicon?: boolean, scaleFactor?: string): string;
