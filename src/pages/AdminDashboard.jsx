import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const adminNav = [
  {
    key: 'overview',
    label: 'Overview',
    path: '/admin',
    icon: '▦',
  },
  {
    key: 'membership',
    label: 'Membership',
    path: '/admin/membership',
    icon: '○',
  },
  {
    key: 'chapters',
    label: 'Chapters',
    path: '/admin/chapters',
    icon: '⌂',
  },
  {
    key: 'events',
    label: 'Events',
    path: '/admin/events',
    icon: '◫',
  },
  {
    key: 'contributions',
    label: 'Contributions',
    path: '/admin/contributions',
    icon: '₦',
  },
  {
    key: 'compliance',
    label: 'Compliance',
    path: '/admin/compliance',
    icon: '✓',
  },
];

const members = [
  {
    id: 'ICP-2026-004821',
    name: 'Moses Ugbah',
    state: 'Benue',
    lga: 'Makurdi',
    ward: 'Ward 08',
    status: 'Active',
    joined: '02 Sep 2026',
  },
  {
    id: 'ICP-2026-004820',
    name: 'Amina Yusuf',
    state: 'Kaduna',
    lga: 'Kaduna North',
    ward: 'Ward 04',
    status: 'Active',
    joined: '01 Sep 2026',
  },
  {
    id: 'ICP-2026-004819',
    name: 'Daniel Okoro',
    state: 'Rivers',
    lga: 'Obio/Akpor',
    ward: 'Ward 06',
    status: 'Pending',
    joined: '31 Aug 2026',
  },
  {
    id: 'ICP-2026-004818',
    name: 'Grace Adeyemi',
    state: 'Lagos',
    lga: 'Ikeja',
    ward: 'Ward 02',
    status: 'Active',
    joined: '30 Aug 2026',
  },
  {
    id: 'ICP-2026-004817',
    name: 'Ibrahim Musa',
    state: 'Kano',
    lga: 'Nassarawa',
    ward: 'Ward 09',
    status: 'Active',
    joined: '29 Aug 2026',
  },
];

const chapters = [
  {
    state: 'Benue',
    lgas: 23,
    members: 8420,
    status: 'Operational',
  },
  {
    state: 'Lagos',
    lgas: 20,
    members: 12740,
    status: 'Operational',
  },
  {
    state: 'Kaduna',
    lgas: 23,
    members: 9630,
    status: 'Operational',
  },
  {
    state: 'Rivers',
    lgas: 23,
    members: 7310,
    status: 'Operational',
  },
  {
    state: 'Kano',
    lgas: 44,
    members: 11280,
    status: 'Operational',
  },
];

const events = [
  {
    title: 'National Organising Summit',
    date: '17 Oct 2026',
    location: 'Abuja',
    category: 'Training',
    attendance: 620,
    status: 'Published',
  },
  {
    title: 'Community Listening Forum',
    date: '24 Oct 2026',
    location: 'Lagos',
    category: 'Community',
    attendance: 280,
    status: 'Published',
  },
  {
    title: 'Young Leaders Forum',
    date: '07 Nov 2026',
    location: 'Port Harcourt',
    category: 'Leadership',
    attendance: 410,
    status: 'Draft',
  },
];

const contributionRecords = [
  {
    reference: 'ICP-CON-20481',
    member: 'Moses Ugbah',
    purpose: 'General operations',
    amount: '₦25,000',
    date: '02 Sep 2026',
    status: 'Completed',
  },
  {
    reference: 'ICP-CON-20480',
    member: 'Amina Yusuf',
    purpose: 'Grassroots organisation',
    amount: '₦50,000',
    date: '01 Sep 2026',
    status: 'Completed',
  },
  {
    reference: 'ICP-CON-20479',
    member: 'Grace Adeyemi',
    purpose: 'Community outreach',
    amount: '₦10,000',
    date: '31 Aug 2026',
    status: 'Completed',
  },
  {
    reference: 'ICP-CON-20478',
    member: 'Ibrahim Musa',
    purpose: 'General operations',
    amount: '₦100,000',
    date: '30 Aug 2026',
    status: 'Pending',
  },
];

function StatCard({ label, value, detail, icon }) {
  return (
    <div className="rounded-2xl border border-forest-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-forest-400">
            {label}
          </p>

          <p className="mt-2 font-display text-2xl font-semibold text-forest-800">
            {value}
          </p>

          {detail && (
            <p className="mt-1 text-xs text-forest-500">
              {detail}
            </p>
          )}
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint-100 text-sm font-bold text-forest-700">
          {icon}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-500">
        {eyebrow}
      </p>

      <h1 className="mt-1 font-display text-2xl font-semibold text-forest-800 sm:text-3xl">
        {title}
      </h1>

      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-forest-500">
          {description}
        </p>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const active = status === 'Active';
  const pending = status === 'Pending';
  const published = status === 'Published';

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        active || published
          ? 'bg-mint-100 text-forest-700'
          : pending
          ? 'bg-gold-100 text-forest-800'
          : 'bg-forest-100 text-forest-600'
      }`}
    >
      {status}
    </span>
  );
}

function Overview({ navigate }) {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Administration"
        title="Party operations overview"
        description="Monitor membership, chapters, activities, contributions and organisational compliance from one control centre."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total members"
          value="86,420"
          detail="+2,840 this month"
          icon="○"
        />

        <StatCard
          label="Active chapters"
          value="312"
          detail="Across 36 states"
          icon="⌂"
        />

        <StatCard
          label="Upcoming events"
          value="18"
          detail="6 this month"
          icon="◫"
        />

        <StatCard
          label="Contributions"
          value="₦18.4m"
          detail="Current reporting period"
          icon="₦"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-500">
                Membership activity
              </p>

              <h2 className="mt-1 font-display text-xl font-semibold text-forest-800">
                Recent registrations
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigate('/admin/membership')}
              className="text-sm font-semibold text-forest-700 hover:text-gold-500"
            >
              Manage membership →
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[650px] text-left">
              <thead>
                <tr className="border-b border-forest-100">
                  <th className="pb-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                    Member
                  </th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                    Location
                  </th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                    Joined
                  </th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-forest-100">
                {members.slice(0, 5).map((member) => (
                  <tr key={member.id}>
                    <td className="py-4">
                      <p className="text-sm font-semibold text-forest-800">
                        {member.name}
                      </p>
                      <p className="mt-1 text-xs text-forest-400">
                        {member.id}
                      </p>
                    </td>

                    <td className="py-4 text-sm text-forest-600">
                      {member.state}
                    </td>

                    <td className="py-4 text-sm text-forest-600">
                      {member.joined}
                    </td>

                    <td className="py-4">
                      <StatusBadge status={member.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-forest-700 bg-forest-800 p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
            Administrative health
          </p>

          <h2 className="mt-2 font-display text-2xl font-semibold text-paper">
            Systems are operational.
          </h2>

          <div className="mt-7 space-y-5">
            <div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-forest-100">
                  Membership records
                </span>
                <span className="font-semibold text-gold-300">
                  98%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] bg-gold-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-forest-100">
                  Chapter reporting
                </span>
                <span className="font-semibold text-gold-300">
                  91%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[91%] bg-gold-500" />
              </div>
            </div>

            <div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-forest-100">
                  Compliance reviews
                </span>
                <span className="font-semibold text-gold-300">
                  87%
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] bg-gold-500" />
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/admin/compliance')}
            className="mt-8 w-full rounded-xl border border-gold-300/40 px-4 py-3 text-sm font-semibold text-gold-300 hover:bg-gold-500 hover:text-forest-800"
          >
            Open compliance centre
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          type="button"
          onClick={() => navigate('/admin/membership')}
          className="rounded-2xl border border-forest-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 font-bold text-forest-700">
            +
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold text-forest-800">
            Manage members
          </h3>

          <p className="mt-2 text-sm leading-6 text-forest-500">
            Review registrations, update membership records and monitor active
            members.
          </p>
        </button>

        <button
          type="button"
          onClick={() => navigate('/admin/events')}
          className="rounded-2xl border border-forest-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 font-bold text-forest-700">
            +
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold text-forest-800">
            Publish an event
          </h3>

          <p className="mt-2 text-sm leading-6 text-forest-500">
            Create activities, manage attendance and coordinate party events.
          </p>
        </button>

        <button
          type="button"
          onClick={() => navigate('/admin/chapters')}
          className="rounded-2xl border border-forest-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 font-bold text-forest-700">
            +
          </div>

          <h3 className="mt-5 font-display text-lg font-semibold text-forest-800">
            Review chapters
          </h3>

          <p className="mt-2 text-sm leading-6 text-forest-500">
            Monitor state, LGA, ward and polling-unit organisational structures.
          </p>
        </button>
      </div>
    </div>
  );
}

function MembershipSection() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.id.toLowerCase().includes(search.toLowerCase()) ||
      member.state.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === 'All' || member.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Membership administration"
        title="Membership"
        description="Review member registrations, chapter information and membership status."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Total members"
          value="86,420"
          detail="Registered members"
          icon="○"
        />

        <StatCard
          label="Active"
          value="82,180"
          detail="95.1% of members"
          icon="✓"
        />

        <StatCard
          label="Pending"
          value="4,240"
          detail="Awaiting review"
          icon="!"
        />
      </div>

      <div className="rounded-2xl border border-forest-100 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-forest-100 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-forest-800">
              Member directory
            </h2>

            <p className="mt-1 text-xs text-forest-400">
              Search by name, membership number or state.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search members..."
              className="field-input sm:w-64"
            />

            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="field-input sm:w-36"
            >
              <option value="All">All status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-mint-50">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Member
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  State
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  LGA
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Ward
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Joined
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-forest-100">
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-forest-800">
                      {member.name}
                    </p>

                    <p className="mt-1 text-xs text-forest-400">
                      {member.id}
                    </p>
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {member.state}
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {member.lga}
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {member.ward}
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {member.joined}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={member.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredMembers.length === 0 && (
          <div className="p-10 text-center text-sm text-forest-500">
            No members match your search.
          </div>
        )}
      </div>
    </div>
  );
}

function ChaptersSection() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Organisation"
        title="Chapters"
        description="Monitor state and local organisational structures across the party."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="States represented"
          value="36"
          detail="State structures"
          icon="N"
        />

        <StatCard
          label="LGAs"
          value="774"
          detail="Local government areas"
          icon="L"
        />

        <StatCard
          label="Polling units"
          value="18,920"
          detail="Registered structures"
          icon="P"
        />
      </div>

      <div className="rounded-2xl border border-forest-100 bg-white shadow-sm">
        <div className="border-b border-forest-100 px-6 py-5">
          <h2 className="font-display text-lg font-semibold text-forest-800">
            State chapters
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="bg-mint-50">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  State
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  LGAs
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Members
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-forest-100">
              {chapters.map((chapter) => (
                <tr key={chapter.state}>
                  <td className="px-6 py-5 text-sm font-semibold text-forest-800">
                    {chapter.state}
                  </td>

                  <td className="px-6 py-5 text-sm text-forest-600">
                    {chapter.lgas}
                  </td>

                  <td className="px-6 py-5 text-sm text-forest-600">
                    {chapter.members.toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <StatusBadge status={chapter.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-gold-200 bg-gold-50 p-7">
        <h2 className="font-display text-xl font-semibold text-forest-800">
          Organisational hierarchy
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['National', 'National Executive Council'],
            ['State', 'State Executive Committee'],
            ['LGA', 'Local Government Chapter'],
            ['Ward', 'Ward & Polling Unit'],
          ].map(([level, description]) => (
            <div
              key={level}
              className="rounded-xl border border-gold-200 bg-white p-5"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold-500">
                {level}
              </p>

              <p className="mt-2 text-sm font-semibold text-forest-800">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventsSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Programme management"
          title="Events"
          description="Create, publish and monitor party events and activities."
        />

        <button
          type="button"
          onClick={() => setShowForm((current) => !current)}
          className="rounded-full bg-forest-800 px-6 py-3 text-sm font-semibold text-paper hover:bg-forest-700"
        >
          {showForm ? 'Close form' : '+ Create event'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setShowForm(false);
          }}
          className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm sm:p-7"
        >
          <h2 className="font-display text-xl font-semibold text-forest-800">
            Create new event
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="eventTitle">
                Event title
              </label>

              <input
                id="eventTitle"
                className="field-input"
                placeholder="Enter event title"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="eventDate">
                Date
              </label>

              <input
                id="eventDate"
                type="date"
                className="field-input"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="eventLocation">
                Location
              </label>

              <input
                id="eventLocation"
                className="field-input"
                placeholder="Abuja"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="eventCategory">
                Category
              </label>

              <select id="eventCategory" className="field-input">
                <option>Training</option>
                <option>Community</option>
                <option>Leadership</option>
                <option>Campaign</option>
              </select>
            </div>

            <div>
              <label className="field-label" htmlFor="eventCapacity">
                Expected attendance
              </label>

              <input
                id="eventCapacity"
                type="number"
                className="field-input"
                placeholder="500"
              />
            </div>
          </div>

          <div className="mt-7 flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-800 hover:bg-gold-300"
            >
              Save event
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-5 lg:grid-cols-3">
        {events.map((event, index) => (
          <article
            key={event.title}
            className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 font-bold text-forest-700">
                0{index + 1}
              </div>

              <StatusBadge status={event.status} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-gold-500">
              {event.category}
            </p>

            <h2 className="mt-2 font-display text-lg font-semibold text-forest-800">
              {event.title}
            </h2>

            <div className="mt-5 space-y-2 text-sm text-forest-500">
              <p>◷ {event.date}</p>
              <p>⌂ {event.location}</p>
              <p>○ {event.attendance} expected attendees</p>
            </div>

            <div className="mt-6 border-t border-forest-100 pt-5">
              <button
                type="button"
                className="text-sm font-semibold text-forest-700 hover:text-gold-500"
              >
                Manage event →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ContributionsSection() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Financial administration"
        title="Contributions"
        description="Review contribution records, payment status and financial activity."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Total received"
          value="₦18.4m"
          detail="Current reporting period"
          icon="₦"
        />

        <StatCard
          label="Transactions"
          value="4,821"
          detail="Recorded contributions"
          icon="#"
        />

        <StatCard
          label="Pending"
          value="₦420k"
          detail="Awaiting confirmation"
          icon="!"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm">
        <div className="border-b border-forest-100 px-6 py-5">
          <h2 className="font-display text-lg font-semibold text-forest-800">
            Recent contributions
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-mint-50">
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Reference
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Member
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Purpose
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Amount
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Date
                </th>
                <th className="px-6 py-3 text-xs font-bold uppercase tracking-wide text-forest-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-forest-100">
              {contributionRecords.map((record) => (
                <tr key={record.reference}>
                  <td className="px-6 py-4 text-sm font-medium text-forest-800">
                    {record.reference}
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {record.member}
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {record.purpose}
                  </td>

                  <td className="px-6 py-4 text-sm font-semibold text-forest-800">
                    {record.amount}
                  </td>

                  <td className="px-6 py-4 text-sm text-forest-600">
                    {record.date}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={record.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-forest-800">
          Financial reporting
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-forest-500">
          The current interface is prepared for integration with a real
          payment provider and accounting backend. Once connected, transaction
          references, receipts, reconciliation and reporting can be managed
          from this area.
        </p>
      </div>
    </div>
  );
}

function ComplianceSection() {
  const checks = [
    {
      title: 'Membership records',
      description: 'Member registration and identity records',
      progress: 98,
      status: 'Healthy',
    },
    {
      title: 'Chapter reporting',
      description: 'State, LGA and ward reporting',
      progress: 91,
      status: 'Healthy',
    },
    {
      title: 'Financial records',
      description: 'Contribution and transaction records',
      progress: 94,
      status: 'Healthy',
    },
    {
      title: 'Governance documents',
      description: 'Policies, minutes and organisational records',
      progress: 87,
      status: 'Review',
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Governance"
        title="Compliance centre"
        description="Monitor organisational controls, reporting requirements and governance records."
      />

      <div className="rounded-2xl border border-forest-700 bg-forest-800 p-7 sm:p-9">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
              Overall compliance
            </p>

            <p className="mt-2 font-display text-4xl font-semibold text-paper">
              93%
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-forest-100">
              Most organisational controls are currently reporting within
              expected parameters.
            </p>
          </div>

          <span className="rounded-full border border-gold-300/40 px-4 py-2 text-sm font-semibold text-gold-300">
            Good standing
          </span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {checks.map((check) => (
          <div
            key={check.title}
            className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-semibold text-forest-800">
                  {check.title}
                </h2>

                <p className="mt-1 text-sm text-forest-500">
                  {check.description}
                </p>
              </div>

              <span className="rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold text-forest-700">
                {check.status}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs font-medium text-forest-500">
                <span>Completion</span>
                <span>{check.progress}%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-forest-100">
                <div
                  className="h-full bg-forest-700"
                  style={{ width: `${check.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gold-200 bg-gold-50 p-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-600">
          Important
        </p>

        <h2 className="mt-2 font-display text-xl font-semibold text-forest-800">
          Connect the compliance workflow before production.
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-forest-600">
          This dashboard currently demonstrates the administrative experience.
          Production deployment should connect permissions, audit logs,
          approvals, document storage and appropriate regulatory workflows.
        </p>
      </div>
    </div>
  );
}

export default function AdminDashboard({ section = 'overview' }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeItem =
    adminNav.find((item) => item.key === section) || adminNav[0];

  function renderSection() {
    switch (section) {
      case 'membership':
        return <MembershipSection />;

      case 'chapters':
        return <ChaptersSection />;

      case 'events':
        return <EventsSection />;

      case 'contributions':
        return <ContributionsSection />;

      case 'compliance':
        return <ComplianceSection />;

      case 'overview':
      default:
        return <Overview navigate={navigate} />;
    }
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 border-b border-forest-100 bg-paper">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-800 text-xs font-bold text-gold-300">
                IP
              </div>

              <div>
                <p className="font-display text-base font-semibold text-forest-800">
                  Iconicparty
                </p>

                <p className="text-[10px] uppercase tracking-widest text-forest-400">
                  Administration
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden text-sm font-medium text-forest-500 hover:text-forest-700 sm:block"
            >
              Public website
            </Link>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-xs font-bold text-gold-300">
              AD
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-forest-200 text-forest-700 lg:hidden"
              aria-label="Toggle admin navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        <aside className="hidden w-64 shrink-0 border-r border-forest-100 bg-white lg:block">
          <div className="sticky top-[61px] flex min-h-[calc(100vh-61px)] flex-col p-4">
            <div className="mb-5 rounded-2xl bg-forest-800 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                Admin account
              </p>

              <p className="mt-2 font-display text-lg font-semibold text-paper">
                Party Operations
              </p>

              <p className="mt-1 text-xs text-forest-200">
                Administrator
              </p>
            </div>

            <nav className="space-y-1">
              {adminNav.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    activeItem.key === item.key
                      ? 'bg-forest-800 text-paper'
                      : 'text-forest-600 hover:bg-mint-50 hover:text-forest-800'
                  }`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs">
                    {item.icon}
                  </span>

                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-forest-100 pt-4">
              <Link
                to="/"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-forest-500 hover:bg-mint-50 hover:text-forest-800"
              >
                ← Return to website
              </Link>

              <Link
                to="/login"
                className="mt-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-forest-500 hover:bg-mint-50 hover:text-forest-800"
              >
                ↪ Sign out
              </Link>
            </div>
          </div>
        </aside>

        {mobileOpen && (
          <div className="fixed inset-x-0 top-[61px] z-40 border-b border-forest-100 bg-white p-4 shadow-lg lg:hidden">
            <nav className="space-y-1">
              {adminNav.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                    activeItem.key === item.key
                      ? 'bg-forest-800 text-paper'
                      : 'text-forest-600 hover:bg-mint-50'
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 border-t border-forest-100 pt-3">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm font-medium text-forest-600 hover:bg-mint-50"
              >
                ← Return to website
              </Link>
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1">
          <div className="border-b border-forest-100 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-forest-400">
                  Administration
                </p>

                <p className="mt-1 text-sm text-forest-600">
                  {activeItem.label}
                </p>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <span className="h-2 w-2 rounded-full bg-forest-500" />

                <span className="text-xs font-medium text-forest-500">
                  Systems operational
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}