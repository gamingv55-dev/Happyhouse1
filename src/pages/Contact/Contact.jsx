import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import PageHero from '../../components/ui/PageHero/PageHero'
import Reveal from '../../components/ui/Reveal/Reveal'
import { site } from '../../data/site'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Контакти"
        title="Ще се радваме да ви видим"
        lead="Заповядайте в градината или се свържете с нас за резервация и въпроси."
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <Reveal as="article" className="contact-card">
              <span className="contact-card__icon"><FiPhone /></span>
              <div>
                <h2 className="contact-card__title">Телефон</h2>
                <a href={`tel:${site.phoneHref}`} className="contact-card__value">{site.phone}</a>
              </div>
            </Reveal>

            <Reveal as="article" delay={70} className="contact-card">
              <span className="contact-card__icon"><FiMail /></span>
              <div>
                <h2 className="contact-card__title">Имейл</h2>
                <a href={`mailto:${site.email}`} className="contact-card__value">{site.email}</a>
              </div>
            </Reveal>

            <Reveal as="article" delay={140} className="contact-card">
              <span className="contact-card__icon"><FiMapPin /></span>
              <div>
                <h2 className="contact-card__title">Адрес</h2>
                <span className="contact-card__value">{site.address.full}</span>
              </div>
            </Reveal>

            <Reveal as="article" delay={210} className="contact-card">
              <span className="contact-card__icon"><FiClock /></span>
              <div>
                <h2 className="contact-card__title">Работно време</h2>
                {site.hours.map((h) => (
                  <div key={h.day} className="contact-card__hours">
                    <span>{h.day}</span>
                    <span className="contact-card__time">{h.time}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={280} className="contact__social">
              <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </Reveal>
          </div>

          <Reveal delay={120} className="contact__map">
            <iframe
              title="Местоположение на Happy House"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
