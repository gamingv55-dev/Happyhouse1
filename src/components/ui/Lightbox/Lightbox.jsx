import { useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Figure from '../Figure/Figure'
import './Lightbox.css'

// Достъпен lightbox с клавиатурна навигация (Esc, ←, →).
export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index >= 0
  const current = open ? items[index] : null

  const next = useCallback(() => onChange((index + 1) % items.length), [index, items.length, onChange])
  const prev = useCallback(() => onChange((index - 1 + items.length) % items.length), [index, items.length, onChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, next, prev])

  if (!open) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={onClose}>
      <button className="lightbox__close" aria-label="Затвори" onClick={onClose}>
        <FiX />
      </button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Предишна снимка"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
      >
        <FiChevronLeft />
      </button>

      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <Figure
          src={current.src}
          alt={current.alt}
          tone={current.tone}
          ratio="3 / 2"
          className="lightbox__figure"
        />
        <p className="lightbox__caption">{current.caption}</p>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        aria-label="Следваща снимка"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
      >
        <FiChevronRight />
      </button>
    </div>
  )
}
