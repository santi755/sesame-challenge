import NotFoundException from '@core/modules/shared/application/exceptions/NotFoundException';

export default class CandidateIdNotFoundException extends NotFoundException {
  constructor() {
    super('Candidate ID not found', 'candidate_id_not_found');
  }
}
