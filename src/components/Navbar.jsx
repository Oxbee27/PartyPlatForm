
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'Newsroom' },
  { to: '/grievances', label: 'Grievances' },
  { to: '/contact', label: 'Contact' },
];

function PartyLogo() {
  return (
    <div className="group flex items-center gap-3">
      {/* Logo mark */}
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
        {/* Outer orbit */}
        <div className="absolute inset-0 rounded-full border border-[#087443]/30 transition-all duration-500 group-hover:scale-110 group-hover:border-[#C62828]/50" />

        {/* Orbit accent */}
        <div className="absolute -inset-1 rotate-[25deg] rounded-full border border-transparent border-t-[#C62828]/70 border-r-[#087443]/40 transition-transform duration-700 group-hover:rotate-[205deg]" />

        {/* Main emblem */}
        <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#063B25] shadow-[0_4px_14px_rgba(6,59,37,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(6,59,37,0.25)]">
          {/* Inner ring */}
          <div className="absolute inset-[3px] rounded-full border border-white/20" />

          {/* Abstract party symbol */}
          <div className="relative flex items-center justify-center">
            <span className="absolute h-4 w-[2px] rotate-45 rounded-full bg-white" />
            <span className="absolute h-4 w-[2px] -rotate-45 rounded-full bg-white" />
            <span className="relative h-2 w-2 rounded-full bg-[#C62828]" />
          </div>
        </div>

        {/* Small red accent */}
        <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-[#F5FAF7] bg-[#C62828]" />
      </div>

      {/* Party name */}
      <div className="leading-none">
        <div className="font-display text-[18px] font-bold tracking-[-0.02em] text-[#063B25]">
          ICONIC<span className="text-[#C62828]">PARTY</span>
        </div>

        <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#3A6251]">
          Nigeria • Forward Together
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE9E1] bg-[#F5FAF7]/95 backdrop-blur-xl">
      {/* Nigerian-inspired colour strip */}
      <div className="flex h-1 w-full">
        <div className="w-1/2 bg-[#063B25]" />
        <div className="w-1/2 bg-[#C62828]" />
      </div>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Iconicparty home"
        >
          <PartyLogo />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-[#063B25]'
                    : 'text-[#3A6251] hover:text-[#063B25]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#C62828] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-[#064D2E] transition-colors hover:text-[#C62828]"
          >
            Member login
          </Link>

          <Link
            to="/join"
            className="group inline-flex items-center gap-2 rounded-full bg-[#063B25] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#087443] hover:shadow-lg"
          >
            <span>Join Iconicparty</span>

            <span className="text-[#D9D9D9] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9DDD2] bg-white/70 text-[#063B25] transition-all duration-200 hover:border-[#087443] hover:bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M4 4L15 15M15 4L4 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M3 5H16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M3 9.5H16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M3 14H16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-[#DCE9E1] bg-[#F5FAF7] transition-all duration-300 lg:hidden ${
          open
            ? 'max-h-[700px] opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="px-5 pb-6 pt-4 sm:px-8">
          {/* Mobile links */}
          <nav className="space-y-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E8F5EE] text-[#063B25]'
                      : 'text-[#3A6251] hover:bg-white hover:text-[#063B25]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>

                    <span
                      className={`text-lg transition-all duration-200 ${
                        isActive
                          ? 'translate-x-0 text-[#C62828] opacity-100'
                          : '-translate-x-1 opacity-0'
                      }`}
                    >
                      →
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile actions */}
          <div className="mt-4 grid gap-2 border-t border-[#DCE9E1] pt-4 sm:grid-cols-2">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-[#BFD5C8] bg-white px-5 py-3 text-sm font-semibold text-[#064D2E] transition-colors hover:border-[#087443] hover:bg-[#E8F5EE]"
            >
              Member login
            </Link>

            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#063B25] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#087443]"
            >
              Join Iconicparty
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

