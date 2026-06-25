import { describe, it, expect } from "vitest";
import { buildQuery } from "../buildquery";

describe("buildQuery", () => {
  it("should be a function", () => {
    expect(typeof buildQuery).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => buildQuery(null as any)).toThrow();
  });
});
