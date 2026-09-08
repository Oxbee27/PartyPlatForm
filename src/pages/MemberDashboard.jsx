
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardSimple from './DashboardSimple';
import {
  currentMember,
  memberContributions,
  memberMessages,
  events,
} from '../data/content';

const navItems = [
  { to: '/dashboard', label: 'Overview', end: true },
  { to: '/dashboard/card', label: 'Digital membership card' },
  { to: '/dashboard/events', label: 'Events' },
  { to: '/dashboard/contributions', label: 'Contributions' },
  { to: '/dashboard/messages', label: 'Messages' },
  { to: '/dashboard/profile', label: 'Profile' },
];

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
    <div className="mb-8 flex flex-col gap-4 border-b border-party-green/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={goBack}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-party-green/55 transition-colors hover:text-party-greenDark"
      >
        <span className="text-base leading-none">
          ←
        </span>
        Previous page
      </button>

      <Link
        to="/"
        className="inline-flex w-fit items-center gap-2 rounded-full border border-party-green/15 bg-white px-4 py-2 text-xs font-bold text-party-greenDark shadow-sm transition-all hover:-translate-y-0.5 hover:border-party-green/30"
      >
        Home
      </Link>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-9 bg-party-red" />

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-party-green">
            {eyebrow}
          </p>
        </div>
      )}

      <h1 className="font-display text-3xl font-black leading-[0.95] tracking-[-0.035em] text-party-greenDark sm:text-4xl">
        {title}
      </h1>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-party-green/55">
          {description}
        </p>
      )}
    </div>
  );
}

function StatCard({ label, value, note, accent = 'green' }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-party-green/10 bg-white p-5 shadow-[0_10px_30px_rgba(6,59,37,0.04)]">
      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          accent === 'red' ? 'bg-party-red' : 'bg-party-green'
        }`}
      />

      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-party-green/40">
        {label}
      </p>

      <p className="mt-3 font-display text-2xl font-black tracking-[-0.03em] text-party-greenDark">
        {value}
      </p>

      {note && (
        <p className="mt-1 text-xs leading-5 text-party-green/45">
          {note}
        </p>
      )}
    </div>
  );
}

function Overview() {
  const metrics = [
    {
      label: 'Membership status',
      value: currentMember.status,
      note: `Since ${currentMember.joined}`,
    },
    {
      label: 'Ward role',
      value: currentMember.role,
      note: currentMember.ward,
    },
    {
      label: 'Events attended',
      value: '6',
      note: '2026 participation',
    },
    {
      label: 'Total contributions',
      value: '₦8,000',
      note: 'Recorded contributions',
    },
  ];

  return (
    <div>
      <SectionHeader
        eyebrow="Member overview"
        title={`Welcome back, ${currentMember.name.split(' ')[0]}.`}
        description="Keep track of your membership, local chapter information, participation and contributions from one place."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <StatCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            note={metric.note}
            accent={index === 3 ? 'red' : 'green'}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Ward information */}
        <div className="overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

          <div className="flex items-center justify-between border-b border-party-green/10 px-6 py-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-party-green/40">
                Local structure
              </p>

              <h2 className="mt-1 font-display text-xl font-black text-party-greenDark">
                Ward & LGA information
              </h2>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-party-greenLight font-display text-sm font-black text-party-greenDark">
              01
            </div>
          </div>

          <dl className="divide-y divide-party-green/10">
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <dt className="text-sm text-party-green/50">
                State
              </dt>

              <dd className="text-right text-sm font-bold text-party-greenDark">
                {currentMember.state}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <dt className="text-sm text-party-green/50">
                LGA
              </dt>

              <dd className="text-right text-sm font-bold text-party-greenDark">
                {currentMember.lga}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <dt className="text-sm text-party-green/50">
                Ward
              </dt>

              <dd className="text-right text-sm font-bold text-party-greenDark">
                {currentMember.ward}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <dt className="text-sm text-party-green/50">
                Polling unit
              </dt>

              <dd className="text-right text-sm font-bold text-party-greenDark">
                {currentMember.pollingUnit}
              </dd>
            </div>
          </dl>

        </div>

        {/* Participation */}
        <div className="overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

          <div className="flex items-center justify-between border-b border-party-green/10 px-6 py-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-party-green/40">
                Activity
              </p>

              <h2 className="mt-1 font-display text-xl font-black text-party-greenDark">
                Participation overview
              </h2>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-party-red/10 font-display text-sm font-black text-party-red">
              02
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">

              <div className="flex gap-4">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-party-green" />

                <div>
                  <p className="text-sm font-bold text-party-greenDark">
                    Attended Ward Coordinators Training
                  </p>

                  <p className="mt-1 text-xs text-party-green/45">
                    March 2026
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-party-green" />

                <div>
                  <p className="text-sm font-bold text-party-greenDark">
                    Voted in the Bolori II ward congress
                  </p>

                  <p className="mt-1 text-xs text-party-green/45">
                    May 2026
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-party-red" />

                <div>
                  <p className="text-sm font-bold text-party-greenDark">
                    Filed and resolved one grievance
                  </p>

                  <p className="mt-1 text-xs text-party-green/45">
                    July 2026 · Resolved within 12 days
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-party-greenLight/60 p-4">
              <p className="text-xs leading-5 text-party-green/60">
                Your participation history helps maintain a clear record of
                your engagement with local party activities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function MembershipCard() {
  return (
    <div>
      <SectionHeader
        eyebrow="Digital identity"
        title="Membership card"
        description="Your digital membership identity contains the key information used to confirm your registration at party activities."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

        <div className="max-w-md">

          <div className="relative overflow-hidden rounded-[2rem] bg-party-greenDark p-6 text-white shadow-[0_22px_60px_rgba(6,59,37,0.18)]">

            {/* Decorative geometry */}
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[35px] border-white/5" />

            <div className="absolute -bottom-20 -left-12 h-40 w-40 rounded-full border-[30px] border-party-red/10" />

            <div className="relative z-10">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="font-display text-xl font-black tracking-[-0.03em]">
                    ICONIC
                    <span className="text-party-red">
                      PARTY
                    </span>
                  </p>

                  <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Nigeria • Forward Together
                  </p>
                </div>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/80">
                  {currentMember.status}
                </span>

              </div>

              <div className="mt-9 flex items-center gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white/90 bg-white font-display text-lg font-black text-party-greenDark">
                  {currentMember.photoInitials}
                </div>

                <div>
                  <p className="font-display text-xl font-black">
                    {currentMember.name}
                  </p>

                  <p className="mt-1 text-sm text-white/55">
                    {currentMember.role}
                  </p>
                </div>

              </div>

              <div className="mt-7 grid grid-cols-2 gap-y-5 border-t border-white/10 pt-5">

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Member ID
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {currentMember.memberId}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">
                    Ward
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {currentMember.ward}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">
                    LGA
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {currentMember.lga}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/35">
                    State
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {currentMember.state}
                  </p>
                </div>

              </div>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">

                <p className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Member since {currentMember.joined}
                </p>

                <div className="h-8 w-8 rounded border border-party-red/40 bg-white/5" />

              </div>

            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-party-green/50">
            Present this digital identity, or the QR-enabled physical version
            where applicable, at party events and congresses to confirm your
            registration.
          </p>

        </div>

        <div className="rounded-3xl border border-party-green/10 bg-white p-6 shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-party-green/40">
            Membership details
          </p>

          <h2 className="mt-2 font-display text-2xl font-black text-party-greenDark">
            Your registration record
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-party-greenLight/55 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/40">
                Status
              </p>

              <p className="mt-2 text-sm font-bold text-party-greenDark">
                {currentMember.status}
              </p>
            </div>

            <div className="rounded-2xl bg-party-greenLight/55 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/40">
                Member number
              </p>

              <p className="mt-2 text-sm font-bold text-party-greenDark">
                {currentMember.memberId}
              </p>
            </div>

          </div>

          <div className="mt-6 border-t border-party-green/10 pt-6">

            <p className="text-sm leading-6 text-party-green/55">
              Keep your membership information up to date and use your
              registered details consistently when participating in party
              activities.
            </p>

            <Link
              to="/dashboard/profile"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-party-greenDark px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
            >
              Update profile
              <span className="text-party-red">
                →
              </span>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

function EventsTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Party calendar"
        title="Events"
        description="Explore upcoming party activities and confirm your participation."
      />

      <div className="overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

        {events.map((event, index) => (
          <div
            key={event.title}
            className={`flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${
              index !== events.length - 1
                ? 'border-b border-party-green/10'
                : ''
            }`}
          >

            <div className="flex gap-4">

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-party-greenLight font-display font-black text-party-greenDark sm:flex">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <p className="font-display text-lg font-black text-party-greenDark">
                  {event.title}
                </p>

                <p className="mt-1 text-sm text-party-green/50">
                  {event.location}
                </p>
              </div>

            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-party-green/20 bg-white px-5 py-2.5 text-sm font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/40"
            >
              RSVP
              <span className="text-party-red">
                →
              </span>
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

function ContributionsTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Financial participation"
        title="Contributions"
        description="Review your recorded contributions and the purpose attached to each transaction."
      />

      <div className="overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

        <div className="flex items-center justify-between border-b border-party-green/10 px-5 py-5 sm:px-6">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-party-green/40">
              Contribution history
            </p>

            <p className="mt-1 text-sm text-party-green/55">
              {memberContributions.length} recorded transaction
              {memberContributions.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="rounded-full bg-party-red/10 px-3 py-1.5 text-xs font-bold text-party-redDark">
            ₦
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[680px] text-left text-sm">

            <thead className="bg-party-greenLight/50 text-party-green/50">
              <tr>
                <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em]">
                  Date
                </th>

                <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em]">
                  Purpose
                </th>

                <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em]">
                  Method
                </th>

                <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-[0.1em]">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-party-green/10">

              {memberContributions.map((contribution) => (
                <tr
                  key={
                    contribution.date +
                    contribution.purpose
                  }
                  className="transition-colors hover:bg-party-greenLight/25"
                >
                  <td className="px-5 py-4 text-party-green/55">
                    {contribution.date}
                  </td>

                  <td className="px-5 py-4 font-medium text-party-greenDark">
                    {contribution.purpose}
                  </td>

                  <td className="px-5 py-4 text-party-green/55">
                    {contribution.method}
                  </td>

                  <td className="px-5 py-4 text-right font-bold text-party-greenDark">
                    ₦{contribution.amount.toLocaleString()}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

function MessagesTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Communication"
        title="Messages"
        description="Stay up to date with party announcements, chapter communications and important member notices."
      />

      <div className="overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

        {memberMessages.map((message, index) => (
          <div
            key={message.subject}
            className={`flex items-start justify-between gap-5 p-5 sm:p-6 ${
              index !== memberMessages.length - 1
                ? 'border-b border-party-green/10'
                : ''
            } ${
              message.unread
                ? 'bg-party-greenLight/20'
                : 'bg-white'
            }`}
          >

            <div className="flex gap-4">

              <div
                className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                  message.unread
                    ? 'bg-party-red'
                    : 'bg-party-green/20'
                }`}
              />

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/40">
                  {message.from}
                  {' · '}
                  {message.date}
                </p>

                <p
                  className={`mt-2 text-sm ${
                    message.unread
                      ? 'font-bold text-party-greenDark'
                      : 'font-semibold text-party-green/70'
                  }`}
                >
                  {message.subject}
                </p>

              </div>

            </div>

            {message.unread && (
              <span className="rounded-full bg-party-red/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-party-redDark">
                New
              </span>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div>
      <SectionHeader
        eyebrow="Account settings"
        title="Profile"
        description="Review your membership details and keep your account information current."
      />

      <div className="max-w-2xl overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_16px_45px_rgba(6,59,37,0.05)]">

        <div className="flex items-center gap-4 border-b border-party-green/10 bg-party-greenLight/35 p-6">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-party-greenDark font-display text-lg font-black text-white shadow-sm">
            {currentMember.photoInitials}
          </div>

          <div>
            <p className="font-display text-xl font-black text-party-greenDark">
              {currentMember.name}
            </p>

            <p className="mt-1 text-xs text-party-green/50">
              {currentMember.role}
              {' · '}
              {currentMember.ward}
            </p>
          </div>

        </div>

        <div className="p-6 sm:p-7">

          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-party-greenDark"
              >
                Full name
              </label>

              <input
                id="fullName"
                className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                defaultValue={currentMember.name}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-party-greenDark"
              >
                Phone
              </label>

              <input
                id="phone"
                className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                defaultValue="0803 000 0000"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-party-greenDark"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                defaultValue="hauwa.bello@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="pwdStatus"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-party-greenDark"
              >
                PWD status
              </label>

              <select
                id="pwdStatus"
                className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                defaultValue={currentMember.pwd ? 'yes' : 'no'}
              >
                <option value="no">
                  No
                </option>

                <option value="yes">
                  Yes
                </option>
              </select>
            </div>

          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-party-green/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs leading-5 text-party-green/40">
              Changes are currently local to this prototype.
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-party-greenDark px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
            >
              Save changes
              <span className="text-party-red">
                →
              </span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

const tabs = {
  overview: Overview,
  card: MembershipCard,
  events: EventsTab,
  contributions: ContributionsTab,
  messages: MessagesTab,
  profile: ProfileTab,
};

export default function MemberDashboard({
  section = 'overview',
}) {
  const Section = tabs[section] || Overview;

  return (
    <DashboardLayout
      title="Member dashboard"
      navItems={navItems}
      userLabel={currentMember.name}
      roleLabel={`${currentMember.role} · ${currentMember.ward}`}
    >
      <div className="min-h-full bg-party-paper">

        {/* Top brand accent */}
        <div className="mb-6 flex h-1 w-full overflow-hidden rounded-full bg-party-greenLight">
          <div className="w-1/2 bg-party-green" />
          <div className="w-1/2 bg-party-red" />
        </div>

        <PageNavigation />

        <Section />

        {/* Bottom navigation */}
        <div className="mt-12 flex flex-col gap-4 border-t border-party-green/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.href = '/';
              }
            }}
            className="inline-flex items-center text-sm font-semibold text-party-green/50 transition-colors hover:text-party-greenDark"
          >
            ← Previous page
          </button>

          <div className="flex flex-wrap items-center gap-4">

            <Link
              to="/dashboard"
              className="text-sm font-semibold text-party-green/50 transition-colors hover:text-party-red"
            >
              Dashboard
            </Link>

            <span className="h-4 w-px bg-party-green/15" />

            <Link
              to="/"
              className="text-sm font-bold text-party-greenDark transition-colors hover:text-party-red"
            >
              Back to Home →
            </Link>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

