import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const leadership = [
  {
    name: 'Chief Bisi Akande',
    title: 'National Chairman',
    role: 'National Executive Council',
    image:
      'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2024/08/Bisi-Akande.jpg?ssl=1',
    description:
      'Provides strategic direction, represents the party nationally and coordinates the work of the National Executive Council.',
    number: '01',
  },
  {
    name: 'Prof. Jerry Gana',
    title: 'National Secretary',
    role: 'National Executive Council',
    image:
      'https://pbs.twimg.com/profile_images/1037333046666690562/FrUND3Rj_400x400.jpg',
    description:
      'Coordinates party administration, official communications, records and institutional relationships.',
    number: '02',
  },
  {
    name: 'Prof. Steve Torkuma Ugba',
    title: 'National Organising Secretary',
    role: 'National Executive Council',
    image:
      'https://cdn.thenigerianvoice.com/story/XGltYWdlc1xjb250ZW50XGhsYzVmc3ExZXlfc3RldmVfdWdiYWhfYWNuX2d1YmVyX2JlbnVlXzEzMzg5NDgwMC5wbmd8NzcwfDQwMHw5LzgvMjAyNg%3D%3D',
    description:
      'Leads grassroots organisation and strengthens the connection between national structures, chapters and local communities.',
    number: '03',
  },
  {
    name: 'Dr. Kema Chikwe',
    title: 'National Women Leader',
    role: 'National Executive Council',
    image:
      'https://cdn.thenigerianvoice.com/images/content/otk7nay44h_kema_chik_969652960.png',
    description:
      'Champions inclusive participation, strengthens women’s political engagement and promotes greater representation across the organisation.',
    number: '04',
  },
];

const structures = [
  {
    number: '01',
    title: 'National',
    label: 'National Executive',
    description:
      'Sets the broad direction of the movement, develops national policy and coordinates the party’s institutional responsibilities.',
  },
  {
    number: '02',
    title: 'State',
    label: 'State Chapters',
    description:
      'Connects national strategy with communities across the states and coordinates state-level party activities.',
  },
  {
    number: '03',
    title: 'LGA',
    label: 'Local Government',
    description:
      'Builds stronger local organisation and ensures that community priorities reach the appropriate party structures.',
  },
  {
    number: '04',
    title: 'Ward',
    label: 'Grassroots',
    description:
      'The foundation of the movement, where members organise locally and contribute directly to party activities.',
  },
];

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

function LeadershipStat({ number, text }) {
  return (
    <div className="rounded-2xl border border-party-green/10 bg-party-paper p-4">
      <span className="text-xs font-black text-party-red">
        {number}
      </span>

      <p className="mt-2 text-sm font-bold text-party-greenDark">
        {text}
      </p>
    </div>
  );
}

function LeadershipCard({ leader, index }) {
  return (
    <article
      className="group overflow-hidden rounded-[2rem] border border-party-green/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        animation: 'leadershipFloat 6s ease-in-out infinite',
        animationDelay: `${index * 0.8}s`,
      }}
    >
      <div className="relative aspect-[4/4.5] overflow-hidden bg-party-greenDark">
        <img
          src={leader.image}
          alt={leader.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-party-greenDark via-party-greenDark/10 to-transparent" />

        <div className="absolute left-0 top-0 h-1.5 w-1/2 bg-party-red" />

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-party-red text-xs font-black text-white shadow-lg">
          {leader.number}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
            Iconicparty
          </p>

          <h3 className="mt-1 font-display text-xl font-bold text-white">
            {leader.name}
          </h3>

          <p className="mt-1 text-xs font-semibold text-white/75">
            {leader.title}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-party-red">
          {leader.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-party-ink/65">
          {leader.description}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-party-greenLight">
            <div className="h-full w-1/3 rounded-full bg-party-green transition-all duration-500 group-hover:w-full" />
          </div>

          <span className="text-[9px] font-bold uppercase tracking-wider text-party-green">
            Executive
          </span>
        </div>
      </div>
    </article>
  );
}

function StructureCard({ item, index }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-party-green/10 bg-party-paper p-7 transition duration-300 hover:-translate-y-1 hover:border-party-red/20 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-party-greenDark text-xs font-black text-white">
          {item.number}
        </span>

        <span className="text-xs font-bold uppercase tracking-wider text-party-red">
          0{index + 1}
        </span>
      </div>

      <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-party-green">
        {item.label}
      </p>

      <h3 className="mt-2 font-display text-2xl font-bold text-party-greenDark">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-party-ink/65">
        {item.description}
      </p>

      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-party-greenLight">
        <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-party-green to-party-red transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}

function Principle({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-party-green/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <span className="text-xs font-black text-party-red">
        {number}
      </span>

      <h3 className="mt-4 font-display text-xl font-bold text-party-greenDark">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-party-ink/60">
        {description}
      </p>
    </div>
  );
}

function AccountabilityItem({ title, description }) {
  return (
    <div className="flex gap-4 border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0">
      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-party-red text-xs font-black">
        ✓
      </div>

      <div>
        <h3 className="font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-white/55">
          {description}
        </p>
      </div>
    </div>
  );
}

/*
  Previous-page navigation:
  - If there is a usable browser history entry, go back.
  - Otherwise return to the Home page.
*/
function useSafeBack() {
  const navigate = useNavigate();

  return () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  };
}

export default function Leadership() {
  const goBack = useSafeBack();

  return (
    <div className="min-h-screen bg-party-paper text-party-ink">

      {/* =========================================================
          PAGE HEADER
      ========================================================== */}
      <PageHeader
        eyebrow="Iconicparty leadership"
        title="Leadership built to move the party forward."
        description="Meet the national officers responsible for providing direction, coordinating party structures and strengthening the movement from the national level to the grassroots."
      />

      {/* =========================================================
          PAGE NAVIGATION
      ========================================================== */}
      <section className="border-b border-party-green/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold">

              <Link
                to="/"
                className="text-party-greenDark/40 transition-colors hover:text-party-red"
              >
                Home
              </Link>

              <span className="text-party-greenDark/20">
                /
              </span>

              <span className="text-party-greenDark">
                Leadership
              </span>

            </div>

            {/* Navigation controls */}
            <div className="flex flex-wrap gap-2">

              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-2 rounded-full border border-party-greenDark/15 px-4 py-2.5 text-xs font-bold text-party-greenDark transition duration-300 hover:bg-party-greenDark hover:text-white"
              >
                <span aria-hidden="true">
                  ←
                </span>

                Previous page
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-party-greenDark px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-party-green"
              >
                <span aria-hidden="true">
                  ⌂
                </span>

                Home
              </Link>

              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full bg-party-red px-4 py-2.5 text-xs font-black text-white transition duration-300 hover:bg-party-redDark"
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
      <section className="relative overflow-hidden bg-white">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-party-red/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-5">

              <div className="mb-5 flex items-center gap-3">

                <span className="h-1 w-10 rounded-full bg-party-red" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-party-green">
                  Our leadership
                </span>

              </div>

              <h2 className="font-display text-3xl font-bold leading-tight text-party-greenDark sm:text-5xl">
                Strong organisation starts with responsible leadership.
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p className="text-base leading-8 text-party-ink/70 sm:text-lg">
                Iconicparty is organised around clear responsibilities,
                accountable leadership and strong connections between the
                national executive and members across the country.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">

                <LeadershipStat
                  number="01"
                  text="Clear roles"
                />

                <LeadershipStat
                  number="02"
                  text="Strong structure"
                />

                <LeadershipStat
                  number="03"
                  text="Member connection"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          NATIONAL EXECUTIVE COUNCIL
      ========================================================== */}
      <section className="relative overflow-hidden bg-party-greenLight">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-party-red/5 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-party-green/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-party-red" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-party-red">
                National Executive Council
              </span>

              <span className="h-px w-8 bg-party-red" />

            </div>

            <h2 className="font-display text-3xl font-bold text-party-greenDark sm:text-5xl">
              The people responsible for leading Iconicparty.
            </h2>

            <p className="mt-5 text-base leading-7 text-party-ink/65">
              Our national officers provide strategic direction and coordinate
              the structures that keep the party organised and connected.
            </p>

          </div>

          {/* FOUR LEADERS ONLY */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {leadership.map((leader, index) => (
              <LeadershipCard
                key={leader.name}
                leader={leader}
                index={index}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          LEADERSHIP STRUCTURE
      ========================================================== */}
      <section className="relative bg-white">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-12">

            <div className="lg:col-span-4">

              <SectionTitle
                eyebrow="Party structure"
                title="One organisation. Four levels."
                description="The party connects national leadership with state, local government and ward structures."
              />

              <div className="mt-8 rounded-2xl bg-party-greenDark p-6 text-white">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-party-red font-bold">
                    IP
                  </div>

                  <div>

                    <p className="font-bold">
                      ICONICPARTY
                    </p>

                    <p className="text-xs text-white/50">
                      National organisational structure
                    </p>

                  </div>

                </div>

                <div className="mt-6 h-px bg-white/10" />

                <p className="mt-5 text-sm leading-6 text-white/60">
                  Every level has defined responsibilities and a direct role
                  in building an organised political movement.
                </p>

              </div>

            </div>

            <div className="lg:col-span-8">

              <div className="grid gap-5 sm:grid-cols-2">

                {structures.map((item, index) => (
                  <StructureCard
                    key={item.number}
                    item={item}
                    index={index}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          LEADERSHIP PRINCIPLES
      ========================================================== */}
      <section className="border-y border-party-green/10 bg-party-paper">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-6">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-party-red">
                Leadership principles
              </p>

              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-party-greenDark sm:text-5xl">
                Leadership is a responsibility, not a title.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-party-ink/65">
                Iconicparty expects its leadership to operate with discipline,
                responsibility and a clear understanding of the people and
                structures they serve.
              </p>

            </div>

            <div className="lg:col-span-6">

              <div className="grid gap-4 sm:grid-cols-2">

                <Principle
                  number="01"
                  title="Responsibility"
                  description="Every leadership position carries defined responsibilities."
                />

                <Principle
                  number="02"
                  title="Service"
                  description="Leadership exists to serve the organisation and its members."
                />

                <Principle
                  number="03"
                  title="Coordination"
                  description="Strong communication connects every level of the party."
                />

                <Principle
                  number="04"
                  title="Accountability"
                  description="Leaders remain answerable for the responsibilities entrusted to them."
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          ACCOUNTABILITY
      ========================================================== */}
      <section className="relative overflow-hidden bg-party-greenDark text-white">

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-party-red/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-party-green/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            <div className="lg:col-span-7">

              <div className="flex items-center gap-3">

                <span className="h-1 w-10 rounded-full bg-party-red" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Accountability
                </p>

              </div>

              <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
                Leadership should always be answerable to the organisation.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65">
                Members should understand how the party is organised, who is
                responsible for key functions and where concerns can be raised.
              </p>

            </div>

            <div className="lg:col-span-5">

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

                <AccountabilityItem
                  title="Defined responsibilities"
                  description="Leadership positions have clear functions and responsibilities."
                />

                <AccountabilityItem
                  title="Accessible structures"
                  description="Members can engage with the party through its organisational levels."
                />

                <AccountabilityItem
                  title="Open processes"
                  description="Important party processes should remain clear and understandable."
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          JOIN CTA
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">

        <div className="relative overflow-hidden rounded-[2rem] bg-party-red px-7 py-16 text-center shadow-xl sm:px-16">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-party-greenDark/20 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              Be part of Iconicparty
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-5xl">
              The future of the movement needs your voice.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Join Iconicparty and connect with the structures, people and
              activities shaping the movement.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <Link
                to="/join"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-party-greenDark shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Join Iconicparty →
              </Link>

              <Link
                to="/volunteer"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-party-red"
              >
                Become a volunteer
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL NAVIGATION
      ========================================================== */}
      <section className="border-t border-party-green/10 bg-party-paper py-12 sm:py-16">

        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-[2rem] bg-party-greenDark p-8 sm:p-12">

            <div className="absolute left-0 top-0 flex h-1.5 w-full">

              <div className="w-1/3 bg-party-red" />

              <div className="w-1/3 bg-white/90" />

              <div className="w-1/3 bg-party-green" />

            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-party-green/20 blur-3xl" />

            <div className="relative text-center">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-red">
                Navigation
              </p>

              <h2 className="mt-3 font-display text-3xl font-black text-white sm:text-4xl">
                Continue exploring the platform.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
                Return to the Home page, go back to the page you came from or
                explore another section of Iconicparty.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-party-greenDark"
                >
                  ← Previous page
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-party-red px-6 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-party-redLight"
                >
                  ← Back to Home
                </Link>

                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white/75 transition duration-300 hover:bg-white hover:text-party-greenDark"
                >
                  View events
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

        <div className="w-1/3 bg-party-green" />

        <div className="w-1/3 bg-white" />

        <div className="w-1/3 bg-party-red" />

      </div>

      {/* =========================================================
          ANIMATION
      ========================================================== */}
      <style>{`

        @keyframes leadershipFloat {

          0% {
            transform: translateY(6px);
          }

          50% {
            transform: translateY(-6px);
          }

          100% {
            transform: translateY(6px);
          }

        }

        @media (prefers-reduced-motion: reduce) {

          * {
            animation: none !important;
          }

        }

      `}</style>

    </div>
  );
}