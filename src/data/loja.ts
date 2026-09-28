export type ProdutoId = 'mapas' | 'assinatura' | 'rota' | 'norte'
export type Categoria = 'camisetas' | 'calcas' | 'bones'
export type Filtro = 'todos' | Categoria

export interface Produto {
  id: ProdutoId
  nome: string
  preco: number
  selo: string
  fotos: string[]
  tamanhos: string[]
  resumo: string
  descricao: string
  composicao: string
  tabela: string[][]
}

// Nomes, preços, textos e medidas são exemplos para o protótipo.
export const produtos: Record<ProdutoId, Produto> = {
  mapas: {
    id: 'mapas', nome: 'Camiseta Mapas', preco: 189, selo: 'Novo · Estampa 01',
    fotos: ['look4.jpg', 'estampa-costas.jpg', 'look1.jpg', 'modelo.png'],
    tamanhos: ['P', 'M', 'G', 'GG'], resumo: 'Preto · 100% algodão',
    descricao: 'A camiseta que começou a Atlas. Nas costas, os quatro quadros desenhados à mão: Brasil, São Paulo, Franca e a rosa dos ventos. Modelagem larga, ombro caído e gola canelada firme.',
    composicao: '100% algodão, malha 30.1 penteada. Estampa em silk off-white. Lave do avesso, em água fria, e não passe ferro sobre a estampa.',
    tabela: [['Tamanho', 'Largura', 'Comprimento'], ['P', '54', '70'], ['M', '57', '72'], ['G', '60', '74'], ['GG', '63', '76']],
  },
  assinatura: {
    id: 'assinatura', nome: 'Camiseta Assinatura', preco: 159, selo: 'Básica',
    fotos: ['look3.jpg', 'camiseta-frente.jpg', 'look2.jpg'],
    tamanhos: ['P', 'M', 'G', 'GG'], resumo: 'Preto · 100% algodão',
    descricao: 'A básica da Atlas, com o nome da marca no peito. Feita para usar todo dia, sozinha ou por baixo de uma jaqueta.',
    composicao: '100% algodão, malha 30.1 penteada. Lave do avesso, em água fria.',
    tabela: [['Tamanho', 'Largura', 'Comprimento'], ['P', '52', '70'], ['M', '55', '72'], ['G', '58', '74'], ['GG', '61', '76']],
  },
  rota: {
    id: 'rota', nome: 'Calça Rota', preco: 289, selo: 'Jeans',
    fotos: ['look2.jpg', 'look1.jpg', 'look4.jpg'],
    tamanhos: ['38', '40', '42', '44'], resumo: 'Preto lavado · Corte reto',
    descricao: 'Jeans preto lavado de corte reto e perna larga, que cai por cima do tênis. Cinco bolsos e botão de metal escurecido.',
    composicao: '100% algodão, denim 13 oz. Lave do avesso e seque à sombra para manter o preto.',
    tabela: [['Tamanho', 'Cintura', 'Comprimento'], ['38', '78', '104'], ['40', '82', '105'], ['42', '86', '106'], ['44', '90', '107']],
  },
  norte: {
    id: 'norte', nome: 'Boné Norte', preco: 119, selo: 'Acessório',
    fotos: ['look1.jpg', 'look4.jpg'],
    tamanhos: ['Único'], resumo: 'Preto · Aba curva',
    descricao: 'Boné de seis gomos com aba curva e fecho ajustável atrás. Completa qualquer look da coleção.',
    composicao: '100% algodão sarjado. Limpe com pano úmido.',
    tabela: [['Tamanho', 'Circunferência'], ['Único', '54 a 60']],
  },
}

export const ordemVitrine: ProdutoId[] = ['mapas', 'assinatura', 'rota', 'norte']

export interface Imagem {
  foto: string
  titulo: string
  categorias: Categoria[]
  produto: ProdutoId
  formato?: 'grande' | 'larga' | 'recorte'
  foco?: string
  texto: string
}

const todas: Categoria[] = ['camisetas', 'calcas', 'bones']

export const galeria: Imagem[] = [
  { foto: 'look1.jpg', foco: 'center 12%', titulo: 'Look 01 · Salto', categorias: todas, produto: 'mapas', formato: 'grande', texto: 'Camiseta Mapas, Calça Rota e Boné Norte. O look completo da coleção.' },
  { foto: 'temporada.jpg', foco: 'center 22%', titulo: 'Nova temporada', categorias: ['camisetas'], produto: 'assinatura', formato: 'larga', texto: 'Camiseta Assinatura por baixo de uma jaqueta de sarja preta.' },
  { foto: 'look2.jpg', foco: 'center 12%', titulo: 'Look 02 · Passo', categorias: todas, produto: 'rota', texto: 'Calça Rota em movimento, com a Camiseta Assinatura.' },
  { foto: 'estampa-costas.jpg', foco: 'center 45%', titulo: 'A estampa', categorias: ['camisetas'], produto: 'mapas', texto: 'Brasil, São Paulo, Franca e a rosa dos ventos, desenhados à mão.' },
  { foto: 'look3.jpg', foco: 'center 18%', titulo: 'Look 03 · Pausa', categorias: todas, produto: 'assinatura', texto: 'Camiseta Assinatura com Calça Rota. O básico que funciona todo dia.' },
  { foto: 'modelo.png', foco: 'center 4%', titulo: 'Caminho', categorias: todas, produto: 'mapas', formato: 'recorte', texto: 'A Camiseta Mapas vista de costas, do jeito que ela foi pensada.' },
  { foto: 'look4.jpg', foco: 'center 12%', titulo: 'Look 04 · Perfil', categorias: todas, produto: 'mapas', texto: 'Camiseta Mapas, com a estampa aparecendo de lado.' },
  { foto: 'camiseta-frente.jpg', foco: 'center 60%', titulo: 'Assinatura no peito', categorias: ['camisetas'], produto: 'assinatura', texto: 'O nome ATLAS pequeno, na altura do peito.' },
]

export const img = (nome: string) => `${import.meta.env.BASE_URL}img/${nome}`

export const brl = (v: number) => 'R$ ' + v.toFixed(2).replace('.', ',').replace(/,00$/, '')

export const FRETE_GRATIS = 399
