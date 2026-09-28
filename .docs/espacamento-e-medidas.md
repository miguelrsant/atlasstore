# Espaçamento e medidas

Fonte: `atlas-tokens.json` → `spacing` e `medida`. Variável CSS = `--` + nome do token.

## Espaçamento

| Token | Valor | Uso (texto da fonte) |
|---|---|---|
| `espaco-1` | 4px | Distância entre texto e seu sublinhado. |
| `espaco-2` | 8px | Entre linhas de um grupo de rótulos; ícone e texto. |
| `espaco-3` | 16px | Padding horizontal do botão; margem lateral no celular. |
| `espaco-4` | 24px | Entre botão e link; entre título e texto. |
| `espaco-5` | 40px | Padding vertical de faixas no celular; entre rótulo de seção e grade. |
| `espaco-6` | 56px | Espaço entre cards da grade de coleção (medido: ~56px). |
| `espaco-7` | 104px | Margem lateral da página no desktop (medida: ~104px em 1366px). |

`espaco-6` e `espaco-7` são medidas aproximadas do layout (**estimado**). A escala tem só esses sete passos; se precisar de outro valor, pergunte ao Miguel.

## Medidas

| Token | Valor | Uso (texto da fonte) |
|---|---|---|
| `botao-altura` | 46px | Altura do botão (medida: ~46px). |
| `linha` | 1px | Espessura de sublinhados e bordas. |
| `conteudo-max` | 1160px | Largura máxima do conteúdo dentro das margens. |
| `foto-proporcao` | 4 / 5 | Proporção das fotos de produto (medida: 245×305). |

`botao-altura` também é uma medida aproximada (**estimado**).

## Onde cada espaço aparece

| Componente | Espaços |
|---|---|
| Hero | padding `espaco-5` `espaco-7`; base e ações com gap `espaco-4`; ≤720px: padding `espaco-4` `espaco-3` |
| Cabeçalho | padding `espaco-3` `espaco-7`; gap `espaco-4`; ≤720px: padding `espaco-3` |
| Barra de anúncio | padding `espaco-2` `espaco-7`; gap `espaco-3`; links com gap `espaco-4`; ≤720px: padding `espaco-2` `espaco-3` |
| Coleção | padding `espaco-5` `espaco-7`; gap `espaco-4`; grade com gap `espaco-6`; ≤900px: padding `espaco-5` `espaco-3` e gap `espaco-3` |
| Temporada | texto com padding `espaco-7` 0 `espaco-5` `espaco-7` e gap `espaco-3`; ≤720px: padding `espaco-5` `espaco-3` |
| Serviços | padding `espaco-4`; gap `espaco-1` |
| Card | gap `espaco-2` (foto, informações, preço antigo) |
| Botão | padding lateral `espaco-3`; altura `botao-altura` |
| Link e chamada | sublinhado a `espaco-1` do texto |
| Legenda vertical | gap `espaco-3`; traço de 64px |

Valores soltos no CSS, fora da escala: 2px entre as linhas da chamada; anel de foco de 2px afastado 3px; contador da sacola com 16px de altura, padding e margem de 4px.

## No site

- `src/styles/atlas.css` usa nomes curtos: `--e1` a `--e7`, `--botao` e `--linha`. Os valores são os mesmos, menos `--e7: clamp(16px, 7.6vw, 104px)`: a margem lateral cresce com a tela (cerca de 28px num celular de 375px, 104px a partir de cerca de 1368px), em vez de trocar 104px por 16px no breakpoint.
- `.wrap` aplica essa margem (`padding-inline: var(--e7)`).
- `conteudo-max` ainda não é usado no site.
- As seções do site usam paddings verticais com `clamp()`, como `clamp(56px, 7vw, 96px)`.
