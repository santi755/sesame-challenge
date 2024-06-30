import { faker } from '@faker-js/faker';

import type { CandidateStatus } from '@core/modules/vacancies/domain/CandidateStatus';

export default class CandidateStatusMother {
  static random(order: number): CandidateStatus {
    return {
      id: faker.string.uuid(),
      name: faker.lorem.words(),
      order: order
    };
  }
}
