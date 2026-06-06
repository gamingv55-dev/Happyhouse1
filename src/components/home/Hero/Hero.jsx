import { Suspense, lazy, useEffect, useState } from 'react'
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

  useEffect(() => {
    // 3D само на по-големи екрани и при позволено движение
    if (!reduced && window.innerWidth >= 768) setShow3D(true)
  }, [reduced])

  return (
    <section className="hero">
      {/* 3D фон */}
      <div className="hero__scene">
        {show3D && (
          <Suspense fallback={null}>
            <GardenScene />
          </Suspense>
        )}
      </div>

      {/* статични декорации (винаги, дори без 3D) */}
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
