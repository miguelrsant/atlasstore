import { useRef, useState } from 'react'
import { CardProduto } from '@/components/CardProduto'
import { useSacola } from '@/context/sacola'
import { brl, img, ordemVitrine, produtos, type ProdutoId } from '@/data/loja'
import { link } from '@/hooks/rota'

const textoCorrido = { textTransform: 'none', letterSpacing: '.02em', fontSize: 12, lineHeight: 1.6 } as const

export function Produto({ id }: { id: ProdutoId }) {
  const p = produtos[id]
  const { adicionar } = useSacola()
  const unico = p.tamanhos.length === 1
  const [tam, setTam] = useState<string | null>(unico ? p.tamanhos[0] : null)
  const [qtd, setQtd] = useState(1)
  const [foto, setFoto] = useState(0)
  const [erro, setErro] = useState('')
  const guia = useRef<HTMLDetailsElement>(null)
  const primeiroTam = useRef<HTMLButtonElement>(null)

  const addSacola = () => {
    if (!tam) { setErro('Escolha um tamanho para continuar.'); primeiroTam.current?.focus(); return }
    adicionar(id, tam, qtd)
  }
  const relacionados = ordemVitrine.filter((k) => k !== id)

  return (
    <>
      <nav className="migalha wrap legenda" aria-label="Você está em">
        <a href={link.inicio}>Início</a><span>/</span><a href={link.colecao()}>Coleção</a><span>/</span><span>{p.nome}</span>
      </nav>
      <section className="pdp wrap" aria-labelledby="p-nome">
        <div className="pdp-galeria">
          <div className="miniaturas" aria-label="Fotos da peça">
            {p.fotos.map((f, i) => (
              <button key={f} className="miniatura" type="button" aria-current={i === foto} aria-label={`Foto ${i + 1}`} onClick={() => setFoto(i)}>
                <img src={img(f)} alt="" />
              </button>
            ))}
          </div>
          <div className="pdp-principal">
            <img src={img(p.fotos[foto])} alt={p.nome} className={p.fotos[foto].endsWith('.png') ? 'recorte' : undefined} />
          </div>
        </div>

        <div className="pdp-info">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--e2)' }}>
            <p className="legenda" style={{ color: 'var(--tinta-suave)' }}>{p.selo}</p>
            <h1 id="p-nome">{p.nome}</h1>
            <div className="pdp-preco"><b>{brl(p.preco)}</b><span className="legenda">ou 3x de {brl(p.preco / 3)} · {brl(p.preco * 0.95)} no Pix</span></div>
          </div>
          <div className="pdp-bloco">
            <span className="legenda">Cor</span>
            <span className="cor-atual legenda"><i aria-hidden="true" />Preto</span>
          </div>
          <div className="pdp-bloco">
            <div className="pdp-bloco-cab legenda">
              <span>Tamanho</span>
              <button className="linkbtn link" type="button" style={{ fontSize: 10 }}
                onClick={() => { if (guia.current) { guia.current.open = true; guia.current.scrollIntoView({ behavior: 'smooth', block: 'center' }) } }}>Guia de tamanhos</button>
            </div>
            <div className="escolha" role="group" aria-label="Escolha o tamanho">
              {p.tamanhos.map((t, i) => (
                <button key={t} ref={i === 0 ? primeiroTam : undefined} type="button" aria-pressed={tam === t} onClick={() => { setTam(t); setErro('') }}>{t}</button>
              ))}
            </div>
            <p className="erro legenda" aria-live="polite">{erro}</p>
          </div>
          <div className="comprar">
            <div className="qtd" aria-label="Quantidade">
              <button type="button" aria-label="Diminuir" onClick={() => setQtd((q) => Math.max(1, q - 1))}>−</button>
              <output>{qtd}</output>
              <button type="button" aria-label="Aumentar" onClick={() => setQtd((q) => Math.min(9, q + 1))}>+</button>
            </div>
            <button className="btn btn-p" type="button" onClick={addSacola}>Adicionar à sacola</button>
          </div>
          <div className="detalhes legenda">
            <details open><summary>Descrição</summary><div><p style={textoCorrido}>{p.descricao}</p></div></details>
            <details ref={guia}><summary>Guia de tamanhos</summary><div>
              <div className="tabela-wrap"><table className="tabela"><tbody>
                {p.tabela.map((linha, i) => (
                  <tr key={linha[0]}>{linha.map((c) => (i === 0 ? <th scope="col" key={c}>{c}</th> : <td key={c}>{c}</td>))}</tr>
                ))}
              </tbody></table></div>
              <p style={textoCorrido}>Medidas da peça em centímetros. Na dúvida entre dois tamanhos, escolha o maior para um caimento mais largo.</p>
            </div></details>
            <details><summary>Composição e cuidados</summary><div><p style={textoCorrido}>{p.composicao}</p></div></details>
            <details><summary>Entrega e trocas</summary><div><p style={textoCorrido}>Frete grátis acima de R$ 399. Enviamos de Franca em até 2 dias úteis. A primeira troca é por nossa conta, em até 30 dias.</p></div></details>
          </div>
        </div>
      </section>

      <section className="secao wrap" aria-labelledby="t-look" style={{ paddingTop: 0 }}>
        <div className="secao-cab"><h2 className="titulo" id="t-look">Complete o look</h2><a className="link" href={link.colecao()}>Ver coleção</a></div>
        <div className="grade">{relacionados.map((k) => <CardProduto key={k} id={k} />)}</div>
      </section>
    </>
  )
}
