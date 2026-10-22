import { describe, it, expect } from "vitest";
import { hasFreeShipping, installmentValue } from "./pricing";

describe("hasFreeShipping", () => {
  it("é verdadeiro para compras acima de R$ 200", () => {
    expect(hasFreeShipping(20001)).toBe(true);
  });

  it("é falso para compras abaixo de R$ 200", () => {
    expect(hasFreeShipping(19999)).toBe(false);
  });

  it('é falso para exatamente R$ 200 ("acima de" é estrito)', () => {
    expect(hasFreeShipping(20000)).toBe(false);
  });
});

describe("installmentValue", () => {
  it("divide o preço pelo número de parcelas", () => {
    expect(installmentValue(15000, 2)).toBe(7500);
  });

  it("arredonda para cima quando a divisão não é exata", () => {
    expect(installmentValue(14991, 2)).toBe(7496);
  });
});
