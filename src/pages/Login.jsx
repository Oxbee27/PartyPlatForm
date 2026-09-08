
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/*
|--------------------------------------------------------------------------
| Party Logo
|--------------------------------------------------------------------------
| This logo matches the current Hero/Navbar party identity.
*/
function PartyLogo({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="Return to Iconicparty home"
      className="group inline-flex items-center gap-3"
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
        {/* Outer ring */}
        <div
          className={`absolute inset-0 rounded-full border transition-all duration-500 group-hover:scale-105 ${
            light
              ? 'border-white/20 group-hover:border-party-red/60'
              : 'border-party-green/20 group-hover:border-party-red/50'
          }`}
        />

        {/* Rotating accent ring */}
        <div className="absolute -inset-1 rotate-[25deg] rounded-full border border-transparent border-t-party-red/80 border-r-party-green/70 transition-transform duration-700 group-hover:rotate-[205deg]" />

        {/* Main logo */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-black/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-party-green bg-white">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-party-red">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Wordmark */}
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

export default function Login() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState('member');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    identifier: '',
    password: '',
  });

  /*
  |--------------------------------------------------------------------------
  | Navigation
  |--------------------------------------------------------------------------
  */
  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate('/');
  }

  /*
  |--------------------------------------------------------------------------
  | Form handlers
  |--------------------------------------------------------------------------
  */
  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    setError('');
  }

  function handleAccountType(type) {
    setAccountType(type);
    setError('');

    setForm({
      identifier: '',
      password: '',
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.identifier.trim()) {
      setError(
        accountType === 'admin'
          ? 'Please enter your administrator email.'
          : 'Please enter your membership number or email.'
      );
      return;
    }

    if (!form.password.trim()) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (accountType === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    }, 600);
  }

  return (
    <main className="min-h-screen bg-party-paper text-party-ink">
      {/* =====================================================
          TOP PARTY BRAND STRIP
      ====================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/2 bg-party-green" />
        <div className="w-1/2 bg-party-red" />
      </div>

      <div className="min-h-[calc(100vh-6px)]">
        <div className="grid min-h-[calc(100vh-6px)] lg:grid-cols-[0.92fr_1.08fr]">

          {/* =================================================
              LEFT HERO / BRAND PANEL
          ================================================== */}
          <section className="relative hidden overflow-hidden bg-party-greenDark lg:flex lg:flex-col lg:justify-between">

            {/* Decorative circle */}
            <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border-[75px] border-white/5" />

            {/* Decorative bottom circle */}
            <div className="absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full border-[80px] border-party-red/10" />

            {/* Decorative square */}
            <div className="absolute right-24 top-1/2 h-28 w-28 rotate-45 border border-white/5" />

            {/* Decorative dots */}
            <div className="absolute right-24 top-[44%] h-2 w-2 rounded-full bg-party-red" />

            <div className="absolute left-24 top-[34%] h-2 w-2 rounded-full bg-party-green" />

            {/* =================================================
                PARTY LOGO
            ================================================== */}
            <div className="relative z-10 px-10 py-9 xl:px-14 xl:py-11">
              <PartyLogo light />
            </div>

            {/* =================================================
                HERO CONTENT
            ================================================== */}
            <div className="relative z-10 px-10 pb-14 xl:px-14 xl:pb-16">

              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-party-red" />

                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                  Member platform
                </p>
              </div>

              <h1 className="max-w-xl font-display text-5xl font-black leading-[0.92] tracking-[-0.045em] text-white xl:text-7xl">
                Participate.
                <br />
                Organise.
                <br />
                <span className="text-white/45">Lead.</span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/60 xl:text-base">
                Stay connected to your party, your chapter and the communities
                where you serve. Your membership gives you a place to
                participate, contribute and help shape the future.
              </p>

              {/* =================================================
                  PARTY NETWORK STATS
              ================================================== */}
              <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-6">

                <div className="border-r border-white/10 pr-4">
                  <p className="font-display text-2xl font-black text-white xl:text-3xl">
                    36
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    States
                  </p>
                </div>

                <div className="border-r border-white/10 px-4">
                  <p className="font-display text-2xl font-black text-white xl:text-3xl">
                    774
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    LGAs
                  </p>
                </div>

                <div className="pl-4">
                  <p className="font-display text-2xl font-black text-white xl:text-3xl">
                    18k+
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                    Polling units
                  </p>
                </div>

              </div>

              {/* =================================================
                  SUPPORTING STATEMENT
              ================================================== */}
              <div className="mt-8 max-w-xl border-l-2 border-party-red pl-4">
                <p className="text-xs leading-6 text-white/40">
                  Strong organisation begins with people who show up,
                  participate and stay connected.
                </p>
              </div>

            </div>

            {/* =================================================
                LEFT FOOTER
            ================================================== */}
            <div className="relative z-10 border-t border-white/10 px-10 py-5 xl:px-14">
              <p className="text-[11px] leading-5 text-white/30">
                © 2026 Iconicparty. Building participation through organised
                citizenship.
              </p>
            </div>

          </section>

          {/* =================================================
              RIGHT LOGIN AREA
          ================================================== */}
          <section className="flex min-h-screen flex-col bg-party-paper">

            {/* =================================================
                TOP NAVIGATION
            ================================================== */}
            <div className="border-b border-party-green/10 bg-white/75 backdrop-blur-xl">
              <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">

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
                  className="inline-flex items-center gap-2 rounded-full border border-party-green/15 bg-white px-4 py-2 text-xs font-bold text-party-greenDark shadow-sm transition-all hover:-translate-y-0.5 hover:border-party-green/30"
                >
                  Home
                </Link>

              </div>
            </div>

            {/* =================================================
                LOGIN CONTENT
            ================================================== */}
            <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-16">

              <div className="w-full max-w-lg">

                {/* =================================================
                    MOBILE PARTY LOGO
                ================================================== */}
                <div className="mb-9 lg:hidden">
                  <PartyLogo />
                </div>

                {/* =================================================
                    BREADCRUMB
                ================================================== */}
                <div className="mb-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-party-green/40">

                  <Link
                    to="/"
                    className="transition-colors hover:text-party-green"
                  >
                    Home
                  </Link>

                  <span>
                    /
                  </span>

                  <span className="text-party-green">
                    Sign in
                  </span>

                </div>

                {/* =================================================
                    PAGE HEADING
                ================================================== */}
                <div>

                  <div className="mb-4 inline-flex items-center gap-3">
                    <span className="h-px w-9 bg-party-red" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-party-green">
                      Secure access
                    </p>
                  </div>

                  <h2 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-party-greenDark sm:text-5xl">
                    Welcome back.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-party-green/60">
                    Sign in to continue to your Iconicparty account and stay
                    connected to party activities, membership and community
                    participation.
                  </p>

                </div>

                {/* =================================================
                    ACCOUNT TYPE SWITCHER
                ================================================== */}
                <div className="mt-8 rounded-2xl border border-party-green/10 bg-party-greenLight/70 p-1.5">

                  <div className="grid grid-cols-2 gap-1">

                    <button
                      type="button"
                      onClick={() => handleAccountType('member')}
                      className={`rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                        accountType === 'member'
                          ? 'bg-white text-party-greenDark shadow-[0_6px_20px_rgba(6,59,37,0.08)]'
                          : 'text-party-green/55 hover:text-party-greenDark'
                      }`}
                    >
                      Member
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAccountType('admin')}
                      className={`rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                        accountType === 'admin'
                          ? 'bg-white text-party-greenDark shadow-[0_6px_20px_rgba(6,59,37,0.08)]'
                          : 'text-party-green/55 hover:text-party-greenDark'
                      }`}
                    >
                      Administrator
                    </button>

                  </div>

                </div>

                {/* =================================================
                    ACCOUNT DESCRIPTION
                ================================================== */}
                <div className="mt-4 rounded-2xl border border-party-green/10 bg-white p-4 shadow-[0_10px_30px_rgba(6,59,37,0.04)]">

                  <div className="flex gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-party-green/10 bg-party-greenLight font-display text-sm font-black text-party-greenDark">
                      {accountType === 'member' ? 'M' : 'A'}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-party-greenDark">
                        {accountType === 'member'
                          ? 'Member account'
                          : 'Administrator account'}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-party-green/55">
                        {accountType === 'member'
                          ? 'Access your membership card, events, contributions and messages.'
                          : 'Access party operations, membership, chapters, events and compliance.'}
                      </p>
                    </div>

                  </div>

                </div>

                {/* =================================================
                    LOGIN FORM
                ================================================== */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-7"
                >

                  {/* =================================================
                      IDENTIFIER
                  ================================================== */}
                  <div>

                    <label
                      htmlFor="identifier"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
                    >
                      {accountType === 'admin'
                        ? 'Administrator email'
                        : 'Membership number or email'}
                    </label>

                    <input
                      id="identifier"
                      name="identifier"
                      type="text"
                      value={form.identifier}
                      onChange={handleChange}
                      autoComplete="username"
                      placeholder={
                        accountType === 'admin'
                          ? 'admin@example.com'
                          : 'ICP-2026-004821 or email'
                      }
                      className="h-13 w-full rounded-2xl border border-party-green/15 bg-white px-4 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                    />

                  </div>

                  {/* =================================================
                      PASSWORD
                  ================================================== */}
                  <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between gap-4">

                      <label
                        htmlFor="password"
                        className="block text-xs font-bold uppercase tracking-[0.1em] text-party-greenDark"
                      >
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-xs font-semibold text-party-green/55 transition-colors hover:text-party-red"
                        onClick={() =>
                          setError(
                            'Password recovery will be connected when authentication is integrated.'
                          )
                        }
                      >
                        Forgot password?
                      </button>

                    </div>

                    <div className="relative">

                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        className="h-13 w-full rounded-2xl border border-party-green/15 bg-white px-4 pr-20 text-sm text-party-ink outline-none transition-all placeholder:text-party-green/25 focus:border-party-green focus:ring-4 focus:ring-party-green/5"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword((current) => !current)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs font-bold text-party-green/55 transition-colors hover:bg-party-greenLight hover:text-party-greenDark"
                        aria-label={
                          showPassword
                            ? 'Hide password'
                            : 'Show password'
                        }
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </button>

                    </div>

                  </div>

                  {/* =================================================
                      REMEMBER ME
                  ================================================== */}
                  <div className="mt-5">

                    <label className="inline-flex cursor-pointer items-center gap-3">

                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(event) =>
                          setRemember(event.target.checked)
                        }
                        className="h-4 w-4 rounded border-party-green/25 text-party-green focus:ring-party-green"
                      />

                      <span className="text-sm text-party-green/60">
                        Keep me signed in
                      </span>

                    </label>

                  </div>

                  {/* =================================================
                      ERROR MESSAGE
                  ================================================== */}
                  {error && (
                    <div
                      role="alert"
                      className="mt-5 rounded-2xl border border-party-red/15 bg-red-50 px-4 py-4"
                    >

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

                  {/* =================================================
                      SIGN IN BUTTON
                  ================================================== */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-7 flex h-13 w-full items-center justify-center rounded-full bg-party-greenDark px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(6,59,37,0.16)] transition-all hover:-translate-y-0.5 hover:bg-party-green disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {loading ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Signing in...
                      </>
                    ) : (
                      <>
                        {accountType === 'admin'
                          ? 'Sign in to administration'
                          : 'Sign in to my account'}

                        <span className="ml-2 text-party-red">
                          →
                        </span>
                      </>
                    )}

                  </button>

                </form>

                {/* =================================================
                    MEMBERSHIP REGISTRATION
                ================================================== */}
                {accountType === 'member' && (
                  <div className="mt-8 overflow-hidden rounded-2xl border border-party-green/10 bg-white shadow-[0_10px_30px_rgba(6,59,37,0.04)]">

                    {/* Brand accent */}
                    <div className="flex h-1 w-full">
                      <div className="w-1/2 bg-party-green" />
                      <div className="w-1/2 bg-party-red" />
                    </div>

                    <div className="p-5">

                      <div className="flex items-start justify-between gap-5">

                        <div>

                          <p className="text-sm font-bold text-party-greenDark">
                            Not a member yet?
                          </p>

                          <p className="mt-1 max-w-md text-xs leading-5 text-party-green/55">
                            Create your membership profile and connect with
                            your local chapter, events and opportunities to
                            participate.
                          </p>

                        </div>

                        <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-party-greenLight text-party-greenDark sm:flex">
                          →
                        </span>

                      </div>

                      <Link
                        to="/join"
                        className="mt-4 inline-flex items-center text-sm font-bold text-party-greenDark transition-colors hover:text-party-red"
                      >
                        Start membership registration

                        <span className="ml-2">
                          →
                        </span>
                      </Link>

                    </div>

                  </div>
                )}

                {/* =================================================
                    SECURITY NOTE
                ================================================== */}
                <div className="mt-8 border-t border-party-green/10 pt-6">

                  <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-party-greenLight text-xs font-black text-party-greenDark">
                      ✓
                    </div>

                    <p className="text-xs leading-5 text-party-green/45">
                      Your account area uses role-based access. Members can
                      access their own account information, while
                      administrative tools are restricted to authorised
                      personnel.
                    </p>

                  </div>

                </div>

                {/* =================================================
                    BOTTOM PAGE NAVIGATION
                ================================================== */}
                <div className="mt-9 flex flex-col gap-4 border-t border-party-green/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center text-sm font-semibold text-party-green/55 transition-colors hover:text-party-greenDark"
                  >
                    ← Previous page
                  </button>

                  <div className="flex flex-wrap items-center gap-4">

                    <Link
                      to="/join"
                      className="text-sm font-semibold text-party-green/55 transition-colors hover:text-party-red"
                    >
                      Join Iconicparty
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

            </div>

          </section>

        </div>
      </div>
    </main>
  );
}
