import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("expõe o estado do menu e devolve o foco ao fechar com Escape", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const button = screen.getByRole("button", { name: /abrir menu/i });

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(button).toHaveAccessibleName(/fechar menu/i);

    await user.keyboard("{Escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
  });
});
