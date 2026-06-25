
// Type exports for consumers
// Add specific types as needed
/**
 * parseUrl
 * @param url
 */
export function parseUrl(url: string): { protocol: string; host: string; pathname: string; search: Record<string, string>; hash: string } {
  try {
    const parsed = new URL(url);
    const search: Record<string, string> = {};
    parsed.searchParams.forEach((v, k) => { search[k] = v; });
    return { protocol: parsed.protocol, host: parsed.host, pathname: parsed.pathname, search, hash: parsed.hash };
  } catch { throw new Error("Invalid URL"); }
}
