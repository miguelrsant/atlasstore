import type { CSSProperties } from 'react'

// Frase curta em linhas, com a última sublinhada (padrão do layout da Atlas)
export function Chamada({ linhas, className = '', style }: { linhas: string[]; className?: string; style?: CSSProperties }) {
  return (
    <p className={`chamada ${className}`} style={style}>
      {linhas.map((l, i) => (
        <span key={l} className={i === linhas.length - 1 ? 'sub' : undefined}>{l}</span>
      ))}
    </p>
  )
}
