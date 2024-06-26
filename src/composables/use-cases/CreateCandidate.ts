import { inject } from 'vue';
import { TYPES } from '@core/config/types';
import CreateCandidate from '@core/modules/vacancies/application/CreateCandidate';

export default function useCreateCandidate() {
  const inversifyContainer = inject('inversifyContainer');

  const createCandidate = inversifyContainer.get<CreateCandidate>(TYPES.CreateCandidate);

  if (!createCandidate) {
    throw new Error('CreateCandidate not found');
  }

  return { createCandidate };
}
