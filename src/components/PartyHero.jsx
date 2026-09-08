
import { Link } from 'react-router-dom';

const nationalLeaders = [
  {
    name: 'Bola Ahmed Tinubu',
    role: 'President of Nigeria',
    image:
      'https://statehouse.gov.ng/wp-content/uploads/2025/07/bola-tinubu-768x857.jpg',
  },
  {
    name: 'Kashim Shettima',
    role: 'Vice President of Nigeria',
    image:
      'https://statehouse.gov.ng/wp-content/uploads/2025/07/kashim-shettima-768x857.jpg',
  },
];

/*
  Former Nigerian national leaders.

  These are presented as historical national figures,
  NOT as Iconicparty officers.
*/
const formerLeaders = [
  {
    name: 'Olusegun Obasanjo',
    role: 'Former President & Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gen.%20Olusegun%20Obasanjo.jpg',
  },
  {
    name: 'Yakubu Gowon',
    role: 'Former Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Yakubu%20Gowon.jpg',
  },
  {
    name: 'Ibrahim Babangida',
    role: 'Former Military President',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ibrahim%20Babangida%20%28cropped%29.jpg',
  },
  {
    name: 'Abdulsalami Abubakar',
    role: 'Former Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gen.%20Abdulsalam%20A.%20Abubakar.jpg',
  },
];

export default function PartyHero() {
  return (
    <section className="relative min-h-screen overflow-visible bg-[#F5FAF7] text-[#123126]">

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C62828]/5 blur-3xl" />

        <div className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#087443]/10 blur-3xl" />

        <div className="absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-[#087443]/5" />

        <div className="absolute left-1/2 top-[27%] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#C62828]/5" />
      </div>

      {/* ==================================================
          NIGERIAN COLOUR STRIP
      ================================================== */}

      <div className="absolute left-0 right-0 top-0 z-30 flex h-1.5">
        <div className="w-1/3 bg-[#C62828]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#087443]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:px-10">

        {/* ==================================================
            MAIN PARTY HEADING
        ================================================== */}

        <div className="relative mx-auto mt-20 max-w-6xl text-center sm:mt-24">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#087443]/10 bg-white px-5 py-2.5 shadow-sm">
            <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#C62828]" />

            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#087443]">
              The Iconicparty Movement
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mx-auto mt-8 max-w-6xl font-display text-5xl font-black leading-[0.92] tracking-tight text-[#063B25] sm:text-7xl lg:text-[6.5rem]">
            Building the Nigeria

            <span className="block text-[#C62828]">
              we believe in.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#123126]/60 sm:text-lg">
            A modern political movement committed to strong leadership,
            national development and a better future for every Nigerian.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">

            <Link
              to="/join"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C62828] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#C62828]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#9E1F1F]"
            >
              Join the movement

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/manifesto"
              className="inline-flex items-center rounded-full border border-[#087443]/20 bg-white px-7 py-4 text-sm font-bold text-[#063B25] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#087443] hover:bg-[#087443] hover:text-white"
            >
              Our manifesto
            </Link>
          </div>
        </div>

        {/* ==================================================
            PARTY LOGO
        ================================================== */}

        <div className="relative mx-auto mt-16 flex h-32 w-32 items-center justify-center sm:mt-20 sm:h-40 sm:w-40">

          {/* Orbit */}
          <div className="absolute inset-0 animate-[partyOrbit_15s_linear_infinite] rounded-full border border-dashed border-[#087443]/20" />

          {/* Outer glow */}
          <div className="absolute -inset-3 rounded-full bg-[#087443]/5 blur-xl" />

          {/* White circle */}
          <div className="absolute inset-3 rounded-full bg-white shadow-xl shadow-[#087443]/10" />

          {/* Main logo */}
          <div className="relative flex h-24 w-24 animate-[partyLogoPulse_4s_ease-in-out_infinite] flex-col items-center justify-center rounded-full border-[6px] border-[#087443] bg-white sm:h-32 sm:w-32">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C62828] shadow-md">
              <div className="h-4 w-4 rounded-full bg-white" />
            </div>

            <span className="mt-1 text-[9px] font-black tracking-[0.2em] text-[#063B25]">
              ICONIC
            </span>

            <span className="text-[6px] font-black uppercase tracking-widest text-[#087443]">
              PARTY
            </span>
          </div>
        </div>

        {/* ==================================================
            NATIONAL LEADERSHIP
        ================================================== */}

        <div className="mx-auto mt-16 max-w-5xl">

          <div className="mb-8 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#087443]/50">
              Current National Leadership
            </p>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-[#C62828]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {nationalLeaders.map((leader, index) => (
              <NationalLeader
                key={leader.name}
                leader={leader}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ==================================================
            DIVIDER
        ================================================== */}

        <div className="mx-auto my-20 flex max-w-5xl items-center gap-5">

          <div className="h-px flex-1 bg-[#087443]/10" />

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C62828]" />
            <span className="h-2 w-2 rounded-full bg-[#087443]" />
            <span className="h-2 w-2 rounded-full bg-[#C62828]" />
          </div>

          <div className="h-px flex-1 bg-[#087443]/10" />
        </div>

        {/* ==================================================
            FORMER NATIONAL LEADERS
        ================================================== */}

        <section className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#C62828]" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C62828]">
                Former National Leaders
              </span>

              <span className="h-px w-8 bg-[#C62828]" />
            </div>

            <h2 className="mt-4 font-display text-3xl font-black text-[#063B25] sm:text-5xl">
              Leaders who shaped Nigeria.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#123126]/55 sm:text-base">
              A look at some of Nigeria&apos;s former national leaders whose
              public service and administrations form part of the nation&apos;s
              political history.
            </p>
          </div>

          {/* Former national leader cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formerLeaders.map((leader, index) => (
              <FormerLeader
                key={leader.name}
                leader={leader}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ==================================================
            PARTY VALUES
        ================================================== */}

        <div className="mx-auto mt-16 max-w-4xl">

          <div className="grid overflow-hidden rounded-3xl border border-[#087443]/10 bg-white shadow-sm sm:grid-cols-3">

            <Value
              number="01"
              title="People"
              text="Leadership that remains connected to the people."
            />

            <Value
              number="02"
              title="Progress"
              text="Ideas and policies designed for national development."
            />

            <Value
              number="03"
              title="Prosperity"
              text="A stronger future and greater opportunity for Nigerians."
            />

          </div>
        </div>

        {/* ==================================================
            CTA
        ================================================== */}

        <div className="mx-auto mt-16 max-w-5xl">

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#063B25] px-7 py-14 text-center shadow-2xl sm:px-16">

            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C62828]/20 blur-3xl" />

            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#087443]/40 blur-3xl" />

            <div className="relative">

              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C62828]">
                Join Iconicparty
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black text-white sm:text-5xl">
                Be part of the movement shaping tomorrow.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
                Become a member, volunteer your time or connect with the
                party&apos;s activities in your community.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <Link
                  to="/join"
                  className="rounded-full bg-[#C62828] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#E53935]"
                >
                  Join Iconicparty →
                </Link>

                <Link
                  to="/volunteer"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#063B25]"
                >
                  Volunteer
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            DISCOVER
        ================================================== */}

        <div className="mt-12 flex justify-center">

          <a
            href="#next-section"
            className="group flex flex-col items-center gap-2 text-[#087443]/40 transition hover:text-[#C62828]"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.25em]">
              Discover more
            </span>

            <span className="animate-bounce text-lg">
              ↓
            </span>
          </a>

        </div>

      </div>

      {/* ==================================================
          ANIMATIONS
      ================================================== */}

      <style>{`
        @keyframes partyLogoPulse {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes partyOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes nationalFloat {
          0% {
            transform: translateY(8px) scale(0.985);
          }

          25% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-7px) scale(1.015);
          }

          75% {
            transform: translateY(0) scale(1);
          }

          100% {
            transform: translateY(8px) scale(0.985);
          }
        }

        @keyframes formerLeaderFloat {
          0% {
            transform: translateY(10px) scale(0.97);
          }

          20% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-9px) scale(1.025);
          }

          75% {
            transform: translateY(0) scale(1);
          }

          100% {
            transform: translateY(10px) scale(0.97);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

    </section>
  );
}


/* =====================================================
   NATIONAL LEADER
===================================================== */

function NationalLeader({ leader, index }) {
  return (
    <div
      className="group"
      style={{
        animation: 'nationalFloat 7s ease-in-out infinite',
        animationDelay: `${index * 1.2}s`,
      }}
    >
      <div className="overflow-hidden rounded-[2rem] border border-[#087443]/10 bg-white p-3 shadow-lg shadow-[#087443]/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#E8F5EE]">

          <img
            src={leader.image}
            alt={leader.name}
            loading="eager"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />

        </div>

        {/* Information */}
        <div className="px-2 pb-2 pt-5 text-center">

          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C62828]">
            National Leadership
          </p>

          <h3 className="mt-2 font-display text-2xl font-black text-[#063B25]">
            {leader.name}
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#087443]/70">
            {leader.role}
          </p>

        </div>

        {/* Nigerian colour strip */}
        <div className="mt-3 flex h-1 overflow-hidden rounded-full bg-[#F5FAF7]">
          <div className="w-1/3 bg-[#087443]" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-[#C62828]" />
        </div>

      </div>
    </div>
  );
}


/* =====================================================
   FORMER NATIONAL LEADER
===================================================== */

function FormerLeader({ leader, index }) {
  return (
    <article
      className="group"
      style={{
        animation: 'formerLeaderFloat 6s ease-in-out infinite',
        animationDelay: `${index * 0.75}s`,
      }}
    >
      <div className="overflow-hidden rounded-[2rem] border border-[#087443]/10 bg-white shadow-sm transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#E8F5EE]">

          <img
            src={leader.image}
            alt={leader.name}
            loading="lazy"
            className="h-full w-full object-cover object-top grayscale-[10%] transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
          />

          {/* Soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#063B25]/85 via-transparent to-transparent" />

          {/* Number */}
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#C62828] text-[10px] font-black text-white shadow-lg">
            0{index + 1}
          </div>

          {/* Leader information */}
          <div className="absolute bottom-0 left-0 right-0 p-5">

            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C62828]">
              Nigerian Leadership
            </p>

            <h3 className="mt-1 font-display text-xl font-black text-white">
              {leader.name}
            </h3>

            <p className="mt-1 text-xs font-semibold text-white/75">
              {leader.role}
            </p>

          </div>

        </div>

        {/* Details */}
        <div className="p-5">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#C62828]" />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#087443]">
              Former National Leader
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#123126]/55">
            A former Nigerian national leader whose period of public service
            remains part of the country&apos;s political history.
          </p>

          {/* Nigerian colours */}
          <div className="mt-5 flex h-1 overflow-hidden rounded-full">
            <div className="w-1/3 bg-[#087443]" />
            <div className="w-1/3 bg-[#F5F5F5]" />
            <div className="w-1/3 bg-[#C62828]" />
          </div>

        </div>

      </div>
    </article>
  );
}


/* =====================================================
   VALUE
===================================================== */

function Value({ number, title, text }) {
  return (
    <div className="group border-b border-[#087443]/10 p-6 transition hover:bg-[#F5FAF7] sm:border-b-0 sm:border-r last:border-r-0">

      <span className="text-[10px] font-black tracking-widest text-[#C62828]">
        {number}
      </span>

      <h3 className="mt-3 font-display text-xl font-black text-[#063B25]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-[#123126]/55">
        {text}
      </p>

    </div>
  );
}

