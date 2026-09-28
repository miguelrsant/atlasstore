# Estampa

A estampa da camiseta Atlas: quatro quadros desenhados à mão, em grade 2 × 2, nas costas da camiseta preta. No site ela é a “Estampa 01”, da Camiseta Mapas.

Frase da estampa: **“Quatro quadros, um caminho.”** Ela vai de onde a gente vem até para onde a gente vai.

## Os quatro quadros

| Nº | Posição | Desenho | Legenda (decisão do Miguel) |
|---|---|---|---|
| I | alto, à esquerda | contorno do Brasil | “O país de onde a gente vem” |
| II | alto, à direita | contorno do estado de São Paulo | “O estado que é casa” |
| III | embaixo, à esquerda | contorno de Franca | “A cidade onde a Atlas nasceu” |
| IV | embaixo, à direita | rosa dos ventos | “Para onde a gente vai” |

A ordem conta a história: país, estado, cidade e o rumo. Mantenha a ordem e as legendas exatamente assim.

## Desenho

- Traço à mão, irregular, como um mapa de bolso feito no caderno. Cada desenho fica dentro de um quadrado, também traçado à mão.
- Só contorno, sem preenchimento. A rosa dos ventos traz as letras N, E, S e W, como na peça.
- Uma cor só: `estampa` (`#f2ece2`, igual nos dois temas), off-white sobre a malha preta. O valor é **estimado** das fotos da camiseta (o flash deixa mais claro).
- Para desenhar o motivo no site, use `estampa` sobre `noite`.

## O ATLAS no peito

Na frente da camiseta, a palavra ATLAS vai pequena, na altura do peito, numa serifa de máquina de escrever, na mesma tinta `estampa`.

**Decisão do Miguel**: essa serifa de máquina de escrever é a assinatura das peças, não o logotipo. O logotipo continua sendo a Cormorant Garamond Regular. Não use a letra de máquina de escrever como logo no site, e não recrie o ATLAS do peito com a Cormorant.

## No site

- Seção `.estampa` da home, sobre `noite`: legenda vertical `.vertical` (“Atlas · Estampa 01”), fotos `estampa-costas.jpg` (4:5) e `camiseta-frente.jpg` (1:1), rótulo “A estampa”, título “Quatro quadros, um caminho” e o texto “Desenhada à mão como um mapa de bolso: de onde a gente vem até para onde a gente vai. Impressa em off-white sobre malha preta.”
- `.quadros`: grade 2 × 2 com os números romanos (I a IV) e os nomes Brasil, São Paulo, Franca e Rosa dos ventos, separados por linhas `#333331`. As legendas da tabela acima ainda não aparecem no site.
- Botão `.btn-c`: “Ver camiseta Mapas”.
- Produto: Camiseta Mapas, com o selo “Novo · Estampa 01”.
- No Sobre, o capítulo “A primeira peça” conta que os quatro quadros saíram do caderno para a malha preta.
- O `alt` da foto das costas: “Estampa de quatro quadros nas costas da camiseta: Brasil, São Paulo, Franca e a rosa dos ventos”.
