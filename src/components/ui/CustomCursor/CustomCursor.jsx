import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

// Персонализиран курсор (точка + пръстен), който следва мишката с лек ленив ефект.
// Активен само при прецизен показалец и позволено движение.
export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const mouse = { x: innerWidth / 2, y: innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let raf = 0

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
    }
    const onOver = (e) => {
      const interactive = e.target.closest('a, button, .gallery-grid__btn, input, select, textarea, [role="button"]')
      ringRef.current?.classList.toggle('is-hover', !!interactive)
    }

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.16
      ring.y += (mouse.y - ring.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
