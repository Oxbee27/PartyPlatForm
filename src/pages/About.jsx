
import { Link, useNavigate } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import { party } from '../data/content';

const timeline = [
  {
    year: '2021',
    text: 'Founded by a coalition of local government reform advocates and market association leaders.',
  },
  {
    year: '2022',
    text: 'Registered with INEC and completed inaugural ward-level congresses in all 36 states and the FCT.',
  },
  {
    year: '2023',
    text: 'Fielded candidates in off-cycle governorship elections in three states.',
  },
  {
    year: '2026',
    text: 'Crossed 280,000 registered members with a continuously updated digital register.',
  },
];

function PageNavigation() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  };

  return (
    <div className="border-b border-[#D3EBDD] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#063B25] transition-colors hover:text-[#C62828]"
        >
          <span className="text-lg leading-none transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Previous page
        </button>

        <div className="flex items-center gap-3 text-sm">
          <Link
            to="/"
            className="font-semibold text-[#087443] transition-colors hover:text-[#C62828]"
          >
            Home
          </Link>

          <span className="text-[#A8D7BC]">/</span>

          <span className="text-[#6E8177]">About</span>
        </div>
      </div>
    </div>
  );
}

function PartyMark() {
  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg shadow-[#063B25]/10">
      <div className="absolute inset-2 rounded-xl border-2 border-[#087443]" />

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C62828]">
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>
    </div>
  );
}

function InfoCard({ type, eyebrow, title, children }) {
  const symbols = {
    structure: '⌘',
    discipline: '✓',
  };

  return (
    <article className="group rounded-[2rem] border border-[#D3EBDD] bg-white p-7 shadow-[0_18px_55px_rgba(6,59,37,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(6,59,37,0.1)] sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5EE] text-xl font-bold text-[#087443] transition-colors group-hover:bg-[#063B25] group-hover:text-white">
        {symbols[type]}
      </div>

      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C62828]">
        {eyebrow}
      </p>

      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#063B25]">
        {title}
      </h3>

      <p className="mt-4 text-[15px] leading-7 text-[#60736A]">
        {children}
      </p>
    </article>
  );
}

function TimelineItem({ item, index }) {
  const isLatest = index === timeline.length - 1;

  return (
    <article className="relative pl-10 sm:pl-14">
      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#EEF7F1] bg-[#087443] shadow-sm">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      <div
        className={`rounded-[1.75rem] border p-6 transition-all duration-300 sm:p-7 ${
          isLatest
            ? 'border-[#C62828]/20 bg-[#FFF8F8] shadow-[0_18px_50px_rgba(198,40,40,0.06)]'
            : 'border-[#D3EBDD] bg-white shadow-[0_15px_45px_rgba(6,59,37,0.05)]'
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                isLatest
                  ? 'bg-[#C62828] text-white'
                  : 'bg-[#E8F5EE] text-[#087443]'
              }`}
            >
              {item.year}
            </span>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#53675D]">
              {item.text}
            </p>
          </div>

          {isLatest && (
            <span className="inline-flex w-fit shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#C62828]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#C62828]" />
              Current chapter
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function ValueItem({ symbol, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063B25] text-sm font-bold text-white">
        {symbol}
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold text-[#063B25]">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-6 text-[#66786F]">{text}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5FAF7] text-[#12221A]">
      {/* Nigerian-inspired accent strip */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#063B25]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#C62828]" />
      </div>

      <PageHeader
        kicker="About the party"
        title="Built from the ward up"
        description={`${party.name} exists to make local government work — and to prove a party can run its own affairs transparently while asking the country to do the same.`}
      />

      <PageNavigation />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:pb-16 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#063B25] p-7 text-white shadow-[0_25px_80px_rgba(6,59,37,0.16)] sm:p-10 lg:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex items-center gap-4">
                <PartyMark />

                <div>
                  <p className="font-display text-lg font-bold tracking-tight">
                    {party.name}
                  </p>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    People • Progress • Prosperity
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-2xl text-[11px] font-bold uppercase tracking-[0.22em] text-[#70BA91]">
                Our story
              </p>

              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A political movement designed to stay close to the people.
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70">
                Iconicparty is built around a simple principle: representation
                should begin where citizens live, work, trade, learn and raise
                their families. Our structure is designed to keep local voices
                connected to national decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/manifesto"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#063B25] transition-colors hover:bg-[#E8F5EE]"
                >
                  Read our manifesto
                  <span className="text-base">→</span>
                </Link>

                <Link
                  to="/leadership"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/10"
                >
                  Meet the leadership
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[2rem] border border-[#D3EBDD] bg-white p-7 shadow-[0_18px_55px_rgba(6,59,37,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087443]">
                  Membership
                </span>

                <span className="text-xl font-bold text-[#C62828]">+</span>
              </div>

              <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-[#063B25]">
                280k+
              </p>

              <p className="mt-2 text-sm leading-6 text-[#66786F]">
                Registered members represented through a continuously updated
                digital register.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#D3EBDD] bg-white p-7 shadow-[0_18px_55px_rgba(6,59,37,0.06)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#087443]">
                  Reach
                </span>

                <span className="text-xl font-bold text-[#C62828]">◎</span>
              </div>

              <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-[#063B25]">
                36 + FCT
              </p>

              <p className="mt-2 text-sm leading-6 text-[#66786F]">
                A chapter structure designed to connect communities with state
                and national leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structure + Discipline */}
      <section className="border-y border-[#D3EBDD] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C62828]">
              How we operate
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#063B25] sm:text-4xl">
              Structure with accountability.
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#64766D]">
              A serious political organisation needs more than a compelling
              message. It needs systems that make participation meaningful and
              decisions traceable.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <InfoCard
              type="structure"
              eyebrow="Our structure"
              title="The ward comes first"
            >
              Authority runs from the polling unit to the ward, from the ward
              to the local government, from the local government to the state,
              and from the state to the National Executive Committee. No
              decision affecting a chapter is made without a representative
              from that chapter in the room.
            </InfoCard>

            <InfoCard
              type="discipline"
              eyebrow="Our discipline"
              title="Records that can be examined"
            >
              Every member's registration record, every contribution, and every
              internal dispute is logged and auditable. We publish our
              compliance calendar and file our membership register updates with
              INEC on schedule, every quarter.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C62828]">
              What guides us
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#063B25] sm:text-4xl">
              Principles that shape the organisation.
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#687A71]">
              Our internal culture should reflect the Nigeria we are asking
              public institutions to build.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <ValueItem
              symbol="01"
              title="Transparency"
              text="Members deserve to understand how decisions are made, how resources are handled and how the organisation is governed."
            />

            <ValueItem
              symbol="02"
              title="Participation"
              text="Political participation should extend beyond election season and make room for communities at every organisational level."
            />

            <ValueItem
              symbol="03"
              title="Integrity"
              text="Rules, records and responsibilities should be clear enough to withstand scrutiny from members and the public."
            />

            <ValueItem
              symbol="04"
              title="Delivery"
              text="Ideas matter, but measurable outcomes matter more. We focus on institutions and policies that improve everyday life."
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-[#D3EBDD] bg-[#EEF7F1]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C62828]">
                Our journey
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#063B25] sm:text-4xl">
                From formation to a growing movement.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#64766D]">
                A brief look at the milestones that have shaped the
                organisation.
              </p>
            </div>

            <div className="hidden h-px flex-1 bg-[#A8D7BC] sm:ml-10 sm:block" />
          </div>

          <div className="relative mt-10 space-y-5">
            <div className="absolute bottom-6 left-[15px] top-6 w-px bg-[#A8D7BC]" />

            {timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Accountability statement */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#12221A] p-7 text-white sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#70BA91]">
                Our commitment
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                We intend to be accountable before asking for accountability.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-white/65">
                That means keeping our records organised, giving members
                meaningful channels for participation, documenting decisions,
                and creating clear pathways for concerns to be raised and
                addressed.
              </p>
            </div>

            <Link
              to="/transparency"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#9E1F1F]"
            >
              View transparency
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[#D3EBDD] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
          <div className="flex flex-col gap-7 rounded-[2.5rem] bg-[#F5FAF7] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#087443]">
                Take part
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#063B25] sm:text-4xl">
                The next chapter should include you.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#687A71]">
                Join the movement, explore the manifesto, or connect with the
                chapter closest to your community.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-[#063B25] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#087443]"
              >
                Join Iconicparty
                <span className="text-base">→</span>
              </Link>

              <Link
                to="/chapters"
                className="inline-flex items-center gap-2 rounded-full border border-[#A8D7BC] bg-white px-6 py-3.5 text-sm font-bold text-[#063B25] transition-colors hover:border-[#087443] hover:bg-[#E8F5EE]"
              >
                Find a chapter
              </Link>
            </div>
          </div>

          {/* Internal page navigation */}
          <div className="mt-10 flex flex-col gap-4 border-t border-[#D3EBDD] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = '/';
                }
              }}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#60736A] transition-colors hover:text-[#063B25]"
            >
              <span className="text-lg leading-none">←</span>
              Previous page
            </button>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                to="/manifesto"
                className="font-semibold text-[#087443] transition-colors hover:text-[#C62828]"
              >
                Manifesto
              </Link>

              <Link
                to="/leadership"
                className="font-semibold text-[#087443] transition-colors hover:text-[#C62828]"
              >
                Leadership
              </Link>

              <Link
                to="/news"
                className="font-semibold text-[#087443] transition-colors hover:text-[#C62828]"
              >
                News
              </Link>

              <Link
                to="/"
                className="font-semibold text-[#C62828] transition-colors hover:text-[#9E1F1F]"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Nigerian-inspired strip */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#063B25]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#C62828]" />
      </div>
    </div>
  );
}

