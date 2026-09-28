import { useEffect, useMemo, useRef, useState } from 'react'
import { DynamicFrameLayout, type Frame } from '@/components/ui/dynamic-frame-layout'
import { galeria, img, produtos, type Filtro } from '@/data/loja'
import { link } from '@/hooks/rota'

const opcoes: [Filtro, string][] = [['todos', 'Todos'], ['camisetas', 'Camisetas'], ['calcas', 'Calças'], ['bones', 'Bonés']]
const dois = (n: number) => String(n).padStart(2, '0')

export function Colecao({ filtro }: { filtro: Filtro }) {
  const visiveis = useMemo(
    () => galeria.map((g, i) => ({ g, i })).filter(({ g }) => filtro === 'todos' || g.categorias.includes(filtro as never)),
    [filtro],
  )
  const [aberta, setAberta] = useState<number | null>(null)

  // Grade 3 x 3: as oito fotos em volta e a assinatura da coleção no centro.
  const quadros: Frame[] = useMemo(() => {
    const fotos = galeria.map((g, i) => {
      const ativa = filtro === 'todos' || g.categorias.includes(filtro as never)
      return {
        id: i + 1, image: img(g.foto), alt: g.titulo, objectPosition: g.foco, label: g.titulo, mediaSize: 1, isHovered: false,
        dimmed: !ativa, onClick: ativa ? () => setAberta(i) : undefined,
      }
    })
    const centro = {
      id: 99, mediaSize: 1, isHovered: false,
      content: (
        <div className="frame-centro">
          <span className="logo">ATLAS</span>
          <span className="legenda">Coleção 2026 · Franca, SP</span>
        </div>
      ),
    }
    const ordem = [...fotos.slice(0, 4), centro, ...fotos.slice(4)]
    return ordem.map((q, n) => ({ ...q, defaultPos: { x: (n % 3) * 4, y: Math.floor(n / 3) * 4, w: 4, h: 4 } }))
  }, [filtro])
  const caixa = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = caixa.current
    if (!d) return
    if (aberta !== null && !d.open) d.showModal()
    if (aberta === null && d.open) d.close()
  }, [aberta])

  const pos = visiveis.findIndex((v) => v.i === aberta)
  const atual = aberta !== null ? galeria[aberta] : null
  const passo = (dir: number) => setAberta(visiveis[(pos + dir + visiveis.length) % visiveis.length].i)

  return (
    <section className="wrap" aria-labelledby="t-col">
      <div className="col-cab">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--e3)' }}>
          <p className="rotulo"><span className="sub">Explorar</span></p>
          <h1 className="display" id="t-col">Coleção 2026</h1>
        </div>
        <p>Oito imagens, três peças e um caminho. Passe o mouse para abrir cada foto e clique para ver a peça.</p>
      </div>

      <div className="filtros" role="group" aria-label="Filtrar a galeria">
        {opcoes.map(([f, nome]) => (
          <a key={f} className="filtro" href={link.colecao(f)} aria-pressed={filtro === f} role="button"
            style={{ display: 'inline-flex', alignItems: 'center' }}>{nome}</a>
        ))}
        <span className="contagem legenda" aria-live="polite">{visiveis.length} {visiveis.length === 1 ? 'imagem' : 'imagens'}</span>
      </div>

      <div className="galeria-frames">
        <DynamicFrameLayout frames={quadros} hoverSize={6} gapSize={4} />
      </div>

      <dialog className="caixa" ref={caixa} aria-labelledby="caixa-titulo" onClose={() => setAberta(null)}
        onClick={(e) => { if (e.target === e.currentTarget) setAberta(null) }}>
        {atual && (
          <div className="caixa-corpo">
            <div className="caixa-foto"><img src={img(atual.foto)} alt={atual.titulo} /></div>
            <div className="caixa-info">
              <button className="linkbtn legenda fechar" type="button" onClick={() => setAberta(null)}>Fechar ✕</button>
              <p className="legenda">{dois(pos + 1)} / {dois(visiveis.length)}</p>
              <h2 className="titulo" id="caixa-titulo">{atual.titulo}</h2>
              <p>{atual.texto}</p>
              <a className="btn btn-p" href={link.produto(atual.produto)} onClick={() => setAberta(null)}>Ver {produtos[atual.produto].nome}</a>
              <div className="caixa-nav legenda">
                <button className="linkbtn" type="button" onClick={() => passo(-1)}>← Anterior</button>
                <button className="linkbtn" type="button" onClick={() => passo(1)}>Próxima →</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
