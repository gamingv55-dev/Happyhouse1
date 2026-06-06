import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

// Персонализиран курсор във формата на листо, което следва мишката,
// леко се полюшва и реагира при посочване на интерактивни елементи.
// Активен само при прецизен показалец и позволено движение.
export default function CustomCursor() {
  const leafRef = useRef(null)
  const haloRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const mouse = { x: innerWidth / 2, y: innerHeight / 2 }
    const halo = { x: mouse.x, y: mouse.y }
    let lastX = mouse.x
    let raf = 0

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (leafRef.current) {
        // лек наклон според посоката на движение
        const tilt = Math.max(-22, Math.min(22, (e.clientX - lastX) * 1.4))
        lastX = e.clientX
        leafRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) rotate(${tilt}deg)`
      }
    }
    const onOver = (e) => {
      const interactive = e.target.closest(
        'a, button, .gallery-grid__btn, input, select, textarea, [role="button"]',
      )
      haloRef.current?.classList.toggle('is-hover', !!interactive)
      leafRef.current?.classList.toggle('is-hover', !!interactive)
    }
    const onDown = () => leafRef.current?.classList.add('is-press')
    const onUp = () => leafRef.current?.classList.remove('is-press')

    const loop = () => {
      halo.x += (mouse.x - halo.x) * 0.14
      halo.y += (mouse.y - halo.y) * 0.14
      if (haloRef.current) {
        haloRef.current.style.transform = `translate(${halo.x}px, ${halo.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <span ref={haloRef} className="cursor-halo" aria-hidden="true" />
      <span ref={leafRef} className="cursor-leaf" aria-hidden="true">
        <svg className="cursor-leaf__svg" viewBox="0 0 24 24">
          <path
            d="M12 1.5C18.5 6 18.5 15 12 22.5C5.5 15 5.5 6 12 1.5Z"
            fill="#bd6a42"
            stroke="#fbf0e7"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path d="M12 4.5V20" stroke="#fbf0e7" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
          <path d="M12 9L15.5 7M12 12.5L8.5 10.5M12 15L15 13.5" stroke="#fbf0e7" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
        </svg>
      </span>
    </>
  )
}
