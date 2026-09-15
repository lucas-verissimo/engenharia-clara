import { describe, expect, it } from "vitest";
import {
  buildQuoteSummary,
  type QuoteRequest,
  validateQuoteRequest,
} from "./quote";

const emptyRequest: QuoteRequest = {
  name: "",
  service: "",
  description: "",
  contactPreference: "",
};

describe("validateQuoteRequest", () => {
  it("aceita o formulário totalmente opcional", () => {
    expect(validateQuoteRequest(emptyRequest)).toEqual({});
  });

  it("rejeita contexto curto, textos longos e opções adulteradas", () => {
    expect(
      validateQuoteRequest({
        name: "a".repeat(81),
        service: "Serviço inexistente",
        description: "curto",
        contactPreference: "Mensagem instantânea",
      }),
    ).toEqual({
      name: "Use no máximo 80 caracteres.",
      service: "Escolha uma opção disponível.",
      description: "Se preencher o contexto, use pelo menos 10 caracteres.",
      contactPreference: "Escolha uma opção disponível.",
    });
  });

  it("rejeita contexto acima do limite", () => {
    expect(
      validateQuoteRequest({ ...emptyRequest, description: "a".repeat(401) }),
    ).toEqual({ description: "Use no máximo 400 caracteres." });
  });
});

describe("buildQuoteSummary", () => {
  it("normaliza espaços e deixa explícito que nada foi enviado", () => {
    const summary = buildQuoteSummary({
      name: "  Marina  ",
      service: "Diagnóstico e documentação",
      description: "  Organizar documentos de demonstração.  ",
      contactPreference: "E-mail",
    });

    expect(summary).toContain("Nome: Marina");
    expect(summary).toContain("Contexto: Organizar documentos de demonstração.");
    expect(summary).toContain("não enviou nem armazenou os dados");
  });

  it("usa textos neutros quando nenhum campo é preenchido", () => {
    expect(buildQuoteSummary(emptyRequest)).toContain("Interesse: A definir");
  });
});
