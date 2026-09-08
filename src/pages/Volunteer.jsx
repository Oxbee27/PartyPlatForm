import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const volunteerAreas = [
  {
    number: '01',
    title: 'Community organising',
    description:
      'Help coordinate activities, listen to residents and connect the party with communities at the grassroots.',
  },
  {
    number: '02',
    title: 'Digital & communications',
    description:
      'Support digital campaigns, content production, social media, storytelling and responsible public communication.',
  },
  {
    number: '03',
    title: 'Events & mobilisation',
    description:
      'Help organise meetings, town halls, congresses and other activities across your local area.',
  },
  {
    number: '04',
    title: 'Research & policy',
    description:
      'Contribute ideas, research and evidence that can help shape practical policy proposals.',
  },
  {
    number: '05',
    title: 'Youth engagement',
    description:
      'Help create meaningful opportunities for young people to participate in civic and political activities.',
  },
  {
    number: '06',
    title: 'Women & inclusion',
    description:
      'Support initiatives that broaden participation and ensure different voices are represented.',
  },
];

const availabilityOptions = [
  'Weekdays',
  'Weekends',
  'Evenings',
  'Flexible',
];

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    lga: '',
    area: '',
    availability: '',
    message: '',
    consent: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.consent) {
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <PageHeader
          eyebrow="Volunteer"
          title="Thank you for stepping forward."
          description="Your willingness to contribute is an important part of building an organisation that is active in every community."
        />

        <section className="mx-auto max-w-4xl px-5 py-20 sm:py-28">
          <div className="rounded-[2rem] border border-forest-100 bg-white p-8 text-center shadow-sm sm:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-100 text-2xl font-bold text-forest-700">
              ✓
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">
              Application received
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-forest-800 sm:text-4xl">
              We have received your volunteer interest.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-forest-600">
              Our local organising team can review your information and connect
              you with opportunities that match your interests and availability.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/events" className="btn-primary">
                Explore events
              </Link>

              <Link to="/" className="btn-outline">
                Return home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="Volunteer with Iconicparty"
        title="Politics needs people who are willing to serve."
        description="Give your time, skills and ideas to help strengthen our communities and build a more organised movement."
      />

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Why volunteer"
              title="Turn participation into practical action."
              description="Volunteering is more than attending meetings. It is an opportunity to help organise communities, support members, contribute ideas and make the party more responsive."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-gold-500 pl-5">
                <p className="font-display text-xl font-semibold text-forest-800">
                  Your skills matter
                </p>

                <p className="mt-2 text-sm leading-6 text-forest-600">
                  Whether you are a communicator, organiser, researcher,
                  designer or community advocate, there is a place to
                  contribute.
                </p>
              </div>

              <div className="border-l-2 border-forest-700 pl-5">
                <p className="font-display text-xl font-semibold text-forest-800">
                  Start locally
                </p>

                <p className="mt-2 text-sm leading-6 text-forest-600">
                  Meaningful political participation begins with understanding
                  the people and communities around you.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-forest-800 p-8 text-paper sm:p-10">
              <div className="absolute right-8 top-8 h-24 w-24 rotate-12 border border-gold-300/30" />

              <div className="absolute right-20 top-20 h-7 w-7 rounded-full bg-gold-500" />

              <div className="absolute bottom-10 left-10 h-16 w-16 border border-white/10" />

              <div className="absolute bottom-16 right-12 h-2 w-2 rounded-full bg-mint-300" />

              <div className="relative flex min-h-[300px] flex-col justify-end">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                  Service
                </p>

                <h2 className="mt-3 max-w-sm font-display text-3xl font-semibold sm:text-4xl">
                  Organise. Listen. Serve. Lead.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
                  Strong organisations are built by people who consistently
                  show up and contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER AREAS */}
      <section className="border-y border-forest-100 bg-mint-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
          <SectionTitle
            eyebrow="Ways to contribute"
            title="Find where your strengths can make a difference."
            description="Choose an area that matches your interests, experience or the kind of work you would like to learn."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {volunteerAreas.map((area) => (
              <article
                key={area.number}
                className="group rounded-2xl border border-forest-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-forest-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-semibold text-forest-200">
                    {area.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-gold-500 transition-transform duration-300 group-hover:scale-150" />
                </div>

                <h3 className="mt-7 font-display text-xl font-semibold text-forest-800">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-forest-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle
              eyebrow="Get involved"
              title="Tell us how you would like to contribute."
              description="Complete the short form and indicate the type of volunteering that interests you."
            />

            <div className="mt-8 border-t border-forest-100 pt-6">
              <p className="text-sm font-semibold text-forest-800">
                Already a member?
              </p>

              <p className="mt-2 text-sm leading-6 text-forest-600">
                Sign in to your member account to manage your profile,
                activities and participation.
              </p>

              <Link
                to="/login"
                className="mt-4 inline-flex text-sm font-semibold text-forest-700 hover:text-gold-500"
              >
                Member login →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-forest-100 bg-white p-6 shadow-sm sm:p-8"
            >
              {/* PERSONAL DETAILS */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  01 — Personal details
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="field-label">
                      First name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="field-input"
                      placeholder="Your first name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="field-label">
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="field-input"
                      placeholder="Your last name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="field-label">
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="field-input"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="field-label">
                      Phone number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="field-input"
                      placeholder="+234..."
                    />
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="mt-10 border-t border-forest-100 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  02 — Location
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="state" className="field-label">
                      State
                    </label>

                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      value={form.state}
                      onChange={handleChange}
                      className="field-input"
                      placeholder="Your state"
                    />
                  </div>

                  <div>
                    <label htmlFor="lga" className="field-label">
                      LGA
                    </label>

                    <input
                      id="lga"
                      name="lga"
                      type="text"
                      required
                      value={form.lga}
                      onChange={handleChange}
                      className="field-input"
                      placeholder="Your LGA"
                    />
                  </div>
                </div>
              </div>

              {/* INTEREST */}
              <div className="mt-10 border-t border-forest-100 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  03 — Your contribution
                </p>

                <div className="mt-6">
                  <label htmlFor="area" className="field-label">
                    Preferred volunteer area
                  </label>

                  <select
                    id="area"
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    className="field-input"
                  >
                    <option value="">Select an area</option>

                    {volunteerAreas.map((area) => (
                      <option key={area.number} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="availability" className="field-label">
                    Availability
                  </label>

                  <select
                    id="availability"
                    name="availability"
                    required
                    value={form.availability}
                    onChange={handleChange}
                    className="field-input"
                  >
                    <option value="">Select availability</option>

                    {availabilityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="field-label">
                    Tell us more
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className="field-input resize-none"
                    placeholder="Tell us about your skills, experience or how you would like to help."
                  />
                </div>
              </div>

              {/* CONSENT */}
              <div className="mt-8 border-t border-forest-100 pt-8">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-forest-300 text-forest-700 focus:ring-gold-500"
                  />

                  <span className="text-sm leading-6 text-forest-600">
                    I agree that Iconicparty may use the information I provide
                    to contact me about volunteer opportunities and
                    organisational activities.
                  </span>
                </label>
              </div>

              {/* SUBMIT */}
              <div className="mt-8 flex flex-col gap-4 border-t border-forest-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-forest-400">
                  Your information should only be used for legitimate
                  organisational communication.
                </p>

                <button
                  type="submit"
                  disabled={!form.consent}
                  className="btn-primary shrink-0 disabled:cursor-not-allowed"
                >
                  Submit volunteer interest →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-forest-100 bg-forest-800">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Stay connected
              </p>

              <h2 className="mt-2 font-display text-3xl font-semibold text-paper sm:text-4xl">
                There is more than one way to participate.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                Explore upcoming events, learn about the manifesto or become a
                registered member of Iconicparty.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/join" className="btn-gold">
                Join Iconicparty
              </Link>

              <Link
                to="/events"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}