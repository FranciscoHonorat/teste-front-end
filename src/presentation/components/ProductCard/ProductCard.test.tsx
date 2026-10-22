import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import type { Product } from "../../../domain/entities/Product";
import { ProductCard } from "./ProductCard";

const product: Product = {
  name: "Iphone 11 PRO MAX BRANCO 1",
  description: "Iphone 11 PRO MAX BRANCO 1",
  photoUrl: "https://exemplo.com/foto-iphone.png",
  price: 15000,
};

function renderCard(overrides: Partial<Product> = {}) {
  render(
    <ProductCard product={{ ...product, ...overrides }} onSelect={() => {}} />,
  );
}

describe("ProductCard", () => {
  it("mostra o nome do produto como título", () => {
    renderCard();

    expect(
      screen.getByRole("heading", { name: "Iphone 11 PRO MAX BRANCO 1" }),
    ).toBeInTheDocument();
  });

  it("mostra o preço formatado em reais", () => {
    renderCard();

    expect(screen.getByText("R$ 150,00")).toBeInTheDocument();
  });

  it("mostra o parcelamento em 2x sem juros", () => {
    renderCard();

    expect(screen.getByText("ou 2x de R$ 75,00 sem juros")).toBeInTheDocument();
  });

  it('mostra "Frete grátis" para produtos acima de R$ 200', () => {
    renderCard({ price: 25000 });

    expect(screen.getByText("Frete grátis")).toBeInTheDocument();
  });

  it('não mostra "Frete grátis" para produtos de até R$ 200', () => {
    renderCard({ price: 20000 });

    expect(screen.queryByText("Frete grátis")).not.toBeInTheDocument();
  });

  it("mostra a foto com texto alternativo e dimensões fixas", () => {
    renderCard();

    const image = screen.getByRole("img", {
      name: "Iphone 11 PRO MAX BRANCO 1",
    });
    expect(image).toHaveAttribute("src", "https://exemplo.com/foto-iphone.png");
    expect(image).toHaveAttribute("width", "270");
    expect(image).toHaveAttribute("height", "240");
  });

  it("carrega a foto de forma preguiçosa (fica abaixo da dobra)", () => {
    renderCard();

    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("avisa qual produto foi escolhido ao clicar em Comprar", async () => {
    const onSelect = vi.fn();
    render(<ProductCard product={product} onSelect={onSelect} />);

    await userEvent.click(screen.getByRole("button", { name: "Comprar" }));

    expect(onSelect).toHaveBeenCalledWith(product);
  });
});
