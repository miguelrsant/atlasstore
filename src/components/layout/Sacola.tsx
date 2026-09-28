import { useEffect, useRef, useState } from 'react'
import { useSacola } from '@/context/sacola'
import { brl, FRETE_GRATIS, img, produtos } from '@/data/loja'
import { link } from '@/hooks/rota'

export function Sacola() {
  const { itens, aberta, fechar, alterar, remover, total, quantidade } = useSacola()
  const [nota, setNota] = useState('')
  const fecharRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!aberta) return
    setNota('')
    fecharRef.current?.focus()
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && fechar()
    document.addEventListener('keydown', esc)
    return () => document.removeEventListener('keydown', esc)
  }, [aberta, fechar])

  if (!aberta) return null
  const falta = FRETE_GRATIS - total

  return (
    <>
      <div className="veu" onClick={fechar} />
      <aside className="sacola" aria-labelledby="t-sacola">
        <div className="sacola-cab">
          <h2 className="rotulo" id="t-sacola">Sua sacola</h2>
          <button ref={fecharRef} className="linkbtn legenda" type="button" onClick={fechar}>Fechar ✕</button>
        </div>
        <div className="frete legenda">
          <span>{total === 0 ? 'Frete grátis acima de R$ 399' : falta > 0 ? `Faltam ${brl(falta)} para o frete grátis` : 'Você ganhou frete grátis'}</span>
          <div className="frete-barra"><i style={{ width: `${Math.min(100, (total / FRETE_GRATIS) * 100)}%` }} /></div>
        </div>
        <ul className="itens">
          {itens.length === 0 && (
            <li className="vazia legenda"><span>Sua sacola está vazia.</span><a className="link" href={link.colecao()} onClick={fechar}>Explorar a coleção</a></li>
          )}
          {itens.map((it, i) => {
            const p = produtos[it.id]
            return (
              <li className="item" key={it.id + it.tam}>
                <img src={img(p.fotos[0])} alt="" />
                <div className="item-info legenda">
                  <div className="linha"><span>{p.nome}</span><span>{brl(p.preco * it.qtd)}</span></div>
                  <span className="suave">Preto · Tamanho {it.tam}</span>
                  <div className="linha">
                    <div className="qtd" aria-label="Quantidade">
                      <button type="button" aria-label="Diminuir" onClick={() => alterar(i, -1)}>−</button>
                      <output>{it.qtd}</output>
                      <button type="button" aria-label="Aumentar" onClick={() => alterar(i, 1)}>+</button>
                    </div>
                    <button className="linkbtn suave" type="button" onClick={() => remover(i)}>Remover</button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="sacola-rodape legenda">
          <div className="linha"><span>Subtotal</span><span>{brl(total)}</span></div>
          <div className="linha" style={{ color: 'var(--tinta-suave)' }}><span>No Pix, 5% off</span><span>{brl(total * 0.95)}</span></div>
          <button className="btn btn-p" type="button" disabled={quantidade === 0} style={{ opacity: quantidade === 0 ? 0.4 : 1 }}
            onClick={() => setNota('Este é um protótipo: o pagamento ainda não está conectado.')}>Finalizar compra</button>
          <p className="nota" aria-live="polite">{nota}</p>
        </div>
      </aside>
    </>
  )
}
