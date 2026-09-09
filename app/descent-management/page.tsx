import Link from '@/components/site-link';
import { RequireAccess } from '@/components/auth';

export const metadata = {
  title: 'Descent Management | 737Encyclopedia',
  description: 'Boeing 737 descent planning and management course.',
};

export default function DescentManagement() {
  return (
    <RequireAccess>
    <main id="main" className="wrap empty-page">
      <p className="eyebrow">FLIGHT OPERATIONS</p>
      <span className="pill">COMING SOON</span>
      <h1 style={{ marginTop: 24 }}>Descent Management</h1>
      <p>
        This course will cover descent planning, energy management and the use
        of the FMC during descent.
      </p>
      <Link className="button" href="/">
        Return home →
      </Link>
    </main>
    </RequireAccess>
  );
}
