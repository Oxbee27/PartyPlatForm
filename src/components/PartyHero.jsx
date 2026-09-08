
import { Link } from 'react-router-dom';

const nationalLeaders = [
  {
    name: 'Abubakar Tafawa Balewa',
    role: 'Prime Minister of Nigeria',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Abubakar_Tafawa_Balewa.jpg',
  },
  {
    name: 'Nnamdi Azikiwe',
    role: 'President of Nigeria',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Nnamdi_Azikiwe.jpg',
  },
  {
    name: 'Johnson Aguiyi-Ironsi',
    role: 'Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Johnson_Aguiyi-Ironsi.jpg',
  },
  {
    name: 'Yakubu Gowon',
    role: 'Former Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Yakubu_Gowon.jpg',
  },
  {
    name: 'Murtala Ramat Mohammed',
    role: 'Former Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Murtala_Mohammed.jpg',
  },
  {
    name: 'Olusegun Obasanjo',
    role: 'Former President & Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gen.%20Olusegun%20Obasanjo.jpg',
  },
  {
    name: 'Shehu Shagari',
    role: 'Former President of Nigeria',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Shehu_Shagari.jpg',
  },
  {
    name: 'Muhammadu Buhari',
    role: 'Former President & Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Muhammadu_Buhari.jpg',
  },
  {
    name: 'Ibrahim Babangida',
    role: 'Former Military President',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ibrahim_Babangida_%28cropped%29.jpg',
  },
  {
    name: 'Ernest Shonekan',
    role: 'Interim Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Ernest_Shonekan.jpg',
  },
  {
    name: 'Sani Abacha',
    role: 'Former Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Sani_Abacha.jpg',
  },
  {
    name: 'Abdulsalami Abubakar',
    role: 'Former Head of State',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gen.%20Abdulsalam%20A.%20Abubakar.jpg',
  },
  {
    name: 'Umaru Musa Yar’Adua',
    role: 'Former President of Nigeria',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Umaru_Yar%27Adua.jpg',
  },
  {
    name: 'Goodluck Ebele Jonathan',
    role: 'Former President of Nigeria',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Goodluck_Jonathan.jpg',
  },
  {
    name: 'Muhammadu Buhari',
    role: 'Former President of Nigeria',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Muhammadu_Buhari.jpg',
  },
  {
    name: 'Bola Ahmed Tinubu',
    role: 'President of Nigeria',
    image:
      'https://statehouse.gov.ng/wp-content/uploads/2025/07/bola-tinubu-768x857.jpg',
    current: true,
  },
  {
    name: 'Kashim Shettima',
    role: 'Vice President of Nigeria',
    image:
      'https://statehouse.gov.ng/wp-content/uploads/2025/07/kashim-shettima-768x857.jpg',
    current: true,
  },
];

/*
  We duplicate the data so the animation can loop continuously.
*/
const scrollingLeaders = [...nationalLeaders, ...nationalLeaders];

export default function PartyHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F5FAF7] text-[#123126]">
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
          <div className="absolute inset-0 animate-[partyOrbit_15s_linear_infinite] rounded-full border border-dashed border-[#087443]/20" />

          <div className="absolute -inset-3 rounded-full bg-[#087443]/5 blur-xl" />

          <div className="absolute inset-3 rounded-full bg-white shadow-xl shadow-[#087443]/10" />

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
            SINGLE NATIONAL LEADERSHIP CAROUSEL
        ================================================== */}

        <section className="relative mx-auto mt-20 max-w-7xl">
          {/* Heading */}

          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#C62828]" />

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#087443]">
                Nigeria's National Leadership
              </span>

              <span className="h-px w-8 bg-[#C62828]" />
            </div>

            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#063B25] sm:text-5xl">
              A nation shaped by its leaders.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#123126]/55 sm:text-base">
              Past and present national leaders presented together as one
              continuous story of Nigeria's political journey.
            </p>
          </div>

          {/* Scroll hint */}

          <div className="mt-6 flex items-center justify-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#087443]/45">
            <span>←</span>
            <span>Scroll to explore</span>
            <span>→</span>
          </div>

          {/* ==================================================
              SCROLLING LEADER RAIL
          ================================================== */}

          <div className="relative mt-8">
            {/* Left fade */}

            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#F5FAF7] to-transparent sm:w-24" />

            {/* Right fade */}

            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#F5FAF7] to-transparent sm:w-24" />

            {/* Actual scroll container */}

            <div className="leader-scroll overflow-x-auto px-5 pb-6 pt-3 scrollbar-hide">
              <div className="leader-track flex w-max gap-5">
                {scrollingLeaders.map((leader, index) => (
                  <article
                    key={`${leader.name}-${index}`}
                    className="leader-card group relative w-[235px] shrink-0 sm:w-[255px]"
                  >
                    <div
                      className={`relative overflow-hidden rounded-[2rem] border bg-white p-3 shadow-[0_18px_55px_rgba(6,59,37,0.07)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_28px_70px_rgba(6,59,37,0.13)] ${
                        leader.current
                          ? 'border-[#C62828]/25'
                          : 'border-[#087443]/10'
                      }`}
                    >
                      {/* Portrait */}

                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#E8F5EE]">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          loading={index < 6 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                        />

                        {/* Image gradient */}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#063B25]/90 via-[#063B25]/10 to-transparent" />

                        {/* Current badge */}

                        {leader.current && (
                          <div className="absolute left-4 top-4 rounded-full bg-[#C62828] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white shadow-lg">
                            Current
                          </div>
                        )}

                        {/* Sequence */}

                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[10px] font-black text-[#063B25] shadow-lg backdrop-blur">
                          {String((index % nationalLeaders.length) + 1).padStart(
                            2,
                            '0'
                          )}
                        </div>

                        {/* Leader information */}

                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p
                            className={`text-[8px] font-black uppercase tracking-[0.2em] ${
                              leader.current
                                ? 'text-[#FF8A8A]'
                                : 'text-[#70BA91]'
                            }`}
                          >
                            {leader.current
                              ? 'National Leadership'
                              : 'Nigerian Leadership'}
                          </p>

                          <h3 className="mt-1 font-display text-xl font-black leading-tight text-white">
                            {leader.name}
                          </h3>

                          <p className="mt-1 text-xs font-semibold leading-5 text-white/70">
                            {leader.role}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent */}

                      <div className="mt-3 flex h-1 overflow-hidden rounded-full bg-[#F5FAF7]">
                        <div className="w-1/3 bg-[#087443]" />
                        <div className="w-1/3 bg-white" />
                        <div className="w-1/3 bg-[#C62828]" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel status */}

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-1.5 w-8 rounded-full bg-[#C62828]" />

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#063B25]/35">
              Past • Present • Progress
            </span>

            <span className="h-1.5 w-8 rounded-full bg-[#087443]" />
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

        @keyframes leaderScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .leader-track {
          animation: leaderScroll 80s linear infinite;
        }

        .leader-scroll:hover .leader-track {
          animation-play-state: paused;
        }

        .leader-scroll:active .leader-track {
          animation-play-state: paused;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 640px) {
          .leader-track {
            animation-duration: 65s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leader-track,
          .leader-scroll:hover .leader-track,
          .leader-scroll:active .leader-track {
            animation: none !important;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
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
