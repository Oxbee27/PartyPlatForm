import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const financialRecords = [
  {
    title: 'Quarterly Financial Statement',
    period: 'Q2 2026',
    type: 'Financial report',
    status: 'Published',
  },
  {
    title: 'Membership Contributions Report',
    period: 'January – June 2026',
    type: 'Contribution report',
    status: 'Published',
  },
  {
    title: 'Annual Governance Report',
    period: '2025',
    type: 'Governance report',
    status: 'Published',
  },
  {
    title: 'Congress Expenditure Statement',
    period: '2026 National Congress',
    type: 'Expenditure report',
    status: 'Published',
  },
];

const accountabilityAreas = [
  {
    number: '01',
    title: 'Financial accountability',
    description:
      'Party funds should be properly recorded, authorised and reported. Members and the public deserve clear information about how resources are managed.',
  },
  {
    number: '02',
    title: 'Leadership accountability',
    description:
      'Party officers are expected to operate within their responsibilities and remain answerable to the appropriate party organs.',
  },
  {
    number: '03',
    title: 'Membership accountability',
    description:
      'Members should have accessible channels for registration, complaints, feedback and participation across every level of the organisation.',
  },
  {
    number: '04',
    title: 'Electoral accountability',
    description:
      'Candidate selection, internal processes and electoral activities should follow documented rules and established procedures.',
  },
];

const governanceSteps = [
  'Records are created and maintained.',
  'Responsible officers review and authorise activities.',
  'Reports are submitted through the appropriate party structures.',
  'Members receive relevant information through approved channels.',
  'Issues and complaints can be raised through formal mechanisms.',
];

export default function Transparency() {
  return (
    <div>
      <PageHeader
        eyebrow="Open government inside the party"
        title="Transparency & accountability"
        description="A clear view of the systems, reports and standards that help keep Iconicparty accountable to its members and the public."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionTitle
              title="Trust is built through evidence"
              description="Transparency is not simply publishing information. It is creating systems that make decisions easier to understand, review and challenge."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-forest-100 bg-forest-800 p-8 text-paper sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                    Accountability framework
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-semibold">
                    Information should be accessible.
                  </h2>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400 text-gold-300 sm:flex">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3L19 6V11C19 15.5 16.1 19.3 12 21C7.9 19.3 5 15.5 5 11V6L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-forest-100">
                Our transparency framework is designed around documented
                processes, responsible stewardship and channels through which
                members can ask questions or raise concerns.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="border-l border-gold-400 pl-4">
                  <p className="text-2xl font-semibold text-gold-300">01</p>
                  <p className="mt-1 text-xs text-forest-100">Record</p>
                </div>

                <div className="border-l border-gold-400 pl-4">
                  <p className="text-2xl font-semibold text-gold-300">02</p>
                  <p className="mt-1 text-xs text-forest-100">Review</p>
                </div>

                <div className="border-l border-gold-400 pl-4">
                  <p className="text-2xl font-semibold text-gold-300">03</p>
                  <p className="mt-1 text-xs text-forest-100">Report</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest-100 bg-mint-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Our standards"
            title="Four areas of accountability"
            description="Accountability should exist at every level of the organisation."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {accountabilityAreas.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-forest-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-forest-800">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest-800">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-forest-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Public records"
              title="Reports & disclosures"
              description="A central place for members and stakeholders to review published organisational information."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-forest-100 bg-white">
              <div className="hidden grid-cols-12 border-b border-forest-100 bg-mint-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-forest-500 sm:grid">
                <div className="col-span-6">Document</div>
                <div className="col-span-3">Period</div>
                <div className="col-span-3 text-right">Status</div>
              </div>

              {financialRecords.map((record) => (
                <div
                  key={record.title}
                  className="grid gap-3 border-b border-forest-100 px-6 py-5 last:border-b-0 sm:grid-cols-12 sm:items-center"
                >
                  <div className="sm:col-span-6">
                    <p className="font-semibold text-forest-800">
                      {record.title}
                    </p>

                    <p className="mt-1 text-xs text-forest-400">
                      {record.type}
                    </p>
                  </div>

                  <div className="text-sm text-forest-600 sm:col-span-3">
                    {record.period}
                  </div>

                  <div className="sm:col-span-3 sm:text-right">
                    <span className="inline-flex rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold text-forest-700">
                      {record.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-forest-400">
              Published records shown on this prototype represent the
              transparency structure of the platform. Production documents
              should be connected to verified party records before publication.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-forest-100 bg-forest-800">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
                How accountability works
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
                A process members can follow.
              </h2>

              <p className="mt-5 text-sm leading-7 text-forest-100">
                Good governance depends on repeatable processes rather than
                individual promises. The platform is designed to make those
                processes visible.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3">
                {governanceSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-5 border border-forest-600 bg-forest-700 px-5 py-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-forest-800">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="text-sm font-medium text-paper">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid gap-5 md:grid-cols-3">
          <Link
            to="/grievances"
            className="group rounded-2xl border border-forest-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-forest-400">
              Speak up
            </span>

            <h3 className="mt-3 font-display text-2xl font-semibold text-forest-800">
              Submit a grievance
            </h3>

            <p className="mt-3 text-sm leading-6 text-forest-600">
              Raise an issue through the formal accountability channel.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold text-forest-700">
              Submit a grievance →
            </span>
          </Link>

          <Link
            to="/manifesto"
            className="group rounded-2xl border border-forest-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-forest-400">
              Our commitments
            </span>

            <h3 className="mt-3 font-display text-2xl font-semibold text-forest-800">
              Read the manifesto
            </h3>

            <p className="mt-3 text-sm leading-6 text-forest-600">
              Explore the principles and priorities behind the party platform.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold text-forest-700">
              View manifesto →
            </span>
          </Link>

          <Link
            to="/contact"
            className="group rounded-2xl border border-forest-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-forest-300 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-forest-400">
              Questions
            </span>

            <h3 className="mt-3 font-display text-2xl font-semibold text-forest-800">
              Contact the party
            </h3>

            <p className="mt-3 text-sm leading-6 text-forest-600">
              Need clarification or information that is not available here?
            </p>

            <span className="mt-6 inline-block text-sm font-semibold text-forest-700">
              Contact us →
            </span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:pb-24">
        <div className="rounded-[2rem] border border-gold-300 bg-gold-500 px-7 py-12 text-center sm:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-800">
            Accountability belongs to everyone
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold text-forest-900 sm:text-5xl">
            Strong institutions need informed members.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-forest-800">
            Stay informed, participate in the party's structures and use the
            available channels when something needs attention.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/join" className="btn-primary">
              Join Iconicparty
            </Link>

            <Link
              to="/contact"
              className="btn-outline border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-paper"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}