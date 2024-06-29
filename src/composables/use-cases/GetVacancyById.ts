import { TYPES } from '@core/config/types';

import useInversifyContainer from '@src/composables/useInversifyContainer';
import GetVacancyById from '@core/modules/vacancies/application/GetVacancyById';

export default function useGetVacancyById() {
  const { inversifyContainer } = useInversifyContainer();

  const getVacancyById = inversifyContainer.get<GetVacancyById>(TYPES.GetVacancyById);

  if (!getVacancyById) {
    throw new Error('getVacancyById not found');
  }

  return { getVacancyById };
}
