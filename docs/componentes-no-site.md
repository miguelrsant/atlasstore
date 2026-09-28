# Componentes no site (React + Vite)

Como o design system aparece no código do site atual (projeto `atlas-react`). Serve para achar as coisas; os valores de referência estão nos outros arquivos.

## Onde fica

- Estilos: `src/styles/atlas.css` (classes curtas, sem prefixo) e `src/index.css` (Tailwind v4 e tokens no bloco `@theme`).
- Páginas em `src/pages/`: `Inicio`, `Colecao`, `Produto`, `Sobre`. Rotas por hash (`#inicio`, `#colecao`, `#colecao-camisetas`, `#produto-mapas`, `#sobre`) em `src/hooks/rota.ts`.
- Componentes em `src/components/`: `Chamada`, `CardProduto`, `layout/` (cabeçalho, rodapé, sacola), `animacoes/` e `ui/`.
- Dados de exemplo do protótipo em `src/data/loja.ts`; imagens em `public/img/`.

## Equivalência de classes

| Design system | Site |
|---|---|
| `.at-root`, `.at-caps` | `body`, `.caps` |
| `.at-wordmark--topo` / `--hero` | `.logo` / `.hero-logo` |
| `.at-btn--primario` / `--claro` | `.btn.btn-p` / `.btn.btn-c` |
| `.at-btn--contorno` | sem equivalente (o `.filtro` é parecido) |
| `.at-link` | `.link` |
| `.at-kicker--chamada` + `__marca` | `<Chamada linhas={[…]} />` → `.chamada` + `.sub` |
| `.at-kicker--rotulo` | `.rotulo` com `span.sub` |
| `.at-card`, `__foto` | `<CardProduto>` (`.produto`) e `.look`; `.foto` |
| `.at-header` | `<Cabecalho>` → `.topo` |
| `.at-anuncio` | `.anuncio` |
| `.at-colecao.at-noite`, `__grade` | `.colecao`, `.grade` |
| `.at-temporada` | `.temporada` |
| `.at-hero` e partes | `.hero`, `.hero-logo`, `.hero-figura`, `.hero-modelo`, `.hero-sombra`, `.hero-topo`, `.hero-base`, `.acoes` |
| `.at-vertical` | `.vertical` |
| `.at-servicos` | não usado |
| `--espaco-1`…`--espaco-7`, `--botao-altura` | `--e1`…`--e7`, `--botao` |

## Padrões que só existem no site

- **Menu do celular** (`.hamburguer`, `.menu-celular`): até 720px, o ícone `Menu` do lucide (22px, traço 1.5) abre um painel de tela cheia em `noite`, que desce do topo. Links grandes numerados (01 Início, 02 Coleção, 03 Sobre), a página atual em itálico; embaixo, Lista Atlas, Trocas e Entrar. Fecha no X, com Esc e ao trocar de página; trava a rolagem.
- **Sacola** (`.sacola` sobre `.veu`): gaveta à direita, `min(420px, 100%)`, fundo `pedra`; barra de frete grátis de 2px; itens com foto de 80px em 4:5 e quantidade `.qtd`.
- **Filtros** (`.filtro`): 34px de altura, borda `tinta`, texto de 10px em caixa alta; o ativo tem `aria-pressed="true"` e fundo `acao`.
- **Galeria da Coleção** (`DynamicFrameLayout`): grade 3 × 3 com 8 fotos e, no centro, o ATLAS sobre `noite` com “Coleção 2026 · Franca, SP”. A linha e a coluna sob o mouse crescem; fotos fora do filtro ficam com 22% de opacidade e em cinza; o clique abre `dialog.caixa`.
- **Produto** (`.pdp`): miniaturas de 72px; informações fixas ao rolar (`top: 96px`); tamanhos em `.escolha` (botões de 44px de altura, raio 2px, o escolhido em `acao`); erro em `.erro`, sempre com texto; detalhes em `details` com +/−; tabela de medidas.
- **Campo de e-mail** (`.campo`): só a linha de baixo, em `tinta`, que engrossa para 2px no foco; aviso em `aria-live`.
- **Selo** (`.selo`): “Novo” sobre a foto, com fundo sólido `pedra`.
- **Rodapé** (`.rodape`): fundo `noite`, quatro colunas (a chamada e três de links: Loja, Ajuda, Atlas) e o ATLAS gigante (`clamp(88px, 23vw, 330px)`).

## Divergências conhecidas

| Ponto | Design system | Site |
|---|---|---|
| Altura do hero | `clamp(520px, 52vw, 720px)` | `clamp(560px, 40vw, 760px)`, que bate com a decisão do Miguel (~760px a 1900px) |
| ATLAS do hero | `clamp(96px, 20.5vw, 280px)`, `top: 30%` | `clamp(110px, 20.5vw, 380px)`, `top: 22%` |
| Figura da modelo | `translateX(-50%)`, `bottom: 5%` | `translateX(-57.7%)`, `bottom: 6%` (centraliza o corpo, ver `.docs/fotografia-e-hero.md`) |
| Hover do botão primário | fundo `pedra` | fundo transparente |
| Link de texto | 13px | 12px |
| Título | 30px | `clamp(22px, 2.3vw, 30px)` |
| Foto da temporada | `cover`, `center top` | `contain`, `center bottom` (`cover` no celular) |
| Margem lateral | 104px / 16px | `clamp(16px, 7.6vw, 104px)` |
| Tema Noite | definido nos tokens | não implementado |
| Cormorant | só no logotipo | também em frases editoriais (pendente) |

Nessas divergências, não mude nenhum dos lados sem confirmar com o Miguel.
