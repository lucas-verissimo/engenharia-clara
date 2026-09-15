import { describe, expect, it } from "vitest";
import { getCurrentYear } from "./year";

describe("getCurrentYear", () => {
  it("extrai o ano da data recebida", () => {
    expect(getCurrentYear(new Date("2026-09-15T12:00:00-03:00"))).toBe(2026);
  });
});
