import { useCallback, useEffect, useRef, useState } from 'react'
import PageTransition from '@/components/ui/page-transition'
import { Cabecalho } from '@/components/layout/Cabecalho'
import { Rodape } from '@/components/layout/Rodape'
import { Sacola } from '@/components/layout/Sacola'
import { useSacola } from '@/context/sacola'
import { caminhoAntigo, lerRota, navegar, type Rota } from '@/hooks/rota'
import { Colecao } from '@/pages/Colecao'
import { Inicio } from '@/pages/Inicio'
import { Produto } from '@/pages/Produto'
import { Sobre } from '@/pages/Sobre'
import { EntradaHome } from '@/components/animacoes/EntradaHome'

// Duração da entrada da escada: 0.5s + 4 colunas x 0.03s de atraso
const COBRIR_MS = 640
const semAnimacao = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function rolar(rota: Rota) {
  const alvo = rota.ancora ? document.getElementById(rota.ancora) : null
  if (alvo) alvo.scrollIntoView()
  else window.scrollTo(0, 0)
}

function rotaAtual() {
  const antigo = caminhoAntigo(window.location.hash)
  if (antigo) history.replaceState(null, '', antigo)
  return lerRota(window.location.pathname, window.location.hash)
}

// Links internos (<a href="/sobre">) navegam sem recarregar a página
function aoClicar(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  const a = (e.target as Element).closest?.('a')
  if (!a || a.target || a.hasAttribute('download')) return
  const url = new URL(a.href, window.location.href)
  if (url.origin !== window.location.origin) return
  e.preventDefault()
  navegar(url.pathname + url.search + url.hash)
}

const mesmaTela = (a: Rota, b: Rota) =>
  a.pagina === b.pagina && (a.pagina !== 'produto' || a.produto === b.produto)

export default function App() {
  const [rota, setRota] = useState<Rota>(rotaAtual)
  const [cobrindo, setCobrindo] = useState(false)
  const rotaRef = useRef(rota)
  const pendente = useRef<Rota | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const { fechar } = useSacola()
  // a entrada só roda quando o site abre direto na home
  const [abriuNaHome] = useState(() => rota.pagina === 'inicio' && !rota.ancora)

  const trocar = useCallback((nova: Rota) => {
    rotaRef.current = nova
    setRota(nova)
    requestAnimationFrame(() => rolar(nova))
  }, [])

  // Escada cobriu a tela: troca a página por baixo e abre a escada de novo
  const cobriu = useCallback(() => {
    window.clearTimeout(timer.current)
    if (!pendente.current) return
    trocar(pendente.current)
    pendente.current = null
    setCobrindo(false)
  }, [trocar])

  useEffect(() => {
    const aoMudar = () => {
      const nova = lerRota(window.location.pathname, window.location.hash)
      fechar()
      if (mesmaTela(nova, rotaRef.current) || semAnimacao()) { trocar(nova); return }
      pendente.current = nova
      setCobrindo(true)
      // garantia caso o fim da animação não seja avisado
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(cobriu, COBRIR_MS + 150)
    }
    window.addEventListener('popstate', aoMudar)
    document.addEventListener('click', aoClicar)
    return () => {
      window.removeEventListener('popstate', aoMudar)
      document.removeEventListener('click', aoClicar)
    }
  }, [cobriu, fechar, trocar])

  useEffect(() => { rolar(rotaRef.current) }, [])

  return (
    <>
      <Cabecalho pagina={rota.pagina} />
      <main>
        {rota.pagina === 'inicio' && <Inicio />}
        {rota.pagina === 'sobre' && <Sobre />}
        {rota.pagina === 'colecao' && <Colecao filtro={rota.filtro} />}
        {rota.pagina === 'produto' && <Produto key={rota.produto} id={rota.produto} />}
      </main>
      <Rodape />
      <Sacola />
      {abriuNaHome && <EntradaHome />}
      <PageTransition
        type="double-stairs"
        isVisible={cobrindo}
        onComplete={() => { if (pendente.current) cobriu() }}
      />
    </>
  )
}
