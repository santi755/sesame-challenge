import NotFoundException from '@core/modules/shared/application/exceptions/NotFoundException';

export default class CandidateNotFoundException extends NotFoundException {
  constructor() {
    super('Candidate not found', 'candidate_not_found');
  }
}
