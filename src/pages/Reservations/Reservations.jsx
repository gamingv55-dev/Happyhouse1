import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiCheck, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import PageHero from '../../components/ui/PageHero/PageHero'
import Reveal from '../../components/ui/Reveal/Reveal'
import { site } from '../../data/site'
import './Reservations.css'

export default function Reservations() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    const body =
      `Име: ${data.name}\nТелефон: ${data.phone}\nИмейл: ${data.email || '-'}\n` +
      `Дата: ${data.date}\nЧас: ${data.time}\nБрой гости: ${data.guests}\n` +
      `Повод: ${data.occasion}\nБележка: ${data.message || '-'}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Резервация — ${data.name}`,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
    reset()
  }

  return (
    <>
      <PageHero
        kicker="Резервации"
        title="Запазете своята маса"
        lead="Попълнете формата и ще се свържем с вас за потвърждение. За спешни запитвания — обадете се."
      />

      <section className="section">
        <div className="container reserve">
          <Reveal className="reserve__form-wrap">
            {sent ? (
              <div className="reserve__success">
                <span className="reserve__success-icon">
                  <FiCheck />
                </span>
                <h2 className="reserve__success-title">Благодарим ви!</h2>
                <p className="reserve__success-text">
                  Заявката е подготвена. Ако имейл програмата ви не се отвори автоматично,
                  обадете ни се на{' '}
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
                </p>
                <button className="reserve__again" onClick={() => setSent(false)}>
                  Нова резервация
                </button>
              </div>
            ) : (
              <form className="reserve-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="reserve-form__row">
                  <Field label="Име" error={errors.name?.message}>
                    <input
                      className="field__input"
                      placeholder="Вашето име"
                      {...register('name', { required: 'Моля, въведете име' })}
                    />
                  </Field>
                  <Field label="Телефон" error={errors.phone?.message}>
                    <input
                      className="field__input"
                      placeholder="08…"
                      {...register('phone', {
                        required: 'Моля, въведете телефон',
                        minLength: { value: 6, message: 'Невалиден телефон' },
                      })}
                    />
                  </Field>
                </div>

                <Field label="Имейл (по желание)">
                  <input type="email" className="field__input" placeholder="name@email.bg" {...register('email')} />
                </Field>

                <div className="reserve-form__row reserve-form__row--3">
                  <Field label="Дата" error={errors.date?.message}>
                    <input type="date" className="field__input" {...register('date', { required: 'Изберете дата' })} />
                  </Field>
                  <Field label="Час" error={errors.time?.message}>
                    <input type="time" className="field__input" {...register('time', { required: 'Изберете час' })} />
                  </Field>
                  <Field label="Гости" error={errors.guests?.message}>
                    <input
                      type="number"
                      min="1"
                      defaultValue="2"
                      className="field__input"
                      {...register('guests', { required: 'Брой' })}
                    />
                  </Field>
                </div>

                <Field label="Повод">
                  <select className="field__input" {...register('occasion')}>
                    <option>Обикновена резервация</option>
                    <option>Рожден ден</option>
                    <option>Семейно събитие</option>
                    <option>Фирмено събитие</option>
                    <option>Сватба</option>
                  </select>
                </Field>

                <Field label="Бележка (по желание)">
                  <textarea
                    rows="3"
                    className="field__input"
                    placeholder="Допълнителни желания…"
                    {...register('message')}
                  />
                </Field>

                <button type="submit" className="reserve-form__submit">
                  Изпрати заявка
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} as="aside" className="reserve__aside">
            <h2 className="reserve__aside-title">Свържете се директно</h2>
            <ul className="reserve__contacts">
              <li>
                <FiPhone aria-hidden="true" />
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <div className="reserve__hours">
              <h3>
                <FiClock aria-hidden="true" /> Работно време
              </h3>
              {site.hours.map((h) => (
                <div key={h.day} className="reserve__hours-row">
                  <span>{h.day}</span>
                  <span className="reserve__hours-time">{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? 'field--error' : ''}`}>
      <span className="field__label">{label}</span>
      {children}
      {error && <span className="field__error">{error}</span>}
    </label>
  )
}
