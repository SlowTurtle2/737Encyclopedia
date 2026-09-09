import ComingSoonPage from '@/components/coming-soon-page';
import { RequireAccess } from '@/components/auth';
export const metadata={title:'Performance Exam | 737Encyclopedia'};
export default function Page(){return <RequireAccess><ComingSoonPage eyebrow="TYPE RATING" title="Performance Exam" description="Boeing 737 performance concepts and examination preparation."/></RequireAccess>}
