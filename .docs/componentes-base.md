# Componentes base

Fonte: `atlas-componentes.css`. Prefixo `at-`, elementos com `__`, variantes com `--`. Cores, espaços, raios e linhas vêm dos tokens; os tamanhos de texto estão escritos direto no CSS, iguais aos estilos de `.docs/tipografia.md`.

## Raiz e caixa alta

- `.at-root` e todos os filhos: `box-sizing: border-box`. A raiz usa `font-family: var(--font-larga)`, `font-stretch: 150%` e `color: var(--tinta)`.
- `.at-caps`: `text-transform: uppercase` (“Tipografia larga: sempre caixa alta”).

## Logotipo: `.at-wordmark`

Base: `--font-serif`, cor `--marca`, peso 400, `margin: 0`, `line-height: 1`, `letter-spacing: .02em`. Sempre a palavra ATLAS, em Cormorant Garamond Regular.

| Variante | Regras |
|---|---|
| `.at-wordmark--topo` | `font-size: 26px` |
| `.at-wordmark--hero` | `font-size: clamp(96px, 20.5vw, 280px)`, `line-height: .8`, `letter-spacing: -.01em` |

## Botão: `.at-btn`

Base: `inline-flex` centralizado; altura `--botao-altura`; `padding: 0 var(--espaco-3)`; borda `--linha` sólida e transparente; raio `--raio-0`; `--font-larga` a 150%, 12px, `letter-spacing: .08em`, caixa alta, `line-height: 1`; sem sublinhado; `cursor: pointer`; `white-space: nowrap`; `transition: background-color .2s, color .2s`.

| Variante | Repouso | Hover |
|---|---|---|
| `.at-btn--primario` | fundo `--acao`, texto `--sobre-acao` | fundo `--pedra`, texto `--tinta`, borda `--tinta` |
| `.at-btn--contorno` | fundo transparente, texto e borda `--tinta` | fundo `--acao`, texto `--sobre-acao` |
| `.at-btn--claro` (sobre `noite`) | fundo `--sobre-noite`, texto `--noite` | fundo transparente, texto e borda `--sobre-noite` |

Estados:
- `:focus-visible`: `outline: 2px solid var(--tinta)`, `outline-offset: 3px`. Dentro de `.at-noite`, o outline é `--sobre-noite`.
- `[disabled]`: `opacity: .4`, `cursor: not-allowed`.

Textos do layout: “Compre agora” (hero) e “Explorar coleção” (temporada).

## Link de texto: `.at-link`

`inline-block`; `--font-larga`, 13px, `letter-spacing: .08em`, caixa alta; cor herdada; sem `text-decoration`; `padding-bottom: var(--espaco-1)`. O sublinhado é um fundo: `linear-gradient(currentColor, currentColor) left bottom / 100% var(--linha) no-repeat`, com `transition: background-size .25s`.

- Hover: o sublinhado encolhe para 40% da largura, a partir da esquerda.
- `:focus-visible`: igual ao botão (e `--sobre-noite` dentro de `.at-noite`).

Uso típico: “Explorar”, ao lado do botão, com gap `espaco-4`.

## Chamada: `.at-kicker`

Frase curta em linhas, a última sublinhada. Base: `margin: 0`, `--font-larga`, caixa alta, `display: flex`, `flex-direction: column`, `gap: 2px`.

| Variante | Regras |
|---|---|
| `.at-kicker--chamada` | 16px, `line-height: 1.4`, `letter-spacing: .06em` |
| `.at-kicker--rotulo` | 13px, `line-height: 1.4`, `letter-spacing: .08em` |

- Cada `span` é uma linha (`display: block`).
- `.at-kicker__marca`: a linha sublinhada (`align-self: flex-start`, `padding-bottom: var(--espaco-1)`, `border-bottom: var(--linha) solid currentColor`).

```html
<p class="at-kicker at-kicker--chamada">
  <span>A moda que</span>
  <span>se move com</span>
  <span class="at-kicker__marca">você</span>
</p>
```

## Card de produto: `.at-card`

| Parte | Regras |
|---|---|
| `.at-card` | coluna com gap `espaco-2`; sem sublinhado; cor herdada |
| `.at-card__foto` | `aspect-ratio: 4 / 5`; `width: 100%`; `max-width: 100%`; fundo `--foto`; `overflow: hidden` |
| `.at-card__foto img` | 100% × 100%, `object-fit: cover`, `display: block`, `transition: transform .5s` |
| `.at-card__info` | linha com `justify-content: space-between` e gap `espaco-2`; estilo `legenda` (10px, `.12em`, caixa alta, `line-height: 1.4`) |
| `.at-card__preco` | `white-space: nowrap` |
| `.at-card__antigo` | preço riscado (`line-through`), cor `--tinta-suave` (`--sobre-noite-suave` dentro de `.at-noite`), `margin-right: var(--espaco-2)` |

Estados: no hover, a foto cresce para `scale(1.03)` dentro da moldura; `:focus-visible` igual ao botão.

## Legenda vertical: `.at-vertical` (adição, referência BIANCO)

`writing-mode: vertical-rl` com `transform: rotate(180deg)` (lê de baixo para cima); 10px; `letter-spacing: .16em`; caixa alta; `inline-flex`, centralizado, gap `espaco-3`. O `::before` desenha um traço de `--linha` × 64px na cor do texto.

## Movimento reduzido

Com `prefers-reduced-motion: reduce`, as transições de `.at-root *`, `.at-btn`, `.at-link` e `.at-card__foto img` são desligadas (`transition: none !important`).
