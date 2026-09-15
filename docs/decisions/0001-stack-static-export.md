# ADR 0001 — Next.js com exportação estática

- Status: aceita
- Data: 2026-09-15

## Contexto

O projeto precisa demonstrar domínio de React e Next.js, funcionar em hospedagem gratuita e não possui requisitos reais de persistência ou processamento no servidor.

## Decisão

Usar Next.js App Router, TypeScript estrito, CSS Modules e `output: "export"`. Manter conteúdo em módulos tipados e limitar componentes de cliente ao menu e simulador.

## Consequências

A implantação é barata, portátil e simples de reverter. Recursos dependentes de servidor não podem ser usados sem revisar esta decisão. Se surgir um canal real de contato, ele deve ser projetado como integração separada, com segurança e privacidade explícitas.
