import { faker } from '@faker-js/faker';

import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

export default class CandidateMother {
  static random(): Candidate {
    return {
      id: faker.string.uuid(),
      updatedAt: faker.date.recent().toISOString(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      vacancyId: faker.string.uuid(),
      statusId: faker.string.uuid()
    };
  }

  static candidateId(): string {
    return faker.string.uuid();
  }
}
