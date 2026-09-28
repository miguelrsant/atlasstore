import { brl, img, produtos, type ProdutoId } from '@/data/loja'
import { link } from '@/hooks/rota'

export function CardProduto({ id, novo = false }: { id: ProdutoId; novo?: boolean }) {
  const p = produtos[id]
  return (
    <a className="produto" href={link.produto(id)}>
      <div className="foto rel">
        <img src={img(p.fotos[0])} alt={p.nome} loading="lazy" />
        {novo && <span className="selo legenda">Novo</span>}
      </div>
      <div className="info legenda"><span>{p.nome}</span><span className="preco">{brl(p.preco)}</span></div>
      <div className="info legenda"><span className="cor">{p.resumo}</span></div>
      <div className="tamanhos" aria-label="Tamanhos">{p.tamanhos.map((t) => <span key={t}>{t}</span>)}</div>
    </a>
  )
}
