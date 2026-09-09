'use client';
import { useEffect, useState } from 'react';
import SiteLink from '@/components/site-link';
import { supabase } from '@/lib/supabase';
import { useUser } from '@/components/use-user';

// Master switch for selling access. Set to true to reopen Stripe checkout
// once the paid content is ready.
const PURCHASES_OPEN = false;

function origin() {
  return typeof window !== 'undefined' ? window.location.origin : '';
}

// ---------------------------------------------------------------------------
// Header link: "Login" when logged out, account email when logged in.
// ---------------------------------------------------------------------------
export function HeaderAuth() {
  const { user, loading } = useUser();
  if (loading) return null;
  if (!user) {
    return (
      <SiteLink className="header-auth" href="/login">
        Login
      </SiteLink>
    );
  }
  return (
    <SiteLink className="header-auth" href="/account">
      My account
    </SiteLink>
  );
}

// ---------------------------------------------------------------------------
// Login
// ---------------------------------------------------------------------------
export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    window.location.assign('/account');
  }

  return (
    <form className="auth-card" onSubmit={submit}>
      <h1>Log in</h1>
      <p className="auth-sub">Enter your details to access your account.</p>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
      </label>
      {error && <p className="auth-error">{error}</p>}
      <button className="button" disabled={busy} type="submit">
        {busy ? 'Logging in…' : 'Log in'}
      </button>
      <div className="auth-links">
        <SiteLink href="/reset-password">Forgot your password?</SiteLink>
        <SiteLink href="/register">Create an account</SiteLink>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Register
// ---------------------------------------------------------------------------
export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: origin() + '/account' },
    });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    if (data.session) {
      window.location.assign('/account');
    } else {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="auth-card">
        <h1>Check your email</h1>
        <p className="auth-sub">
          We sent a confirmation link to <strong>{email}</strong>. Click it to
          activate your account, then log in.
        </p>
        <SiteLink className="button" href="/login">
          Go to log in
        </SiteLink>
      </div>
    );
  }

  return (
    <form className="auth-card" onSubmit={submit}>
      <h1>Create an account</h1>
      <p className="auth-sub">It only takes a moment.</p>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="new-password" />
      </label>
      {error && <p className="auth-error">{error}</p>}
      <button className="button" disabled={busy} type="submit">
        {busy ? 'Creating…' : 'Create account'}
      </button>
      <div className="auth-links">
        <SiteLink href="/login">Already have an account? Log in</SiteLink>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Reset password: request a link, and (from the email link) set a new one.
// ---------------------------------------------------------------------------
export function ResetPasswordForm() {
  const [recovery, setRecovery] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [doneReset, setDoneReset] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setRecovery(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function requestLink(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: origin() + '/reset-password',
    });
    setBusy(false);
    if (error) setError(error.message);
    else setSent(true);
  }

  async function setNewPassword(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) setError(error.message);
    else setDoneReset(true);
  }

  if (doneReset) {
    return (
      <div className="auth-card">
        <h1>Password updated</h1>
        <p className="auth-sub">Your password has been changed.</p>
        <SiteLink className="button" href="/account">
          Go to my account
        </SiteLink>
      </div>
    );
  }

  if (recovery) {
    return (
      <form className="auth-card" onSubmit={setNewPassword}>
        <h1>Set a new password</h1>
        <label>
          New password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} autoComplete="new-password" />
        </label>
        {error && <p className="auth-error">{error}</p>}
        <button className="button" disabled={busy} type="submit">
          {busy ? 'Saving…' : 'Save new password'}
        </button>
      </form>
    );
  }

  if (sent) {
    return (
      <div className="auth-card">
        <h1>Check your email</h1>
        <p className="auth-sub">
          If an account exists for <strong>{email}</strong>, a reset link is on
          its way.
        </p>
        <SiteLink className="button" href="/login">
          Back to log in
        </SiteLink>
      </div>
    );
  }

  return (
    <form className="auth-card" onSubmit={requestLink}>
      <h1>Reset your password</h1>
      <p className="auth-sub">We&rsquo;ll email you a reset link.</p>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      </label>
      {error && <p className="auth-error">{error}</p>}
      <button className="button" disabled={busy} type="submit">
        {busy ? 'Sending…' : 'Send reset link'}
      </button>
      <div className="auth-links">
        <SiteLink href="/login">Back to log in</SiteLink>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Gate for paid pages (Type Rating / Line Training)
// ---------------------------------------------------------------------------
export function RequireAccess({ children }: { children: React.ReactNode }) {
  const { user, loading, hasAccess } = useUser();

  if (loading) {
    return (
      <main id="main" className="wrap auth-wrap">
        <p className="eyebrow">Checking access…</p>
      </main>
    );
  }
  if (!user) {
    return (
      <main id="main" className="wrap auth-wrap">
        <div className="auth-card">
          <span className="pill">MEMBERS ONLY</span>
          <h1>Log in to continue</h1>
          <p className="auth-sub">
            This is part of the Type Rating and Line Training content, which
            requires an account and access.
          </p>
          <SiteLink className="button" href="/login">
            Log in
          </SiteLink>
          <div className="auth-links">
            <SiteLink href="/register">Create an account</SiteLink>
          </div>
        </div>
      </main>
    );
  }
  if (!hasAccess) {
    return (
      <main id="main" className="wrap auth-wrap">
        <div className="auth-card">
          <span className="pill">MEMBERS ONLY</span>
          <h1>{PURCHASES_OPEN ? 'Unlock full access' : 'Coming soon'}</h1>
          <p className="auth-sub">
            {PURCHASES_OPEN
              ? 'Type Rating and Line Training unlock with a one-time payment of €29.99.'
              : 'Type Rating and Line Training are being finalised and are not open for purchase yet. Please check back soon.'}
          </p>
          {PURCHASES_OPEN && (
            <SiteLink className="button" href="/account">
              Get access
            </SiteLink>
          )}
        </div>
      </main>
    );
  }
  return <>{children}</>;
}

// ---------------------------------------------------------------------------
// Account panel
// ---------------------------------------------------------------------------
export function AccountPanel() {
  const { user, loading, hasAccess } = useUser();
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get('checkout');
    if (p === 'success')
      setNotice(
        'Payment received. Your access is being activated — this can take a few seconds. Use Refresh if the badge below has not updated.',
      );
    else if (p === 'cancel') setNotice('Checkout cancelled.');
  }, []);

  if (loading) return <p className="eyebrow">Loading…</p>;

  if (!user) {
    return (
      <div className="auth-card">
        <h1>You are logged out</h1>
        <p className="auth-sub">Log in to see your account and access.</p>
        <SiteLink className="button" href="/login">
          Log in
        </SiteLink>
      </div>
    );
  }

  async function logout() {
    await supabase.auth.signOut();
    window.location.assign('/');
  }
  async function buy() {
    setErr(null);
    setBusy(true);
    const { data, error } = await supabase.functions.invoke('create-checkout', {
      method: 'POST',
    });
    setBusy(false);
    if (error || !data?.url) {
      let detail = error?.message ?? 'Could not start checkout. Please try again.';
      const ctx = (error as { context?: Response })?.context;
      if (ctx && typeof ctx.json === 'function') {
        try {
          const body = await ctx.json();
          if (body?.error) detail = String(body.error);
        } catch {
          /* ignore */
        }
      }
      setErr(detail);
      return;
    }
    window.location.assign(data.url as string);
  }

  return (
    <div className="auth-card">
      <h1>My account</h1>
      <p className="auth-sub">{user.email}</p>
      {notice && <p className="auth-notice">{notice}</p>}
      <div className={hasAccess ? 'access-badge on' : 'access-badge'}>
        {hasAccess ? 'Full access active' : 'No paid access yet'}
      </div>
      {!hasAccess && PURCHASES_OPEN && (
        <>
          <p className="auth-sub">
            Unlock all Type Rating and Line Training content with a one-time
            payment.
          </p>
          {err && <p className="auth-error">{err}</p>}
          <button className="button" disabled={busy} type="button" onClick={buy}>
            {busy ? 'Starting…' : 'Get full access — €29.99'}
          </button>
        </>
      )}
      {!hasAccess && !PURCHASES_OPEN && (
        <>
          <p className="auth-sub">
            Paid access is not open yet: the Type Rating and Line Training
            content is still being finalised. It will be available to purchase
            soon.
          </p>
          <button className="button" type="button" disabled>
            Purchases open soon
          </button>
        </>
      )}
      <div className="auth-links">
        <button className="linklike" type="button" onClick={logout}>
          Log out
        </button>
        <button
          className="linklike"
          type="button"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
        <SiteLink href="/reset-password">Change password</SiteLink>
      </div>
    </div>
  );
}
