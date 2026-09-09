import { RegisterForm } from '@/components/auth';
export const metadata = { title: 'Create an account | 737Encyclopedia' };
export default function RegisterPage() {
  return (
    <main id="main" className="wrap auth-wrap">
      <RegisterForm />
    </main>
  );
}
