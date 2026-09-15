# Plano de reversão

## Gatilhos

- build estático não concluído;
- navegação ou formulário local deixam de funcionar;
- aviso de projeto fictício deixa de ser visível;
- regressão crítica de acessibilidade ou responsividade.

## Procedimento

1. Interromper a promoção da prévia para produção.
2. Identificar o último commit verificado no histórico local.
3. Criar um novo commit que reverta apenas a alteração problemática.
4. Repetir lint, tipos, testes, build e inspeção visual.
5. Se já publicado, restaurar a última implantação estática aprovada.

Não existe migração de banco ou estado do usuário. Por isso, a reversão do artefato é suficiente.
