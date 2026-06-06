import PageHero from '../../components/ui/PageHero/PageHero'
import SectionIntro from '../../components/ui/SectionIntro/SectionIntro'
import Reveal from '../../components/ui/Reveal/Reveal'
import Figure from '../../components/ui/Figure/Figure'
import Button from '../../components/ui/Button/Button'
import { farm } from '../../data/farm'
import './Farm.css'

const tones = ['sage', 'clay', 'cream']

export default function Farm() {
  return (
    <>
      <PageHero
        kicker={`Happy Farm · от ${farm.since}`}
        title="Фермата с ламата Роско"
        lead={farm.intro}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            kicker="Кажете здравей"
            title="Обитателите на фермата"
            lead="Малко стопанство, в което децата откриват простите радости на село."
            align="center"
          />

          <div className="farm-animals">
            {farm.animals.map((a, i) => (
              <Reveal key={a.name} delay={i * 110} className="animal-card">
                <Figure alt={`${a.name} — ${a.species}`} tone={tones[i % tones.length]} ratio="4 / 3" />
                <div className="animal-card__body">
                  <span className="animal-card__species">{a.species}</span>
                  <h3 className="animal-card__name">{a.name}</h3>
                  <p className="animal-card__desc">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="farm-invite">
        <div className="container farm-invite__inner">
          <Reveal>
            <span className="kicker farm-invite__kicker">Заповядайте на гости</span>
            <h2 className="title-lg farm-invite__title">Превърнете обяда в приключение</h2>
            <p className="lead farm-invite__text">
              Съчетайте разходката из фермата с обяд в градината — ден, който децата дълго ще помнят.
            </p>
            <Button to="/rezervacii" withArrow>
              Резервирай посещение
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
