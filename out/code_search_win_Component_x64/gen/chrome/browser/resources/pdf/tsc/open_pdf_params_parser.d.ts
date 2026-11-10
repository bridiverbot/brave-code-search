import type { NamedDestinationMessageData, Point, Rect } from './constants.js';
import { FittingType } from './constants.js';
import type { Size } from './viewport.js';
export interface OpenPdfParams {
    boundingBox?: Rect;
    pageIndex?: number;
    position?: Point;
    url?: string;
    view?: FittingType;
    viewPosition?: number;
    zoom?: number;
}
export declare enum ViewMode {
    FIT = "fit",
    FIT_B = "fitb",
    FIT_BH = "fitbh",
    FIT_BV = "fitbv",
    FIT_H = "fith",
    FIT_R = "fitr",
    FIT_V = "fitv",
    XYZ = "xyz"
}
type GetNamedDestinationCallback = (name: string) => Promise<NamedDestinationMessageData>;
type GetPageBoundingBoxCallback = (page: number) => Promise<Rect>;
export declare class OpenPdfParamsParser {
    private getNamedDestinationCallback_;
    private getPageBoundingBoxCallback_;
    private pageCount_?;
    private viewportDimensions_?;
    /**
     * @param getNamedDestinationCallback Function called to fetch information for
     *     a named destination.
     * @param getPageBoundingBoxCallback Function called to fetch information for
     *     a page's bounding box.
     */
    constructor(getNamedDestinationCallback: GetNamedDestinationCallback, getPageBoundingBoxCallback: GetPageBoundingBoxCallback);
    /**
     * Calculate the zoom level needed for making viewport focus on a rectangular
     * area in the PDF document.
     * @param size The dimensions of the rectangular area to be focused on.
     * @return The zoom level needed for focusing on the rectangular area. A zoom
     *     level of 0 indicates that the zoom level cannot be calculated with the
     *     given information.
     */
    private calculateRectZoomLevel_;
    /**
     * Parse zoom parameter of open PDF parameters. The PDF should be opened at
     * the specified zoom level.
     * @return Map with zoom parameters (zoom and position).
     */
    private parseZoomParam_;
    /**
     * Parse view parameter of open PDF parameters. The PDF should be opened at
     * the specified fitting type mode and position.
     * @param paramValue Params to parse.
     * @param pageNumber Page number for bounding box, if there is a fit bounding
     *     box param. `pageNumber` is 1-indexed and must be bounded by 1 and the
     *     number of pages in the PDF, inclusive.
     * @return Map with view parameters (view and viewPosition).
     */
    private parseViewParam_;
    /**
     * Parse view parameters which come from nameddest.
     * @param paramValue Params to parse.
     * @param pageNumber Page number for bounding box, if there is a fit bounding
     *     box param.
     * @return Map with view parameters.
     */
    private parseNameddestViewParam_;
    /** Parse the parameters encoded in the fragment of a URL. */
    private parseUrlParams_;
    /** Store the number of pages. */
    setPageCount(pageCount: number): void;
    /** Store current viewport's dimensions. */
    setViewportDimensions(dimensions: Size): void;
    /**
     * @param url that needs to be parsed.
     * @return Whether the toolbar UI element should be shown.
     */
    shouldShowToolbar(url: string): boolean;
    /**
     * @param url that needs to be parsed.
     * @param sidenavCollapsed the default sidenav state if there are no
     *     overriding open parameters.
     * @return Whether the sidenav UI element should be shown.
     */
    shouldShowSidenav(url: string, sidenavCollapsed: boolean): boolean;
    /**
     * Fetch text fragment directives that appear in the PDF URL if any.
     *
     * @param url that needs to be parsed.
     * @return The text fragment directives or an empty array if they do not
     *     exist.
     */
    getTextFragments(url: string): string[];
    /**
     * Parse PDF url parameters. These parameters are mentioned in the url
     * and specify actions to be performed when opening pdf files.
     * See http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/
     * pdfs/pdf_open_parameters.pdf for details.
     * @param url that needs to be parsed.
     */
    getViewportFromUrlParams(url: string): Promise<OpenPdfParams>;
}
export {};
