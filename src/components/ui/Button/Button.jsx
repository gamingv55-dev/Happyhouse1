import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Magnetic from '../Magnetic/Magnetic'
import './Button.css'

// Универсален бутон. Рендира <Link>, <a> или <button> според подадените props.
// variant: 'primary' | 'outline' | 'ghost'
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  withArrow = false,
  magnetic = true,
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} ${withArrow ? 'btn--arrow' : ''} ${className}`

  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {withArrow && (
        <span className="btn__icon" aria-hidden="true">
          <FiArrowRight />
        </span>
      )}
    </>
  )

  let el
  if (to) {
    el = (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  } else if (href) {
    el = (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  } else {
    el = (
      <button className={cls} {...rest}>
        {inner}
      </button>
    )
  }

  return magnetic ? <Magnetic>{el}</Magnetic> : el
}
