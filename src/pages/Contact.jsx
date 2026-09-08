
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

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

function MailIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 3.5H10L11.5 7.5L9.5 9C10.4 11.1 12.9 13.6 15 14.5L16.5 12.5L20.5 14V16.5C20.5 18.2 19.1 19.5 17.5 19.3C10.8 18.5 5.5 13.2 4.7 6.5C4.5 4.9 5.8 3.5 7.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21S19 14.9 19 9.5A7 7 0 1 0 5 9.5C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="9.5"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 7V12L15.5 14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11.5C19 16 16.2 19.8 12 21C7.8 19.8 5 16 5 11.5V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactCard({
  icon,
  label,
  title,
  children,
  accent = 'green',
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-party-green/10 bg-white p-6 shadow-[0_10px_35px_rgba(6,59,37,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:shadow-[0_20px_50px_rgba(6,59,37,0.08)]">

      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          accent === 'red'
            ? 'bg-party-red'
            : 'bg-party-green'
        }`}
      />

      <div className="flex items-start gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            accent === 'red'
              ? 'bg-party-red/10 text-party-red'
              : 'bg-party-greenLight text-party-greenDark'
          }`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-party-green/35">
            {label}
          </p>

          <h3 className="mt-2 font-display text-xl font-black text-party-greenDark">
            {title}
          </h3>

          <div className="mt-3 text-sm leading-6 text-party-green/55">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}

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
    <section className="border-b border-party-green/10 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em]">

            <Link
              to="/"
              className="text-party-green/35 transition-colors hover:text-party-red"
            >
              Home
            </Link>

            <span className="text-party-green/15">
              /
            </span>

            <span className="text-party-greenDark">
              Contact
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 rounded-full border border-party-green/15 bg-white px-4 py-2.5 text-xs font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/30 hover:bg-party-greenLight"
            >
              <span className="text-base leading-none">
                ←
              </span>

              Previous page
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-party-greenDark px-4 py-2.5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
            >
              <span>
                ⌂
              </span>

              Home
            </Link>

            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-party-red px-4 py-2.5 text-xs font-black text-white transition-all hover:-translate-y-0.5 hover:bg-party-redDark"
            >
              Join Iconicparty
              <ArrowIcon />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedCard({
  number,
  title,
  description,
  to,
}) {
  return (
    <Link
      to={to}
      className="group rounded-[2rem] border border-party-green/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-party-green/20 hover:bg-party-greenLight hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-party-greenLight font-display text-xs font-black text-party-greenDark transition-colors group-hover:bg-party-greenDark group-hover:text-white">
          {number}
        </span>

        <span className="text-party-red transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>

      </div>

      <h3 className="mt-6 font-display text-xl font-black text-party-greenDark">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-party-green/50">
        {description}
      </p>
    </Link>
  );
}

export default function Contact() {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });

  const [error, setError] = useState('');

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!form.email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!form.topic) {
      setError('Please select a topic.');
      return;
    }

    if (!form.message.trim()) {
      setError('Please enter your message.');
      return;
    }

    setSubmitted(true);
  }

  function resetForm() {
    setForm({
      name: '',
      email: '',
      topic: '',
      message: '',
    });

    setError('');
    setSubmitted(false);
  }

  /* ==========================================================
      SUCCESS STATE
  ========================================================== */
  if (submitted) {
    return (
      <div className="min-h-screen bg-party-paper text-party-ink">

        {/* Party strip */}
        <div className="flex h-1.5 w-full">
          <div className="w-1/3 bg-party-red" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-party-green" />
        </div>

        {/* Navigation */}
        <div className="border-b border-party-green/10 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">

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
              className="inline-flex items-center rounded-full bg-party-greenDark px-4 py-2 text-xs font-bold text-white transition-all hover:bg-party-green"
            >
              Home
            </Link>

          </div>
        </div>

        {/* Success content */}
        <main className="mx-auto flex min-h-[calc(100vh-100px)] max-w-4xl items-center justify-center px-5 py-14 sm:px-8">

          <div className="w-full text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-party-greenLight text-3xl font-black text-party-greenDark shadow-sm">
              ✓
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">

              <span className="h-px w-9 bg-party-red" />

              <p className="text-[10px] font-black uppercase tracking-[0.23em] text-party-green">
                Message received
              </p>

              <span className="h-px w-9 bg-party-red" />

            </div>

            <h1 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-party-greenDark sm:text-6xl">
              Thank you for
              <br />
              reaching out.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-party-green/55 sm:text-base">
              Your message has been received by the Iconicparty contact desk.
              We will use the details you provided to direct your enquiry to
              the appropriate team.
            </p>

            <div className="mx-auto mt-9 max-w-xl overflow-hidden rounded-[2rem] border border-party-green/10 bg-white text-left shadow-[0_18px_50px_rgba(6,59,37,0.06)]">

              <div className="flex h-1.5">
                <div className="w-1/3 bg-party-red" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-party-green" />
              </div>

              <div className="p-6 sm:p-7">

                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-party-green/35">
                  Enquiry details
                </p>

                <div className="mt-5 space-y-4">

                  <div className="flex justify-between gap-5 border-b border-party-green/10 pb-4">
                    <span className="text-xs text-party-green/40">
                      Name
                    </span>

                    <span className="text-right text-sm font-bold text-party-greenDark">
                      {form.name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5 border-b border-party-green/10 pb-4">
                    <span className="text-xs text-party-green/40">
                      Email
                    </span>

                    <span className="break-all text-right text-sm font-bold text-party-greenDark">
                      {form.email}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5">
                    <span className="text-xs text-party-green/40">
                      Topic
                    </span>

                    <span className="text-right text-sm font-bold text-party-greenDark">
                      {form.topic}
                    </span>
                  </div>

                </div>

              </div>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-party-greenDark px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-party-green"
              >
                Send another message
                <ArrowIcon />
              </button>

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-party-green/20 bg-white px-6 py-3.5 text-sm font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:bg-party-greenLight"
              >
                Back to Home
              </Link>

            </div>

            <div className="mt-8 flex items-center justify-center gap-4 border-t border-party-green/10 pt-6">

              <button
                type="button"
                onClick={goBack}
                className="text-sm font-semibold text-party-green/50 hover:text-party-greenDark"
              >
                ← Previous page
              </button>

              <span className="h-4 w-px bg-party-green/15" />

              <Link
                to="/join"
                className="text-sm font-semibold text-party-green/50 hover:text-party-red"
              >
                Join Iconicparty
              </Link>

            </div>

          </div>
        </main>

        <div className="flex h-1.5 w-full">
          <div className="w-1/3 bg-party-green" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-party-red" />
        </div>

      </div>
    );
  }

  /* ==========================================================
      MAIN CONTACT PAGE
  ========================================================== */
  return (
    <div className="min-h-screen bg-party-paper text-party-ink">

      {/* =====================================================
          TOP PARTY STRIP
      ====================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-party-red" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-party-green" />
      </div>

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}
      <PageHeader
        kicker="Contact"
        title="Talk to the party"
        description="General enquiries, press, membership support and other official communications."
      />

      {/* =====================================================
          PAGE NAVIGATION
      ====================================================== */}
      <PageNavigation />

      {/* =====================================================
          MAIN INTRO
      ====================================================== */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-party-green/5 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-party-red/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">

            {/* =================================================
                INTRO COLUMN
            ================================================== */}
            <div className="lg:col-span-5">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-party-red" />

                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-party-green">
                  Connect with Iconicparty
                </p>
              </div>

              <h2 className="font-display text-4xl font-black leading-[0.96] tracking-[-0.04em] text-party-greenDark sm:text-5xl">
                Good politics
                <span className="block text-party-green">
                  starts with listening.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-party-green/55 sm:text-base">
                Whether you are seeking membership support, contacting the
                press team or simply want to share an enquiry, the contact desk
                is here to direct you to the right place.
              </p>

              {/* Complaint notice */}
              <div className="mt-8 rounded-[2rem] border border-party-green/10 bg-party-greenDark p-6 text-white shadow-[0_18px_50px_rgba(6,59,37,0.12)]">

                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-party-red">
                    <ShieldIcon />
                  </div>

                  <div>

                    <p className="text-sm font-bold">
                      Need to raise a complaint?
                    </p>

                    <p className="mt-2 text-xs leading-6 text-white/50">
                      Membership disputes, grievances and primary-election
                      complaints should go through the dedicated Grievances
                      desk for proper tracking.
                    </p>

                    <Link
                      to="/grievances"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-black text-white transition-colors hover:text-party-red"
                    >
                      Visit Grievances desk
                      <ArrowIcon />
                    </Link>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                CONTACT FORM
            ================================================== */}
            <div className="lg:col-span-7">

              <div className="overflow-hidden rounded-[2rem] border border-party-green/10 bg-white shadow-[0_18px_55px_rgba(6,59,37,0.06)]">

                <div className="flex h-1.5">
                  <div className="w-1/3 bg-party-red" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-party-green" />
                </div>

                <div className="p-6 sm:p-8 lg:p-9">

                  <div>

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-party-red">
                      Send a message
                    </p>

                    <h2 className="mt-2 font-display text-2xl font-black text-party-greenDark sm:text-3xl">
                      How can we help?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-party-green/50">
                      Complete the form below and your enquiry will be directed
                      to the appropriate desk.
                    </p>

                  </div>

                  {error && (
                    <div className="mt-6 rounded-2xl border border-party-red/15 bg-red-50 px-4 py-4">

                      <div className="flex gap-3">

                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-party-red/10 text-xs font-black text-party-red">
                          !
                        </div>

                        <p className="text-sm leading-6 text-party-redDark">
                          {error}
                        </p>

                      </div>

                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-5"
                  >

                    {/* Full name */}
                    <div>

                      <label
                        htmlFor="cname"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
                      >
                        Full name
                        <span className="ml-1 text-party-red">
                          *
                        </span>
                      </label>

                      <input
                        id="cname"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                      />

                    </div>

                    {/* Email */}
                    <div>

                      <label
                        htmlFor="cemail"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
                      >
                        Email address
                        <span className="ml-1 text-party-red">
                          *
                        </span>
                      </label>

                      <input
                        id="cemail"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                      />

                    </div>

                    {/* Topic */}
                    <div>

                      <label
                        htmlFor="ctopic"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
                      >
                        Topic
                        <span className="ml-1 text-party-red">
                          *
                        </span>
                      </label>

                      <select
                        id="ctopic"
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                      >
                        <option value="">
                          Select a topic
                        </option>

                        <option value="Membership support">
                          Membership support
                        </option>

                        <option value="Press & media">
                          Press & media
                        </option>

                        <option value="Volunteering">
                          Volunteering
                        </option>

                        <option value="General enquiry">
                          General enquiry
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>

                    </div>

                    {/* Message */}
                    <div>

                      <label
                        htmlFor="cmessage"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
                      >
                        Message
                        <span className="ml-1 text-party-red">
                          *
                        </span>
                      </label>

                      <textarea
                        id="cmessage"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us how we can help..."
                        required
                        className="w-full resize-y rounded-2xl border border-party-green/15 bg-white px-4 py-3 text-sm leading-6 text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                      />

                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-party-greenDark px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(6,59,37,0.12)] transition-all hover:-translate-y-0.5 hover:bg-party-green"
                    >
                      Send message
                      <ArrowIcon />
                    </button>

                  </form>

                  <div className="mt-6 border-t border-party-green/10 pt-5">

                    <p className="text-xs leading-5 text-party-green/40">
                      Please do not submit passwords, payment information or
                      other confidential account details through this general
                      enquiry form.
                    </p>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="border-y border-party-green/10 bg-party-greenLight/35">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="mb-10">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-party-red" />

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-green">
                Contact information
              </p>
            </div>

            <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark sm:text-4xl">
              Find the right desk.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-party-green/50">
              Use the information below to reach the appropriate Iconicparty
              team.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <ContactCard
              icon={<LocationIcon />}
              label="National office"
              title="National Secretariat"
            >
              <p>
                Plot 14, Constitution Avenue, Central Business District,
                Abuja, FCT.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-party-green/45">
                <ClockIcon />
                Mon–Fri, 9:00am–5:00pm
              </div>
            </ContactCard>

            <ContactCard
              icon={<MailIcon />}
              label="Membership"
              title="Membership support"
              accent="red"
            >
              <p>
                membership@iconicparty.org.ng
              </p>

              <p className="mt-1">
                0700-ICONIC
              </p>

              <Link
                to="/join"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-party-greenDark hover:text-party-red"
              >
                Membership registration
                <ArrowIcon />
              </Link>
            </ContactCard>

            <ContactCard
              icon={<MailIcon />}
              label="Communications"
              title="Press & media"
            >
              <p>
                Contact the communications desk for press enquiries,
                statements, interviews and official media requests.
              </p>

              <a
                href="mailto:press@iconicparty.org.ng"
                className="mt-3 inline-flex items-center gap-2 font-semibold text-party-greenDark hover:text-party-red"
              >
                press@iconicparty.org.ng
                <ArrowIcon />
              </a>
            </ContactCard>

            <ContactCard
              icon={<PhoneIcon />}
              label="General enquiries"
              title="Iconicparty contact desk"
              accent="red"
            >
              <p>
                For general questions that do not belong to a dedicated
                department, use the enquiry form above.
              </p>

              <p className="mt-3 font-semibold text-party-greenDark">
                0700-ICONIC
              </p>
            </ContactCard>

          </div>

        </div>
      </section>

      {/* =====================================================
          GRIEVANCES NOTICE
      ====================================================== */}
      <section className="bg-party-paper">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="overflow-hidden rounded-[2.5rem] bg-party-greenDark p-7 shadow-[0_20px_60px_rgba(6,59,37,0.13)] sm:p-10 lg:p-12">

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

              <div className="lg:col-span-8">

                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-party-red" />

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-red">
                    Dedicated support
                  </p>
                </div>

                <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                  A grievance deserves its own process.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
                  Membership disputes, internal complaints and primary-election
                  grievances should be submitted through the dedicated
                  Grievances desk so they can be tracked and handled through
                  the appropriate process.
                </p>

              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">

                <Link
                  to="/grievances"
                  className="inline-flex items-center gap-2 rounded-full bg-party-red px-6 py-3.5 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-party-redLight"
                >
                  Open Grievances desk
                  <ArrowIcon />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          RELATED PAGES
      ====================================================== */}
      <section className="bg-party-greenLight/35">

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="border-t border-party-green/10 pt-14">

            <div className="mb-9">

              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-party-red" />

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-green">
                  Explore the platform
                </p>
              </div>

              <h2 className="mt-3 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark sm:text-4xl">
                Continue exploring Iconicparty.
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <RelatedCard
                number="01"
                title="About"
                description="Understand the party, its purpose and how the organisation works."
                to="/about"
              />

              <RelatedCard
                number="02"
                title="Manifesto"
                description="Explore the ideas and priorities behind the movement."
                to="/manifesto"
              />

              <RelatedCard
                number="03"
                title="Leadership"
                description="Meet the party leaders responsible for guiding the organisation."
                to="/leadership"
              />

              <RelatedCard
                number="04"
                title="Newsroom"
                description="Read official statements, announcements and party updates."
                to="/news"
              />

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL NAVIGATION
      ====================================================== */}
      <section className="bg-white pb-16 sm:pb-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-[2rem] bg-party-greenDark p-8 sm:p-11">

            <div className="absolute left-0 top-0 h-1.5 w-1/3 bg-party-red" />
            <div className="absolute left-1/3 top-0 h-1.5 w-1/3 bg-white" />
            <div className="absolute right-0 top-0 h-1.5 w-1/3 bg-party-green" />

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/5" />

            <div className="relative">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-party-red">
                Navigation
              </p>

              <h2 className="mt-3 max-w-2xl font-display text-3xl font-black text-white sm:text-4xl">
                Where would you like to go next?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/50">
                Return to Home, go back to the previous page or continue
                exploring another part of the Iconicparty platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white hover:text-party-greenDark"
                >
                  ← Previous page
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-party-red px-6 py-3.5 text-sm font-black text-white transition-all hover:bg-party-redLight"
                >
                  Back to Home
                </Link>

                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white/75 transition-all hover:bg-white hover:text-party-greenDark"
                >
                  Join Iconicparty
                  <ArrowIcon />
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM PARTY STRIP
      ====================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-party-green" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-party-red" />
      </div>

    </div>
  );
}
