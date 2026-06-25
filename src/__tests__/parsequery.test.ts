import { describe, it, expect } from "vitest";
import { parseQuery } from "../parsequery";

describe("parseQuery", () => {
  it("should be a function", () => {
    expect(typeof parseQuery).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => parseQuery(null as any)).toThrow();
  });
});
