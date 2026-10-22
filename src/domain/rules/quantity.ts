export const MIN_QUANTITY = 1;

export function decrementQuantity(quantity: number): number {
  return Math.max(MIN_QUANTITY, quantity - 1);
}

export function incrementQuantity(quantity: number): number {
  return quantity + 1;
}
