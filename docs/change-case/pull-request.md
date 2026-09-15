# Rascunho local de pull request — transparência do projeto demonstrativo

> Documento de evidência. Nenhum pull request remoto foi aberto e nenhum revisor fictício é atribuído.

## Mudança

- acrescenta avisos contextuais no hero, cenários, formulário e rodapé;
- usa linguagem que diferencia apoio documental de laudo técnico;
- mantém o formulário estritamente local;
- desabilita indexação por padrão até configuração explícita.

## Como verificar

1. Ler a página desde o primeiro viewport e identificar a natureza fictícia.
2. Preencher o formulário com dados de teste e confirmar que o resumo é local.
3. Inspecionar a rede e confirmar ausência de envio.
4. Executar testes unitários, acessibilidade e navegador.

## Riscos

O aviso pode disputar atenção com a proposta de valor. O texto foi distribuído em pontos de decisão, usando hierarquia visual secundária sem escondê-lo.

## Reversão

Reverter o commit que introduziu a mudança e restaurar a implantação estática anterior. Não há dado ou migração a desfazer.
