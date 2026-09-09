import { AccountPanel } from '@/components/auth';
export const metadata = { title: 'My account | 737Encyclopedia' };
export default function AccountPage() {
  return (
    <main id="main" className="wrap auth-wrap">
      <AccountPanel />
    </main>
  );
}
