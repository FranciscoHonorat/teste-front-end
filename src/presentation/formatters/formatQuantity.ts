export function formatQuantity(quantity: number): string {
  return String(quantity).padStart(2, '0')
}
