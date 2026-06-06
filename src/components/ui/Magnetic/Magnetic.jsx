import { useRef, useState, useEffect, cloneElement } from 'react'

// „Магнитен" ефект — елементът леко следва курсора при доближаване.
// Активен само на устройства с прецизен показалец и при позволено движение.
export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  const onMove = (e) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    setPos({ x, y })
  }
  const reset = () => setPos({ x: 0, y: 0 })

  return cloneElement(children, {
    ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    style: {
      ...(children.props.style || {}),
      transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      transition: pos.x === 0 && pos.y === 0 ? 'transform 0.45s cubic-bezier(0.22,1,0.36,1)' : 'transform 0.1s linear',
    },
  })
}
