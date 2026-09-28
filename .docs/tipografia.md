# Tipografia

Fonte: `atlas-tokens.json` → `type`, e `atlas-componentes.css`. A lista `type.fonts` está vazia na fonte; as famílias ficam em `type.families`.

## Famílias

| Família | Variável CSS | Pilha (exata) | Uso |
|---|---|---|---|
| `serif` | `--font-serif` | `"Cormorant Garamond", "Cormorant", Garamond, Georgia, serif` | Só o logotipo ATLAS |
| `larga` | `--font-larga` | `"Science Gothic", "Eurostile Extended", "Arial Black", sans-serif` | Todo o resto |

**Decisão do Miguel**
- Logotipo: Cormorant Garamond Regular (400). É o logotipo oficial ATLAS.
- Todo o resto: Science Gothic com `font-stretch: 150%` (largura **estimada** do layout dele). Títulos de seção em 700; todo o resto em 400.
- A serifa de máquina de escrever do ATLAS no peito da camiseta é a assinatura das peças, não o logotipo. Não use essa letra como logo nem troque o logo por ela (ver `.docs/estampa.md`).

**Pendente**: o site também usa a Cormorant em frases editoriais grandes (títulos de página, manifesto, citações), enquanto o design system reserva a Cormorant só para o logotipo. O Miguel ainda não decidiu. Não amplie nem retire esse uso sem ele decidir.

## Carregamento

`atlas-componentes.css` importa do Google Fonts:

`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Science+Gothic:wdth,wght@50..200,100..900&display=swap`

A Science Gothic é variável: largura (`wdth`) de 50 a 200 e peso de 100 a 900; por isso `font-stretch: 150%` funciona. `.at-root` e `.at-btn` declaram `font-stretch: 150%`.

## Estilos

Grupo **Marca**, família `serif`:

| Estilo | Tamanho | Linha | Peso | Espaço entre letras | Amostra | Uso (texto da fonte) |
|---|---|---|---|---|---|---|
| `logo-hero` | 280px | 0.8 | 400 | -0.01em | ATLAS | O ATLAS gigante do hero, com a modelo sobreposta. No site: `clamp(96px, 20.5vw, 280px)`. |
| `logo-topo` | 26px | 1 | 400 | 0.02em | ATLAS | Logotipo no cabeçalho, centralizado. |

O “No site” da tabela é texto do design system: é o valor de `.at-wordmark--hero`. O site React atual usa outro (ver **No site**, abaixo).

Grupo **Larga**, família `larga`. Em todos: “Science Gothic com largura expandida (font-stretch 150%, **estimada** do layout)”.

| Estilo | Tamanho | Linha | Peso | Espaço entre letras | Amostra | Uso (texto da fonte) |
|---|---|---|---|---|---|---|
| `titulo` | 30px | 1.25 | 700 | 0.04em | NOVA SENSAÇÃO | Título de seção ou campanha, sempre em caixa alta, no máximo 3 linhas. |
| `chamada` | 16px | 1.4 | 400 | 0.06em | A MODA QUE SE MOVE COM VOCÊ | Frases curtas do hero, em caixa alta, quebradas em linhas de 2 ou 3 palavras. |
| `rotulo` | 13px | 1.4 | 400 | 0.08em | NOVA COLEÇÃO | Rótulos de seção, links de texto e navegação, em caixa alta. |
| `botao` | 12px | 1 | 400 | 0.08em | COMPRE AGORA | Texto de botão, em caixa alta. |
| `texto` | 13px | 1.6 | 400 | 0.02em | Descubra tudo o que há de novo e atual | Texto corrido curto (até 3 linhas). Descrições longas de produto pedem uma fonte de texto mais calma. |
| `legenda` | 10px | 1.4 | 400 | 0.12em | FRETE GRÁTIS ACIMA DE R$ 399 | Barra de anúncio, legendas verticais, metadados. |

## Regras

- Caixa alta em `titulo`, `chamada`, `rotulo`, `botao` e `legenda` (classe `.at-caps` ou `text-transform: uppercase`). `texto` fica em caixa normal, como na amostra.
- Escreva o texto em caixa normal no código e deixe o CSS pôr em caixa alta.
- `titulo`: no máximo 3 linhas; o banner usa `text-wrap: balance`.
- `chamada`: uma linha por `span`, de 2 ou 3 palavras, com a última sublinhada (`.at-kicker`, em `.docs/componentes-base.md`).
- `texto`: até 3 linhas. A “fonte de texto mais calma” para descrições longas ainda não foi definida.
- Cor de título: `tinta` (ou `sobre-noite`), nunca `tinta-suave`.
- Tamanhos fora da escala que o CSS usa: 11px (descrição da barra de serviços) e 9px (contador da sacola).

## No site

- `index.html` carrega `Cormorant+Garamond:wght@400` e a mesma Science Gothic variável.
- `body` usa o estilo `texto` (13px, `letter-spacing: .02em`, `line-height: 1.6`) com `font-stretch: 150%`. `button, input, select, textarea` repetem o `font-stretch`, porque campos de formulário não herdam a fonte.
- `.titulo` usa `clamp(22px, 2.3vw, 30px)`; `.hero-logo`, `clamp(110px, 20.5vw, 380px)`.
- A descrição longa do produto usa 12px, `line-height: 1.6`, sem caixa alta, ainda na Science Gothic.
- Onde a Cormorant aparece fora do logotipo (o ponto pendente): `.display` (títulos das páginas Sobre e Coleção), `.manifesto-frase`, `.citacao`, números do Sobre (`.numero b`, `.capitulo .num`) e links do menu do celular. O ATLAS gigante do rodapé (`.rodape-logo`), o da entrada da home e o do centro da galeria são o logotipo.
