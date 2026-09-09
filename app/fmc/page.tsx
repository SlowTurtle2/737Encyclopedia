import { RequireAccess } from '@/components/auth';
import { FmcTrainer } from './trainer';

export const metadata = {
  title: 'FMC Trainer | 737Encyclopedia',
  description: 'Interactive flight management computer trainer for study and simulation.',
};

export default function FMC() {
  return <RequireAccess><main id="main" className="fmc-page"><FmcTrainer /></main></RequireAccess>;
}
