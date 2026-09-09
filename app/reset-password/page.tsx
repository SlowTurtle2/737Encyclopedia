import { ResetPasswordForm } from '@/components/auth';
export const metadata = { title: 'Reset password | 737Encyclopedia' };
export default function ResetPasswordPage() {
  return (
    <main id="main" className="wrap auth-wrap">
      <ResetPasswordForm />
    </main>
  );
}
