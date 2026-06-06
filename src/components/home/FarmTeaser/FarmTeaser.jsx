import Reveal from '../../ui/Reveal/Reveal'
import Button from '../../ui/Button/Button'
import Figure from '../../ui/Figure/Figure'
import { farm } from '../../../data/farm'
import './FarmTeaser.css'

export default function FarmTeaser() {
  return (
    <section className="farm-teaser">
      <div className="farm-teaser__inner container">
        <Reveal className="farm-teaser__media">
          <Figure
            alt="Ламата Роско във фермата Happy Farm"
            tone="sage"
            ratio="1 / 1"
          />
          <span className="farm-teaser__tag">от {farm.since}</span>
        </Reveal>

        <div className="farm-teaser__copy">
          <Reveal>
            <span className="kicker farm-teaser__kicker">Happy Farm</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="title-lg farm-teaser__title">
              Запознайте се с <span className="flourish">ламата Роско</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead farm-teaser__text">{farm.intro}</p>
          </Reveal>
          <Reveal delay={200}>
            <Button to="/ferma" withArrow>
              Към фермата
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
