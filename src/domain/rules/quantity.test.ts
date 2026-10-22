import { describe, it, expect } from "vitest";
import { decrementQuantity, incrementQuantity } from "./quantity";

describe("decrementQuantity", () => {
  it("diminui a quantidade em 1", () => {
    expect(decrementQuantity(3)).toBe(2);
  });

  it("nunca fica abaixo de 1", () => {
    expect(decrementQuantity(1)).toBe(1);
  });
});

describe("incrementQuantity", () => {
  it("aumenta a quantidade em 1", () => {
    expect(incrementQuantity(1)).toBe(2);
  });
});
