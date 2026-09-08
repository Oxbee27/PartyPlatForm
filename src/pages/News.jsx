
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { news } from '../data/content';

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
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
      width="17"
      height="17"
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
    </svg>
  );
}

function PageNavigation() {
  const navigate = useNavigate();

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  }

  return (
    <section className="border-b border-party-green/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">
            <Link
              to="/"
              className="text-party-green/35 transition-colors hover:text-party-red"
            >
              Home
            </Link>

            <span className="text-party-green/15">
              /
            </span>

            <span className="text-party-greenDark">
              Newsroom
            </span>
          </div>

          <div className="flex flex-wrap gap-2">

            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-party-green/15 bg-white px-4 py-2.5 text-xs font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/30 hover:bg-party-greenLight"
            >
              <span className="text-base leading-none">
                ←
              </span>

              Previous page
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-party-greenDark px-4 py-2.5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
            >
              <span>
                ⌂
              </span>

              Home
            </Link>

            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-party-red px-4 py-2.5 text-xs font-black text-white transition-all hover:-translate-y-0.5 hover:bg-party-redDark"
            >
              Join Iconicparty
              <ArrowIcon />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

function NewsArticle({ item, index }) {
  const date = new Date(item.date);

  const formattedDate = date.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const month = date.toLocaleDateString('en-NG', {
    month: 'short',
  });

  const day = date.getDate();

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-party-green/10 bg-white shadow-[0_10px_35px_rgba(6,59,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:shadow-[0_20px_50px_rgba(6,59,37,0.08)]">

      {/* Left accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1 transition-colors duration-300 ${
          index === 0
            ? 'bg-party-red'
            : 'bg-party-green/20 group-hover:bg-party-red'
        }`}
      />

      <div className="p-6 sm:p-8 lg:p-9">

        <div className="flex flex-col gap-7 sm:flex-row sm:items-start">

          {/* Date */}
          <div
            className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl transition-all duration-300 ${
              index === 0
                ? 'bg-party-greenDark text-white'
                : 'bg-party-greenLight text-party-greenDark group-hover:bg-party-greenDark group-hover:text-white'
            }`}
          >
            <CalendarIcon />

            <span
              className={`mt-1 text-[9px] font-black uppercase tracking-[0.12em] ${
                index === 0
                  ? 'text-white/45'
                  : 'text-party-green/40 group-hover:text-white/45'
              }`}
            >
              {month}
            </span>

            <span className="font-display text-2xl font-black leading-none">
              {day}
            </span>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">

            <div className="flex flex-wrap items-center gap-3">

              <span className="inline-flex items-center gap-1.5 rounded-full bg-party-greenLight px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-party-greenDark">
                Newsroom
              </span>

              <span className="text-xs font-medium text-party-green/35">
                {formattedDate}
              </span>

              {index === 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-party-red/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-party-redDark">
                  <span className="h-1.5 w-1.5 rounded-full bg-party-red" />
                  Latest
                </span>
              )}

            </div>

            <h2 className="mt-4 max-w-4xl font-display text-2xl font-black leading-tight tracking-[-0.025em] text-party-greenDark sm:text-3xl">
              {item.title}
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-party-green/60 sm:text-base">
              {item.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-black text-party-greenDark transition-colors hover:text-party-red"
              >
                Ask about this update

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              <span className="h-4 w-px bg-party-green/10" />

              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-party-green/50 transition-colors hover:text-party-greenDark"
              >
                View events
                <ArrowIcon />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </article>
  );
}

function RelatedCard({
  to,
  number,
  title,
  description,
}) {
  return (
    <Link
      to={to}
      className="group rounded-3xl border border-party-green/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:bg-party-greenLight hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-party-greenLight font-display text-xs font-black text-party-greenDark transition-colors group-hover:bg-party-greenDark group-hover:text-white">
          {number}
        </span>

        <span className="text-party-red transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>

      </div>

      <h3 className="mt-6 font-display text-xl font-black text-party-greenDark">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-party-green/50">
        {description}
      </p>
    </Link>
  );
}

export default function News() {
  return (
    <div className="min-h-screen bg-party-paper text-party-ink">

      {/* =====================================================
          TOP PARTY BRAND STRIP
      ====================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/2 bg-party-green" />
        <div className="w-1/2 bg-party-red" />
      </div>

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <PageHeader
        kicker="Newsroom"
        title="Statements & updates"
        description="Party filings, congress announcements and governance news."
      />

      {/* =====================================================
          PAGE NAVIGATION
      ====================================================== */}
      <PageNavigation />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute -right-40 -top-24 h-96 w-96 rounded-full bg-party-green/5 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-party-red/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-party-red" />

                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-party-green">
                  Official updates
                </p>
              </div>

              <h2 className="max-w-4xl font-display text-4xl font-black leading-[0.96] tracking-[-0.04em] text-party-greenDark sm:text-5xl lg:text-6xl">
                Stay informed about
                <br className="hidden sm:block" />
                <span className="text-party-green">
                  the movement.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-party-green/55 sm:text-base">
                Follow official statements, organisational announcements,
                governance updates and important developments from Iconicparty.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">

              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full border border-party-green/15 bg-white px-5 py-3.5 text-sm font-bold text-party-greenDark shadow-sm transition-all hover:-translate-y-0.5 hover:border-party-green/30 hover:bg-party-greenLight"
              >
                View events
                <ArrowIcon />
              </Link>

            </div>

          </div>

          {/* Intro badges */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-party-green/10 pt-6">

            <span className="rounded-full bg-party-greenLight px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-party-greenDark">
              Official newsroom
            </span>

            <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-party-green/45 ring-1 ring-party-green/10">
              Statements
            </span>

            <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-party-green/45 ring-1 ring-party-green/10">
              Governance
            </span>

            <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-party-green/45 ring-1 ring-party-green/10">
              Party activity
            </span>

          </div>

        </div>
      </section>

      {/* =====================================================
          NEWS ARTICLES
      ====================================================== */}
      <section className="border-y border-party-green/10 bg-party-greenLight/35">

        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">

          <div className="mb-9 flex items-end justify-between gap-6">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-party-red">
                Latest publications
              </p>

              <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark sm:text-4xl">
                From the newsroom
              </h2>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-xs text-party-green/40">
                {news.length} update{news.length === 1 ? '' : 's'}
              </p>
            </div>

          </div>

          {news.length > 0 ? (
            <div className="space-y-5">
              {news.map((item, index) => (
                <NewsArticle
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-party-green/10 bg-white p-10 text-center shadow-[0_10px_35px_rgba(6,59,37,0.04)]">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-party-greenLight font-display text-xl font-black text-party-greenDark">
                N
              </div>

              <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-party-red">
                Newsroom
              </p>

              <h2 className="mt-3 font-display text-3xl font-black text-party-greenDark">
                No updates yet.
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-party-green/50">
                New statements and organisational announcements will appear
                here when they are published.
              </p>

              <Link
                to="/"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-party-greenDark px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
              >
                ← Return home
              </Link>

            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          NEWSROOM CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-white">

        <div className="pointer-events-none absolute -right-24 top-12 h-64 w-64 rounded-full border border-party-green/5" />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-8">

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-party-red" />

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-green">
                  Stay connected
                </p>
              </div>

              <h2 className="max-w-3xl font-display text-3xl font-black leading-tight tracking-[-0.03em] text-party-greenDark sm:text-4xl">
                News is only one part of participation.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-party-green/50">
                Attend events, explore the manifesto, learn about the
                leadership and connect with the party at the local level.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">

              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full bg-party-greenDark px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
              >
                Explore events
                <ArrowIcon />
              </Link>

              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-party-red px-5 py-3.5 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-party-redDark"
              >
                Join Iconicparty
                <ArrowIcon />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          RELATED PAGES
      ====================================================== */}
      <section className="bg-party-paper">

        <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">

          <div className="border-t border-party-green/10 pt-14">

            <div className="mb-9">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-red">
                Explore the platform
              </p>

              <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark sm:text-4xl">
                Continue exploring Iconicparty.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-party-green/50">
                Move from the newsroom to the organisation, manifesto,
                leadership and local chapters.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <RelatedCard
                to="/about"
                number="01"
                title="About"
                description="Understand the party, its structure and its purpose."
              />

              <RelatedCard
                to="/manifesto"
                number="02"
                title="Manifesto"
                description="Explore the ideas and priorities guiding the platform."
              />

              <RelatedCard
                to="/leadership"
                number="03"
                title="Leadership"
                description="Meet the people responsible for the movement."
              />

              <RelatedCard
                to="/chapters"
                number="04"
                title="Chapters"
                description="Find the organisation across states and local communities."
              />

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL NAVIGATION
      ====================================================== */}
      <section className="bg-white pb-16 sm:pb-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-[2rem] bg-party-greenDark p-8 sm:p-12">

            {/* Nigerian-inspired accent */}
            <div className="absolute left-0 top-0 h-1.5 w-1/3 bg-party-green" />
            <div className="absolute left-1/3 top-0 h-1.5 w-1/3 bg-white" />
            <div className="absolute right-0 top-0 h-1.5 w-1/3 bg-party-red" />

            {/* Decorative geometry */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />

            <div className="relative">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-red">
                Navigation
              </p>

              <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                Where would you like to go next?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                Return to Home, go back to the previous page or continue
                exploring another part of the platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() => {
                    if (window.history.length > 1) {
                      window.history.back();
                    } else {
                      window.location.href = '/';
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-party-greenDark"
                >
                  ← Previous page
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-party-red px-6 py-3.5 text-sm font-black text-white transition-all hover:bg-party-redLight"
                >
                  Back to Home
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white/75 transition-all hover:bg-white hover:text-party-greenDark"
                >
                  Contact us
                  <ArrowIcon />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM PARTY STRIP
      ====================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-party-green" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-party-red" />
      </div>

    </div>
  );
}
