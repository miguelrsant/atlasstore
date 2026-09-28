# Grid, breakpoints e bordas

## Grades do design system

| Bloco | Grade | Abaixo do breakpoint |
|---|---|---|
| Página | margem lateral `espaco-7` (104px) no desktop e `espaco-3` (16px) no celular; conteúdo até `conteudo-max` (1160px) | — |
| Hero `.at-hero` | linhas `auto 1fr auto` (topo, respiro, base) | ≤720px: ver `.docs/fotografia-e-hero.md` |
| Cabeçalho `.at-header` | colunas `1fr auto 1fr` (navegação, logotipo, utilidades) | ≤720px: a navegação some |
| Coleção `.at-colecao__grade` | `repeat(4, minmax(0, 1fr))`, gap `espaco-6` | ≤900px: 2 colunas, gap `espaco-3` |
| Temporada `.at-temporada` | `minmax(0, 1fr) minmax(0, 2.6fr)` (texto, foto) | ≤720px: 1 coluna |
| Serviços `.at-servicos` | `repeat(4, minmax(0, 1fr))` | ≤720px: 2 colunas |

As colunas usam `minmax(0, 1fr)`, para o conteúdo não estourar a grade.

## Breakpoints

Não há tokens de breakpoint. O CSS usa dois, sempre com `max-width`:

| Largura | O que muda |
|---|---|
| 900px | Coleção: 4 → 2 colunas, margem `espaco-7` → `espaco-3` |
| 720px | Hero, cabeçalho, anúncio, temporada e serviços passam ao layout de celular |

**Larguras de teste (Miguel)**: ele confere o site em cerca de **1757px** de largura e no celular. Vale conferir também 1366px (largura do layout medido) e os dois breakpoints.

**Hero em tela grande (decisão do Miguel)**: cresce pouco, até cerca de 760px de altura a 1900px de largura.

## Raios

| Token | Valor | Uso (texto da fonte) |
|---|---|---|
| `raio-0` | 0 | Padrão de tudo: botões, fotos, cards, campos. A marca é de cantos retos. |
| `raio-1` | 2px | Só marcadores pequenos: checkbox, seletor de tamanho. |
| `raio-pilula` | 999px | Só o contador do carrinho. |

## Linhas, bordas e foco

- Espessura: `linha` (1px) em sublinhados e bordas.
- Sublinhado de `.at-link`: um fundo em gradiente de 1px na base. Sublinhado da chamada: `border-bottom` em `.at-kicker__marca`. Os dois ficam a `espaco-1` do texto.
- Linhas decorativas entre blocos: `divisoria` (barra de serviços, rodapé). Borda de campo: `tinta`.
- Botões têm borda de 1px transparente; assim o hover mostra a borda sem mudar o tamanho.
- Foco (`:focus-visible`): `outline: 2px solid` em `tinta` (ou `sobre-noite` dentro de `.at-noite`), com `outline-offset: 3px`.
- Sombra: não há token. A única sombra do design system é a imagem da sombra da modelo no hero.

## No site

- Mesmos breakpoints (900px e 720px), mais 760px (a foto da temporada passa a `cover`) e, no script da entrada da home, 700px e 1200px (quantidade de colunas).
- A margem lateral cresce com a tela (`--e7`, ver `.docs/espacamento-e-medidas.md`).
- `index.html` usa `viewport-fit=cover`, e o cabeçalho fixo, o menu do celular e a sacola respeitam `env(safe-area-inset-*)`.
- A página Coleção usa uma grade 3 × 3 (`DynamicFrameLayout`) com 8 fotos e o ATLAS no centro.
- Detalhes só do site: seletor de tamanho com raio de 2px (`raio-1`), ponto redondo na linha do tempo do Sobre e sombra na gaveta da sacola.
