import { faker } from '@faker-js/faker';

import type { Vacancy } from '@core/modules/vacancies/domain/Vacancy';

export default class VacancyMother {
  static random(): Vacancy {
    return {
      id: faker.string.uuid(),
      name: faker.lorem.words()
    };
  }
}
