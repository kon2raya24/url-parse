import { describe, it, expect } from "vitest";
import { parseUrl } from "../parseurl";

describe("parseUrl", () => {
  it("should be a function", () => {
    expect(typeof parseUrl).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => parseUrl(null as any)).toThrow();
  });
});
