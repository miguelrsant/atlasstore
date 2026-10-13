// Logo da Atlas, vetorizado do bordado do peito da camiseta:
// arco que termina num ramo, ponto, "A" serifado e ATLAS espaçado embaixo.
// Usa currentColor, então segue a cor do texto onde estiver. Com titulo="" fica
// decorativo (quando o link em volta já tem aria-label).

const folha = 'M0 0C10-12 10-32 0-46C-10-32-10-12 0 0Z'
const folhas: [number, number, number][] = [
  [566, 236, -48], [563, 250, 42], [555, 290, -48], [552, 304, 42], [544, 344, -48], [541, 358, 42],
]

function Simbolo() {
  return (
    <>
      <path d="M220 440V187a177 177 0 0 1 354 0L530 400" strokeWidth={11} strokeLinecap="round" />
      <g fill="currentColor" stroke="none">
        {folhas.map(([x, y, r]) => <path key={`${x}${y}`} d={folha} transform={`translate(${x} ${y}) rotate(${r})`} />)}
        <ellipse cx="290" cy="243" rx="14" ry="11" />
        <path d="M374 220H408L602 590H556Z" />
      </g>
      <path d="M384 226L242 590M289 470H498M200 590H284M532 590H628M356 221H392" strokeWidth={11} />
    </>
  )
}

type Props = { variante?: 'completa' | 'simbolo'; className?: string; titulo?: string }

export function Logo({ variante = 'completa', className, titulo = 'Atlas' }: Props) {
  const completa = variante === 'completa'
  return (
    <svg className={className} viewBox={completa ? '0 0 840 770' : '190 0 450 600'} fill="none" stroke="currentColor"
      focusable="false" {...(titulo ? { role: 'img', 'aria-label': titulo } : { 'aria-hidden': true })}>
      <Simbolo />
      {completa && (
        <path d="M10 752L55 652L100 752M29 712H81M190 656H285M237.5 656V752M397 652V745H460M555 752L607 652L659 752M574 712H640M824 666C810 648 768 648 766 674C764 702 830 700 830 728C830 758 774 760 760 738"
          strokeWidth={14} />
      )}
    </svg>
  )
}
