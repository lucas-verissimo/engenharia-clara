export type QuoteRequest = {
  name: string;
  service: string;
  description: string;
  contactPreference: string;
};

export type QuoteFieldErrors = Partial<Record<keyof QuoteRequest, string>>;

export const serviceOptions = [
  "Diagnóstico e documentação",
  "Plano de adequação",
  "Relatório de apoio",
  "Melhoria de processo",
] as const;

export const contactOptions = [
  "A definir em uma conversa",
  "E-mail",
  "Telefone",
  "Videoconferência",
] as const;

export function validateQuoteRequest(values: QuoteRequest): QuoteFieldErrors {
  const errors: QuoteFieldErrors = {};
  const nameLength = values.name.trim().length;
  const descriptionLength = values.description.trim().length;

  if (nameLength > 80) {
    errors.name = "Use no máximo 80 caracteres.";
  }

  if (values.service && !serviceOptions.some((option) => option === values.service)) {
    errors.service = "Escolha uma opção disponível.";
  }

  if (descriptionLength > 0 && descriptionLength < 10) {
    errors.description = "Se preencher o contexto, use pelo menos 10 caracteres.";
  } else if (descriptionLength > 400) {
    errors.description = "Use no máximo 400 caracteres.";
  }

  if (
    values.contactPreference &&
    !contactOptions.some((option) => option === values.contactPreference)
  ) {
    errors.contactPreference = "Escolha uma opção disponível.";
  }

  return errors;
}

export function buildQuoteSummary(values: QuoteRequest): string {
  const normalized = {
    name: values.name.trim() || "Não informado",
    service: values.service || "A definir",
    description: values.description.trim() || "A detalhar em uma conversa",
    contactPreference: values.contactPreference || "A definir em uma conversa",
  };

  return [
    "Resumo demonstrativo do pedido",
    `Nome: ${normalized.name}`,
    `Interesse: ${normalized.service}`,
    `Contexto: ${normalized.description}`,
    `Preferência de contato: ${normalized.contactPreference}`,
    "Observação: esta demonstração não enviou nem armazenou os dados.",
  ].join("\n");
}
