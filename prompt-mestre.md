# Prompt mestre — Engenharia Clara

## Como usar este arquivo

Este arquivo é o briefing executável do projeto demonstrativo Engenharia Clara. Em uma tarefa futura, o Codex deve lê-lo integralmente e implementar o projeto nesta pasta. Preserve o arquivo no repositório e atualize-o quando decisões estruturais mudarem.

## Papel e modo de execução

Você é o engenheiro responsável pelo produto, frontend, qualidade, documentação e preparação de publicação deste projeto.

Antes de modificar qualquer coisa:

1. Leia `../../AGENTS.md` e `../../planejamento-portfolio.md`.
2. Inspecione todos os arquivos desta pasta, incluindo alterações não commitadas.
3. Trabalhe somente em `01-engenharia-clara`, salvo autorização explícita.
4. Preserve mudanças válidas existentes e não reinicialize o projeto para impor sua preferência.
5. Use decisões reversíveis para avançar sem perguntas rotineiras. Se faltarem dados de contato, use configuração e esconda CTAs externos; não invente dados.
6. Se o usuário pedir implementação, prossiga até uma versão utilizável, testada e documentada. Não entregue apenas wireframe ou scaffold.
7. Não crie subagentes sem pedido explícito, conforme as regras do workspace.
8. Verifique versões estáveis e compatibilidade em documentação oficial no momento da implementação. Respeite o lockfile existente.
9. Não publique, compre serviço ou registre domínio sem autorização na tarefa atual.

## Missão do projeto

Criar um site institucional de página única para uma empresa fictícia de engenharia e serviços técnicos, com acabamento suficiente para demonstrar a clientes que Lucas sabe transformar um briefing em uma página profissional, responsiva, acessível, performática e fácil de manter.

Este projeto deve provar:

- React, Next.js e TypeScript;
- HTML semântico e CSS responsivo;
- organização de conteúdo e componentes;
- acessibilidade e SEO técnico;
- cuidado com performance;
- manutenção por alterações pequenas e versionadas;
- publicação estática sem backend desnecessário.

O site é uma demonstração autoral. A interface e a documentação devem deixar claro que a empresa, os projetos, os números e os contatos são fictícios.

## Público fictício e problema

A Engenharia Clara é uma pequena empresa fictícia de consultoria técnica industrial. Seu cliente típico chega pelo celular, precisa entender os serviços rapidamente e quer solicitar uma conversa inicial.

Problemas que a página resolve:

- serviços apresentados de forma confusa;
- falta de hierarquia entre especialidades;
- página antiga que quebra no celular;
- ausência de sinais de processo e organização;
- contato escondido ou difícil;
- metadados e compartilhamento ruins.

Não afirme que a empresa possui credenciais, registros, clientes ou resultados reais. Evite orientações técnicas que possam ser interpretadas como laudo, conformidade legal ou consultoria de segurança.

## Escopo funcional

### Cabeçalho

- marca textual “Engenharia Clara” criada para a demonstração;
- navegação por âncoras: Serviços, Processo, Diferenciais, Dúvidas e Contato;
- CTA “Solicitar conversa” que leva à seção de contato;
- menu móvel acessível;
- cabeçalho legível sobre o hero e em rolagem, sem ocupar espaço excessivo.

### Hero

- título que comunica consultoria técnica industrial com clareza;
- subtítulo curto e sem promessa regulatória;
- CTA primário para contato;
- CTA secundário para conhecer serviços;
- composição visual própria em CSS/SVG, inspirada em desenho técnico, estrutura e precisão;
- rótulo visível “Empresa fictícia — projeto demonstrativo”.

### Serviços

Criar três ou quatro serviços fictícios e seguros, por exemplo:

- diagnóstico e documentação técnica;
- organização de planos de adequação;
- inspeções e relatórios de apoio;
- consultoria para melhorias de processo.

Cada card deve ter nome, descrição, exemplos do que pode ser alinhado e CTA interno. Não usar “garantia de conformidade”, “certificação” ou responsabilidade técnica real.

### Processo

Apresentar um fluxo em quatro etapas:

1. conversa e levantamento;
2. definição do escopo;
3. análise e documentação;
4. apresentação e próximos passos.

O texto deve demonstrar organização sem simular um contrato real.

### Diferenciais

Use diferenciais de processo, não conquistas inventadas:

- comunicação objetiva;
- escopo documentado;
- entregas organizadas;
- acompanhamento por etapas;
- linguagem compreensível para responsáveis técnicos e gestores.

Não adicionar logos de clientes, depoimentos ou números como “100 projetos”.

### Cenários de atendimento

Inclua uma seção com três situações fictícias, claramente rotuladas como exemplos:

- empresa organizando documentação de uma máquina;
- equipe planejando uma melhoria de processo;
- gestor reunindo informações antes de contratar um laudo especializado.

Não apresente esses cenários como casos reais nem como trabalho executado.

### Perguntas frequentes

Entre cinco e sete perguntas:

- como começa o atendimento;
- quais informações são necessárias;
- como o escopo é definido;
- atendimento remoto ou presencial, sem informar local inexistente;
- diferença entre conversa inicial e serviço contratado;
- responsabilidade por validações técnicas formais;
- prazo definido após análise.

Use acordeão acessível somente se ele melhorar a leitura. O conteúdo deve continuar compreensível sem animação.

### Contato

Não criar backend. Oferecer uma simulação de pedido de orçamento:

- campos opcionais locais: nome, tipo de serviço, breve descrição e forma preferida de retorno;
- validação no navegador;
- ao enviar, não transmitir dados;
- mostrar mensagem clara: “Demonstração: nenhum dado foi enviado”;
- permitir copiar um resumo do pedido para a área de transferência;
- alternativa sem JavaScript com texto de instrução.

Não usar telefone, e-mail, endereço ou WhatsApp falsos. Se o usuário fornecer contato para a demo, colocar em configuração separada e confirmar se pode ser público.

### Rodapé

- nome fictício;
- aviso de demonstração;
- ano calculado dinamicamente;
- link para código, estudo de caso e portfólio quando URLs reais existirem;
- nenhum link vazio ou `#` sem função.

## Direção visual

O design deve parecer uma empresa técnica pequena e competente:

- paleta: azul-aço, grafite, off-white e laranja de segurança usado com moderação;
- elementos de desenho técnico, linhas, grades e medidas como decoração discreta;
- fotografia somente se for própria, licenciada ou gerada para o projeto; registre a origem e a licença;
- não use imagens genéricas de pessoas apertando mãos;
- cartões com hierarquia clara e pouca sombra;
- títulos fortes, texto confortável e largura de leitura controlada;
- sem carrossel, vídeo automático, parallax pesado ou contadores falsos;
- animações sutis e compatíveis com redução de movimento.

Defina design tokens. Use ícones próprios ou biblioteca com licença compatível, registrando-a no README.

## Arquitetura de software

### Stack obrigatória

- Next.js com App Router;
- React;
- TypeScript estrito;
- `output: 'export'` para hospedagem estática;
- CSS Modules como preferência para evidenciar CSS, salvo stack existente equivalente;
- conteúdo em objeto TypeScript ou JSON validado;
- Vitest para lógica e componentes relevantes;
- Playwright para navegação e responsividade;
- ESLint e checagem de tipos.

Evite biblioteca de componentes completa. O objetivo é demonstrar domínio de HTML/CSS e componentes simples.

### Separação de responsabilidades

- `app`: composição de página, metadados e arquivos especiais;
- `components/sections`: seções de negócio;
- `components/ui`: primitives acessíveis pequenas;
- `content`: textos e dados fictícios;
- `lib`: utilidades puras, como construção do resumo e validação;
- `styles`: tokens e estilos globais;
- `tests`: testes de fluxo.

Estrutura sugerida:

```text
src/
  app/
    page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
    opengraph-image.tsx ou imagem estática
  components/
    header/
    sections/
    quote-request/
    ui/
  content/
    company.ts
    services.ts
    faq.ts
  lib/
    quote-summary.ts
    validation.ts
  styles/
    tokens.css
    globals.css
public/
  images/
tests/
docs/
```

### Estado e dados

- Nenhum estado global.
- Estado local apenas no menu, acordeão e formulário simulado.
- Nenhum `fetch` no caminho principal.
- Conteúdo centralizado para facilitar troca solicitada por um cliente.
- Não guardar dados do formulário em localStorage, analytics ou log.

## SEO técnico

- `title` e description específicos;
- canonical configurável para a URL real;
- Open Graph e Twitter card com imagem própria;
- sitemap e robots;
- JSON-LD de `ProfessionalService` ou tipo mais adequado somente como entidade fictícia, com aviso e sem endereço/avaliação falsos;
- headings em ordem;
- links internos descritivos;
- imagens dimensionadas e com textos alternativos;
- conteúdo renderizado no HTML estático.

Se dados estruturados de negócio fictício puderem confundir mecanismos de busca, não os publique; documente a decisão em ADR.

## Acessibilidade

- link para pular ao conteúdo;
- landmarks corretos;
- um `h1`;
- foco visível;
- menu móvel com `aria-expanded`, nome acessível, `Escape` e retorno de foco;
- acordeão com botão real e associação entre controle e painel;
- formulário com labels, instruções e erros associados;
- feedback de cópia anunciado por região `aria-live` sem excesso;
- contraste WCAG AA;
- funcionamento a 200% de zoom;
- ordem de tabulação natural;
- `prefers-reduced-motion` respeitado.

## Responsividade

Validar pelo menos:

- 320 × 568;
- 375 × 667;
- 768 × 1024;
- 1024 × 768;
- 1440 × 900.

Regras:

- nenhum elemento deve causar overflow horizontal;
- imagens com `max-width: 100%` e dimensões conhecidas;
- grids usam `minmax(0, 1fr)` quando necessário;
- texto não depende de quebra manual rígida;
- CTAs continuam visíveis sem cobrir conteúdo;
- áreas de toque têm tamanho confortável;
- tabelas devem ser evitadas; se surgirem, precisam de tratamento móvel.

## Caso de manutenção obrigatório

Além do site final, documente uma alteração simulada equivalente a uma solicitação real de cliente:

- reorganizar quatro cards em grade 2 × 2 no desktop e coluna no celular;
- trocar duas imagens e dois links;
- adicionar dois cards de depoimento, mas usar “Comentários fictícios de demonstração” ou, preferencialmente, substituir por “O que será entregue” para não simular clientes;
- atualizar pacotes/serviços;
- garantir ano dinâmico no rodapé.

Registre:

1. issue com briefing e critérios;
2. estado anterior reproduzível por tag ou fixture;
3. branch e commits focados;
4. pull request com screenshots desktop/celular;
5. testes afetados;
6. resumo de rollback.

Se ainda não houver repositório remoto, crie os documentos equivalentes em `docs/change-case/` e deixe passos para convertê-los em issue/PR depois. Não finja que um PR público existe.

## Testes

### Unitários/componentes

- validação do formulário simulado;
- geração do resumo copiado;
- ano do rodapé;
- interação do menu/acordeão se houver lógica relevante;
- renderização sem links inexistentes.

### Ponta a ponta

- navegação do hero para serviços e contato;
- menu móvel por teclado;
- preenchimento inválido e válido do pedido simulado;
- confirmação explícita de que nenhum dado foi enviado;
- cópia do resumo quando suportada;
- nenhum overflow em 320 px;
- links internos e externos configurados;
- auditoria de acessibilidade da página principal.

### Qualidade

Execute lint, tipos, testes e build de produção. Verifique manualmente console e Network: a página não deve fazer requisições inesperadas.

Metas Lighthouse na versão publicada:

- Performance ≥ 90;
- Accessibility ≥ 95;
- Best Practices ≥ 95;
- SEO ≥ 95.

## Segurança e privacidade

- Sem backend e sem armazenamento de dados.
- Sem chaves, tokens ou informações pessoais.
- Links externos com atributos seguros quando abrirem nova aba.
- Dependências mínimas e lockfile versionado.
- Content Security Policy compatível com export estático, quando o provedor permitir.
- Não usar scripts de terceiros no MVP.
- Não enviar conteúdo do formulário a console, analytics ou serviço externo.

## Documentação obrigatória

Crie:

- `README.md` e `README.en.md`;
- `.env.example` somente se houver URLs públicas configuráveis;
- `LICENSE`;
- `CONTRIBUTING.md`;
- `SECURITY.md`;
- `docs/architecture.md`;
- `docs/case-study.md`;
- `docs/content-disclaimer.md`;
- `docs/change-case/` para a manutenção demonstrada;
- screenshots reais em desktop e celular;
- workflow GitHub Actions.

O estudo de caso deve conter: briefing, problema, escopo, decisões, responsividade, acessibilidade, performance, testes, limitações e próximos passos. Rotule como projeto demonstrativo autoral.

## Publicação

Prepare export estático para Cloudflare Pages e documente:

- comando de build;
- pasta de saída;
- versão de Node;
- variáveis públicas, se houver;
- configuração de rotas e cabeçalhos;
- processo de rollback.

Não use Vercel Hobby para promoção comercial sem confirmação de permissão. Não publicar sem autorização atual. Depois de publicar, validar URL direta, refresh, celular, janela anônima, metadados e compartilhamento.

## Plano de implementação

1. Auditar estado, instruções e dependências.
2. Registrar stack e escopo em ADR curto.
3. Configurar projeto, CI e tokens visuais.
4. Criar conteúdo fictício com avisos claros.
5. Implementar estrutura sem interações.
6. Adicionar menu, FAQ e formulário simulado.
7. Implementar SEO e compartilhamento.
8. Ajustar responsividade e acessibilidade.
9. Criar caso de manutenção.
10. Adicionar testes e corrigir falhas.
11. Produzir documentação, screenshots e release local.
12. Preparar ou executar publicação se autorizada.

## Definição de concluído

- Página completa e coerente em todos os breakpoints.
- Empresa e conteúdo claramente fictícios.
- Nenhum contato, depoimento, cliente ou credencial inventado.
- Formulário não transmite nem persiste dados.
- HTML semântico, teclado e contraste validados.
- Metas Lighthouse medidas.
- Caso de manutenção documentado com evidências.
- Lint, tipos, testes e build passam.
- README bilíngue, arquitetura e estudo de caso concluídos.
- Nenhum segredo ou asset sem origem/licença.
- Instruções de publicação são reproduzíveis.
- O relatório final do Codex lista o que foi entregue, os comandos de validação executados e somente pendências reais.

## Fora do escopo

- CMS, painel administrativo, blog ou banco de dados.
- Captação real de leads.
- Pagamentos.
- Área autenticada.
- Integração real com WhatsApp.
- Textos legais ou laudos de engenharia.
- Métricas comerciais fictícias.
- Depoimentos apresentados como reais.
- Cópia de site existente.
