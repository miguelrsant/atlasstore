import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { produtos, type ProdutoId } from '@/data/loja'

export interface ItemSacola { id: ProdutoId; tam: string; qtd: number }

interface SacolaCtx {
  itens: ItemSacola[]
  aberta: boolean
  quantidade: number
  total: number
  adicionar: (id: ProdutoId, tam: string, qtd: number) => void
  alterar: (i: number, delta: number) => void
  remover: (i: number) => void
  abrir: () => void
  fechar: () => void
}

const Ctx = createContext<SacolaCtx | null>(null)
const CHAVE = 'atlas-sacola'

function ler(): ItemSacola[] {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) || '[]')
    return Array.isArray(v) ? v.filter((it) => it && it.id in produtos) : []
  } catch {
    return []
  }
}

export function SacolaProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ItemSacola[]>(ler)
  const [aberta, setAberta] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(CHAVE, JSON.stringify(itens)) } catch { /* sem armazenamento */ }
  }, [itens])

  const adicionar = useCallback((id: ProdutoId, tam: string, qtd: number) => {
    setItens((atual) => {
      const i = atual.findIndex((it) => it.id === id && it.tam === tam)
      if (i < 0) return [...atual, { id, tam, qtd }]
      return atual.map((it, k) => (k === i ? { ...it, qtd: Math.min(9, it.qtd + qtd) } : it))
    })
    setAberta(true)
  }, [])
  const alterar = useCallback((i: number, delta: number) => {
    setItens((atual) => atual.map((it, k) => (k === i ? { ...it, qtd: Math.min(9, it.qtd + delta) } : it)).filter((it) => it.qtd > 0))
  }, [])
  const remover = useCallback((i: number) => setItens((atual) => atual.filter((_, k) => k !== i)), [])

  const valor = useMemo<SacolaCtx>(() => ({
    itens, aberta, adicionar, alterar, remover,
    quantidade: itens.reduce((s, it) => s + it.qtd, 0),
    total: itens.reduce((s, it) => s + it.qtd * produtos[it.id].preco, 0),
    abrir: () => setAberta(true),
    fechar: () => setAberta(false),
  }), [itens, aberta, adicionar, alterar, remover])

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSacola() {
  const v = useContext(Ctx)
  if (!v) throw new Error('useSacola precisa estar dentro de SacolaProvider')
  return v
}
