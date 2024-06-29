import { TYPES } from '@core/config/types';

import useInversifyContainer from '@src/composables/useInversifyContainer';
import ListCandidatesByVacancy from '@core/modules/vacancies/application/ListCandidatesByVacancy';

export default function useListCandidatesByVacancy() {
  const { inversifyContainer } = useInversifyContainer();

  const listCandidatesByVacancy = inversifyContainer.get<ListCandidatesByVacancy>(
    TYPES.ListCandidatesByVacancy
  );

  if (!listCandidatesByVacancy) {
    throw new Error('listCandidatesByVacancy not found');
  }

  return { listCandidatesByVacancy };
}
