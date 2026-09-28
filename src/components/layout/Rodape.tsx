import { Chamada } from '@/components/Chamada'
import { instagram, link } from '@/hooks/rota'

export function Rodape() {
  return (
    <footer className="rodape wrap">
      <div className="rodape-cols legenda">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--e3)', maxWidth: 280 }}>
          <Chamada linhas={['A moda que', 'se move com', 'você']} style={{ fontSize: 13 }} />
        </div>
        <div><h3 className="legenda">Loja</h3><ul>
          <li><a href={link.colecao()}>Coleção 2026</a></li>
          <li><a href={link.colecao('camisetas')}>Camisetas</a></li>
          <li><a href={link.colecao('calcas')}>Calças</a></li>
          <li><a href={link.colecao('bones')}>Bonés</a></li>
        </ul></div>
        <div><h3 className="legenda">Ajuda</h3><ul>
          <li><a href={link.produto('mapas')}>Trocas e devoluções</a></li>
          <li><a href={link.produto('mapas')}>Prazos de entrega</a></li>
          <li><a href={link.produto('mapas')}>Guia de tamanhos</a></li>
          <li><a href={link.lista}>Fale conosco</a></li>
        </ul></div>
        <div><h3 className="legenda">Atlas</h3><ul>
          <li><a href={link.sobre}>Sobre</a></li>
          <li><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={link.inicio}>TikTok</a></li>
        </ul></div>
      </div>
      <p className="rodape-logo" aria-hidden="true">ATLAS</p>
      <div className="rodape-base legenda">
        <span>© 2026 Atlas · Franca, SP</span>
        <div><span>Pix</span><span>Cartão em até 6x</span><span>Boleto</span></div>
      </div>
    </footer>
  )
}
