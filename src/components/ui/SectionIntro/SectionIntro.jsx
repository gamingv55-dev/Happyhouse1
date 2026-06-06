import Reveal from '../Reveal/Reveal'
import './SectionIntro.css'

// Заглавен блок за секция: kicker + заглавие + по желание подзаглавие.
// align: 'left' | 'center'
export default function SectionIntro({ kicker, title, lead, align = 'left', light = false }) {
  return (
    <div className={`section-intro section-intro--${align} ${light ? 'section-intro--light' : ''}`}>
      {kicker && (
        <Reveal>
          <span className={`kicker ${align === 'center' ? 'kicker--center' : ''}`}>{kicker}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="section-intro__title title-lg">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className="section-intro__lead lead">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
