
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { manifesto } from '../data/content';

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

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5L9.5 17L19 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const relatedPages = [
  {
    to: '/about',
    label: 'About',
    description: 'Learn about the organisation, structure and purpose.',
  },
  {
    to: '/leadership',
    label: 'Leadership',
    description: 'Meet the people responsible for the movement.',
  },
  {
    to: '/events',
    label: 'Events',
    description: 'See upcoming congresses, forums and activities.',
  },
  {
    to: '/chapters',
    label: 'Chapters',
    description: 'Find local structures and ways to participate.',
  },
];

export default function Manifesto() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-[#12221A]">
      {/* =========================================================
          PAGE HEADER
      ========================================================== */}
      <PageHeader
        kicker="Policy platform"
        title="What we would do in office"
        description="Four commitments, written so they can be checked — not slogans."
      />

      {/* =========================================================
          PAGE NAVIGATION
      ========================================================== */}
      <section className="border-b border-[#063B25]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold">
              <Link
                to="/"
                className="text-[#063B25]/40 transition-colors hover:text-[#C62828]"
              >
                Home
              </Link>

              <span className="text-[#063B25]/20">/</span>

              <span className="text-[#063B25]">Manifesto</span>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 rounded-full border border-[#063B25]/15 px-4 py-2.5 text-xs font-bold text-[#063B25] transition duration-300 hover:bg-[#063B25] hover:text-white"
              >
                <span>←</span>
                Previous page
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-[#063B25] px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-[#087443]"
              >
                <span>⌂</span>
                Home
              </Link>

              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-4 py-2.5 text-xs font-black text-white transition duration-300 hover:bg-[#9E1F1F]"
              >
                Join Iconicparty
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#C62828]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#087443]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C62828]">
                Our policy direction
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-[-0.035em] text-[#063B25] sm:text-5xl lg:text-6xl">
                A platform built around
                <span className="text-[#C62828]"> measurable commitments.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-[#12221A]/60 sm:text-base">
                The manifesto sets out the priorities we would pursue in
                office. Each commitment is intended to be specific enough to
                guide action, measure progress and invite public scrutiny.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#063B25] p-8 text-white shadow-2xl shadow-[#063B25]/10 sm:p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/5" />
                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#087443]/20 blur-3xl" />

                <div className="relative">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                    What guides us
                  </p>

                  <div className="mt-6 space-y-4">
                    {[
                      'Clear priorities',
                      'Defined responsibilities',
                      'Measurable progress',
                      'Public accountability',
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C62828] text-white">
                          <span className="text-xs font-black">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </span>

                        <span className="text-sm font-semibold text-white/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MANIFESTO PILLARS
      ========================================================== */}
      <section className="border-y border-[#087443]/10 bg-[#F4FAF6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
              The four commitments
            </p>

            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-[#063B25] sm:text-4xl">
              What we would focus on.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#12221A]/55">
              Each pillar provides a practical direction for policy,
              implementation and public assessment.
            </p>
          </div>

          <div className="space-y-5">
            {manifesto.map((item, index) => (
              <article
                key={item.pillar}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#063B25]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#087443]/25 hover:shadow-xl hover:shadow-[#063B25]/5"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[#087443]/20 transition-colors duration-300 group-hover:bg-[#C62828]" />

                <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[110px_1fr] lg:items-start lg:p-10">
                  {/* Number */}
                  <div className="flex items-center gap-4 lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#063B25] font-display text-2xl font-black text-white transition-colors duration-300 group-hover:bg-[#C62828]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="lg:mt-4">
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#087443]/40">
                        Pillar
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-[#063B25] sm:text-3xl">
                      {item.pillar}
                    </h3>

                    <p className="mt-4 max-w-3xl text-sm leading-8 text-[#087443]/70 sm:text-base">
                      {item.detail}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#063B25]/50">
                      <span className="text-[#087443]">
                        <CheckIcon />
                      </span>

                      Built to be reviewed and measured
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICY DOCUMENT
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
              Full policy document
            </p>

            <h2 className="mt-3 max-w-3xl font-display text-3xl font-black tracking-tight text-[#063B25] sm:text-4xl lg:text-5xl">
              From commitments to implementation.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#12221A]/55">
              The complete manifesto, including proposed costings,
              implementation timelines and supporting policy detail, is
              intended to be available to registered members through the
              member portal.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#F4FAF6] p-8 sm:p-10">
              <div className="absolute left-0 top-0 h-1.5 w-full">
                <div className="h-full w-1/3 bg-[#C62828]" />
                <div className="absolute left-1/3 top-0 h-full w-1/3 bg-white" />
                <div className="absolute right-0 top-0 h-full w-1/3 bg-[#087443]" />
              </div>

              <div className="relative pt-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#063B25] text-white">
                  <CheckIcon />
                </div>

                <h3 className="mt-6 font-display text-2xl font-black text-[#063B25]">
                  Member policy access
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#087443]/65">
                  Access the detailed policy document through the member
                  portal.
                </p>

                <Link
                  to="/login"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#063B25] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-[#087443]"
                >
                  Member portal
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED PAGES
      ========================================================== */}
      <section className="border-y border-[#063B25]/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
              Explore the platform
            </p>

            <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-[#063B25] sm:text-4xl">
              Continue exploring Iconicparty.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="group rounded-3xl border border-[#063B25]/10 bg-[#FAFCFA] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#087443]/20 hover:bg-[#F4FAF6] hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-black text-[#063B25]">
                    {page.label}
                  </h3>

                  <span className="text-[#C62828] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-[#12221A]/45">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL NAVIGATION
      ========================================================== */}
      <section className="bg-[#FAFCFA] py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#063B25] p-8 sm:p-12">
            <div className="absolute left-0 top-0 flex h-1.5 w-full">
              <div className="w-1/3 bg-[#C62828]" />
              <div className="w-1/3 bg-white/90" />
              <div className="w-1/3 bg-[#087443]" />
            </div>

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#087443]/20 blur-3xl" />

            <div className="relative text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                Navigation
              </p>

              <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
                Continue your journey.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                Return to the Home page, go back to where you came from, or
                explore another part of the platform.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#063B25]"
                >
                  ← Previous page
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-[#E53935]"
                >
                  ← Back to Home
                </Link>

                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white/75 transition duration-300 hover:bg-white hover:text-[#063B25]"
                >
                  Join Iconicparty
                  <ArrowIcon />
                </Link>
              </div>
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
