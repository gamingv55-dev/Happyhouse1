import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Leaf from '../../ui/Leaf/Leaf'
import { site } from '../../../data/site'
import './Footer.css'

const quickLinks = [
  { to: '/menu', label: 'Меню' },
  { to: '/galeria', label: 'Галерия' },
  { to: '/ferma', label: 'Фермата' },
  { to: '/sabitia', label: 'Събития' },
  { to: '/rezervacii', label: 'Резервации' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <Leaf className="footer__decor" variant="branch" />
      <div className="footer__inner container">
        <div className="footer__brandcol">
          <span className="footer__name">Happy House</span>
          <p className="footer__tagline">
            {site.tagline} · от {site.established} г.
          </p>
          <p className="footer__about">
            Зелена градина, домашна кухня и фермата с ламата Роско — място за хубави моменти.
          </p>
          <div className="footer__social">
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Навигация</h3>
          <ul className="footer__list">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Контакти</h3>
          <ul className="footer__list footer__list--contact">
            <li>
              <FiPhone aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <FiMapPin aria-hidden="true" />
              <span>{site.address.full}</span>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Работно време</h3>
          <ul className="footer__list">
            {site.hours.map((h) => (
              <li key={h.day} className="footer__hours">
                <span>{h.day}</span>
                <span className="footer__time">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar container">
        <span>© {new Date().getFullYear()} Happy House. Всички права запазени.</span>
        <span className="footer__made">Създадено с грижа към детайла.</span>
      </div>
    </footer>
  )
}
