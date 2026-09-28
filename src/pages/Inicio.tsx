import { useState, type FormEvent } from 'react'
import { CardProduto } from '@/components/CardProduto'
import { Chamada } from '@/components/Chamada'
import { img, ordemVitrine, type ProdutoId } from '@/data/loja'
import { link } from '@/hooks/rota'
import { FaixasMontam, TextoPreenche } from '@/components/animacoes/Rolagem'

const looks: [string, string, string, ProdutoId, string][] = [
  ['look1.jpg', 'Look 01', 'Mapas', 'mapas', 'Modelo saltando com camiseta Mapas e calça preta'],
  ['look2.jpg', 'Look 02', 'Assinatura', 'assinatura', 'Modelo caminhando com camiseta Atlas preta'],
  ['look3.jpg', 'Look 03', 'Assinatura', 'assinatura', 'Modelo sentado em banco com camiseta Atlas'],
  ['look4.jpg', 'Look 04', 'Mapas', 'mapas', 'Modelo de perfil com camiseta Mapas'],
]

export function Inicio() {
  const [aviso, setAviso] = useState('')
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.elements.namedItem('email') as HTMLInputElement
    setAviso(email.value && email.checkValidity() ? 'Pronto, você está na lista.' : 'Digite um e-mail válido, como nome@email.com.')
  }

  return (
    <>
      <section className="hero wrap" aria-label="Atlas">
        <Chamada className="hero-topo" linhas={['A moda que', 'se move com', 'você']} />
        <h1 className="hero-logo" aria-hidden="true">ATLAS</h1>
        <div className="hero-figura">
          <img className="hero-sombra" src={img('sombra.png')} alt="" />
          <img className="hero-modelo" src={img('modelo.png')} alt="Modelo de costas com a camiseta preta Atlas, estampa de mapas nas costas" />
        </div>
        <div className="hero-base">
          <div className="acoes">
            <a className="btn btn-p" href={link.produto('mapas')}>Compre agora</a>
            <a className="link" href={link.colecao()}>Explorar</a>
          </div>
          <Chamada linhas={['Nova', 'coleção', '2026']} />
        </div>
      </section>

      <section className="colecao wrap" id="nova-colecao" aria-labelledby="t-colecao">
        <h2 className="rotulo" id="t-colecao"><span className="sub">Nova coleção</span></h2>
        <div className="grade">
          {looks.map(([f, n, nome, p, alt]) => (
            <a className="look" key={f} href={link.produto(p)}>
              <div className="foto"><img src={img(f)} alt={alt} /></div>
              <span className="legenda"><span>{n}</span><span>{nome}</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="temporada" aria-labelledby="t-temp">
        <div className="temporada-texto">
          <p className="rotulo">Nova temporada</p>
          <h2 className="titulo" id="t-temp">Nova<br />sensação</h2>
          <p style={{ maxWidth: '22ch' }}>Descubra tudo o que há de novo e atual</p>
          <a className="btn btn-p" href={link.colecao()}>Explorar coleção</a>
        </div>
        <FaixasMontam className="temporada-foto" foto={img('temporada.jpg')} rotulo="Modelo com jaqueta preta sobre camiseta Atlas" />
      </section>

      <section className="secao wrap" id="vendidos" aria-labelledby="t-vend">
        <div className="secao-cab">
          <h2 className="titulo" id="t-vend">Mais vendidos</h2>
          <a className="link" href={link.colecao()}>Ver todos</a>
        </div>
        <div className="grade">{ordemVitrine.map((id, i) => <CardProduto key={id} id={id} novo={i === 0} />)}</div>
      </section>

      <section className="estampa wrap" aria-labelledby="t-est">
        <span className="vertical" aria-hidden="true">Atlas · Estampa 01</span>
        <div className="estampa-fotos">
          <img src={img('estampa-costas.jpg')} alt="Estampa de quatro quadros nas costas da camiseta: Brasil, São Paulo, Franca e a rosa dos ventos" />
          <img src={img('camiseta-frente.jpg')} alt="Frente da camiseta preta com ATLAS no peito" />
        </div>
        <div className="estampa-texto">
          <p className="rotulo"><span className="sub">A estampa</span></p>
          <h2 className="titulo" id="t-est">Quatro quadros,<br />um caminho</h2>
          <p>Desenhada à mão como um mapa de bolso: de onde a gente vem até para onde a gente vai. Impressa em off-white sobre malha preta.</p>
          <div className="quadros legenda">
            {[['I', 'Brasil'], ['II', 'São Paulo'], ['III', 'Franca'], ['IV', 'Rosa dos ventos']].map(([n, t]) => <div key={n}><b>{n}</b>{t}</div>)}
          </div>
          <a className="btn btn-c" href={link.produto('mapas')}>Ver camiseta Mapas</a>
        </div>
      </section>

      <section className="manifesto wrap" aria-label="Manifesto">
        <TextoPreenche className="manifesto-frase" texto="Todo caminho começa em algum lugar." />
        <div className="manifesto-lado">
          <p className="rotulo">Sobre a Atlas</p>
          <p>A Atlas nasceu no interior de Franca, na cabeça de um garoto de 16 anos, para quem está sempre indo para algum lugar. Peças pretas, cortes largos e nenhum excesso.</p>
          <a className="link" href={link.sobre}>Conheça a marca</a>
        </div>
      </section>

      <section className="secao wrap" id="categorias" aria-labelledby="t-cat" style={{ paddingTop: 0 }}>
        <div className="secao-cab"><h2 className="titulo" id="t-cat">Compre por categoria</h2></div>
        <div className="cats">
          {([['look3.jpg', 'Camisetas', 'camisetas'], ['look2.jpg', 'Calças', 'calcas'], ['look1.jpg', 'Bonés', 'bones']] as const).map(([f, n, c]) => (
            <a className="cat" key={c} href={link.colecao(c)}>
              <div className="foto"><img src={img(f)} alt={`${n} Atlas`} loading="lazy" /></div>
              <div className="cat-nome rotulo"><span>{n}</span><span aria-hidden="true">→</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="lista wrap" id="lista" aria-labelledby="t-lista">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--e3)' }}>
          <p className="rotulo">Lista Atlas</p>
          <h2 className="titulo" id="t-lista">Chegue antes<br />dos lançamentos</h2>
          <p style={{ maxWidth: '40ch' }}>Receba as novas coleções primeiro e 10% off na primeira compra.</p>
        </div>
        <form onSubmit={enviar} noValidate>
          <label className="legenda" htmlFor="email">Seu e-mail</label>
          <div className="campo">
            <input id="email" name="email" type="email" placeholder="nome@email.com" autoComplete="email" required />
            <button className="btn btn-p" type="submit">Entrar na lista</button>
          </div>
          <p className="aviso legenda" aria-live="polite">{aviso}</p>
        </form>
      </section>
    </>
  )
}
