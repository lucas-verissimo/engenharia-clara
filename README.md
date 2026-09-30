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

## Implantação na Vercel

1. Importe o repositório `lucas-verissimo/engenharia-clara` na Vercel.
2. Mantenha o framework detectado como Next.js e o comando de build padrão `npm run build`.
3. Configure as variáveis públicas:
   - `NEXT_PUBLIC_SITE_URL`: URL definitiva da implantação, sem barra final;
   - `NEXT_PUBLIC_ALLOW_INDEXING`: `true` somente após validar a URL de produção;
   - `NEXT_PUBLIC_PORTFOLIO_URL`: `https://lucas-verissimo.github.io/Portifolio/`;
   - `NEXT_PUBLIC_SOURCE_URL`: `https://github.com/lucas-verissimo/engenharia-clara`.
4. Faça uma implantação de prévia e valide conteúdo, links, formulário local e responsividade.
5. Promova a versão revisada para produção. Se a URL mudar, atualize `NEXT_PUBLIC_SITE_URL` e gere uma nova implantação.

O projeto usa exportação estática e não depende de API, banco ou segredos. O arquivo `public/_headers` é específico de hospedagens que o reconheçam; na Vercel, cabeçalhos adicionais podem ser configurados separadamente se necessário.

### Alternativa: Cloudflare Pages

Execute `npm run build` e publique a pasta `out`. O arquivo `public/_headers` será copiado para a exportação e `trailingSlash: true` mantém as rotas estáticas acessíveis por URL direta.

Não há API, segredo, banco, autenticação, analytics ou serviço externo. Veja [a arquitetura](docs/architecture.md), [o estudo de caso](docs/case-study.md), [as declarações de conteúdo](docs/content-disclaimer.md) e [o relatório local de qualidade](docs/evidence/quality-report.md).

## Licença

Código disponibilizado sob a licença MIT. A marca fictícia e o texto demonstrativo podem ser substituídos em derivados.

English documentation: [README.en.md](README.en.md).
