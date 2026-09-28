import { useEffect, useMemo, useState, type CSSProperties } from 'react'

// Entrada da home: uma capa preta com ATLAS, dividida em retângulos que viram
// um a um e revelam a hero por baixo. Roda uma vez, quando o site abre na home.
const FIM_MS = 1500

function grade() {
  const w = window.innerWidth
  const h = window.innerHeight
  const colunas = w < 700 ? 5 : w < 1200 ? 8 : 10
  const linhas = Math.max(3, Math.round((colunas * h) / w))
  return { colunas, linhas, w, h }
}

export function EntradaHome() {
  const [ativa, setAtiva] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const g = useMemo(grade, [])

  useEffect(() => {
    if (!ativa) return
    const html = document.documentElement
    html.style.overflow = 'hidden'
    html.classList.add('com-entrada')
    const t = window.setTimeout(() => setAtiva(false), FIM_MS)
    return () => {
      window.clearTimeout(t)
      html.style.overflow = ''
      // deixa o modelo terminar de subir antes de tirar a classe
      window.setTimeout(() => html.classList.remove('com-entrada'), 600)
    }
  }, [ativa])

  if (!ativa) return null

  const { colunas, linhas, w, h } = g
  const tw = w / colunas
  const th = h / linhas
  const cx = (colunas - 1) / 2
  const cy = (linhas - 1) / 2
  const maxDist = Math.hypot(cx, cy) || 1

  const blocos = []
  for (let l = 0; l < linhas; l++) {
    for (let c = 0; c < colunas; c++) {
      // do centro para as bordas, com um pouco de acaso para não parecer mecânico
      const d = Math.hypot(c - cx, l - cy) / maxDist
      const atraso = 560 + d * 380 + ((c * 7 + l * 13) % 5) * 12
      const estilo = {
        left: c * tw, top: l * th, width: Math.ceil(tw) + 1, height: Math.ceil(th) + 1,
        '--atraso': `${atraso}ms`,
      } as CSSProperties
      blocos.push(
        <div className="entrada-bloco" key={`${l}-${c}`} style={estilo}>
          <div className="entrada-capa" style={{ width: w, height: h, left: -c * tw, top: -l * th }}>
            <span className="entrada-marca">ATLAS</span>
          </div>
        </div>,
      )
    }
  }

  return <div className="entrada" aria-hidden="true">{blocos}</div>
}
