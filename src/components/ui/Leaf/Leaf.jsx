// Декоративен ботанически клон (line-art). Чисто украса — скрит от четците.
export default function Leaf({ className = '', variant = 'sprig' }) {
  if (variant === 'branch') {
    return (
      <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path
          d="M60 110C60 70 64 40 92 18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${72 - i * 12} ${36 + i * 16})`}>
            <path
              d="M0 0C10 -6 20 -4 24 4C14 6 6 6 0 0Z"
              fill="currentColor"
              opacity="0.85"
            />
          </g>
        ))}
      </svg>
    )
  }
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 72C40 40 44 20 68 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M44 44C36 36 36 24 46 18C52 28 52 38 44 44Z" fill="currentColor" opacity="0.85" />
      <path d="M40 58C30 54 26 44 30 34C40 40 44 50 40 58Z" fill="currentColor" opacity="0.7" />
    </svg>
  )
}
