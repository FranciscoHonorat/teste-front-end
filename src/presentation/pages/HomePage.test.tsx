import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import type { Product } from "../../domain/entities/Product";
import { HomePage } from "./HomePage";

const products: Product[] = [
  {
    name: "Iphone 11",
    description: "Iphone 11",
    photoUrl: "iphone11.png",
    price: 15000,
  },
  {
    name: "Iphone 13 Mini",
    description: "Iphone 13 Mini",
    photoUrl: "iphone13.png",
    price: 9000,
  },
];

function renderHome() {
  const listProducts = { execute: vi.fn(() => Promise.resolve(products)) };
  render(<HomePage listProducts={listProducts} />);
  return listProducts;
}

async function clickBuyOnFirst(productName: string) {
  const [title] = await screen.findAllByRole("heading", {
    level: 3,
    name: productName,
  });
  const card = title.closest("article");
  if (!card) throw new Error(`Card de "${productName}" não encontrado`);
  await userEvent.click(within(card).getByRole("button", { name: "Comprar" }));
}

describe("HomePage", () => {
  it("busca os produtos uma única vez para as três vitrines", async () => {
    const listProducts = renderHome();

    expect(
      await screen.findAllByRole("heading", { level: 3, name: "Iphone 11" }),
    ).toHaveLength(3);
    expect(listProducts.execute).toHaveBeenCalledOnce();
  });

  it("tem as regiões principais da página", async () => {
    renderHome();

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Venha conhecer nossas promoções",
      }),
    ).toBeInTheDocument();
    await screen.findAllByRole("article");
  });

  it("abre o modal com o produto clicado", async () => {
    renderHome();

    await clickBuyOnFirst("Iphone 13 Mini");

    expect(
      screen.getByRole("dialog", { name: "Iphone 13 Mini" }),
    ).toHaveTextContent("R$ 90,00");
  });

  it("fecha o modal ao clicar em Fechar", async () => {
    renderHome();
    await clickBuyOnFirst("Iphone 11");

    await userEvent.click(screen.getByRole("button", { name: "Fechar" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
