import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useScrolled } from '../../../hooks/useScrolled'
import Leaf from '../../ui/Leaf/Leaf'
import './Header.css'

const links = [
  { to: '/', label: 'Начало' },
  { to: '/za-nas', label: 'За нас' },
  { to: '/menu', label: 'Меню' },
  { to: '/galeria', label: 'Галерия' },
  { to: '/ferma', label: 'Фермата' },
  { to: '/sabitia', label: 'Събития' },
  { to: '/kontakti', label: 'Контакти' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || !onHome || open

  return (
    <>
      <header className={`header ${solid ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
        <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Happy House — начало">
          <Leaf className="header__leaf" variant="sprig" />
          <span className="header__name">Happy House</span>
        </Link>

        <nav className="header__nav" aria-label="Основна навигация">
          <ul className="header__links">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/rezervacii" className="header__cta">
            Резервация
          </Link>
        </nav>

        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Затвори менюто' : 'Отвори менюто'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul className="mobile-menu__links">
          {links.map((l, i) => (
            <li key={l.to} style={{ '--i': i }}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}
              >
                <span className="mobile-menu__num">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li style={{ '--i': links.length }}>
            <Link to="/rezervacii" className="mobile-menu__cta">
              Резервирай маса
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
