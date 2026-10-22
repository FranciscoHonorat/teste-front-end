import { describe, it, expect } from "vitest";
import { formatQuantity } from "./formatQuantity";

describe("formatQuantity", () => {
  it("mostra quantidades de um dígito com zero à esquerda", () => {
    expect(formatQuantity(1)).toBe("01");
  });

  it("mostra quantidades de dois dígitos sem alteração", () => {
    expect(formatQuantity(12)).toBe("12");
  });
});
