import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import type { Product } from "../../../domain/entities/Product";
import { ProductModal } from "./ProductModal";

const product: Product = {
  name: "Iphone 11 PRO MAX BRANCO 1",
  description: "Descrição curta do iPhone",
  photoUrl: "https://exemplo.com/foto-iphone.png",
  price: 149990,
};

function renderModal(props: Partial<ComponentProps<typeof ProductModal>> = {}) {
  return render(
    <ProductModal product={product} onClose={() => {}} {...props} />,
  );
}

function cancelDialog() {
  const cancel = new Event("cancel", { cancelable: true });
  fireEvent(screen.getByRole("dialog"), cancel);
  return cancel;
}

describe("ProductModal", () => {
  it("abre o modal quando recebe um produto", () => {
    renderModal();

    expect(screen.getByRole("dialog")).toHaveAttribute("open");
  });

  it("fecha o modal quando o produto deixa de existir", () => {
    const { rerender } = renderModal();

    rerender(<ProductModal product={null} onClose={() => {}} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("mostra nome, preço, descrição e foto do produto", () => {
    renderModal();

    const dialog = screen.getByRole("dialog", {
      name: "Iphone 11 PRO MAX BRANCO 1",
    });
    expect(dialog).toHaveTextContent("R$ 1.499,90");
    expect(dialog).toHaveTextContent("Descrição curta do iPhone");
    expect(
      screen.getByRole("img", { name: "Iphone 11 PRO MAX BRANCO 1" }),
    ).toHaveAttribute("src", "https://exemplo.com/foto-iphone.png");
  });

  it("avisa para fechar ao clicar no botão Fechar", async () => {
    const onClose = vi.fn();
    renderModal({ onClose });

    await userEvent.click(screen.getByRole("button", { name: "Fechar" }));

    expect(onClose).toHaveBeenCalledOnce();
  });

  it("avisa para fechar quando o navegador cancela o modal (tecla Esc)", () => {
    const onClose = vi.fn();
    renderModal({ onClose });

    cancelDialog();

    expect(onClose).toHaveBeenCalledOnce();
  });

  it("impede o navegador de fechar sozinho, para o estado do pai decidir", () => {
    renderModal();

    const cancel = cancelDialog();

    expect(cancel.defaultPrevented).toBe(true);
  });

  it("começa com quantidade 01 e permite aumentar", async () => {
    renderModal();
    const quantity = screen.getByRole("status", { name: "Quantidade" });
    expect(quantity).toHaveTextContent("01");

    await userEvent.click(
      screen.getByRole("button", { name: "Aumentar quantidade" }),
    );

    expect(quantity).toHaveTextContent("02");
  });

  it("volta a quantidade para 01 ao abrir outro produto", async () => {
    const { rerender } = renderModal();
    await userEvent.click(
      screen.getByRole("button", { name: "Aumentar quantidade" }),
    );

    rerender(
      <ProductModal
        product={{ ...product, name: "Outro produto" }}
        onClose={() => {}}
      />,
    );

    expect(
      screen.getByRole("status", { name: "Quantidade" }),
    ).toHaveTextContent("01");
  });
  it("oferece o botão Comprar e o link para mais detalhes", () => {
    renderModal();

    expect(screen.getByRole("button", { name: "Comprar" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Veja mais detalhes do produto" }),
    ).toBeInTheDocument();
  });

  it("mostra o ícone no botão Fechar", () => {
    renderModal();

    const button = screen.getByRole("button", { name: "Fechar" });

    expect(button.querySelector("svg")).toBeInTheDocument();
  });
});
