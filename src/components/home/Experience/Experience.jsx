import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionIntro from '../../ui/SectionIntro/SectionIntro'
import Reveal from '../../ui/Reveal/Reveal'
import './Experience.css'

const items = [
  {
    n: '01',
    title: 'Градината',
    text: 'Дървени беседки сред зеленина, цветя и фонтанчета — за дълъг, спокоен обяд на сянка.',
    to: '/galeria',
    link: 'Виж градината',
  },
  {
    n: '02',
    title: 'Кухнята',
    text: 'Домашни ястия с продукти от собствената ни градина, приготвени бавно и с грижа.',
    to: '/menu',
    link: 'Към менюто',
  },
  {
    n: '03',
    title: 'Фермата',
    text: 'Happy Farm с ламата Роско и патиците — забавление за деца и цели семейства.',
    to: '/ferma',
    link: 'Запознай се',
  },
]

// Лек 3D наклон спрямо позицията на курсора
function handleTilt(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  el.style.setProperty('--rx', `${-py * 6}deg`)
  el.style.setProperty('--ry', `${px * 6}deg`)
}
function resetTilt(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

export default function Experience() {
  return (
    <section className="experience section">
      <div className="container">
        <SectionIntro
          kicker="Какво ви очаква"
          title="Едно място, три преживявания"
          lead="Градина за сетивата, кухня за душата и ферма за усмивките — събрани на едно зелено кътче."
          align="center"
        />

        <div className="experience__grid">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 110}>
              <Link
                to={it.to}
                className="exp-card"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <span className="exp-card__n">{it.n}</span>
                <h3 className="exp-card__title">{it.title}</h3>
                <p className="exp-card__text">{it.text}</p>
                <span className="exp-card__link">
                  {it.link}
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
