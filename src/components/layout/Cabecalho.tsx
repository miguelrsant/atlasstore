import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useSacola } from '@/context/sacola'
import { link, type Pagina } from '@/hooks/rota'

export function Cabecalho({ pagina }: { pagina: Pagina }) {
  const { quantidade, abrir } = useSacola()
  const [menu, setMenu] = useState(false)
  const atual = (p: Pagina) => (pagina === p ? 'page' : undefined)

  // Fecha o menu ao trocar de página e com Esc; trava a rolagem enquanto aberto.
  useEffect(() => setMenu(false), [pagina])
  useEffect(() => {
    if (!menu) return
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    const fechar = () => setMenu(false)
    document.addEventListener('keydown', esc)
    window.addEventListener('popstate', fechar)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', esc)
      window.removeEventListener('popstate', fechar)
      document.body.style.overflow = ''
    }
  }, [menu])

  return (
    <>
      <header className="topo wrap legenda">
        <button className="linkbtn hamburguer" type="button" aria-label="Abrir menu" aria-expanded={menu}
          aria-controls="menu-celular" onClick={() => setMenu(true)}>
          <Menu size={22} strokeWidth={1.5} aria-hidden />
        </button>
        <nav aria-label="Menu" className="menu-desktop">
          <a href={link.colecao()} aria-current={atual('colecao')}>Coleção</a>
          <a href={link.sobre} aria-current={atual('sobre')}>Sobre</a>
        </nav>
        <a className="logo" href={link.inicio} aria-label="Atlas, início">ATLAS</a>
        <nav aria-label="Conta">
          <a href={link.colecao()}>Buscar</a>
          <a href={link.lista}>Entrar</a>
          <button className="linkbtn" type="button" onClick={abrir}>
            Sacola{quantidade > 0 && <span className="cont">{quantidade}</span>}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div id="menu-celular" className="menu-celular" role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}>
            <div className="menu-celular-topo">
              <button className="linkbtn" type="button" aria-label="Fechar menu" onClick={() => setMenu(false)}>
                <X size={22} strokeWidth={1.5} aria-hidden />
              </button>
              <a className="logo" href={link.inicio}>ATLAS</a>
              <span aria-hidden />
            </div>
            <nav className="menu-celular-links">
              {[
                [link.inicio, 'Início', 'inicio'],
                [link.colecao(), 'Coleção', 'colecao'],
                [link.sobre, 'Sobre', 'sobre'],
              ].map(([href, nome, p], i) => (
                <motion.a key={href} href={href} aria-current={atual(p as Pagina)}
                  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}>
                  <span className="legenda">0{i + 1}</span>{nome}
                </motion.a>
              ))}
            </nav>
            <div className="menu-celular-pe legenda">
              <a href={link.lista}>Lista Atlas</a>
              <a href={link.produto('mapas')}>Trocas</a>
              <a href={link.lista}>Entrar</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
