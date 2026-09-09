import { LoginForm } from '@/components/auth';
export const metadata = { title: 'Log in | 737Encyclopedia' };
export default function LoginPage() {
  return (
    <main id="main" className="wrap auth-wrap">
      <LoginForm />
    </main>
  );
}
