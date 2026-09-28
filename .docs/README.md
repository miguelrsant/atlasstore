# Atlas — design system

Índice da documentação do design system da **Atlas**, marca de moda e loja online do Miguel Angelo, de Franca (SP). Tudo em português do Brasil. Stack do site: React + Vite.

## Fontes

- `atlas-tokens.json` (Atlas, versão 1): cores, tipografia, espaçamento, raios e medidas. Origem declarada: “Figma (export MAIN.png, home em andamento) + referências GAZU e BIANCO; valores medidos no PNG, estimados”.
- `atlas-componentes.css`: classes dos componentes, com prefixo `at-`. O arquivo diz que tudo vem “dos tokens (tokens.css)”, mas esse `tokens.css` não veio junto. As variáveis CSS têm o nome do token com `--` na frente (`--pedra`, `--espaco-3`, `--botao-altura`).
- Decisões do Miguel, marcadas como **Decisão do Miguel**. Algumas não estão nos arquivos.
- Seções **No site**: como o código do site React atual (projeto `atlas-react`) usa o design system. Servem para achar as coisas no código; nunca redefinem um valor.

## Precedência

1. Decisões do Miguel.
2. Design system (tokens e componentes).
3. Código do site.

Onde o site e o design system divergem, não mude nenhum dos dois sem confirmar com o Miguel (lista em `.docs/componentes-no-site.md`).

## Arquivos

| Arquivo | O que tem |
|---|---|
| `.docs/cores-e-temas.md` | Os 20 tokens de cor, temas Pedra e Noite, `.at-claro` e `.at-noite` |
| `.docs/tipografia.md` | Famílias, os 8 estilos de texto, caixa alta, carregamento das fontes |
| `.docs/espacamento-e-medidas.md` | `espaco-1` a `espaco-7`, `botao-altura`, `linha`, `conteudo-max`, `foto-proporcao` |
| `.docs/grid-breakpoints-e-bordas.md` | Grades, breakpoints, larguras de teste, raios, linhas e foco |
| `.docs/componentes-base.md` | Logotipo, botão, link, chamada, card de produto, legenda vertical |
| `.docs/componentes-secoes.md` | Cabeçalho e navegação, anúncio, coleção, temporada, serviços |
| `.docs/componentes-no-site.md` | Classes equivalentes no React, padrões só do site, divergências |
| `.docs/movimento.md` | Transições, escada dupla, entrada da home, efeitos de rolagem |
| `.docs/fotografia-e-hero.md` | O hero com a modelo recortada e as regras de foto |
| `.docs/estampa.md` | A estampa dos quatro quadros e o ATLAS no peito |
| `.docs/marca-e-voz.md` | Origem do nome, direção visual, voz, frases da marca |

## Convenções

- **Estimado**: a fonte diz que o valor é estimado ou foi medido de forma aproximada (“~”). Use o valor como está; ele pode mudar.
- **Adição**: item que o design system acrescentou ao que foi medido no layout (alguns vêm das referências GAZU e BIANCO).
- Nomes de token ficam como na fonte, sem acento: `acao`, `divisoria`, `rotulo`, `botao`.
- Classes seguem `bloco__elemento` e `bloco--variante`.

## Pendências e lacunas

- **Pendente**: o site usa Cormorant Garamond em frases editoriais grandes (títulos de página, manifesto, citações); o design system reserva a Cormorant só para o logotipo. O Miguel ainda não decidiu. Não escolha um lado.
- A troca entre os temas Pedra e Noite (classe, atributo ou preferência do sistema) não está definida, e o site só tem o tema Pedra.
- O design system pede “uma fonte de texto mais calma” para descrições longas, mas não diz qual.
- Não há tokens de duração, curva de animação, breakpoint nem sombra.
