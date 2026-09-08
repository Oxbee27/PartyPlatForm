import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const categories = [
  'Community issue',
  'Party administration',
  'Membership',
  'Event or activity',
  'Conduct or behaviour',
  'Other',
];

const priorities = ['Normal', 'Important', 'Urgent'];

const processSteps = [
  {
    number: '01',
    title: 'Submit',
    text: 'Tell us clearly what happened and provide the relevant details.',
  },
  {
    number: '02',
    title: 'Review',
    text: 'The appropriate party office reviews your grievance objectively.',
  },
  {
    number: '03',
    title: 'Respond',
    text: 'You receive an acknowledgement and an update on the matter.',
  },
  {
    number: '04',
    title: 'Resolve',
    text: 'Where appropriate, corrective action is taken and the case is closed.',
  },
];

function generateReference() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `ICP-${new Date().getFullYear()}-${random}`;
}

function BrandMark() {
  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#087443]/30" />

      <div className="absolute -inset-1 rotate-[25deg] rounded-full border border-transparent border-t-[#C62828]/70 border-r-[#087443]/50" />

      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-black/10">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#087443] bg-white">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C62828]">
            <div className="h-2 w-2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-[#063B25]"
      >
        {label}
        {required && <span className="ml-1 text-[#C62828]">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full resize-none rounded-2xl border border-[#063B25]/10 bg-white px-4 py-3.5 text-sm text-[#12221A] outline-none transition placeholder:text-[#12221A]/35 focus:border-[#087443]/50 focus:ring-4 focus:ring-[#087443]/10"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-[#063B25]/10 bg-white px-4 py-3.5 text-sm text-[#12221A] outline-none transition placeholder:text-[#12221A]/35 focus:border-[#087443]/50 focus:ring-4 focus:ring-[#087443]/10"
        />
      )}
    </div>
  );
}

export default function Grievances() {
  const navigate = useNavigate();

  const [mode, setMode] = useState('submit');

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    priority: 'Normal',
    subject: '',
    description: '',
    location: '',
  });

  const [trackingReference, setTrackingReference] = useState('');
  const [submittedReference, setSubmittedReference] = useState('');

  const [trackingResult, setTrackingResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const reference = generateReference();

    setSubmittedReference(reference);
    setMode('tracking-result');

    setForm({
      name: '',
      email: '',
      phone: '',
      category: '',
      priority: 'Normal',
      subject: '',
      description: '',
      location: '',
    });
  };

  const handleTrack = (event) => {
    event.preventDefault();

    if (!trackingReference.trim()) {
      return;
    }

    setTrackingResult({
      reference: trackingReference.trim().toUpperCase(),
      status: 'Under review',
      submitted: 'Recently submitted',
      update:
        'Your grievance has been received and is currently being reviewed by the appropriate party office.',
    });
  };

  const resetToSubmit = () => {
    setMode('submit');
    setTrackingResult(null);
    setSubmittedReference('');
    setTrackingReference('');
  };

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-[#12221A]">
      {/* =========================================================
          HEADER
      ========================================================== */}
      <PageHeader
        eyebrow="Accountability"
        title="Grievances & Complaints"
        description="A transparent channel for members, supporters and citizens to raise concerns and receive appropriate responses."
      />

      {/* =========================================================
          TOP NAVIGATION / BACK CONTROLS
      ========================================================== */}
      <section className="border-b border-[#063B25]/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <BrandMark />

            <div>
              <p className="font-display text-lg font-black tracking-tight text-[#063B25]">
                ICONIC<span className="text-[#C62828]">PARTY</span>
              </p>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#063B25]/40">
                Accountability desk
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Previous browser page */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-[#063B25]/15 px-5 py-3 text-sm font-bold text-[#063B25] transition duration-300 hover:bg-[#063B25] hover:text-white"
            >
              <span>←</span>
              Previous page
            </button>

            {/* Directly to Hero/Home */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#C62828] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#9E1F1F]"
            >
              Back to home
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C62828]/15 bg-[#C62828]/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C62828]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C62828]">
                Speak up
              </span>
            </div>

            <h2 className="max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-[-0.035em] text-[#063B25] sm:text-5xl lg:text-6xl">
              Accountability begins with
              <span className="text-[#C62828]"> listening.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#12221A]/60">
              Every member and citizen should have a clear, respectful and
              accessible way to raise concerns. Use this desk to submit a
              grievance, report an issue or track a previously submitted case.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setMode('submit')}
                className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                  mode === 'submit' || mode === 'tracking-result'
                    ? 'bg-[#063B25] text-white'
                    : 'border border-[#063B25]/15 bg-white text-[#063B25] hover:bg-[#063B25] hover:text-white'
                }`}
              >
                Submit a grievance
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode('track');
                  setTrackingResult(null);
                }}
                className={`rounded-full px-6 py-3 text-sm font-bold transition ${
                  mode === 'track'
                    ? 'bg-[#C62828] text-white'
                    : 'border border-[#C62828]/20 bg-white text-[#C62828] hover:bg-[#C62828] hover:text-white'
                }`}
              >
                Track a grievance
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#063B25] p-8 text-white shadow-2xl shadow-[#063B25]/10 sm:p-10">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#087443]/20 blur-2xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C62828]">
                  Our commitment
                </span>

                <div className="h-2 w-2 rounded-full bg-[#C62828]" />
              </div>

              <h3 className="mt-7 max-w-md font-display text-3xl font-black leading-tight sm:text-4xl">
                Your concern deserves a response.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                We encourage good-faith reports and constructive feedback.
                Please provide enough information for the appropriate office
                to understand and investigate your concern.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-2xl font-black text-white">
                    01
                  </p>
                  <p className="mt-1 text-xs text-white/45">Submit</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-2xl font-black text-white">
                    04
                  </p>
                  <p className="mt-1 text-xs text-white/45">Resolve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="bg-[#F4FAF6] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionTitle
            eyebrow="How it works"
            title="A clear path from concern to resolution."
            description="We structure every grievance around a simple process so that concerns can be handled consistently."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-[#063B25]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#063B25]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-black text-[#C62828]">
                    {step.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#087443] transition group-hover:scale-150" />
                </div>

                <h3 className="mt-8 font-display text-xl font-black text-[#063B25]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#12221A]/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FORM / TRACKING
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        {mode === 'tracking-result' && (
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[2rem] border border-[#087443]/20 bg-[#F4FAF6] p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#087443] text-2xl text-white">
                ✓
              </div>

              <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-[#087443]">
                Grievance received
              </p>

              <h2 className="mt-3 font-display text-3xl font-black text-[#063B25] sm:text-4xl">
                Your submission has been recorded.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#12221A]/60">
                Keep your reference number safe. You can use it to track the
                progress of your grievance.
              </p>

              <div className="mt-7 rounded-2xl border border-[#063B25]/10 bg-white p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#12221A]/40">
                  Reference number
                </p>

                <p className="mt-2 font-mono text-xl font-black tracking-wider text-[#C62828]">
                  {submittedReference}
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setTrackingReference(submittedReference);
                    setMode('track');
                    setTrackingResult(null);
                  }}
                  className="rounded-full bg-[#063B25] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#064D2E]"
                >
                  Track this grievance
                </button>

                <button
                  type="button"
                  onClick={resetToSubmit}
                  className="rounded-full border border-[#063B25]/15 px-6 py-3.5 text-sm font-bold text-[#063B25] transition hover:bg-[#063B25] hover:text-white"
                >
                  Submit another
                </button>
              </div>
            </div>
          </div>
        )}

        {mode === 'track' && (
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[2rem] border border-[#063B25]/10 bg-white p-7 shadow-xl shadow-[#063B25]/5 sm:p-10">
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C62828]">
                  Track your case
                </p>

                <h2 className="mt-3 font-display text-3xl font-black text-[#063B25]">
                  Check grievance status
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#12221A]/55">
                  Enter the reference number you received after submitting
                  your grievance.
                </p>
              </div>

              <form onSubmit={handleTrack} className="space-y-5">
                <Field
                  label="Reference number"
                  name="trackingReference"
                  value={trackingReference}
                  onChange={(event) =>
                    setTrackingReference(event.target.value)
                  }
                  placeholder="e.g. ICP-2026-123456"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C62828] px-6 py-4 text-sm font-black text-white transition hover:bg-[#9E1F1F]"
                >
                  Check status
                </button>
              </form>

              {trackingResult && (
                <div className="mt-8 rounded-3xl border border-[#087443]/15 bg-[#F4FAF6] p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#12221A]/40">
                        Reference
                      </p>

                      <p className="mt-2 font-mono font-black text-[#063B25]">
                        {trackingResult.reference}
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-full bg-[#087443]/10 px-4 py-2 text-xs font-black text-[#087443]">
                      {trackingResult.status}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-[#063B25]/10 pt-5">
                    <p className="text-xs font-bold text-[#12221A]/40">
                      Latest update
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#12221A]/65">
                      {trackingResult.update}
                    </p>
                  </div>

                  <div className="mt-5 text-xs text-[#12221A]/40">
                    Submitted: {trackingResult.submitted}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={resetToSubmit}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#063B25] transition hover:text-[#C62828]"
              >
                ← Submit a grievance instead
              </button>
            </div>
          </div>
        )}

        {mode === 'submit' && (
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionTitle
                eyebrow="Submit a grievance"
                title="Tell us what happened."
                description="Please provide accurate and relevant information. This helps the appropriate office understand the issue and determine the next step."
              />

              <div className="mt-8 rounded-3xl border border-[#063B25]/10 bg-[#F4FAF6] p-6">
                <p className="text-sm font-bold text-[#063B25]">
                  Before you submit
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#12221A]/55">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C62828]" />
                    Be factual and specific about the issue.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C62828]" />
                    Include dates, locations or people involved where
                    relevant.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C62828]" />
                    Avoid submitting knowingly false or malicious reports.
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C62828]" />
                    Keep your reference number after submission.
                  </li>
                </ul>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-[#063B25]/10 bg-white p-6 shadow-xl shadow-[#063B25]/5 sm:p-8 lg:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />

                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />

                <Field
                  label="Phone number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                />

                <Field
                  label="Location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="State / LGA / Ward"
                />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-bold text-[#063B25]"
                  >
                    Category <span className="text-[#C62828]">*</span>
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-2xl border border-[#063B25]/10 bg-white px-4 py-3.5 text-sm text-[#12221A] outline-none transition focus:border-[#087443]/50 focus:ring-4 focus:ring-[#087443]/10"
                  >
                    <option value="">Select category</option>

                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="priority"
                    className="mb-2 block text-sm font-bold text-[#063B25]"
                  >
                    Priority
                  </label>

                  <select
                    id="priority"
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-[#063B25]/10 bg-white px-4 py-3.5 text-sm text-[#12221A] outline-none transition focus:border-[#087443]/50 focus:ring-4 focus:ring-[#087443]/10"
                  >
                    {priorities.map((priority) => (
                      <option key={priority} value={priority}>
                        {priority}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <Field
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Briefly describe the issue"
                  required
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Provide the relevant facts, dates, locations and other information that can help us understand the matter."
                  type="textarea"
                  required
                />
              </div>

              <div className="mt-6 rounded-2xl bg-[#F4FAF6] p-4">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-[#063B25]/20 text-[#087443] focus:ring-[#087443]"
                  />

                  <span className="text-xs leading-6 text-[#12221A]/55">
                    I confirm that the information provided is accurate to the
                    best of my knowledge and understand that false or
                    deliberately misleading submissions may be rejected.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C62828] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#C62828]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#9E1F1F]"
              >
                Submit grievance
                <span>→</span>
              </button>

              <p className="mt-4 text-center text-[11px] leading-5 text-[#12221A]/35">
                You will receive a reference number after successful
                submission.
              </p>
            </form>
          </div>
        )}
      </section>

      {/* =========================================================
          ACCOUNTABILITY
      ========================================================== */}
      <section className="bg-[#063B25] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C62828]">
                Accountability
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-black leading-tight sm:text-5xl">
                Strong institutions listen, respond and improve.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                Our grievance process is designed to provide a structured
                route for concerns while encouraging respectful participation
                and responsible party administration.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl">01</div>

                <h3 className="mt-6 font-display text-xl font-black">
                  Fair consideration
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Concerns should be assessed based on the information
                  provided and the circumstances of the case.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl">02</div>

                <h3 className="mt-6 font-display text-xl font-black">
                  Responsible action
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Where a legitimate issue is identified, the responsible
                  office should determine the appropriate response.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl">03</div>

                <h3 className="mt-6 font-display text-xl font-black">
                  Clear communication
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  We aim to make the progress and outcome of cases easier to
                  understand.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-2xl">04</div>

                <h3 className="mt-6 font-display text-xl font-black">
                  Continuous improvement
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Feedback can help identify weaknesses and improve party
                  systems and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#F4FAF6] p-8 text-center sm:p-12">
            <div className="absolute left-0 top-0 flex h-1.5 w-full">
              <div className="w-1/3 bg-[#C62828]" />
              <div className="w-1/3 bg-white" />
              <div className="w-1/3 bg-[#087443]" />
            </div>

            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#087443]">
                Need another route?
              </p>

              <h2 className="mt-4 font-display text-3xl font-black text-[#063B25] sm:text-4xl">
                We are here to help you find the right channel.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#12221A]/55">
                For general enquiries, membership questions or other support,
                you can contact the appropriate team directly.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#063B25] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-[#087443]"
                >
                  Contact support
                  <span>→</span>
                </Link>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-[#063B25]/15 px-6 py-3.5 text-sm font-bold text-[#063B25] transition duration-300 hover:bg-[#063B25] hover:text-white"
                >
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER STRIP
      ========================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#087443]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#C62828]" />
      </div>
    </div>
  );
}