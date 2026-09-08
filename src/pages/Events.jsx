import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';
import { events } from '../data/content';

const categories = ['All', 'Congress', 'Community', 'Campaign', 'Training'];

const navigationLinks = [
  { to: '/about', label: 'About' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/news', label: 'Newsroom' },
  { to: '/chapters', label: 'Chapters' },
  { to: '/contact', label: 'Contact' },
];

const extraEvents = [
  {
    title: 'National Organising Summit',
    date: '2026-10-17',
    location: 'Abuja',
    category: 'Training',
    description:
      'A national session focused on grassroots organisation, leadership development and effective community engagement.',
  },
  {
    title: 'Community Listening Forum',
    date: '2026-10-24',
    location: 'Lagos',
    category: 'Community',
    description:
      'Members and community stakeholders come together to discuss priorities and identify practical local solutions.',
  },
  {
    title: 'Young Leaders Forum',
    date: '2026-11-07',
    location: 'Port Harcourt',
    category: 'Training',
    description:
      'A forum focused on developing the next generation of responsible community and political leaders.',
  },
];

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-NG', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function getMonth(date) {
  return new Date(date).toLocaleDateString('en-NG', {
    month: 'short',
  });
}

function getDay(date) {
  return new Date(date).getDate();
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 9H15M10 4L15 9L10 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 3.5V7M17 3.5V7M3.5 9.5H20.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 13H7.51M12 13H12.01M16.5 13H16.51M7.5 16.5H7.51M12 16.5H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 10C20 15.5 12 21 12 21S4 15.5 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#087443]/30 transition duration-300 group-hover:border-[#C62828]/40" />

        <div className="absolute -inset-1 rotate-[25deg] rounded-full border border-transparent border-t-[#C62828]/70 border-r-[#087443]/50 transition duration-500 group-hover:rotate-[205deg]" />

        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg shadow-black/10">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[#087443]">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C62828]">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden leading-none sm:block">
        <div className="font-display text-lg font-black tracking-[-0.03em] text-[#063B25]">
          ICONIC<span className="text-[#C62828]">PARTY</span>
        </div>

        <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.19em] text-[#063B25]/40">
          Nigeria • Forward Together
        </div>
      </div>
    </Link>
  );
}

export default function Events() {
  const navigate = useNavigate();

  const contentEvents = events.map((event) => ({
    ...event,
    location: event.location || 'Party venue',
    category: event.category || 'Community',
    description:
      event.description ||
      'Join members, leaders and community stakeholders for an important party engagement.',
  }));

  const allEvents = [...contentEvents, ...extraEvents].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-[#12221A]">
      {/* =========================================================
          TOP BRAND / NAVIGATION BAR
      ========================================================== */}
      <div className="sticky top-0 z-50 border-b border-[#063B25]/10 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex min-h-[72px] items-center justify-between gap-4">
            <BrandMark />

            <nav className="hidden items-center gap-1 lg:flex">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full px-4 py-2.5 text-xs font-bold text-[#063B25]/60 transition duration-200 hover:bg-[#F4FAF6] hover:text-[#063B25]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/join"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#C62828] px-5 py-2.5 text-xs font-black text-white transition duration-300 hover:bg-[#9E1F1F]"
              >
                Join Iconicparty
                <ArrowIcon />
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="hidden items-center gap-2 rounded-full border border-[#063B25]/10 px-4 py-2.5 text-xs font-bold text-[#063B25] transition duration-200 hover:bg-[#F4FAF6] sm:inline-flex"
                aria-label="Go back to previous page"
              >
                <span>←</span>
                Back
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#063B25] px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-[#087443]"
                aria-label="Return to home page"
              >
                <span>Home</span>
                <span>⌂</span>
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="border-t border-[#063B25]/5 bg-[#FAFCFA] lg:hidden">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="whitespace-nowrap rounded-full bg-[#063B25] px-4 py-2 text-[11px] font-black text-white"
            >
              Home
            </Link>

            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="whitespace-nowrap rounded-full border border-[#063B25]/10 bg-white px-4 py-2 text-[11px] font-bold text-[#063B25]/65 transition hover:border-[#087443]/30 hover:text-[#063B25]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          PAGE HEADER
      ========================================================== */}
      <PageHeader
        eyebrow="Events & activities"
        title="Where members meet, organise and participate."
        description="Discover congresses, community engagements, training sessions and activities bringing the movement closer to the people."
      />

      {/* =========================================================
          PAGE PATH / BREADCRUMB
      ========================================================== */}
      <section className="border-b border-[#063B25]/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 py-4 text-[11px] font-bold sm:px-8 lg:px-10">
          <Link
            to="/"
            className="text-[#063B25]/40 transition hover:text-[#C62828]"
          >
            Home
          </Link>

          <span className="text-[#063B25]/20">/</span>

          <span className="text-[#063B25]">Events</span>

          <span className="ml-auto hidden text-[#063B25]/30 sm:block">
            Stay connected • Take part • Make an impact
          </span>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#087443]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionTitle
                eyebrow="What's happening"
                title="Stay connected to the movement."
                description="Our events bring members together to learn, deliberate, organise and contribute to the future of their communities."
              />
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#C62828]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E53935]"
              >
                Become a member
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT CATEGORIES
      ========================================================== */}
      <section className="border-y border-[#087443]/10 bg-[#F4FAF6]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                Explore activities
              </p>

              <p className="mt-1 text-sm text-[#087443]/60">
                Browse events by category.
              </p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                    index === 0
                      ? 'border-[#063B25] bg-[#063B25] text-white shadow-md shadow-[#063B25]/10'
                      : 'border-[#087443]/15 bg-white text-[#087443] hover:border-[#087443]/40 hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED EVENT
      ========================================================== */}
      {allEvents.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#063B25] shadow-2xl shadow-[#063B25]/10">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />

              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C62828]/15" />

              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#087443]/20 blur-3xl" />

              <div className="absolute right-[30%] top-1/2 h-px w-64 rotate-45 bg-white/5" />
            </div>

            <div className="relative grid lg:grid-cols-12">
              {/* FEATURED DATE */}
              <div className="relative min-h-[360px] overflow-hidden p-8 sm:p-10 lg:col-span-5 lg:min-h-[420px]">
                <div className="absolute left-0 top-0 h-1.5 w-24 bg-[#C62828]" />

                <div className="absolute right-10 top-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 text-white/20">
                  <CalendarIcon />
                </div>

                <div className="relative flex h-full flex-col justify-end">
                  <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#C62828]/30 bg-[#C62828]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#E53935]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C62828]" />
                    Featured event
                  </span>

                  <div className="flex items-end gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                        {getMonth(allEvents[0].date)}
                      </p>

                      <p className="mt-1 font-display text-7xl font-bold leading-none tracking-tight text-white sm:text-8xl">
                        {getDay(allEvents[0].date)}
                      </p>
                    </div>

                    <div className="pb-2">
                      <p className="text-sm text-white/55">
                        {formatDate(allEvents[0].date)}
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/75">
                        <span className="text-[#C62828]">
                          <LocationIcon />
                        </span>

                        {allEvents[0].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FEATURED CONTENT */}
              <div className="flex flex-col justify-center border-t border-white/10 p-8 sm:p-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                  {allEvents[0].category}
                </p>

                <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {allEvents[0].title}
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                  {allEvents[0].description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/join"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#E53935]"
                  >
                    Register interest
                    <ArrowIcon />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/80 transition duration-300 hover:bg-white hover:text-[#063B25]"
                  >
                    Contact organisers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          UPCOMING EVENTS
      ========================================================== */}
      <section className="border-t border-[#087443]/10 bg-[#F4FAF6]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Upcoming"
              title="More events."
              description="Find an engagement near you and take part."
            />

            <div className="flex items-center gap-2 rounded-full border border-[#087443]/10 bg-white px-4 py-2 text-xs font-bold text-[#087443]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C62828]" />
              {allEvents.length} upcoming events
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {allEvents.slice(1).map((event) => (
              <article
                key={`${event.title}-${event.date}`}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[#087443]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#087443]/20 hover:shadow-xl hover:shadow-[#063B25]/5"
              >
                <div className="h-1 w-full bg-[#087443]/10 transition-colors duration-300 group-hover:bg-[#C62828]" />

                <div className="flex items-center gap-5 border-b border-[#087443]/10 bg-[#FAFCFA] p-6">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#063B25] text-white transition-colors duration-300 group-hover:bg-[#C62828]">
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/50">
                      {getMonth(event.date)}
                    </span>

                    <span className="font-display text-2xl font-bold leading-none">
                      {getDay(event.date)}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[10px] font-black uppercase tracking-[0.16em] text-[#C62828]">
                      {event.category}
                    </p>

                    <p className="mt-1 text-sm text-[#087443]/60">
                      {formatDate(event.date)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#087443]/65">
                    <span className="text-[#C62828]">
                      <LocationIcon />
                    </span>

                    {event.location}
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-[#063B25]">
                    {event.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#087443]/70">
                    {event.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#063B25] transition-colors group-hover:text-[#C62828]"
                  >
                    Learn more

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCOVER MORE NAVIGATION
      ========================================================== */}
      <section className="border-t border-[#063B25]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                Explore Iconicparty
              </p>

              <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-[#063B25] sm:text-4xl">
                Continue exploring.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#12221A]/55">
                Move between the organisation, its ideas, leadership,
                chapters and opportunities to participate.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  to="/about"
                  className="group rounded-2xl border border-[#063B25]/10 bg-[#FAFCFA] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#087443]/25 hover:bg-[#F4FAF6]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-black text-[#063B25]">
                      About us
                    </span>

                    <span className="text-[#C62828] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#12221A]/45">
                    Learn about the party and its organisation.
                  </p>
                </Link>

                <Link
                  to="/leadership"
                  className="group rounded-2xl border border-[#063B25]/10 bg-[#FAFCFA] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#087443]/25 hover:bg-[#F4FAF6]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-black text-[#063B25]">
                      Leadership
                    </span>

                    <span className="text-[#C62828] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#12221A]/45">
                    Meet the people responsible for the movement.
                  </p>
                </Link>

                <Link
                  to="/manifesto"
                  className="group rounded-2xl border border-[#063B25]/10 bg-[#FAFCFA] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#087443]/25 hover:bg-[#F4FAF6]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-black text-[#063B25]">
                      Manifesto
                    </span>

                    <span className="text-[#C62828] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#12221A]/45">
                    Explore the ideas and priorities guiding the party.
                  </p>
                </Link>

                <Link
                  to="/chapters"
                  className="group rounded-2xl border border-[#063B25]/10 bg-[#FAFCFA] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#087443]/25 hover:bg-[#F4FAF6]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-black text-[#063B25]">
                      Chapters
                    </span>

                    <span className="text-[#C62828] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-[#12221A]/45">
                    Find your state, LGA, ward or local organisation.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VOLUNTEER CTA
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#C62828]/5 blur-3xl" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#087443]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#063B25] p-8 sm:p-12 lg:p-14">
            <div className="absolute left-0 top-0 h-1.5 w-1/3 bg-[#C62828]" />
            <div className="absolute left-1/3 top-0 h-1.5 w-1/3 bg-white/90" />
            <div className="absolute right-0 top-0 h-1.5 w-1/3 bg-[#087443]" />

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#C62828]/10" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C62828]">
                  Help make it happen
                </p>

                <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Events need people who are ready to serve.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                  Volunteer at local engagements, help with mobilisation or
                  support the organisation behind the movement.
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#E53935]"
                >
                  Become a volunteer
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL HOME NAVIGATION
      ========================================================== */}
      <section className="bg-[#FAFCFA] py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#063B25]/10 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-display text-lg font-black text-[#063B25]">
                Ready to explore more?
              </p>

              <p className="mt-1 text-xs text-[#12221A]/45">
                Return to the main platform or continue to another section.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 rounded-full border border-[#063B25]/15 px-5 py-3 text-xs font-bold text-[#063B25] transition hover:bg-[#063B25] hover:text-white"
              >
                ← Previous page
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-5 py-3 text-xs font-black text-white transition hover:bg-[#9E1F1F]"
              >
                Back to Home
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND STRIP
      ========================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#087443]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#C62828]" />
      </div>
    </div>
  );
}