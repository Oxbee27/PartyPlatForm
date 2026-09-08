export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-paper' : 'text-forest-800';

  // Three arcs, offset from separate points, converging on one shared center —
  // ward, LGA and state meeting in one party, rather than a single fixed emblem.
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 16 L6.5 10.8 A11.5 11.5 0 0 0 6.5 21.2 Z"
          fill="#1F6B4A"
          opacity="0.92"
        />
        <path
          d="M16 16 L25.5 10.8 A11.5 11.5 0 0 1 25.5 21.2 Z"
          fill="#C89B3C"
          opacity="0.92"
        />
        <path
          d="M16 16 L20.7 25.3 A11.5 11.5 0 0 1 11.3 25.3 Z"
          fill="#6FA985"
          opacity="0.92"
        />
        <circle cx="16" cy="16" r="3.1" fill={variant === 'light' ? '#FBFAF6' : '#0F3D2E'} />
      </svg>
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
        Iconicparty
      </span>
    </div>
  );
}
