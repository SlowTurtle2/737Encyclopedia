import ComingSoonPage from '@/components/coming-soon-page';
import { RequireAccess } from '@/components/auth';
export const metadata={title:'Refuelling Procedure | 737Encyclopedia'};
export default function Page(){return <RequireAccess><ComingSoonPage eyebrow="LINE TRAINING" title="Refuelling Procedure" description="Operational refuelling workflow and flight crew considerations."/></RequireAccess>}
