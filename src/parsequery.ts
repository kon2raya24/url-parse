export function parseQuery(query: string): Record<string, string> {
  const cleaned = query.replace(/^\?/, "");
  if (!cleaned) return {};
  return Object.fromEntries(cleaned.split("&").map(pair => {
    const [k, ...rest] = pair.split("=");
    return [decodeURIComponent(k), decodeURIComponent(rest.join("="))];
  }));
}
