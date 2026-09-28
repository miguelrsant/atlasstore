import type { Filtro, ProdutoId } from '@/data/loja'
import { produtos } from '@/data/loja'

export type Pagina = 'inicio' | 'sobre' | 'colecao' | 'produto'

export interface Rota {
  pagina: Pagina
  filtro: Filtro
  produto: ProdutoId
  ancora?: string
}

const filtros: Filtro[] = ['todos', 'camisetas', 'calcas', 'bones']

// URLs limpas: /sobre, /colecao/camisetas, /produto/mapas. O hash fica só para
// âncoras dentro da página (/#lista).
export function lerRota(caminho: string, hash = ''): Rota {
  const [pagina, extra] = caminho.replace(/^\/+|\/+$/g, '').split('/')
  const ancora = hash.replace(/^#/, '') || undefined
  const base: Rota = { pagina: 'inicio', filtro: 'todos', produto: 'mapas', ancora }
  if (pagina === 'sobre') return { ...base, pagina: 'sobre' }
  if (pagina === 'colecao') {
    const f = extra as Filtro
    return { ...base, pagina: 'colecao', filtro: filtros.includes(f) ? f : 'todos' }
  }
  if (pagina === 'produto') {
    const id = extra as ProdutoId
    return { ...base, pagina: 'produto', produto: id in produtos ? id : 'mapas' }
  }
  return base
}

// Links antigos (#sobre, #colecao-bones, #produto-mapas) viram o caminho novo.
export function caminhoAntigo(hash: string): string | null {
  const h = hash.replace(/^#/, '')
  if (h === 'inicio') return '/'
  if (h === 'sobre') return '/sobre'
  if (h === 'colecao') return '/colecao'
  if (h.startsWith('colecao-')) return `/colecao/${h.slice(8)}`
  if (h.startsWith('produto-')) return `/produto/${h.slice(8)}`
  return null
}

export const link = {
  inicio: '/',
  sobre: '/sobre',
  lista: '/#lista',
  colecao: (f: Filtro = 'todos') => (f === 'todos' ? '/colecao' : `/colecao/${f}`),
  produto: (id: ProdutoId) => `/produto/${id}`,
}

export const instagram = 'https://www.instagram.com/atlas_rv/'

// Navega sem recarregar e avisa quem escuta 'popstate' (App, Cabeçalho).
export function navegar(url: string) {
  history.pushState(null, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
