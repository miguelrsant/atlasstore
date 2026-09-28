import { img } from '@/data/loja'
import { link } from '@/hooks/rota'
import { Embaralhar, LinhaDoTempo, Odometro } from '@/components/animacoes/Rolagem'

const numeros = [
  ['16', 'Anos tinha o fundador quando a ideia virou desenho'],
  ['Franca', 'Interior de São Paulo, a capital nacional do calçado'],
  ['4', 'Quadros na estampa que conta de onde a marca vem'],
  ['2026', 'Ano da primeira coleção completa'],
]

const capitulos = [
  ['I', 'A ideia', 'Tudo começou no fundo da sala de aula. Entre uma matéria e outra, ele desenhava mapas: o contorno do Brasil, do estado de São Paulo, da cidade onde cresceu. Queria uma roupa que dissesse de onde ele era sem precisar explicar.'],
  ['II', 'O nome', 'Atlas é o livro que guarda todos os mapas. Também é o titã que carrega o mundo nas costas. O nome juntou as duas coisas: uma marca que leva o caminho de cada um, literalmente nas costas da camiseta.'],
  ['III', 'A primeira peça', 'Os quatro quadros saíram do caderno para a malha preta: Brasil, São Paulo, Franca e a rosa dos ventos. As primeiras camisetas foram para amigos e para a família. Em pouco tempo, gente que ele nem conhecia estava pedindo a sua.'],
  ['IV', 'A coleção 2026', 'Hoje a Atlas tem camisetas, calças e bonés pensados para andar juntos. Tudo em preto, com cortes largos e confortáveis, em tiragens pequenas. O caderno continua aberto, e o próximo mapa já está sendo desenhado.'],
]

const valores = [
  ['Preto como ponto de partida', 'O preto combina com tudo, dura mais no armário e deixa a estampa falar. Cada peça começa nele.'],
  ['Pouca peça, bem feita', 'Tiragens pequenas, malha 100% algodão e acabamento conferido peça por peça. Melhor esgotar do que sobrar.'],
  ['Do interior para o mundo', 'Franca faz sapato para o Brasil inteiro há décadas. A Atlas quer provar que roupa com identidade também pode sair daqui.'],
]

// A história é um texto de exemplo, escrito a partir do que o Miguel contou.
export function Sobre() {
  return (
    <>
      <section className="sobre-hero wrap" aria-labelledby="t-sobre">
        <div className="sobre-hero-texto">
          <p className="rotulo"><span className="sub">Sobre a Atlas</span></p>
          <h1 className="display" id="t-sobre">Uma ideia que saiu do interior de Franca.</h1>
          <p className="intro">A Atlas começou com um garoto de 16 anos, no interior de Franca, que queria vestir o lugar de onde veio. Sem investidor, sem fábrica própria e sem pressa: só um caderno de desenhos, uma camiseta preta e a vontade de fazer uma marca que parecesse com ele.</p>
        </div>
        <div className="sobre-hero-foto"><img src={img('look3.jpg')} alt="Modelo sentado com camiseta Atlas" /></div>
      </section>

      <section className="numeros wrap legenda" aria-label="A Atlas em números">
        {numeros.map(([n, t]) => <div className="numero" key={n}><b>{/^\d+$/.test(n) ? <Odometro valor={n} /> : <Embaralhar texto={n} />}</b><span>{t}</span></div>)}
      </section>

      <section className="capitulos wrap" aria-labelledby="t-hist">
        <div className="capitulos-intro">
          <p className="rotulo">A história</p>
          <h2 className="titulo" id="t-hist">Do caderno<br />para a rua</h2>
          <p style={{ color: 'var(--tinta-suave)', maxWidth: '36ch' }}>Como uma ideia de escola virou uma marca de roupa, em quatro passos.</p>
        </div>
        <LinhaDoTempo itens={capitulos} />
      </section>

      <section className="citacao wrap" aria-label="Palavra do fundador">
        <img src={img('criador.jpg')} alt="O criador da Atlas sorrindo, de camisa polo preta, à noite" style={{ objectPosition: 'center 30%' }} />
        <blockquote>
          <p>“Eu queria que quem visse a camiseta soubesse de onde eu vim, e entendesse que dá para ir longe daqui.”</p>
          <cite className="legenda">Fundador da Atlas, 16 anos</cite>
        </blockquote>
      </section>

      <section className="secao wrap" aria-labelledby="t-valores">
        <h2 className="titulo" id="t-valores">No que a Atlas acredita</h2>
        <div className="valores">
          {valores.map(([t, p]) => <div className="valor" key={t}><h3 className="rotulo">{t}</h3><p>{p}</p></div>)}
        </div>
      </section>

      <section className="faixa-cta wrap">
        <h2 className="titulo">Vista o seu caminho</h2>
        <div className="acoes">
          <a className="btn btn-p" href={link.colecao()}>Explorar a coleção</a>
          <a className="link" href={link.produto('mapas')}>Camiseta Mapas</a>
        </div>
      </section>
    </>
  )
}
