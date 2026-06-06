import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import Button from '../../ui/Button/Button'
import Leaf from '../../ui/Leaf/Leaf'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { site } from '../../../data/site'
import './Hero.css'

// 3D сцената се зарежда лениво (отделен chunk) и само когато е уместно.
const GardenScene = lazy(() => import('../../three/GardenScene/GardenScene'))

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const [show3D, setShow3D] = useState(false)
  const photoRef = useRef(null)

  useEffect(() => {
    // 3D само на по-големи екрани и при позволено движение
    if (!reduced && window.innerWidth >= 768) setShow3D(true)
  }, [reduced])

  // Фин parallax на снимката при скрол
  useEffect(() => {
    if (reduced) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (photoRef.current) {
          photoRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  return (
    <section className="hero">
      {/* Реална снимка на градината (фон) */}
      <div className="hero__photo" ref={photoRef} role="img" aria-label="Входът на градината Happy House с цветя и синята арка" />

      {/* 3D частици и листа върху снимката */}
      <div className="hero__scene">
        {show3D && (
          <Suspense fallback={null}>
            <GardenScene />
          </Suspense>
        )}
      </div>

      {/* статични декорации */}
      <div className="hero__bg" aria-hidden="true">
        <Leaf className="hero__leaf hero__leaf--1 hero-float" variant="branch" />
        <Leaf className="hero__leaf hero__leaf--2 hero-float hero-float--slow" variant="sprig" />
      </div>

      <div className="hero__inner container">
        <span className="kicker hero__kicker">Градина-бистро · от {site.established}</span>
        <h1 className="hero__title">
          <span className="hero__line">Трапеза сред</span>
          <span className="hero__line hero__line--accent flourish">зеленината</span>
        </h1>
        <p className="hero__lead">
          Дървени беседки, цъфтящи цветя и ромон на фонтани. Домашна кухня и спокойствие
          на крачка от града — а до нас, фермата с ламата Роско.
        </p>
        <div className="hero__actions">
          <Button to="/rezervacii" withArrow>
            Резервирай маса
          </Button>
          <Button to="/menu" variant="outline" className="btn--on-dark">
            Разгледай менюто
          </Button>
        </div>
      </div>

      <a href="#story" className="hero__scroll" aria-label="Към съдържанието">
        <span className="hero__scroll-line"></span>
        Разгледай
      </a>
    </section>
  )
}
