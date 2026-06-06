import { useInView } from '../../../hooks/useInView'

// Обвива съдържание и го разкрива плавно при скрол.
// `delay` (в ms) позволява стъпаловидно появяване на елементи.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
