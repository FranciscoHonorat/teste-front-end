import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import { describe, it, expect, vi } from "vitest";
import type { Product } from "../../../domain/entities/Product";
import { ProductShowcase } from "./ProductShowcase";

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

function renderShowcase(
  props: Partial<ComponentProps<typeof ProductShowcase>> = {},
) {
  render(
    <ProductShowcase
      title="Produtos relacionados"
      state={{ status: "success", products }}
      onSelect={() => {}}
      {...props}
    />,
  );
}

describe("ProductShowcase", () => {
  it("mostra o título da vitrine", () => {
    renderShowcase();

    expect(
      screen.getByRole("heading", { level: 2, name: "Produtos relacionados" }),
    ).toBeInTheDocument();
  });

  it("mostra um card para cada produto", () => {
    renderShowcase();

    expect(
      screen.getByRole("heading", { level: 3, name: "Iphone 11" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Iphone 13 Mini" }),
    ).toBeInTheDocument();
  });

  it("avisa que está carregando enquanto os produtos não chegam", () => {
    renderShowcase({ state: { status: "loading" } });

    expect(screen.getByRole("status")).toHaveTextContent(
      "Carregando produtos…",
    );
  });

  it("mostra uma mensagem de erro quando os produtos não carregam", () => {
    renderShowcase({ state: { status: "error" } });

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Não foi possível carregar os produtos.",
    );
  });

  it("avisa qual produto foi escolhido", async () => {
    const onSelect = vi.fn();
    renderShowcase({ onSelect });
    const card = screen
      .getByRole("heading", { name: "Iphone 13 Mini" })
      .closest("article");
    if (!card) throw new Error("Card não encontrado");

    await userEvent.click(
      within(card).getByRole("button", { name: "Comprar" }),
    );

    expect(onSelect).toHaveBeenCalledWith(products[1]);
  });

  it('mostra o link "Ver todos" quando não tem abas', () => {
    renderShowcase();

    expect(screen.getByRole("link", { name: "Ver todos" })).toBeInTheDocument();
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  });

  it("troca a aba ativa ao clicar", async () => {
    renderShowcase({ withTabs: true });
    expect(screen.getByRole("tab", { name: "Celular" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    await userEvent.click(screen.getByRole("tab", { name: "Tablets" }));

    expect(screen.getByRole("tab", { name: "Tablets" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(
      screen.getByRole("tabpanel", { name: "Tablets" }),
    ).toBeInTheDocument();
  });

  it("troca de aba com as setas do teclado", async () => {
    renderShowcase({ withTabs: true });
    await userEvent.click(screen.getByRole("tab", { name: "Celular" }));

    await userEvent.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Acessórios" })).toHaveFocus();
    expect(screen.getByRole("tab", { name: "Acessórios" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
