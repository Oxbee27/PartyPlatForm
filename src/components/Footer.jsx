
import { Link } from 'react-router-dom';
import { party } from '../data/content';

const partyLinks = [
  { to: '/about', label: 'About us' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/news', label: 'Newsroom' },
];

const involvementLinks = [
  { to: '/join', label: 'Become a member' },
  { to: '/volunteer', label: 'Volunteer' },
  { to: '/donate', label: 'Donate' },
  { to: '/events', label: 'Attend an event' },
];

const governanceLinks = [
  { to: '/grievances', label: 'Grievances desk' },
  { to: '/contact', label: 'Contact support' },
  { to: '/login', label: 'Member portal' },
];

function FooterLogo() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3"
    >
      {/* Logo mark */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-[#087443]/30 transition-all duration-500 group-hover:scale-105 group-hover:border-[#C62828]/50" />

        {/* Orbit */}
        <div className="absolute -inset-1 rotate-[25deg] rounded-full border border-transparent border-t-[#C62828]/70 border-r-[#087443]/50 transition-transform duration-700 group-hover:rotate-[205deg]" />

        {/* Main emblem */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-black/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#087443] bg-white">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C62828]">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="font-display text-xl font-black tracking-[-0.03em] text-white">
          ICONIC<span className="text-[#C62828]">PARTY</span>
        </div>

        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
          Nigeria • Forward Together
        </div>
      </div>
    </Link>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold text-white">
        {title}
      </h3>

      <div className="mt-3 h-0.5 w-7 rounded-full bg-[#C62828]" />

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white"
            >
              <span
                className="h-1 w-1 rounded-full bg-[#C62828] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />

              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#063B25] text-white">

      {/* ==================================================
          NIGERIAN COLOUR STRIP
      ================================================== */}

      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#C62828]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#087443]" />
      </div>

      {/* ==================================================
          BACKGROUND DETAILS
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C62828]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#087443]/30 blur-3xl" />

        <div className="absolute right-[10%] top-10 h-64 w-64 rounded-full border border-white/5" />

        <div className="absolute right-[12%] top-16 h-52 w-52 rounded-full border border-[#C62828]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* ==================================================
            TOP FOOTER
        ================================================== */}

        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">

            <FooterLogo />

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              {party.tagline}
            </p>

            {/* Registration information */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#C62828]">
                Official information
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-xs text-white/45">
                INEC registration {party.registrationNo}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-xs text-white/45">
                Founded {party.founded}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/join"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C62828] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E53935]"
              >
                Join the movement

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/manifesto"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 transition duration-300 hover:bg-white hover:text-[#063B25]"
              >
                Read our manifesto
              </Link>

            </div>
          </div>

          {/* Navigation */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:pl-8">

            <FooterColumn
              title="Party"
              links={partyLinks}
            />

            <FooterColumn
              title="Get involved"
              links={involvementLinks}
            />

            <FooterColumn
              title="Governance"
              links={governanceLinks}
            />

          </div>
        </div>

        {/* ==================================================
            DIVIDER
        ================================================== */}

        <div className="my-12 h-px bg-white/10" />

        {/* ==================================================
            LOWER FOOTER
        ================================================== */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-semibold text-white/60">
              © {new Date().getFullYear()} {party.name}. All rights reserved.
            </p>

            <p className="mt-2 max-w-xl text-[11px] leading-5 text-white/35">
              Member data is processed in line with the Nigeria Data
              Protection Act.
            </p>
          </div>

          {/* Back to top */}
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>

      </div>

      {/* ==================================================
          BOTTOM BRAND LINE
      ================================================== */}

      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">

          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">
            Iconicparty
          </span>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-[#087443]" />
            <span className="h-1.5 w-6 rounded-full bg-white/30" />
            <span className="h-1.5 w-6 rounded-full bg-[#C62828]" />
          </div>

          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20">
            Forward Together
          </span>

        </div>
      </div>

    </footer>
  );
}

