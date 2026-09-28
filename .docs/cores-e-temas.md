# Cores e temas

Fonte: `atlas-tokens.json` → `color`. Cada token vira uma variável CSS com o mesmo nome (`--pedra`, `--tinta`…).

Dois temas: `light` = **Pedra** (claro) e `dark` = **Noite** (escuro).

**Decisão do Miguel**: visual editorial e mínimo em preto, branco e cinza quente. A única cor fora disso é `alerta`, para erro.

## Tokens

| Token | Pedra | Noite | Uso (texto da fonte) |
|---|---|---|---|
| `pedra` | `#e1e0dc` | `#141413` | Fundo da página e do hero. Medido no layout (#e1e0dc). Texto: `tinta` e `tinta-suave`. |
| `pedra-clara` | `#ecebe7` | `#1d1d1c` | Superfície elevada: barra de serviços, campos, cards de informação. **Estimado** a partir da faixa clara da referência GAZU. |
| `pedra-escura` | `#b7b6b2` | `#2b2b29` | Faixa editorial de campanha (bloco Nova Temporada). Medido no layout. Texto: `tinta` e `tinta-suave`. |
| `foto` | `#dfdeda` | `#dfdeda` | Fundo de estúdio das fotos de produto e placeholder enquanto a imagem carrega. Igual nos dois temas porque as fotos são claras. |
| `noite` | `#0d0d0d` | `#050505` | Faixa escura de coleção e barra de anúncio. Texto: `sobre-noite` e `sobre-noite-suave`. |
| `tinta` | `#0d0d0d` | `#e1e0dc` | Texto principal, sublinhados e anel de foco sobre `pedra`, `pedra-clara` e `pedra-escura` (14.7:1 e 9.6:1 no tema Pedra). |
| `tinta-suave` | `#42413d` | `#9e9d98` | Texto secundário (descrições, preços riscados, metadados) sobre `pedra`, `pedra-clara` e `pedra-escura`. Nunca em título. |
| `marca` | `#000000` | `#f2f1ed` | Só o logotipo ATLAS em Cormorant Garamond Regular. Preto puro, como no layout. |
| `acao` | `#0d0d0d` | `#e1e0dc` | Fundo do botão primário. Medido no botão COMPRE AGORA. |
| `sobre-acao` | `#e1e0dc` | `#0d0d0d` | Texto do botão primário, sobre `acao`. |
| `sobre-noite` | `#e1e0dc` | `#e1e0dc` | Texto, sublinhados e anel de foco sobre `noite`. |
| `sobre-noite-suave` | `#9e9d98` | `#a3a29d` | Texto secundário sobre `noite` (7.2:1). |
| `estampa` | `#f2ece2` | `#f2ece2` | Tinta off-white da estampa do mapa e do ATLAS no peito, sobre a malha preta. **Estimada** das fotos da camiseta (flash deixa mais claro). Para desenhos do motivo sobre `noite`. |
| `divisoria` | `#c9c8c3` | `#333331` | Linhas decorativas entre blocos (barra de serviços, rodapé). Não usar como borda de campo: para isso, `tinta`. |
| `alerta` | `#8f2a1d` | `#e38b79` | Adição: erro de formulário e aviso de estoque. Sempre com texto junto, nunca só a cor. |
| `fixo-pedra` | `#e1e0dc` | `#e1e0dc` | Fundo claro fixo do hero e do banner de temporada: não muda no tema Noite, para a foto e o recorte da modelo casarem com o fundo. |
| `fixo-pedra-escura` | `#b7b6b2` | `#b7b6b2` | Fundo fixo do banner de temporada, igual nos dois temas. |
| `fixo-tinta` | `#0d0d0d` | `#0d0d0d` | Texto, sublinhado e botão dentro das áreas claras fixas (hero, banner), sobre `fixo-pedra` e `fixo-pedra-escura`. |
| `fixo-tinta-suave` | `#42413d` | `#42413d` | Texto secundário dentro das áreas claras fixas. |
| `fixo-marca` | `#000000` | `#000000` | Logotipo ATLAS dentro do hero, sempre preto. |

Pela própria fonte, os valores medidos no PNG do layout são estimados: `pedra`, `pedra-escura` e `acao` foram medidos no layout; `pedra-clara` e `estampa` são estimativas de referência e de foto.

## Áreas claras fixas: `.at-claro`

O hero e o banner de temporada ficam claros mesmo no tema Noite. Dentro de `.at-claro`:

| Variável | Passa a valer |
|---|---|
| `--pedra` | `var(--fixo-pedra)` |
| `--pedra-escura` | `var(--fixo-pedra-escura)` |
| `--tinta` | `var(--fixo-tinta)` |
| `--tinta-suave` | `var(--fixo-tinta-suave)` |
| `--marca` | `var(--fixo-marca)` |
| `--acao` | `var(--fixo-tinta)` |
| `--sobre-acao` | `var(--fixo-pedra)` |

E declara `color-scheme: light`.

## Faixa escura: `.at-noite`

`background: var(--noite); color: var(--sobre-noite)`. Dentro dela, o anel de foco de `.at-btn`, `.at-link` e `.at-card` passa a `--sobre-noite`, e o preço antigo do card, a `--sobre-noite-suave`. O botão para esse fundo é `.at-btn--claro`.

## Regras

- `marca` e `fixo-marca`: só o logotipo.
- `tinta-suave`: nunca em título.
- `divisoria`: só linhas decorativas entre blocos. Borda de campo usa `tinta`.
- `alerta`: sempre com texto junto, nunca só a cor.
- `estampa`: só o motivo da estampa, sobre `noite`.
- Não crie cores fora desta tabela. Se faltar uma, pergunte ao Miguel.

## No site

- `src/styles/atlas.css` define em `:root` só os valores do tema Pedra, com `color-scheme: light`. O tema Noite, os tokens `fixo-*` e `alerta` ainda não existem como variáveis: o erro do produto usa `#8f2a1d` direto, e as linhas da estampa e do rodapé usam `#333331`.
- `src/index.css` repete as cores no bloco `@theme` do Tailwind v4 (`bg-pedra`, `text-tinta`…) e troca `neutral-900` por `#0d0d0d` e `neutral-800` por `#1d1d1c`, que a transição de página usa.
