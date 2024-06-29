import type { IconType } from '@src/types/icon';

export interface CandidateStatusFrontend {
  id: string;
  name: string;
  order: number;
  color: string;
  icon: IconType;
}

export type CandidateStatusStyle = Map<string, { color: string; icon: IconType }>;
