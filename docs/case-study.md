# Estudo de caso — Engenharia Clara

## Briefing e contexto

Pequenas empresas técnicas precisam explicar serviços complexos com clareza, mas muitas páginas institucionais misturam promessa comercial, jargão e formulários opacos. O desafio deste projeto autoral foi criar uma experiência confiável para uma consultoria fictícia sem inventar histórico, profissionais habilitados ou clientes.

## Objetivo

Demonstrar capacidade de transformar um briefing em uma landing page responsiva, acessível e pronta para implantação, com uma arquitetura proporcional ao problema e uma documentação que permita manutenção por outra pessoa.

## Problema

Traduzir um serviço técnico em uma página fácil de compreender, criar sinais de confiança sem usar prova social inventada e oferecer uma interação de contato sem simular uma operação ou coletar dados inexistentes.

## Escopo

Uma landing page com hero, quatro frentes de serviço, processo, três cenários fictícios, entregáveis, FAQ, simulador local, metadados, página 404, rotas técnicas, testes, documentação e exportação estática. Integrações, atendimento real e área administrativa ficaram fora do escopo.

## Restrições

- empresa, serviços e cenários inteiramente fictícios;
- nenhuma afirmação de laudo, responsabilidade técnica ou credencial;
- nenhum dado real coletado;
- operação no plano gratuito de uma hospedagem estática;
- experiência útil desde 320 px até telas amplas;
- JavaScript limitado às interações que realmente precisam dele.

## Solução

A página guia a leitura por quatro perguntas: o que a empresa exemplifica, como um escopo seria organizado, como situações poderiam ser apresentadas e o que aconteceria em uma conversa inicial. A direção visual combina fundo de papel, azul técnico e linhas de desenho para comunicar precisão sem recorrer a fotos genéricas.

O contato foi resolvido como simulador local. Ele demonstra validação, mensagens de erro, feedback acessível e cópia de um resumo sem fingir que existe uma operação comercial por trás da interface.

## Engenharia

O Next.js exporta somente arquivos estáticos. Conteúdo tipado, componentes pequenos e regras puras reduzem acoplamento. Testes cobrem os limites do formulário, o menu por teclado, a ausência de rolagem horizontal e uma varredura automática de acessibilidade. A indexação permanece desabilitada até que uma URL pública real seja configurada e revisada.

## Decisões

Usar componentes de servidor para o conteúdo e JavaScript apenas no menu e no simulador reduz a superfície interativa. CSS Modules mantém a identidade visual sob controle sem adotar uma biblioteca desnecessária. Supabase e APIs foram descartados porque o produto não possui dado real para persistir. A ausência de `LocalBusiness` e o bloqueio inicial de indexação evitam apresentar a marca fictícia como empresa operacional.

## Responsividade

A composição parte de colunas amplas e passa para grades de duas e uma coluna conforme o espaço disponível. Em telas pequenas, ações ocupam a largura útil, o processo vira uma sequência vertical e o menu é recolhido. A inspeção manual e o teste automatizado em 320 px confirmaram ausência de rolagem horizontal.

## Acessibilidade

Há link de salto, landmarks, hierarquia de títulos, rótulos associados, estados `aria-invalid`, mensagens anunciadas, foco visível e fechamento do menu com `Escape`. Cores decorativas foram ajustadas depois que o primeiro teste automatizado detectou contraste insuficiente. A segunda execução do axe não encontrou violações nas configurações desktop ou móvel.

## Performance

A página evita imagens externas, fontes remotas, analytics e backend. O payload medido pelo Lighthouse local foi de aproximadamente 158 KiB. A execução local em ambiente Windows sincronizado marcou Performance 86, FCP 1,4 s, LCP 2,9 s, TBT 310 ms e CLS 0. A meta de 90 deve ser confirmada na URL publicada, onde CDN, HTTPS e cache reais influenciam a medição; nenhum número foi projetado ou inventado.

## Testes

Dez testes unitários e de componentes validam regras, resumo, cópia e teclado. A suíte ponta a ponta executa cinco cenários em dois perfis: nove passam e um é ignorado por ser exclusivamente móvel, cobrindo conteúdo, formulário sem transmissão, 320 px, teclado e axe. Lint, TypeScript e build estático também foram executados.

## Limitações

Não há teste com usuários do público-alvo, operação comercial, canal de contato, CMS, métricas de conversão ou validação em uma URL pública. A auditoria SEO local é deliberadamente reduzida pelo `noindex`, e cabeçalhos de segurança dependem do provedor que interpretar `_headers`.

## Resultado demonstrado

O resultado é um artefato funcional e verificável de portfólio. Ele comprova decisões de design e implementação; não representa trabalho pago, cliente real, aumento de conversão nem resultado operacional. Métricas de qualidade devem ser registradas em `docs/evidence` após execução local e nunca estimadas.

## Próximos passos possíveis

- substituir os textos fictícios após uma descoberta com cliente real;
- conectar um canal de contato somente depois de definir consentimento, retenção e segurança;
- acrescentar CMS apenas se a frequência e o responsável por conteúdo justificarem;
- testar a mensagem com usuários do público-alvo antes de medir conversão.
