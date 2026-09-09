import ComingSoonPage from '@/components/coming-soon-page';
import { RequireAccess } from '@/components/auth';
export const metadata={title:'Technical Exam | 737Encyclopedia'};
export default function Page(){return <RequireAccess><ComingSoonPage eyebrow="TYPE RATING" title="Technical Exam" description="System knowledge preparation for the Boeing 737 technical examination."/></RequireAccess>}
