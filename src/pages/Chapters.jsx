
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const states = [
  {
    name: 'Benue',
    code: 'BN',
    members: '8,420',
    lgas: 23,
    wards: '276',
    status: 'Operational',
    focus: 'Grassroots organisation',
  },
  {
    name: 'Lagos',
    code: 'LA',
    members: '12,740',
    lgas: 20,
    wards: '377',
    status: 'Operational',
    focus: 'Community engagement',
  },
  {
    name: 'Kaduna',
    code: 'KD',
    members: '9,630',
    lgas: 23,
    wards: '255',
    status: 'Operational',
    focus: 'Membership growth',
  },
  {
    name: 'Rivers',
    code: 'RI',
    members: '7,310',
    lgas: 23,
    wards: '319',
    status: 'Operational',
    focus: 'Youth mobilisation',
  },
  {
    name: 'Kano',
    code: 'KN',
    members: '11,280',
    lgas: 44,
    wards: '484',
    status: 'Operational',
    focus: 'Community outreach',
  },
  {
    name: 'Plateau',
    code: 'PL',
    members: '6,890',
    lgas: 17,
    wards: '325',
    status: 'Operational',
    focus: 'Local organising',
  },
];

const levels = [
  {
    number: '01',
    title: 'National',
    description:
      'Provides strategic direction, national coordination, policy development and oversight across the organisation.',
  },
  {
    number: '02',
    title: 'State',
    description:
      'Coordinates party activities within each state and connects national priorities with local organisation.',
  },
  {
    number: '03',
    title: 'LGA',
    description:
      'Coordinates members, programmes and community engagement across Local Government Areas.',
  },
  {
    number: '04',
    title: 'Ward',
    description:
      'The local organisational structure where members participate directly in grassroots activities.',
  },
  {
    number: '05',
    title: 'Polling Unit',
    description:
      'The closest organisational point to members and their communities, supporting civic and electoral engagement.',
  },
];

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

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChapterIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 20V9L12 4L20 9V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20V13H16V20"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="5"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="19"
        cy="18"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.7 7.2L6.3 15.7M13.3 7.2L17.7 15.7M7.5 18H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Chapters() {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  const filteredStates = useMemo(() => {
    return states.filter((state) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        state.name.toLowerCase().includes(query) ||
        state.code.toLowerCase().includes(query);

      const matchesState =
        selectedState === 'All' || state.name === selectedState;

      return matchesSearch && matchesState;
    });
  }, [search, selectedState]);

  const clearFilters = () => {
    setSearch('');
    setSelectedState('All');
  };

  return (
    <div className="bg-[#FAFCFA] text-[#12221A]">
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Organisation"
        title="Our chapters"
        description="A national movement built through strong local organisation — connecting people, communities and leadership across Nigeria."
      />

      {/* NATIONAL STRUCTURE STRIP */}
      <section className="relative overflow-hidden bg-[#063B25]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#C62828]/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#087443]/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              ['36', 'States + FCT'],
              ['774', 'Local Government Areas'],
              ['8,800+', 'Wards'],
              ['36,000+', 'Polling Units'],
            ].map(([number, label], index) => (
              <div
                key={label}
                className={`relative px-5 py-8 sm:px-8 sm:py-10 ${
                  index !== 3 ? 'border-r border-white/10' : ''
                } ${index > 1 ? 'border-t border-white/10 lg:border-t-0' : ''}`}
              >
                <div className="mb-4 h-1 w-8 rounded-full bg-[#C62828]" />

                <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {number}
                </p>

                <p className="mt-2 max-w-[150px] text-[10px] font-bold uppercase tracking-[0.16em] text-white/45 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANISATIONAL STRUCTURE */}
      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#087443]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <SectionTitle
                eyebrow="Built from the ground up"
                title="National direction. Local participation."
                description="A political organisation becomes meaningful when people can participate close to where they live. Our chapter structure connects national leadership with communities."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/join" className="btn-primary">
                  Become a member
                  <ArrowIcon />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#063B25]/15 px-5 py-3 text-sm font-semibold text-[#063B25] transition hover:border-[#063B25] hover:bg-[#063B25] hover:text-white"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#087443]/10 bg-[#F4FAF6] p-6 sm:p-8">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full border border-[#087443]/10" />
                <div className="absolute right-6 top-6 h-28 w-28 rounded-full border border-[#C62828]/10" />

                <div className="relative mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                      Organisational network
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-[#063B25]">
                      Five levels of participation
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#087443]/15 bg-white text-[#087443] sm:flex">
                    <NetworkIcon />
                  </div>
                </div>

                <div className="space-y-3">
                  {levels.map((level, index) => (
                    <div
                      key={level.number}
                      className="group relative flex gap-4 rounded-2xl border border-[#087443]/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#087443]/20 hover:shadow-md sm:p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#063B25] text-[10px] font-black text-white transition-colors group-hover:bg-[#C62828]">
                        {level.number}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-lg font-bold text-[#063B25]">
                            {level.title}
                          </h3>

                          {index < levels.length - 1 && (
                            <span className="hidden h-px flex-1 bg-[#087443]/10 sm:block" />
                          )}
                        </div>

                        <p className="mt-1 text-sm leading-6 text-[#087443]/75">
                          {level.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATE CHAPTERS */}
      <section className="border-y border-[#087443]/10 bg-[#F4FAF6]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionTitle
                eyebrow="State chapters"
                title="Find your chapter."
                description="Explore the state structures currently represented across the Iconicparty network."
              />
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <label htmlFor="chapter-search" className="sr-only">
                Search chapters
              </label>

              <div className="relative w-full lg:max-w-sm">
                <input
                  id="chapter-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search a state or code..."
                  className="w-full rounded-full border border-[#087443]/15 bg-white py-3.5 pl-11 pr-5 text-sm text-[#12221A] outline-none transition placeholder:text-[#087443]/40 focus:border-[#087443]/50 focus:ring-4 focus:ring-[#087443]/5"
                />

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#087443]/60">
                  <SearchIcon />
                </span>
              </div>
            </div>
          </div>

          {/* FILTERS */}
          <div className="mt-9">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['All', ...states.map((state) => state.name)].map((state) => (
                <button
                  key={state}
                  type="button"
                  onClick={() => setSelectedState(state)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-200 ${
                    selectedState === state
                      ? 'border-[#063B25] bg-[#063B25] text-white shadow-md shadow-[#063B25]/10'
                      : 'border-[#087443]/15 bg-white text-[#087443] hover:border-[#087443]/40 hover:bg-white'
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* CHAPTER CARDS */}
          {filteredStates.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredStates.map((state, index) => (
                <article
                  key={state.name}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#087443]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#087443]/20 hover:shadow-xl hover:shadow-[#063B25]/5"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-[#F4FAF6] transition-colors duration-300 group-hover:bg-[#E8F5EE]" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#063B25] font-display text-sm font-black text-white transition-colors duration-300 group-hover:bg-[#C62828]">
                        {state.code}
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#087443]/10 bg-[#E8F5EE] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#087443]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#087443]" />
                        {state.status}
                      </span>
                    </div>

                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#C62828]">
                      State chapter {String(index + 1).padStart(2, '0')}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#063B25]">
                      {state.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#087443]/65">
                      {state.focus}
                    </p>

                    <div className="mt-6 grid grid-cols-3 divide-x divide-[#087443]/10 border-y border-[#087443]/10 py-5">
                      <div className="pr-3">
                        <p className="font-display text-lg font-bold text-[#063B25]">
                          {state.members}
                        </p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#087443]/45">
                          Members
                        </p>
                      </div>

                      <div className="px-3">
                        <p className="font-display text-lg font-bold text-[#063B25]">
                          {state.lgas}
                        </p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#087443]/45">
                          LGAs
                        </p>
                      </div>

                      <div className="pl-3">
                        <p className="font-display text-lg font-bold text-[#063B25]">
                          {state.wards}
                        </p>
                        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#087443]/45">
                          Wards
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#063B25] transition-colors group-hover:text-[#C62828]"
                    >
                      Explore chapter
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowIcon />
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-[#087443]/20 bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F4FAF6] text-[#087443]">
                <SearchIcon />
              </div>

              <p className="mt-5 font-display text-xl font-bold text-[#063B25]">
                No chapters found
              </p>

              <p className="mt-2 text-sm text-[#087443]/60">
                Try another state or clear your current search.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-sm font-bold text-[#C62828] hover:text-[#9E1F1F]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LOCAL PARTICIPATION */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#C62828]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#063B25] p-8 shadow-2xl shadow-[#063B25]/10 sm:p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/5" />
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#C62828]/20" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#C62828]">
                    <ChapterIcon />
                  </div>

                  <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-[#C62828]">
                    Local participation
                  </p>

                  <h2 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Your community is part of the structure.
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                    Members should know where they belong, who coordinates
                    their local structure and how they can participate.
                    Registration connects members with their relevant
                    geographic chapter.
                  </p>

                  <Link
                    to="/join"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C62828] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#E53935]"
                  >
                    Register as a member
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SectionTitle
                eyebrow="From membership to action"
                title="Turning organisation into participation."
                description="Chapters provide the practical structure for meetings, volunteering, community listening, mobilisation, training and member participation."
              />

              <div className="mt-8">
                {[
                  'Community meetings and listening sessions',
                  'Volunteer and mobilisation activities',
                  'Leadership and civic training',
                  'Member communication and support',
                  'Local issue reporting and feedback',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-4 border-b border-[#087443]/10 py-4 first:border-t"
                  >
                    <span className="font-display text-sm font-bold text-[#C62828]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="flex-1 text-sm font-semibold text-[#063B25]">
                      {item}
                    </p>

                    <span className="text-[#087443]/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#C62828]">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#F4FAF6] px-7 py-14 text-center sm:px-16 sm:py-16">
          <div className="absolute left-0 top-0 h-1.5 w-1/3 bg-[#C62828]" />
          <div className="absolute left-1/3 top-0 h-1.5 w-1/3 bg-white" />
          <div className="absolute right-0 top-0 h-1.5 w-1/3 bg-[#087443]" />

          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#087443]/10" />
          <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full border border-[#C62828]/10" />

          <div className="relative">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#C62828]">
              Join the structure
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#063B25] sm:text-5xl">
              Start at your level. Grow with the organisation.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#087443]/70">
              Register your membership and connect with the chapter closest to
              your community.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/join" className="btn-primary">
                Join Iconicparty
                <ArrowIcon />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#063B25]/20 bg-white px-6 py-3 text-sm font-bold text-[#063B25] transition duration-300 hover:border-[#063B25] hover:bg-[#063B25] hover:text-white"
              >
                Contact the party
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

