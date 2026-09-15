import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { QuoteRequest } from "./QuoteRequest";

describe("QuoteRequest", () => {
  it("explica a simulação antes de qualquer interação", () => {
    render(<QuoteRequest />);

    expect(screen.getByText(/funciona apenas no seu navegador/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /gerar resumo local/i })).toBeEnabled();
  });

  it("mostra um erro acessível sem gerar resultado", async () => {
    const user = userEvent.setup();
    render(<QuoteRequest />);

    await user.type(screen.getByLabelText(/contexto inicial/i), "curto");
    await user.click(screen.getByRole("button", { name: /gerar resumo local/i }));

    expect(screen.getByText(/pelo menos 10 caracteres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contexto inicial/i)).toHaveAttribute("aria-invalid", "true");
    expect(screen.queryByRole("heading", { name: /resumo para/i })).not.toBeInTheDocument();
  });

  it("gera e copia um resumo apenas no navegador", async () => {
    const user = userEvent.setup();
    const writeText = vi.spyOn(navigator.clipboard, "writeText");
    render(<QuoteRequest />);

    await user.type(screen.getByLabelText(/como podemos chamar/i), "Marina");
    await user.selectOptions(
      screen.getByLabelText(/qual é o interesse/i),
      "Diagnóstico e documentação",
    );
    await user.type(
      screen.getByLabelText(/contexto inicial/i),
      "Organizar documentos de demonstração.",
    );
    await user.click(screen.getByRole("button", { name: /gerar resumo local/i }));

    const result = screen.getByLabelText(/resumo demonstrativo gerado/i);
    expect(result).toHaveValue();
    expect((result as HTMLTextAreaElement).value).toContain("Nome: Marina");
    expect(screen.getByText(/nenhum dado foi enviado ou armazenado/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /copiar/i }));
    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining("Nome: Marina"),
    );
  });
});
