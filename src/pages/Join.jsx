
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createMember } from '../data/memberStore';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  state: '',
  lga: '',
  ward: '',
  pollingUnit: '',
  interest: '',
  volunteer: false,
  newsletter: false,
  consent: false,
};

const steps = [
  {
    number: 1,
    title: 'Personal details',
  },
  {
    number: 2,
    title: 'Your location',
  },
  {
    number: 3,
    title: 'Participation',
  },
  {
    number: 4,
    title: 'Review',
  },
];

const states = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
  'Federal Capital Territory',
];

const interests = [
  'Community development',
  'Youth engagement',
  'Women participation',
  'Policy and research',
  'Digital communications',
  'Grassroots organising',
  'Election support',
  'Fundraising',
];

function PartyLogo({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="Return to Iconicparty home"
      className="group inline-flex items-center gap-3"
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full border transition-all duration-500 group-hover:scale-105 ${
            light
              ? 'border-white/20 group-hover:border-party-red/60'
              : 'border-party-green/20 group-hover:border-party-red/50'
          }`}
        />

        <div className="absolute -inset-1 rotate-[25deg] rounded-full border border-transparent border-t-party-red/80 border-r-party-green/70 transition-transform duration-700 group-hover:rotate-[205deg]" />

        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-black/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-party-green bg-white">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-party-red">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="leading-none">
        <div
          className={`font-display text-xl font-black tracking-[-0.03em] ${
            light ? 'text-white' : 'text-party-greenDark'
          }`}
        >
          ICONIC<span className="text-party-red">PARTY</span>
        </div>

        <div
          className={`mt-1 text-[8px] font-bold uppercase tracking-[0.2em] ${
            light ? 'text-white/45' : 'text-party-green/45'
          }`}
        >
          Nigeria • Forward Together
        </div>
      </div>
    </Link>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
      >
        {label}

        {required && (
          <span className="ml-1 text-party-red">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
      >
        {label}

        {required && (
          <span className="ml-1 text-party-red">
            *
          </span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-12 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all focus:border-party-green focus:ring-4 focus:ring-party-green/5"
      >
        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function ErrorMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-1 text-xs font-medium text-party-red">
      {message}
    </p>
  );
}

export default function Join() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [membershipNumber, setMembershipNumber] = useState('');

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: '',
      form: '',
      consent: '',
    }));
  }

  function validateStep(currentStep) {
    const nextErrors = {};

    if (currentStep === 1) {
      if (!form.firstName.trim()) {
        nextErrors.firstName = 'First name is required.';
      }

      if (!form.lastName.trim()) {
        nextErrors.lastName = 'Last name is required.';
      }

      if (!form.email.trim()) {
        nextErrors.email = 'Email address is required.';
      }

      if (!form.phone.trim()) {
        nextErrors.phone = 'Phone number is required.';
      }

      if (!form.dateOfBirth) {
        nextErrors.dateOfBirth = 'Date of birth is required.';
      }

      if (!form.gender) {
        nextErrors.gender = 'Please select your gender.';
      }
    }

    if (currentStep === 2) {
      if (!form.state) {
        nextErrors.state = 'Please select your state.';
      }

      if (!form.lga.trim()) {
        nextErrors.lga = 'LGA is required.';
      }

      if (!form.ward.trim()) {
        nextErrors.ward = 'Ward is required.';
      }

      if (!form.pollingUnit.trim()) {
        nextErrors.pollingUnit = 'Polling unit is required.';
      }
    }

    if (currentStep === 3) {
      if (!form.interest) {
        nextErrors.interest = 'Please select an area of interest.';
      }
    }

    if (currentStep === 4) {
      if (!form.consent) {
        nextErrors.consent =
          'You must confirm that the information provided is accurate.';
      }
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleNext() {
    if (!validateStep(step)) {
      return;
    }

    setStep((current) => Math.min(current + 1, 4));
  }

  function handleBack() {
    setErrors({});
    setStep((current) => Math.max(current - 1, 1));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateStep(4)) {
      return;
    }

    try {
      const member = createMember(form);

      setMembershipNumber(member.membershipNumber);
      setSubmitted(true);
    } catch (error) {
      console.error('Registration failed:', error);

      setErrors({
        form: 'We could not complete your registration. Please try again.',
      });
    }
  }

  /* ==========================================================
     SUCCESS SCREEN
  ========================================================== */
  if (submitted) {
    return (
      <main className="min-h-screen bg-party-paper text-party-ink">
        <div className="flex h-1.5 w-full">
          <div className="w-1/2 bg-party-green" />
          <div className="w-1/2 bg-party-red" />
        </div>

        <div className="border-b border-party-green/10 bg-white/80">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.11em] text-party-green/55 transition-colors hover:text-party-greenDark"
            >
              <span className="text-base leading-none">
                ←
              </span>
              Previous page
            </button>

            <Link
              to="/"
              className="rounded-full border border-party-green/15 bg-white px-4 py-2 text-xs font-bold text-party-greenDark shadow-sm transition-all hover:-translate-y-0.5 hover:border-party-green/30"
            >
              Home
            </Link>
          </div>
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-86px)] max-w-4xl items-center justify-center px-5 py-12">
          <div className="w-full text-center">

            <PartyLogo />

            <div className="mx-auto mt-12 flex h-20 w-20 items-center justify-center rounded-full border border-party-green/10 bg-party-greenLight text-3xl font-black text-party-green">
              ✓
            </div>

            <div className="mt-7 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-party-red" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-party-green">
                Registration received
              </p>

              <span className="h-px w-8 bg-party-red" />
            </div>

            <h1 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-party-greenDark sm:text-6xl">
              Welcome to
              <br />
              Iconicparty.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-party-green/60 sm:text-base">
              Your membership registration has been saved. Keep your
              membership number safe because it will be used to identify
              your account.
            </p>

            <div className="mx-auto mt-9 max-w-md overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_18px_50px_rgba(6,59,37,0.06)]">

              <div className="flex h-1.5">
                <div className="w-1/2 bg-party-green" />
                <div className="w-1/2 bg-party-red" />
              </div>

              <div className="p-7">

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-party-green/50">
                  Your membership number
                </p>

                <p className="mt-4 font-mono text-2xl font-bold tracking-wide text-party-greenDark">
                  {membershipNumber}
                </p>

                <p className="mt-3 text-xs leading-5 text-party-green/45">
                  This number is stored locally in your browser for this
                  prototype.
                </p>

              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() => navigate('/login')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-party-greenDark px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(6,59,37,0.14)] transition-all hover:-translate-y-0.5 hover:bg-party-green"
              >
                Continue to member login
                <span className="text-party-red">
                  →
                </span>
              </button>

              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-party-green/20 bg-white px-6 py-3 text-sm font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/40"
              >
                Return home
              </Link>

            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 border-t border-party-green/10 pt-7 sm:flex-row">
              <button
                type="button"
                onClick={goBack}
                className="text-sm font-semibold text-party-green/50 hover:text-party-greenDark"
              >
                ← Previous page
              </button>

              <span className="hidden h-4 w-px bg-party-green/15 sm:block" />

              <Link
                to="/"
                className="text-sm font-bold text-party-greenDark hover:text-party-red"
              >
                Back to Home →
              </Link>
            </div>

          </div>
        </div>
      </main>
    );
  }

  /* ==========================================================
     REGISTRATION PAGE
  ========================================================== */
  return (
    <main className="min-h-screen bg-party-paper text-party-ink">

      {/* =====================================================
          TOP PARTY STRIP
      ====================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/2 bg-party-green" />
        <div className="w-1/2 bg-party-red" />
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="border-b border-party-green/10 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8">

          <PartyLogo />

          <Link
            to="/login"
            className="hidden rounded-full border border-party-green/15 bg-white px-4 py-2 text-xs font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/30 sm:inline-flex"
          >
            Already a member? Sign in
          </Link>

        </div>
      </header>

      {/* =====================================================
          PAGE NAVIGATION
      ====================================================== */}
      <div className="border-b border-party-green/10 bg-party-greenLight/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.11em] text-party-green/55 transition-colors hover:text-party-greenDark"
          >
            <span className="text-base leading-none">
              ←
            </span>

            Previous page
          </button>

          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-party-green/15 bg-white px-4 py-2 text-xs font-bold text-party-greenDark shadow-sm transition-all hover:-translate-y-0.5 hover:border-party-green/30"
          >
            Home
          </Link>

        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">

        {/* =================================================
            HERO INTRO
        ================================================== */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-party-red" />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-party-green">
                Membership registration
              </p>
            </div>

            <h1 className="font-display text-4xl font-black leading-[0.94] tracking-[-0.045em] text-party-greenDark sm:text-6xl">
              Become part of
              <br />
              <span className="text-party-green">
                Iconicparty.
              </span>
            </h1>

          </div>

          <div className="lg:pb-1">

            <p className="max-w-2xl text-sm leading-7 text-party-green/60 sm:text-base">
              Create your membership profile and connect with your local
              chapter, party activities and opportunities to participate.
              Membership starts with showing up and staying connected.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-party-greenLight px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-party-greenDark">
                Connect
              </span>

              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/60 ring-1 ring-party-green/10">
                Participate
              </span>

              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/60 ring-1 ring-party-green/10">
                Organise
              </span>
            </div>

          </div>

        </div>

        {/* =================================================
            MOBILE SIGN-IN
        ================================================== */}
        <div className="mt-7 sm:hidden">
          <Link
            to="/login"
            className="inline-flex w-full items-center justify-center rounded-full bg-party-greenDark px-5 py-3 text-sm font-bold text-white"
          >
            Already a member? Sign in →
          </Link>
        </div>

        {/* =================================================
            STEPS
        ================================================== */}
        <div className="mx-auto mt-10 max-w-5xl">

          <div className="grid grid-cols-4 gap-2 sm:gap-4">

            {steps.map((item) => {
              const active = step === item.number;
              const completed = step > item.number;

              return (
                <div
                  key={item.number}
                  className="relative text-center"
                >

                  {item.number < steps.length && (
                    <div
                      className={`absolute left-[calc(50%+20px)] right-[calc(-50%+20px)] top-5 hidden h-px sm:block ${
                        step > item.number
                          ? 'bg-party-green'
                          : 'bg-party-green/10'
                      }`}
                    />
                  )}

                  <div className="relative z-10 flex justify-center">

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-black transition-all ${
                        active || completed
                          ? 'bg-party-greenDark text-white shadow-lg shadow-party-greenDark/10'
                          : 'border border-party-green/15 bg-white text-party-green/40'
                      }`}
                    >
                      {completed ? '✓' : item.number}
                    </div>

                  </div>

                  <p
                    className={`mt-2 hidden text-[10px] font-bold uppercase tracking-[0.08em] sm:block ${
                      active
                        ? 'text-party-greenDark'
                        : 'text-party-green/35'
                    }`}
                  >
                    {item.title}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* =================================================
            FORM
        ================================================== */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-party-green/10 bg-white shadow-[0_18px_60px_rgba(6,59,37,0.06)]"
        >

          {/* Brand line */}
          <div className="flex h-1.5">
            <div className="w-1/2 bg-party-green" />
            <div className="w-1/2 bg-party-red" />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">

            {errors.form && (
              <div className="mb-6 rounded-2xl border border-party-red/15 bg-red-50 px-4 py-4">
                <p className="text-sm font-medium leading-6 text-party-redDark">
                  {errors.form}
                </p>
              </div>
            )}

            {/* =================================================
                STEP 1
            ================================================== */}
            {step === 1 && (
              <section>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-party-green">
                    Step 01
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark">
                    Tell us about yourself
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-party-green/55">
                    We need a few basic details to create your membership
                    profile.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div>
                    <Field
                      label="First name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required
                    />

                    <ErrorMessage message={errors.firstName} />
                  </div>

                  <div>
                    <Field
                      label="Last name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      required
                    />

                    <ErrorMessage message={errors.lastName} />
                  </div>

                  <div>
                    <Field
                      label="Email address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />

                    <ErrorMessage message={errors.email} />
                  </div>

                  <div>
                    <Field
                      label="Phone number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0800 000 0000"
                      required
                    />

                    <ErrorMessage message={errors.phone} />
                  </div>

                  <div>
                    <Field
                      label="Date of birth"
                      name="dateOfBirth"
                      type="date"
                      value={form.dateOfBirth}
                      onChange={handleChange}
                      required
                    />

                    <ErrorMessage message={errors.dateOfBirth} />
                  </div>

                  <div>
                    <SelectField
                      label="Gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      placeholder="Select gender"
                      options={[
                        'Male',
                        'Female',
                        'Prefer not to say',
                      ]}
                      required
                    />

                    <ErrorMessage message={errors.gender} />
                  </div>

                </div>

              </section>
            )}

            {/* =================================================
                STEP 2
            ================================================== */}
            {step === 2 && (
              <section>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-party-green">
                    Step 02
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark">
                    Locate your chapter
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-party-green/55">
                    Your location helps us connect you with the appropriate
                    grassroots structure.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div>
                    <SelectField
                      label="State"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="Select your state"
                      options={states}
                      required
                    />

                    <ErrorMessage message={errors.state} />
                  </div>

                  <div>
                    <Field
                      label="Local Government Area"
                      name="lga"
                      value={form.lga}
                      onChange={handleChange}
                      placeholder="Enter your LGA"
                      required
                    />

                    <ErrorMessage message={errors.lga} />
                  </div>

                  <div>
                    <Field
                      label="Ward"
                      name="ward"
                      value={form.ward}
                      onChange={handleChange}
                      placeholder="e.g. Ward 08"
                      required
                    />

                    <ErrorMessage message={errors.ward} />
                  </div>

                  <div>
                    <Field
                      label="Polling unit"
                      name="pollingUnit"
                      value={form.pollingUnit}
                      onChange={handleChange}
                      placeholder="Enter polling unit"
                      required
                    />

                    <ErrorMessage message={errors.pollingUnit} />
                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-party-green/10 bg-party-greenLight/60 p-5">

                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-display font-black text-party-greenDark shadow-sm">
                      02
                    </div>

                    <div>
                      <p className="text-sm font-bold text-party-greenDark">
                        Why do we ask for this?
                      </p>

                      <p className="mt-1 text-sm leading-6 text-party-green/55">
                        Your chapter information helps organise participation
                        at the state, LGA, ward and polling-unit levels.
                      </p>
                    </div>

                  </div>

                </div>

              </section>
            )}

            {/* =================================================
                STEP 3
            ================================================== */}
            {step === 3 && (
              <section>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-party-green">
                    Step 03
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark">
                    How would you like to participate?
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-party-green/55">
                    Tell us where your interests and skills can contribute
                    most.
                  </p>
                </div>

                <div className="mt-8">

                  <SelectField
                    label="Primary area of interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    placeholder="Select an area"
                    options={interests}
                    required
                  />

                  <ErrorMessage message={errors.interest} />

                </div>

                <div className="mt-8 space-y-4">

                  <label className="group flex cursor-pointer gap-4 rounded-2xl border border-party-green/10 bg-party-greenLight/45 p-5 transition-all hover:border-party-green/25 hover:bg-party-greenLight/70">

                    <input
                      type="checkbox"
                      name="volunteer"
                      checked={form.volunteer}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-party-green/25 text-party-green focus:ring-party-green"
                    />

                    <span>
                      <span className="block text-sm font-bold text-party-greenDark">
                        I want to volunteer
                      </span>

                      <span className="mt-1 block text-sm leading-6 text-party-green/55">
                        Contact me about opportunities to support campaigns,
                        community activities, events and organising.
                      </span>
                    </span>

                  </label>

                  <label className="group flex cursor-pointer gap-4 rounded-2xl border border-party-green/10 bg-white p-5 transition-all hover:border-party-green/25">

                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={form.newsletter}
                      onChange={handleChange}
                      className="mt-1 h-5 w-5 rounded border-party-green/25 text-party-green focus:ring-party-green"
                    />

                    <span>
                      <span className="block text-sm font-bold text-party-greenDark">
                        Send me party updates
                      </span>

                      <span className="mt-1 block text-sm leading-6 text-party-green/55">
                        Receive news, events, announcements and other relevant
                        party communications.
                      </span>
                    </span>

                  </label>

                </div>

              </section>
            )}

            {/* =================================================
                STEP 4
            ================================================== */}
            {step === 4 && (
              <section>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-party-green">
                    Step 04
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-black tracking-[-0.03em] text-party-greenDark">
                    Review your registration
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-party-green/55">
                    Check your information before creating your membership
                    profile.
                  </p>
                </div>

                <div className="mt-8 divide-y divide-party-green/10 overflow-hidden rounded-2xl border border-party-green/10">

                  {/* Personal details */}
                  <div className="p-5 sm:p-6">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-sm font-bold text-party-greenDark">
                        Personal details
                      </h3>

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-party-green/55 transition-colors hover:text-party-red"
                      >
                        Edit
                      </button>

                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Name
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.firstName} {form.lastName}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Email
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.email}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Phone
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.phone}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Gender
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.gender}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Location */}
                  <div className="p-5 sm:p-6">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-sm font-bold text-party-greenDark">
                        Chapter location
                      </h3>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs font-bold text-party-green/55 transition-colors hover:text-party-red"
                      >
                        Edit
                      </button>

                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          State
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.state}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          LGA
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.lga}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Ward
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.ward}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Polling unit
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.pollingUnit}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Participation */}
                  <div className="p-5 sm:p-6">

                    <div className="flex items-center justify-between gap-4">

                      <h3 className="text-sm font-bold text-party-greenDark">
                        Participation
                      </h3>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="text-xs font-bold text-party-green/55 transition-colors hover:text-party-red"
                      >
                        Edit
                      </button>

                    </div>

                    <div className="mt-5 space-y-4">

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-party-green/35">
                          Primary interest
                        </p>

                        <p className="mt-1 text-sm font-medium text-party-greenDark">
                          {form.interest}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">

                        {form.volunteer && (
                          <span className="rounded-full bg-party-greenLight px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-party-greenDark">
                            Volunteer
                          </span>
                        )}

                        {form.newsletter && (
                          <span className="rounded-full bg-party-red/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-party-redDark">
                            Party updates
                          </span>
                        )}

                        {!form.volunteer && !form.newsletter && (
                          <span className="text-sm text-party-green/45">
                            No additional participation preferences selected.
                          </span>
                        )}

                      </div>

                    </div>

                  </div>

                </div>

                {/* Consent */}
                <label className="mt-6 flex cursor-pointer gap-4 rounded-2xl border border-party-green/10 bg-party-greenLight/50 p-5">

                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 rounded border-party-green/25 text-party-green focus:ring-party-green"
                  />

                  <span className="text-sm leading-6 text-party-green/60">
                    I confirm that the information I have provided is accurate
                    and I consent to Iconicparty using it to create and manage
                    my membership profile.
                  </span>

                </label>

                <ErrorMessage message={errors.consent} />

              </section>
            )}

            {/* =================================================
                FORM NAVIGATION
            ================================================== */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-party-green/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex flex-wrap items-center gap-3">

                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center justify-center rounded-full border border-party-green/20 bg-white px-5 py-3 text-sm font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/40"
                  >
                    ← Back
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-full border border-party-green/20 bg-white px-5 py-3 text-sm font-bold text-party-greenDark transition-all hover:-translate-y-0.5 hover:border-party-green/40"
                  >
                    Cancel
                  </Link>
                )}

                <button
                  type="button"
                  onClick={goBack}
                  className="hidden text-sm font-semibold text-party-green/45 transition-colors hover:text-party-greenDark sm:inline-flex"
                >
                  Previous page
                </button>

              </div>

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-party-greenDark px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(6,59,37,0.14)] transition-all hover:-translate-y-0.5 hover:bg-party-green"
                >
                  Continue
                  <span className="text-party-red">
                    →
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-party-greenDark px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(6,59,37,0.14)] transition-all hover:-translate-y-0.5 hover:bg-party-green"
                >
                  Create membership
                  <span className="text-party-red">
                    →
                  </span>
                </button>
              )}

            </div>

          </div>
        </form>

        {/* =================================================
            BOTTOM NAVIGATION
        ================================================== */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 border-t border-party-green/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center text-sm font-semibold text-party-green/50 transition-colors hover:text-party-greenDark"
          >
            ← Previous page
          </button>

          <div className="flex flex-wrap items-center gap-4">

            <Link
              to="/login"
              className="text-sm font-semibold text-party-green/55 transition-colors hover:text-party-red"
            >
              Member login
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

        {/* =================================================
            FOOTNOTE
        ================================================== */}
        <div className="mx-auto mt-7 max-w-5xl pb-4 text-center">

          <p className="text-[11px] leading-5 text-party-green/35">
            This prototype stores registration information in your browser
            using local storage. Production authentication, verification,
            secure storage and backend services will be connected later.
          </p>

        </div>

      </div>
    </main>
  );
}
