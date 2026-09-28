# Componentes de seção

Fonte: `atlas-componentes.css`. O hero está em `.docs/fotografia-e-hero.md`.

## Cabeçalho: `.at-header` (adição, referência GAZU)

- Grade `1fr auto 1fr` (navegação | logotipo `.at-wordmark--topo` | utilidades), `align-items: center`, gap `espaco-4`, padding `espaco-3` `espaco-7`, fundo `--pedra`.
- `.at-header__nav` e `.at-header__util`: flex com gap `espaco-4`, 10px, `letter-spacing: .12em`, caixa alta. `__util` alinha à direita (`justify-content: flex-end`).
- Links: cor `--tinta`, sem sublinhado; no hover, sublinhado com `text-underline-offset: 4px`.
- `.at-header__contador` (itens na sacola): `inline-grid` centralizado, `min-width: 16px`, `height: 16px`, `padding: 0 4px`, `margin-left: 4px`, raio `--raio-pilula`, fundo `--acao`, texto `--sobre-acao`, 9px, `letter-spacing: 0`.
- ≤720px: padding `espaco-3`, e `.at-header__nav` fica escondido.

**Navegação (decisão do Miguel)**
- O menu principal tem só **Coleção** e **Sobre**. Não acrescente itens.
- No celular, um menu hambúrguer de tela cheia. O design system só esconde a navegação; o menu do site está em `.docs/componentes-no-site.md`.

## Barra de anúncio: `.at-anuncio` (adição)

- Flex com `space-between`, gap `espaco-3`, padding `espaco-2` `espaco-7`, 10px, `letter-spacing: .12em`, caixa alta, `line-height: 1.4`.
- `.at-anuncio__lado`: grupo de links, flex com gap `espaco-4`.
- ≤720px: padding `espaco-2` `espaco-3`, conteúdo centralizado e `__lado` escondido.
- A classe não define fundo: combine com `.at-noite` (o token `noite` é o da barra de anúncio). Amostra: “FRETE GRÁTIS ACIMA DE R$ 399”.

## Faixa escura: `.at-noite`

`background: var(--noite); color: var(--sobre-noite)`. Muda a cor do foco e do preço antigo (ver `.docs/cores-e-temas.md`). Botão sobre ela: `.at-btn--claro`.

## Coleção: `.at-colecao`

- Padding `espaco-5` `espaco-7`; coluna com gap `espaco-4` (rótulo em cima, grade embaixo).
- `.at-colecao__grade`: `repeat(4, minmax(0, 1fr))`, gap `espaco-6`.
- ≤900px: padding `espaco-5` `espaco-3`; grade com 2 colunas e gap `espaco-3`.
- No layout é a faixa preta (`.at-colecao.at-noite`), com o rótulo “Nova coleção” sublinhado e quatro fotos 4:5 (`.at-card`).

## Banner de temporada: `.at-temporada`

| Parte | Regras |
|---|---|
| `.at-temporada` | `position: relative`; fundo `--pedra-escura`; texto `--tinta`; grade `minmax(0, 1fr) minmax(0, 2.6fr)` (texto, foto); `min-height: 400px`; `overflow: hidden` |
| `.at-temporada__texto` | padding `espaco-7` 0 `espaco-5` `espaco-7`; coluna alinhada à esquerda com gap `espaco-3`; `position: relative`; `z-index: 1` |
| `.at-temporada__titulo` | `--font-larga` 700, 30px, `line-height: 1.25`, `letter-spacing: .04em`, caixa alta, `text-wrap: balance`, `margin: 0` |
| `.at-temporada__desc` | 13px, `line-height: 1.6`, `letter-spacing: .02em`, `max-width: 22ch`, `margin: 0` |
| `.at-temporada__foto` | imagem de fundo com `background-size: cover` e `background-position: center top`; `min-height: 260px` |

- ≤720px: uma coluna; `__texto` com padding `espaco-5` `espaco-3`.
- Fica claro mesmo no tema Noite: use junto `.at-claro` (fundo `fixo-pedra-escura`).
- Conteúdo do layout: rótulo “Nova temporada”, título “Nova sensação”, texto “Descubra tudo o que há de novo e atual” e botão primário “Explorar coleção”.

## Barra de serviços: `.at-servicos` (adição)

- Grade de 4 colunas (`repeat(4, minmax(0, 1fr))`), fundo `--pedra-clara`, `border-block: var(--linha) solid var(--divisoria)`.
- `.at-servico`: padding `espaco-4`; coluna com gap `espaco-1`; `border-left` de `--linha` em `--divisoria`, menos no primeiro.
- `.at-servico b` (título): peso 400, 10px, `letter-spacing: .12em`, caixa alta.
- `.at-servico span` (descrição): 11px, `letter-spacing: .02em`, cor `--tinta-suave`, `line-height: 1.5`.
- ≤720px: 2 colunas; o 3º item perde a borda esquerda, e os itens a partir do 3º ganham `border-top`.
- Ainda não aparece no site.

## Áreas claras fixas: `.at-claro`

Para o hero e o banner de temporada. Troca `--pedra`, `--pedra-escura`, `--tinta`, `--tinta-suave`, `--marca`, `--acao` e `--sobre-acao` pelos tokens `fixo-*` e declara `color-scheme: light` (tabela em `.docs/cores-e-temas.md`).
