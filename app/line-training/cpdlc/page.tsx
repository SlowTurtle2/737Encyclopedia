import ComingSoonPage from '@/components/coming-soon-page';
import { RequireAccess } from '@/components/auth';

export const metadata = { title: 'CPDLC | 737Encyclopedia' };

export default function Page() {
  return (
    <RequireAccess>
      <ComingSoonPage
        eyebrow="LINE TRAINING"
        title="CPDLC"
        description="Operational CPDLC principles, message handling and flight crew techniques."
      />
    </RequireAccess>
  );
}
