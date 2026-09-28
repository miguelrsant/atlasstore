# Fotografia e hero

## O hero

Composição do layout: o ATLAS gigante em serifa no centro, com a modelo recortada na frente dele. No alto, à esquerda, a chamada “A moda que / se move com / você”. Embaixo, à esquerda, o botão “Compre agora” e o link “Explorar”; à direita, “Nova / coleção / 2026”.

**Decisões do Miguel**
- O fundo é sempre a pedra clara, mesmo no tema Noite: use `.at-claro` (fundo `fixo-pedra` `#e1e0dc`, logotipo `fixo-marca` `#000000`).
- O recorte da modelo não tem borda nem contorno visível.
- A modelo e a sombra ficam centralizadas.
- Em tela grande, o hero cresce pouco: cerca de 760px de altura a 1900px de largura.

### Classes (`atlas-componentes.css`)

| Classe | Regras |
|---|---|
| `.at-hero` | `position: relative`; fundo `--pedra`; texto `--tinta`; `overflow: hidden`; `min-height: clamp(520px, 52vw, 720px)`; padding `espaco-5` `espaco-7`; grade com linhas `auto 1fr auto` |
| `.at-hero__logo` | `absolute`; `left: 0; right: 0; top: 30%`; texto centralizado; `z-index: 1`; `pointer-events: none`. Dentro: `.at-wordmark--hero` |
| `.at-hero__figura` | `absolute`; `left: 50%`; `bottom: 5%`; `transform: translateX(-50%)`; `height: 88%`; `z-index: 2` |
| `.at-hero__modelo` | `relative`; `display: block`; `height: 100%`; `width: auto`; `max-width: none`; `z-index: 1` |
| `.at-hero__sombra` | `absolute`; `left: -2%`; `width: 100%`; `bottom: -3.2%`; `height: 7%`; `z-index: 0`; `opacity: .9`; `pointer-events: none` |
| `.at-hero__topo` | `relative`; `z-index: 3` |
| `.at-hero__base` | `relative`; `z-index: 3`; `grid-row: 3`; flex com `space-between`, `align-items: flex-end`, gap `espaco-4`, `flex-wrap: wrap` |
| `.at-hero__acoes` | flex, `align-items: center`, gap `espaco-4`, `flex-wrap: wrap` |

≤720px: padding `espaco-4` `espaco-3`; `.at-hero__logo` com `top: 38%`; `.at-hero__figura` com `height: 70%`.

Camadas: logotipo (1) atrás; modelo e sombra (2) na frente dele; textos e botões (3) por cima de tudo.

Estrutura, montada a partir das classes:

```html
<section class="at-hero at-claro">
  <p class="at-hero__topo at-kicker at-kicker--chamada">…</p>
  <div class="at-hero__logo"><span class="at-wordmark at-wordmark--hero">ATLAS</span></div>
  <div class="at-hero__figura">
    <img class="at-hero__sombra" src="sombra.png" alt="">
    <img class="at-hero__modelo" src="modelo.png" alt="…">
  </div>
  <div class="at-hero__base">
    <div class="at-hero__acoes">…botão e link…</div>
    <p class="at-kicker">…</p>
  </div>
</section>
```

### No site

- `public/img/modelo.png` (397 × 1035, com transparência) e `public/img/sombra.png` (233 × 56).
- O corpo não está no meio do PNG: o centro de massa fica a 57,7% da largura. Por isso `.hero-figura` usa `translateX(-57.7%)`. Se trocar a imagem, recalcule para o corpo e a sombra ficarem no centro.
- `.hero`: `min-height: clamp(560px, 40vw, 760px)`, ou seja, 760px a 1900px.
- Celular (≤720px): `min-height: 760px`; ATLAS com `top: 31%`; figura com `height: 54%` e `top: 17%`; ações empilhadas; a chamada da base some.
- A modelo sobe no fim da entrada da home (`.docs/movimento.md`).

## Fotos

**Decisões do Miguel**
- Nunca cortar a cabeça. Ao enquadrar, alinhe pelo topo ou ajuste o foco de cada foto.
- Texto sobre imagem tem de ficar legível: use um fundo sólido atrás do texto quando precisar.

**Design system**
- Fotos de produto em 4:5 (`foto-proporcao`, medida 245×305), cantos retos (`raio-0`).
- Fundo `foto` (`#dfdeda`, igual nos dois temas): estúdio das fotos e espaço reservado enquanto a imagem carrega.
- Hover do card: `scale(1.03)` em 0,5s, dentro da moldura (`overflow: hidden`).
- Foto da temporada: `background-size: cover`, `background-position: center top`, `min-height: 260px`.

**No site**
- Fotos com `object-fit: cover` usam `object-position: center top`; a galeria da Coleção define o foco de cada foto (ex.: `center 12%`), e a foto do criador usa `center 30%`.
- Recortes em PNG (classe `.recorte`) usam `object-fit: contain` com respiro no topo.
- O selo “Novo” e a legenda dos quadros da galeria ficam sobre fundo sólido `pedra`.
- O `alt` é em português e descreve roupa e gesto (“Modelo saltando com camiseta Mapas e calça preta”). Imagem decorativa usa `alt=""`.
- Imagens em `public/img/`: `look1.jpg` a `look4.jpg`, `temporada.jpg`, `estampa-costas.jpg`, `camiseta-frente.jpg`, `criador.jpg`, `modelo.png`, `sombra.png`.
