/**
 * buildQuery
 * @param params
 * @param string | number | boolean>
 */
export function buildQuery(params: Record<string, string | number | boolean>): string {
  if (params === null || params === undefined) throw new Error("Invalid input");
  return Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&");
}
