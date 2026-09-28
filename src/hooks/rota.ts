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

// Só âncoras simples (#sobre, #produto-mapas) funcionam em qualquer hospedagem,
// então a rota inteira cabe num token do hash.
export function lerRota(hash: string): Rota {
  const h = hash.replace(/^#/, '')
  const base: Rota = { pagina: 'inicio', filtro: 'todos', produto: 'mapas' }
  if (!h || h === 'inicio') return base
  if (h === 'sobre') return { ...base, pagina: 'sobre' }
  if (h === 'colecao' || h.startsWith('colecao-')) {
    const f = h.slice(8) as Filtro
    return { ...base, pagina: 'colecao', filtro: filtros.includes(f) ? f : 'todos' }
  }
  if (h.startsWith('produto')) {
    const id = h.slice(8) as ProdutoId
    return { ...base, pagina: 'produto', produto: id in produtos ? id : 'mapas' }
  }
  return { ...base, ancora: h }
}

export const link = {
  inicio: '#inicio',
  sobre: '#sobre',
  colecao: (f: Filtro = 'todos') => (f === 'todos' ? '#colecao' : `#colecao-${f}`),
  produto: (id: ProdutoId) => `#produto-${id}`,
}
