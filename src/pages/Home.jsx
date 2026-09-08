
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PartyHero from '../components/PartyHero';

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
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-9 bg-party-red" />

      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-party-green">
        {children}
      </span>
    </div>
  );
}

function ValueCard({ number, title, description }) {
  return (
    <div className="group border-b border-party-green/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-sm font-black text-party-red">
          {number}
        </span>

        <span className="text-party-green/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-party-red">
          →
        </span>
      </div>

      <h3 className="mt-7 font-display text-2xl font-black tracking-[-0.03em] text-party-greenDark">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-party-green/55">
        {description}
      </p>
    </div>
  );
}

function PlatformCard({ number, title, description, to }) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:shadow-[0_20px_50px_rgba(6,59,37,0.08)]"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-party-green/10 transition-colors duration-300 group-hover:bg-party-red" />

      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-party-greenLight font-display text-xs font-black text-party-greenDark">
          {number}
        </span>

        <span className="text-party-red transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>

      <h3 className="mt-8 font-display text-2xl font-black tracking-[-0.03em] text-party-greenDark">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-party-green/55">
        {description}
      </p>

      <div className="mt-7 text-xs font-black uppercase tracking-[0.12em] text-party-green/40 transition-colors group-hover:text-party-green">
        Explore
      </div>
    </Link>
  );
}

function CommunityStat({ value, label }) {
  return (
    <div className="border-l border-white/10 pl-5">
      <p className="font-display text-3xl font-black text-white sm:text-4xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-party-paper text-party-ink">

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <main>
        <PartyHero />

        {/* =================================================
            INTRODUCTION
        ================================================== */}
        <section
          id="next-section"
          className="relative overflow-hidden bg-party-paper"
        >
          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-party-green/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

              <div className="lg:col-span-7">

                <SectionLabel>
                  About the movement
                </SectionLabel>

                <h2 className="max-w-4xl font-display text-4xl font-black leading-[0.96] tracking-[-0.04em] text-party-greenDark sm:text-5xl lg:text-6xl">
                  Politics should remain
                  <span className="text-party-red">
                    {' '}
                    connected to people.
                  </span>
                </h2>

              </div>

              <div className="lg:col-span-5">

                <p className="text-sm leading-7 text-party-green/60 sm:text-base">
                  Iconicparty is a modern political movement built around
                  participation, organisation and responsible leadership. We
                  believe communities should have a meaningful voice in the
                  direction of the country.
                </p>

                <Link
                  to="/about"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-black text-party-greenDark transition-colors hover:text-party-red"
                >
                  Learn about Iconicparty
                  <ArrowIcon />
                </Link>

              </div>

            </div>

            {/* Values */}
            <div className="mt-14 overflow-hidden rounded-[2rem] border border-party-green/10 bg-white shadow-[0_12px_40px_rgba(6,59,37,0.04)]">

              <div className="grid sm:grid-cols-3">

                <ValueCard
                  number="01"
                  title="People"
                  description="Leadership that remains connected to communities, citizens and the everyday realities of Nigerians."
                />

                <ValueCard
                  number="02"
                  title="Progress"
                  description="Ideas, institutions and policies focused on sustainable national development and opportunity."
                />

                <ValueCard
                  number="03"
                  title="Prosperity"
                  description="A stronger future where citizens can participate, build livelihoods and contribute to national growth."
                />

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            PLATFORM PRIORITIES
        ================================================== */}
        <section className="border-y border-party-green/10 bg-party-greenLight/35">

          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

              <div className="lg:col-span-7">

                <SectionLabel>
                  Our platform
                </SectionLabel>

                <h2 className="font-display text-4xl font-black leading-[0.98] tracking-[-0.04em] text-party-greenDark sm:text-5xl">
                  Turning political ideas
                  <br />
                  into practical priorities.
                </h2>

              </div>

              <div className="lg:col-span-5">

                <p className="text-sm leading-7 text-party-green/55 sm:text-base">
                  Our platform brings together the priorities that matter to
                  communities, institutions and the next generation of
                  Nigerian leadership.
                </p>

              </div>

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              <PlatformCard
                number="01"
                title="Economic opportunity"
                description="Support stronger livelihoods, entrepreneurship, productive communities and inclusive economic participation."
                to="/manifesto"
              />

              <PlatformCard
                number="02"
                title="Education & skills"
                description="Build a stronger human-capital foundation through quality education, digital skills and lifelong learning."
                to="/manifesto"
              />

              <PlatformCard
                number="03"
                title="Healthcare"
                description="Promote accessible, dependable healthcare systems that respond to the needs of citizens and communities."
                to="/manifesto"
              />

              <PlatformCard
                number="04"
                title="Infrastructure"
                description="Advance infrastructure that connects communities, supports commerce and strengthens everyday life."
                to="/manifesto"
              />

              <PlatformCard
                number="05"
                title="Youth participation"
                description="Create meaningful pathways for young Nigerians to contribute to leadership, innovation and public service."
                to="/manifesto"
              />

              <PlatformCard
                number="06"
                title="Accountable governance"
                description="Strengthen transparency, institutional responsibility and citizen access to information and participation."
                to="/transparency"
              />

            </div>

            <div className="mt-10 flex justify-center">

              <Link
                to="/manifesto"
                className="inline-flex items-center gap-2 rounded-full bg-party-greenDark px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-party-green"
              >
                Read the full manifesto
                <ArrowIcon />
              </Link>

            </div>

          </div>
        </section>

        {/* =================================================
            NATIONAL ORGANISATION
        ================================================== */}
        <section className="relative overflow-hidden bg-party-paper">

          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-party-red/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-6">

                <SectionLabel>
                  Organisation
                </SectionLabel>

                <h2 className="font-display text-4xl font-black leading-[0.97] tracking-[-0.04em] text-party-greenDark sm:text-5xl">
                  A movement organised
                  <span className="block text-party-green">
                    from national to grassroots.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-party-green/55 sm:text-base">
                  Strong political organisation depends on structures that
                  connect national leadership with state chapters, local
                  governments, wards and communities.
                </p>

                <Link
                  to="/chapters"
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-party-green/20 bg-white px-5 py-3 text-sm font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/40 hover:bg-party-greenLight"
                >
                  Explore party chapters
                  <ArrowIcon />
                </Link>

              </div>

              <div className="lg:col-span-6">

                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-party-greenLight font-display font-black text-party-greenDark">
                      01
                    </div>

                    <h3 className="mt-7 font-display text-xl font-black text-party-greenDark">
                      National
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-party-green/50">
                      Sets broad strategic direction and coordinates the
                      national organisation.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-party-red/10 font-display font-black text-party-red">
                      02
                    </div>

                    <h3 className="mt-7 font-display text-xl font-black text-party-greenDark">
                      States
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-party-green/50">
                      Connects national priorities with state-level political
                      organisation.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-party-greenLight font-display font-black text-party-greenDark">
                      03
                    </div>

                    <h3 className="mt-7 font-display text-xl font-black text-party-greenDark">
                      LGAs & wards
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-party-green/50">
                      Builds stronger local structures where members organise
                      and participate.
                    </p>
                  </div>

                  <div className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-party-red/10 font-display font-black text-party-red">
                      04
                    </div>

                    <h3 className="mt-7 font-display text-xl font-black text-party-greenDark">
                      Communities
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-party-green/50">
                      Keeps the organisation connected to the people it
                      represents and serves.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            COMMUNITY / PARTICIPATION BAND
        ================================================== */}
        <section className="overflow-hidden bg-party-greenDark">

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/5" />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-7">

                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-party-red">
                  National footprint
                </p>

                <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-[1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                  Connected organisation.
                  <span className="block text-white/45">
                    Stronger participation.
                  </span>
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-7 sm:grid-cols-4 lg:col-span-5">

                <CommunityStat
                  value="36"
                  label="States"
                />

                <CommunityStat
                  value="774"
                  label="LGAs"
                />

                <CommunityStat
                  value="18k+"
                  label="Polling units"
                />

                <CommunityStat
                  value="1"
                  label="Movement"
                />

              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            PARTICIPATION
        ================================================== */}
        <section className="bg-party-paper">

          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

            <div className="mx-auto max-w-3xl text-center">

              <SectionLabel>
                Take part
              </SectionLabel>

              <h2 className="font-display text-4xl font-black leading-[0.96] tracking-[-0.04em] text-party-greenDark sm:text-5xl">
                Democracy works better
                <span className="block text-party-red">
                  when people participate.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-party-green/55 sm:text-base">
                Join the movement, volunteer your skills, attend local events
                or stay informed through the party's official channels.
              </p>

            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <Link
                to="/join"
                className="group rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-party-red/20 hover:shadow-[0_20px_50px_rgba(6,59,37,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-party-red/10 font-display font-black text-party-red">
                  01
                </span>

                <h3 className="mt-7 font-display text-2xl font-black text-party-greenDark">
                  Become a member
                </h3>

                <p className="mt-3 text-sm leading-6 text-party-green/50">
                  Create your membership profile and connect with your local
                  chapter.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-party-greenDark">
                  Join Iconicparty
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                to="/volunteer"
                className="group rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:shadow-[0_20px_50px_rgba(6,59,37,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-party-greenLight font-display font-black text-party-greenDark">
                  02
                </span>

                <h3 className="mt-7 font-display text-2xl font-black text-party-greenDark">
                  Volunteer
                </h3>

                <p className="mt-3 text-sm leading-6 text-party-green/50">
                  Contribute your skills, time and energy to activities in
                  your community.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-party-greenDark">
                  Volunteer with us
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                to="/events"
                className="group rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:shadow-[0_20px_50px_rgba(6,5937,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-party-red/10 font-display font-black text-party-red">
                  03
                </span>

                <h3 className="mt-7 font-display text-2xl font-black text-party-greenDark">
                  Attend events
                </h3>

                <p className="mt-3 text-sm leading-6 text-party-green/50">
                  Stay connected to meetings, congresses, community activities
                  and party events.
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-party-greenDark">
                  View events
                  <ArrowIcon />
                </span>
              </Link>

            </div>

          </div>
        </section>

        {/* =================================================
            NEWS / UPDATES
        ================================================== */}
        <section className="border-y border-party-green/10 bg-party-greenLight/35">

          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <SectionLabel>
                  From the newsroom
                </SectionLabel>

                <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark sm:text-4xl">
                  Latest statements & updates
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-party-green/50">
                  Follow official announcements, governance updates and
                  developments from across the movement.
                </p>
              </div>

              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm font-black text-party-greenDark hover:text-party-red"
              >
                Visit newsroom
                <ArrowIcon />
              </Link>

            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">

              <article className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-party-red">
                    Statement
                  </span>

                  <span className="text-[10px] font-medium text-party-green/30">
                    Official
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-black text-party-greenDark">
                  Building stronger structures for participation
                </h3>

                <p className="mt-3 text-sm leading-6 text-party-green/50">
                  Read the latest organisational message from the movement.
                </p>

                <Link
                  to="/news"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-party-greenDark hover:text-party-red"
                >
                  Read update
                  <ArrowIcon />
                </Link>
              </article>

              <article className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-party-red">
                    Governance
                  </span>

                  <span className="text-[10px] font-medium text-party-green/30">
                    Official
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-black text-party-greenDark">
                  Transparency and responsible organisation
                </h3>

                <p className="mt-3 text-sm leading-6 text-party-green/50">
                  Follow updates around the systems and principles guiding
                  party administration.
                </p>

                <Link
                  to="/transparency"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-party-greenDark hover:text-party-red"
                >
                  Explore transparency
                  <ArrowIcon />
                </Link>
              </article>

              <article className="rounded-[2rem] border border-party-green/10 bg-white p-7 shadow-[0_10px_35px_rgba(6,59,37,0.04)]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-party-red">
                    Community
                  </span>

                  <span className="text-[10px] font-medium text-party-green/30">
                    Events
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-black text-party-greenDark">
                  Connect with activities near you
                </h3>

                <p className="mt-3 text-sm leading-6 text-party-green/50">
                  Discover upcoming meetings, gatherings and opportunities to
                  participate.
                </p>

                <Link
                  to="/events"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-party-greenDark hover:text-party-red"
                >
                  Explore events
                  <ArrowIcon />
                </Link>
              </article>

            </div>

          </div>
        </section>

        {/* =================================================
            FINAL CTA
        ================================================== */}
        <section className="bg-party-paper pb-16 pt-16 sm:pb-20 sm:pt-20">

          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

            <div className="relative overflow-hidden rounded-[2.5rem] bg-party-greenDark px-7 py-14 text-center shadow-[0_24px_70px_rgba(6,59,37,0.16)] sm:px-16 sm:py-16">

              {/* Nigerian-inspired top strip */}
              <div className="absolute left-0 top-0 h-1.5 w-1/3 bg-party-green" />
              <div className="absolute left-1/3 top-0 h-1.5 w-1/3 bg-white" />
              <div className="absolute right-0 top-0 h-1.5 w-1/3 bg-party-red" />

              {/* Decorative circles */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-party-red/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-party-green/30 blur-3xl" />

              <div className="relative">

                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-party-red">
                  Join Iconicparty
                </p>

                <h2 className="mx-auto mt-4 max-w-4xl font-display text-3xl font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl">
                  Be part of the movement shaping tomorrow.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                  Become a member, volunteer your time, attend an event or
                  connect with the organisation in your community.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <Link
                    to="/join"
                    className="inline-flex items-center gap-2 rounded-full bg-party-red px-7 py-3.5 text-sm font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-party-redLight"
                  >
                    Join Iconicparty
                    <ArrowIcon />
                  </Link>

                  <Link
                    to="/volunteer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-party-greenDark"
                  >
                    Volunteer
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-sm font-bold text-white/75 transition-all duration-300 hover:bg-white hover:text-party-greenDark"
                  >
                    Contact us
                    <ArrowIcon />
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
}
