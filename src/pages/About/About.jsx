import PageHero from '../../components/ui/PageHero/PageHero'
import SectionIntro from '../../components/ui/SectionIntro/SectionIntro'
import Reveal from '../../components/ui/Reveal/Reveal'
import Figure from '../../components/ui/Figure/Figure'
import Button from '../../components/ui/Button/Button'
import './About.css'

const values = [
  { title: 'Сред природата', text: 'Истинска градина с високи дървета, сянка и свеж въздух — далеч от градския шум.' },
  { title: 'Домашна храна', text: 'Готвим с продукти от собствената си градина, бавно и без бързане.' },
  { title: 'За цялото семейство', text: 'Беседки за компанията, ливада за децата и фермата с Роско наблизо.' },
  { title: 'Грижа към детайла', text: 'От подредената маса до цветята в саксиите — всичко е премислено.' },
]

export default function About() {
  return (
    <>
      <PageHero
        kicker="За нас"
        title="Малка градинска приказка"
        lead="Място, създадено с любов към хубавата храна, зеленината и спокойствието — от 2014 година."
      />

      <section className="section">
        <div className="container about__story">
          <Reveal className="about__media">
            <Figure alt="Градината на Happy House с беседки и зеленина" tone="green" ratio="4 / 5" />
          </Reveal>
          <div className="about__copy">
            <Reveal>
              <span className="kicker">Нашата история</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="title-lg about__title">Как се роди Happy House</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="lead about__text">
                Започнахме през 2014 г. с проста мечта — да създадем градина, в която хората
                да забравят забързаното ежедневие. Засадихме дървета, построихме беседки и
                пуснахме фонтанчета, а кухнята напълнихме с рецепти от семейството.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="about__text">
                През 2023 г. до градината се появи и фермата Happy Farm. Патиците и ламата
                Роско бързо станаха любимци на малки и големи и превърнаха обяда в истинско
                приключение за цялото семейство.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Button to="/galeria" variant="ghost" withArrow>
                Разгледай галерията
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about__values-section">
        <div className="container">
          <SectionIntro kicker="Какво ни води" title="Ценности, които усещате на трапезата" align="center" />
          <div className="about__values">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="value-card">
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__text">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
