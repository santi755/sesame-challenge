import { TYPES } from '@core/config/types';

import useInversifyContainer from '@src/composables/useInversifyContainer';
import UpdateCandidate from '@core/modules/vacancies/application/UpdateCandidate';

export default function useUpdateCandidate() {
  const { inversifyContainer } = useInversifyContainer();

  const updateCandidate = inversifyContainer.get<UpdateCandidate>(TYPES.UpdateCandidate);

  if (!updateCandidate) {
    throw new Error('updateCandidate not found');
  }

  return { updateCandidate };
}
