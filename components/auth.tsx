'use client';
import { useEffect, useState } from 'react';
import SiteLink from '@/components/site-link';
import { supabase } from '@/lib/supabase';
import { useUser } from '@/components/use-user';

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
// Account panel
// ---------------------------------------------------------------------------
export function AccountPanel() {
  const { user, loading, hasAccess } = useUser();

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

  return (
    <div className="auth-card">
      <h1>My account</h1>
      <p className="auth-sub">{user.email}</p>
      <div className={hasAccess ? 'access-badge on' : 'access-badge'}>
        {hasAccess ? 'Full access active' : 'No paid access yet'}
      </div>
      {!hasAccess && (
        <p className="auth-sub">
          Type Rating and Line Training unlock with a one-time purchase.
        </p>
      )}
      <div className="auth-links">
        <button className="linklike" type="button" onClick={logout}>
          Log out
        </button>
        <SiteLink href="/reset-password">Change password</SiteLink>
      </div>
    </div>
  );
}
