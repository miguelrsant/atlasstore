# Movimento

## No design system

Não há tokens de duração nem de curva. As transições do CSS são:

| Onde | Transição |
|---|---|
| `.at-btn` | `background-color .2s, color .2s` |
| `.at-link` | `background-size .25s` (no hover, o sublinhado encolhe para 40%) |
| `.at-card__foto img` | `transform .5s` (no hover, `scale(1.03)`) |

Com `prefers-reduced-motion: reduce`, essas transições são desligadas.

## Decisões do Miguel

- Movimento rápido e seco (“snappy”).
- **Troca de página**: transição “double-stairs” (escada dupla) de cerca de 0,5s.
- **Entrada da home**: cerca de 1,5s, só no primeiro carregamento. Uma capa preta com ATLAS se divide em retângulos que viram, e a modelo sobe no fim.
- **Efeitos de rolagem**, só estes:
  - o manifesto se preenche palavra por palavra;
  - a foto da Nova Temporada se monta a partir de tiras;
  - os números do Sobre rolam como um odômetro;
  - “Franca” se embaralha antes de travar;
  - uma linha do tempo se desenha ao lado dos capítulos do Sobre.
- **Nada de**: efeitos de cursor, partículas, shaders ou confete.

## Como o site faz

Biblioteca: `framer-motion`. Curva de entrada e saída `[0.76, 0, 0.24, 1]`; curva de chegada `[0.22, 1, 0.36, 1]`.

**Escada dupla**: `src/components/ui/page-transition.tsx`, usado em `App.tsx` com `type="double-stairs"`.
- 5 colunas em tela cheia (`fixed`, `z-50`, `pointer-events-none`), fundo `neutral-900` (= `#0d0d0d`) com divisória `neutral-800` (= `#1d1d1c`).
- Colunas pares entram por cima e ímpares por baixo; cada uma leva 0,5s, com 0,03s de atraso entre colunas. Na saída, seguem no mesmo sentido.
- `App.tsx` cobre a tela, troca a página por baixo quando a escada fecha (com uma garantia de `COBRIR_MS + 150` ms; `COBRIR_MS = 640`), rola ao topo ou à âncora e abre a escada de novo. Não anima quando a rota continua na mesma tela nem com movimento reduzido. Toda troca de rota fecha a sacola.

**Entrada da home**: `src/components/animacoes/EntradaHome.tsx`.
- Só quando o site abre direto na home (sem âncora) e sem movimento reduzido. Dura `FIM_MS = 1500` e trava a rolagem enquanto isso.
- Grade de retângulos: 5 colunas abaixo de 700px, 8 abaixo de 1200px e 10 acima; linhas proporcionais à tela (no mínimo 3). Cada retângulo mostra seu pedaço da capa `noite` com ATLAS (Cormorant, `clamp(96px, 22vw, 380px)`, cor `pedra`).
- O ATLAS aparece em 0,45s, subindo 18% e fechando o espaço entre letras (de `.08em`).
- Os retângulos viram (`rotateY` até -92°, `scale(.86)`, somem) em 0,5s, com `cubic-bezier(.55, 0, .35, 1)`, do centro para as bordas: atraso de 560ms, mais até 380ms pela distância ao centro, mais um pequeno acaso.
- A modelo sobe: `.com-entrada .hero .hero-figura` anima em 0,9s, a partir de 0,75s, de `opacity: 0` e 5% abaixo até o lugar.

**Rolagem**: `src/components/animacoes/Rolagem.tsx`. Os efeitos ligados à rolagem avançam ao descer e voltam ao subir.
- `TextoPreenche` (manifesto): cada palavra vai de 16% a 100% de opacidade, numa faixa de 3 palavras; `offset: ['start 0.9', 'end 0.5']`.
- `FaixasMontam` (Nova temporada): 6 tiras verticais chegam de direções alternadas (de 26% a 42% de deslocamento); `offset: ['start end', 'center center']`.
- `Odometro` (16, 4 e 2026): cada dígito é uma fita de 0 a 9 que desliza até o número; 1,1s, 0,12s entre dígitos, curva de chegada; roda uma vez, com 60% visível.
- `Embaralhar` (Franca): as letras trocam a cada 45ms, como painel de aeroporto, e travam da esquerda para a direita (uma a cada 3 quadros); roda uma vez.
- `LinhaDoTempo` (capítulos do Sobre): traço de 1px em `tinta` cresce com a rolagem (`scaleY`); cada capítulo acende (ponto de 8px e texto de 30% a 100%) quando o traço chega.

**Outros**: o menu do celular desce em 0,45s com a curva de entrada e saída, e os links entram em 0,4s (0,06s entre eles); a galeria da Coleção ajusta a grade em 0,4s e amplia a foto (1.04) em 0,5s; a legenda do quadro aparece em 0,3s.

## Regras

- Mantenha o movimento curto e seco, como acima.
- A entrada roda só uma vez, ao abrir a home; a escada, só na troca de página.
- Respeite `prefers-reduced-motion`: sem entrada, sem escada, tiras e textos já montados e sem transições. No site, o odômetro, o embaralhar e o menu do celular ainda não checam essa preferência.
- Texto animado mantém o texto inteiro acessível (`aria-label` no conjunto, pedaços com `aria-hidden`).
- Não acrescente efeitos fora desta lista sem o Miguel pedir.
