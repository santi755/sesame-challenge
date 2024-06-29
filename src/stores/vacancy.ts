import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';
import useGetVacancyById from '@src/composables/use-cases/GetVacancyById';
import EnvConfig from '@core/config/env/EnvConfig';

export const useVacancyStore = defineStore('vacancy', () => {
  const vacancy = ref<Vacancy | null>(null);

  const loadVacancy = async () => {
    try {
      const vacancyId = EnvConfig.get('VITE_APP_SESAME_VACANCY_ID');
      const { getVacancyById } = useGetVacancyById();
      const response = await getVacancyById.execute(vacancyId);
      vacancy.value = response.data;
    } catch (error) {
      console.log(error); // TODO: Implement error handling logic
    }
  };

  const getVacancyId = () => {
    if (!vacancy.value?.id) {
      throw new Error('Vacancy Id not found'); // TODO: Implement error handling logic
    }

    return vacancy.value?.id;
  };

  return { vacancy, loadVacancy, getVacancyId };
});
