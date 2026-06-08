import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import './RoscoMascot.css'

// Анимирана главичка на ламата Роско. При клик изскача балонче
// с истинската снимка (/rosco.webp) и надпис „Аз съм Роско".
// Опитваме няколко формата за снимката на Роско; ако никой не се зареди → емоджи
const roscoSources = ['/rosco.webp', '/rosco.jpg', '/rosco.jpeg', '/rosco.png']

export default function RoscoMascot() {
  const [open, setOpen] = useState(false)
  const [srcIdx, setSrcIdx] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className={`rosco ${open ? 'is-open' : ''}`}>
      {/* Балонче */}
      <div className="rosco-bubble" role="dialog" aria-label="Ламата Роско" aria-hidden={!open}>
        <button className="rosco-bubble__close" onClick={() => setOpen(false)} aria-label="Затвори">
          <FiX />
        </button>
        <div className="rosco-bubble__photo">
          {srcIdx < roscoSources.length ? (
            <img
              src={roscoSources[srcIdx]}
              alt="Ламата Роско от фермата Happy Farm"
              onError={() => setSrcIdx((i) => i + 1)}
            />
          ) : (
            <span className="rosco-bubble__fallback" role="img" aria-label="Лама">🦙</span>
          )}
        </div>
        <p className="rosco-bubble__caption">
          Аз съм <strong>Роско</strong> и те очаквам! 🦙
        </p>
      </div>

      {/* Главичката-бутон */}
      <button
        className="rosco-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Затвори Роско' : 'Поздрави ламата Роско'}
        aria-expanded={open}
      >
        <span className="rosco-hint">Здравей!</span>
        <svg className="rosco-head" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* уши */}
          <g className="rosco-ear rosco-ear--l">
            <ellipse cx="36" cy="26" rx="6.5" ry="15" fill="#efe7d3" />
            <ellipse cx="36" cy="28" rx="3" ry="8" fill="#d98c93" />
          </g>
          <g className="rosco-ear rosco-ear--r">
            <ellipse cx="64" cy="26" rx="6.5" ry="15" fill="#efe7d3" />
            <ellipse cx="64" cy="28" rx="3" ry="8" fill="#d98c93" />
          </g>
          {/* глава */}
          <rect x="29" y="30" width="42" height="76" rx="21" fill="#f3ecd9" />
          {/* перчем */}
          <g fill="#e6dabf">
            <circle cx="41" cy="34" r="7" />
            <circle cx="50" cy="31" r="8" />
            <circle cx="59" cy="34" r="7" />
          </g>
          {/* бузки */}
          <circle cx="35" cy="74" r="6" fill="#d98c93" opacity="0.32" />
          <circle cx="65" cy="74" r="6" fill="#d98c93" opacity="0.32" />
          {/* очи (мигат) */}
          <g className="rosco-eyes">
            <circle cx="42" cy="62" r="4.2" fill="#2c2620" />
            <circle cx="58" cy="62" r="4.2" fill="#2c2620" />
            <circle cx="43.4" cy="60.4" r="1.3" fill="#fff" />
            <circle cx="59.4" cy="60.4" r="1.3" fill="#fff" />
          </g>
          {/* муцунка */}
          <ellipse cx="50" cy="90" rx="15" ry="12" fill="#fbf6ea" />
          <ellipse cx="45" cy="87" rx="1.6" ry="2.3" fill="#7a5b4a" />
          <ellipse cx="55" cy="87" rx="1.6" ry="2.3" fill="#7a5b4a" />
          <path d="M46 95 Q50 99 54 95" stroke="#7a5b4a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
