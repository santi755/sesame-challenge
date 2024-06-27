import { TYPES } from '@core/config/types';

import useInversifyContainer from '@src/composables/useInversifyContainer';
import ListCandidateStatus from '@core/modules/vacancies/application/ListCandidateStatus';

export default function useListCandidateStatus() {
  const { inversifyContainer } = useInversifyContainer();

  const listCandidateStatus = inversifyContainer.get<ListCandidateStatus>(
    TYPES.ListCandidateStatus
  );

  if (!listCandidateStatus) {
    throw new Error('CreateCandidate not found');
  }

  return { listCandidateStatus };
}
