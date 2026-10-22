const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(priceInCents: number): string {
  return brl.format(priceInCents / 100);
}
