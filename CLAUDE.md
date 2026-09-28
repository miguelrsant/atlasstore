# Atlas

Atlas é a marca de moda e loja online do Miguel Angelo, de Franca (SP). A peça central é a camiseta preta com a estampa de mapas desenhada à mão. O nome vem do livro que guarda todos os mapas e do titã que carrega o mundo. O site vende a coleção e conta a história da marca, seguindo o design system documentado em `.docs/`.

Stack: React + Vite

## Índice do design system

@.docs/README.md

## Documentos (leia quando precisar)

Caminhos a partir da raiz do projeto:

- `docs/cores-e-temas.md`: antes de usar ou mudar cor, fundo, tema Pedra/Noite ou contraste.
- `docs/tipografia.md`: ao mexer em fonte, tamanho, peso, caixa alta ou no logotipo.
- `docs/espacamento-e-medidas.md`: ao definir margens, paddings, gaps, altura de botão ou proporção de foto.
- `docs/grid-breakpoints-e-bordas.md`: ao montar grades, adaptar ao celular, testar larguras ou usar raios, linhas e foco.
- `docs/componentes-base.md`: ao criar ou alterar logotipo, botão, link, chamada, card de produto ou legenda vertical.
- `docs/componentes-secoes.md`: ao mexer no cabeçalho, na navegação, na barra de anúncio ou nas faixas da home.
- `docs/componentes-no-site.md`: para achar no React o equivalente de uma classe do design system, e antes de mexer onde os dois divergem.
- `docs/movimento.md`: antes de criar ou mudar animação, transição ou efeito de rolagem.
- `docs/fotografia-e-hero.md`: ao mexer no hero, na modelo recortada ou em qualquer foto.
- `docs/estampa.md`: ao tratar da estampa, da Camiseta Mapas ou do ATLAS no peito.
- `docs/marca-e-voz.md`: ao escrever ou revisar textos do site.

## Regras que sempre valem

- Use os tokens do design system (variáveis CSS). Não invente cor, tamanho ou espaço; se faltar um valor, pergunte ao Miguel.
- Visual editorial e mínimo: preto, branco e cinza quente. `alerta` só em erro, sempre com texto.
- Logotipo ATLAS: Cormorant Garamond Regular, só no logotipo. Todo o resto: Science Gothic com `font-stretch: 150%` (estimado), títulos de seção em 700 e o resto em 400, textos secundários largos e em caixa alta.
- A serifa de máquina de escrever do peito da camiseta é a assinatura das peças, não o logotipo.
- Pendente: o site usa Cormorant em frases editoriais grandes (títulos de página, manifesto, citações). O Miguel ainda não decidiu; não amplie nem retire esse uso.
- Hero: sempre no fundo de pedra clara (`fixo-pedra`, `#e1e0dc`), mesmo no tema escuro; recorte da modelo sem borda nem contorno; modelo e sombra centralizadas; em tela grande cresce só até cerca de 760px de altura a 1900px de largura.
- Fotos nunca cortam a cabeça. Texto sobre imagem tem de ficar legível; use fundo sólido quando precisar.
- Cantos retos (`raio-0`). `raio-1` só em marcadores pequenos; pílula só no contador da sacola.
- Movimento rápido: escada dupla de ~0,5s na troca de página; entrada da home de ~1,5s só no primeiro carregamento; só os efeitos de rolagem de `.docs/movimento.md`. Nada de efeito de cursor, partículas, shaders ou confete. Respeite `prefers-reduced-motion`.
- Menu principal: só Coleção e Sobre. No celular, menu hambúrguer de tela cheia.
- Textos em português do Brasil; frases da marca exatamente como em `.docs/marca-e-voz.md`.
- Confira as mudanças em cerca de 1757px de largura e no celular, além dos breakpoints de 900px e 720px.
- O código do site não redefine o design system. Onde os dois divergem, pergunte ao Miguel antes de mudar qualquer lado.

# Vídeo / Motion (Remotion)

As skills do Remotion ficam em `.claude/skills/`.

Sempre que a tarefa envolver vídeo, motion, animação renderizada em vídeo, composição, legenda, render ou Remotion, carregue a skill `remotion-best-practices` ANTES de escrever código — ela é o roteador e indica qual skill específica usar:

- `remotion-create` — criar um novo projeto/composição de vídeo
- `remotion-markup` — conteúdo, animação e efeitos
- `remotion-interactivity` — estruturar markup para edição no Studio
- `remotion-captions` — transcrever e animar legendas
- `remotion-multimedia` — áudio/vídeo com Mediabunny
- `remotion-maps` — animações de mapa
- `remotion-studio` — pré-visualizar o vídeo
- `remotion-render` — exportar o vídeo
- `remotion-saas` — app com renderização Remotion
- `remotion-upgrade` — atualizar pacotes Remotion
- `remotion-docs` — consultar a documentação atual do Remotion

Não edite os arquivos dentro de `.claude/skills/remotion-*` (são sobrescritos ao atualizar as skills).

### Export

- O vídeo final vai para `docs/videos/`, com a data de criação e um título no nome: `AAAA-MM-DD_titulo-em-kebab-case.mp4` (ex.: `2026-09-28_atlas-vista-o-seu-caminho_instagram-30s.mp4`). Grave também o título (`title`) e a data (`creation_time`) nos metadados do mp4.
- Depois de exportar e conferir o vídeo, apague a pasta de trabalho do Remotion (`video/`).
