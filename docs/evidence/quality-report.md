# Relatório local de qualidade

- Data: 15/09/2026
- Ambiente: Windows, servidor estático local, Lighthouse 13.4.1
- Estado: release local; nenhuma URL foi publicada

## Verificações concluídas

- ESLint: aprovado sem erros;
- TypeScript estrito: aprovado;
- Vitest: 4 arquivos, 10 testes aprovados;
- Playwright: 9 testes aprovados e 1 ignorado por não se aplicar ao perfil desktop;
- axe em desktop e celular: nenhuma violação encontrada;
- build: 6 rotas exportadas como conteúdo estático;
- inspeção manual em 1440 px e 320 px: concluída;
- console do navegador: nenhum erro;
- recursos declarados na página: nenhum domínio externo;
- dependências: `npm` informou 0 vulnerabilidades após a instalação.

## Lighthouse local

| Categoria | Pontuação |
| --- | ---: |
| Performance | 86 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 63 |

Métricas: FCP 1,4 s; LCP 2,9 s; TBT 310 ms; CLS 0; transferência aproximada de 158 KiB.

O SEO local é reduzido de propósito: sem URL pública configurada, o site usa `noindex` e omite canonical. A meta do projeto deve ser reavaliada na versão publicada com URL canônica, indexação explícita, HTTPS, CDN e cache do provedor.

A pontuação de Performance também deve ser medida na URL publicada. O teste local usa limitação simulada em uma máquina Windows e não constitui promessa de desempenho futuro. O relatório HTML bruto foi preservado em `lighthouse.html`; embora a coleta e a gravação tenham terminado, o processo retornou erro ao limpar sua pasta temporária por uma restrição de permissão do Windows.

## Evidências visuais

- `desktop-home.png`: primeiro viewport em 1440 × 900;
- `mobile-home.png`: primeiro viewport em 320 × 720;
- `mobile-form.png`: confirmação do resumo local em 320 × 720.
