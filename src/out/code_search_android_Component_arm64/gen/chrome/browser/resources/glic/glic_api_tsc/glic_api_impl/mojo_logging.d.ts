/**
 * Converts a value to a JSON string for debug logging.
 *
 * Inclusively serializes primitive types, BigInt, plain objects, Arrays, Maps,
 * Sets, and ArrayBuffers, while preventing traversal into arbitrary class
 * instances and circular structures. Long arrays are truncated with '...'.
 */
export declare function toDebugJson(v: unknown): string;
export interface MojoLoggingOptions {
    enabled?: boolean;
    prefix?: string;
    ignoreMethods?: Set<string>;
}
/**
 * Wraps a Mojo Remote or Receiver handler object in a logging Proxy if logging
 * is enabled (either via `options.enabled` or
 * `getGuestLoadTimeData().loggingEnabled`). If logging is disabled, returns
 * `target` directly with no wrapper or performance overhead.
 */
export declare function maybeWrapWithLogging<T extends object>(target: T, options?: MojoLoggingOptions): T;
