# ADR 0002 — Não publicar dados estruturados de negócio local

- Status: aceita
- Data: 2026-09-15

## Contexto

Dados estruturados `LocalBusiness` poderiam fazer mecanismos de busca interpretar a Engenharia Clara como empresa real.

## Decisão

Não incluir schema de negócio, endereço, telefone, avaliação ou horário. A indexação permanece desabilitada até existir uma URL pública do projeto demonstrativo e aprovação explícita.

## Consequências

Reduzimos o risco de apresentação enganosa. Metadados básicos de página e imagem social continuam disponíveis para uma futura URL canônica verificável.
