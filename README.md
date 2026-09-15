# Engenharia Clara

Landing page institucional responsiva para uma consultoria de engenharia **fictícia**. O projeto demonstra descoberta de escopo, direção visual, implementação frontend, acessibilidade, testes e documentação — sem atribuir clientes, credenciais ou resultados inexistentes.

> A Engenharia Clara não é uma empresa real. Serviços, cenários e textos são demonstrativos. O formulário não transmite nem armazena dados.

## O que foi construído

- página única com apresentação, serviços, processo, cenários fictícios, FAQ e contato;
- identidade visual autoral inspirada em desenho técnico, criada com CSS e SVG;
- simulador de pedido que valida e gera um resumo somente no navegador;
- navegação responsiva e operável por teclado;
- metadados sociais, sitemap e regras de indexação condicionais;
- testes unitários, de componentes, acessibilidade e ponta a ponta;
- exportação estática adequada a Cloudflare Pages, sem servidor ou banco de dados.

## Executar localmente

Requisitos: Node.js 24 ou superior e npm.

```bash
npm ci
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Verificações

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Os testes de navegador iniciam o servidor de desenvolvimento automaticamente. Em um ambiente novo, instale antes o Chromium do Playwright com `npx playwright install chromium`.

## Configuração pública

Copie `.env.example` para `.env.local` somente quando houver URLs reais:

- `NEXT_PUBLIC_SITE_URL`: endereço público canônico;
- `NEXT_PUBLIC_ALLOW_INDEXING`: use `true` apenas depois da revisão final;
- `NEXT_PUBLIC_PORTFOLIO_URL`: endereço público do portfólio do autor;
- `NEXT_PUBLIC_SOURCE_URL`: repositório público do projeto.

Sem essa configuração, o site evita indexação, não cria canonical público e oculta links inexistentes.

## Implantação

1. Execute `npm ci`, as verificações e `npm run build`.
2. Publique a pasta `out` como site estático no Cloudflare Pages.
3. Configure as variáveis públicas no ambiente de build.
4. Mantenha `trailingSlash: true`: cada rota é materializada como arquivo estático e aceita acesso direto e atualização.
5. O arquivo `public/_headers` será copiado para `out/_headers` e aplicado pelo Cloudflare Pages.
6. Faça uma implantação de prévia e valide conteúdo, links, formulário local e responsividade.
7. Só então habilite a indexação na implantação de produção.

Não há API, segredo, banco, autenticação, analytics ou serviço externo. Veja [a arquitetura](docs/architecture.md), [o estudo de caso](docs/case-study.md), [as declarações de conteúdo](docs/content-disclaimer.md) e [o relatório local de qualidade](docs/evidence/quality-report.md).

## Licença

Código disponibilizado sob a licença MIT. A marca fictícia e o texto demonstrativo podem ser substituídos em derivados.

English documentation: [README.en.md](README.en.md).
