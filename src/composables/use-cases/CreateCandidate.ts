import { TYPES } from '@core/config/types';

import useInversifyContainer from '@src/composables/useInversifyContainer';
import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';

export default function useCreateCandidate() {
  const { inversifyContainer } = useInversifyContainer();

  const createCandidate = inversifyContainer.get<CreateCandidate>(TYPES.CreateCandidate);

  if (!createCandidate) {
    throw new Error('CreateCandidate not found');
  }

  return { createCandidate };
}
