export const FREE_SHIPPING_THRESHOLD = 20000

export function hasFreeShipping(priceInCents: number): boolean {
  return priceInCents > FREE_SHIPPING_THRESHOLD
}

export function installmentValue(priceInCents: number, installments: number): number {
  return Math.ceil(priceInCents / installments)
}
