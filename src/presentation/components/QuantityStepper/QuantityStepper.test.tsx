import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { QuantityStepper } from "./QuantityStepper";

describe("QuantityStepper", () => {
  it("mostra a quantidade com dois dígitos", () => {
    render(<QuantityStepper value={1} onChange={() => {}} />);

    expect(
      screen.getByRole("status", { name: "Quantidade" }),
    ).toHaveTextContent("01");
  });

  it("aumenta a quantidade ao clicar em +", async () => {
    const onChange = vi.fn();
    render(<QuantityStepper value={1} onChange={onChange} />);

    await userEvent.click(
      screen.getByRole("button", { name: "Aumentar quantidade" }),
    );

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("diminui a quantidade ao clicar em –", async () => {
    const onChange = vi.fn();
    render(<QuantityStepper value={3} onChange={onChange} />);

    await userEvent.click(
      screen.getByRole("button", { name: "Diminuir quantidade" }),
    );

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("desabilita o – na quantidade mínima", () => {
    render(<QuantityStepper value={1} onChange={() => {}} />);

    expect(
      screen.getByRole("button", { name: "Diminuir quantidade" }),
    ).toBeDisabled();
  });
});
