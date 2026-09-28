import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { motion, useInView, useScroll, useTransform, type MotionValue } from 'framer-motion'

// Animações ligadas à rolagem, adaptadas da vitrine do naocodei.com/free-code.
// A rolagem controla o efeito: você desce, ele avança; você sobe, ele volta.

/* Texto que se preenche: cada palavra ganha cor quando a rolagem passa por ela */
function Palavra({ p, i, total, children }: { p: MotionValue<number>; i: number; total: number; children: string }) {
  const zona = 3 / total // degradê de três palavras
  const inicio = (i / total) * (1 - zona)
  const opacity = useTransform(p, [inicio, inicio + zona], [0.16, 1])
  return <motion.span style={{ opacity }}>{children} </motion.span>
}

export function TextoPreenche({ texto, className }: { texto: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.5'] })
  const palavras = texto.split(' ')
  return (
    <p ref={ref} className={className} aria-label={texto}>
      <span aria-hidden="true">
        {palavras.map((w, i) => <Palavra key={i} p={scrollYProgress} i={i} total={palavras.length}>{w}</Palavra>)}
      </span>
    </p>
  )
}

/* Faixas que se montam: a foto chega em tiras que deslizam em direções alternadas */
function Faixa({ p, i, n, estilo }: { p: MotionValue<number>; i: number; n: number; estilo: CSSProperties }) {
  const dist = (i % 2 ? 1 : -1) * (26 + (i % 3) * 8)
  const y = useTransform(p, [i * 0.05, 0.62 + i * 0.05], [`${dist}%`, '0%'])
  return (
    <motion.div className="faixa" style={{ left: `${(i * 100) / n}%`, width: `${100 / n + 0.2}%`, y }}>
      <div className="faixa-img" style={{ ...estilo, width: `${n * 100}%`, left: `${-i * 100}%` }} />
    </motion.div>
  )
}

export function FaixasMontam({ foto, rotulo, faixas = 6, className }: { foto: string; rotulo: string; faixas?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const estilo = { backgroundImage: `url(${foto})` }
  return (
    <div ref={ref} className={`faixas ${className ?? ''}`} role="img" aria-label={rotulo}>
      {Array.from({ length: faixas }, (_, i) => <Faixa key={i} p={scrollYProgress} i={i} n={faixas} estilo={estilo} />)}
    </div>
  )
}

/* Odômetro: cada dígito é uma fita de 0 a 9 que desliza até o número certo */
export function Odometro({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visto = useInView(ref, { once: true, amount: 0.6 })
  return (
    <span ref={ref} className="odometro" aria-label={valor}>
      {valor.split('').map((d, i) => (
        <span className="odometro-janela" aria-hidden="true" key={i}>
          <motion.span
            className="odometro-fita"
            initial={{ y: '0%' }}
            animate={{ y: visto ? `${-Number(d) * 10}%` : '0%' }}
            transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {'0123456789'.split('').map((n) => <span key={n}>{n}</span>)}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* Embaralhar letras: giram como painel de aeroporto e travam da esquerda para a direita */
const LETRAS = 'ABCDEFGHIJLMNOPRSTUVXZ'
export function Embaralhar({ texto }: { texto: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visto = useInView(ref, { once: true, amount: 0.6 })
  const [mostra, setMostra] = useState(texto)

  useEffect(() => {
    if (!visto) return
    let quadro = 0
    const id = window.setInterval(() => {
      quadro++
      const travadas = Math.floor(quadro / 3)
      setMostra(texto.split('').map((ch, i) => (i < travadas ? ch : LETRAS[(quadro * 7 + i * 5) % LETRAS.length])).join(''))
      if (travadas >= texto.length) window.clearInterval(id)
    }, 45)
    return () => window.clearInterval(id)
  }, [visto, texto])

  return <span ref={ref} aria-label={texto}><span aria-hidden="true">{mostra}</span></span>
}

/* Linha do tempo que se desenha: o traço cresce com a rolagem e acende cada marco */
export function LinhaDoTempo({ itens }: { itens: string[][] }) {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] })
  return (
    <ol ref={ref} className="linha-tempo">
      <motion.span className="linha-tempo-traco" aria-hidden="true" style={{ scaleY: scrollYProgress }} />
      {itens.map(([n, t, p], i) => <Marco key={n} p={scrollYProgress} i={i} total={itens.length} n={n} t={t} texto={p} />)}
    </ol>
  )
}

function Marco({ p, i, total, n, t, texto }: { p: MotionValue<number>; i: number; total: number; n: string; t: string; texto: string }) {
  const ponto = i / total
  const opacity = useTransform(p, [ponto - 0.02, ponto + 0.08], [0.3, 1])
  const scale = useTransform(p, [ponto - 0.02, ponto + 0.08], [0, 1])
  return (
    <li className="capitulo">
      <motion.span className="linha-tempo-ponto" aria-hidden="true" style={{ scale }} />
      <motion.span className="num" style={{ opacity }}>{n}</motion.span>
      <motion.div style={{ opacity }}><h3 className="rotulo">{t}</h3><p>{texto}</p></motion.div>
    </li>
  )
}
