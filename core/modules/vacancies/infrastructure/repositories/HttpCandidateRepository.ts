import { injectable } from 'inversify';
import type CandidateRepository from '@core/modules/vacancies/domain/CandidateRepository';
import type { Candidate } from '@core/modules/vacancies/domain/Candidate';

@injectable()
class HttpCandidateRepository implements CandidateRepository {
  save(candidate: Candidate): Promise<Candidate> {
    console.log('Candidate saved: ', candidate);
    throw new Error('Method not implemented.');
  }
  update(candidate: Candidate): Promise<Candidate> {
    console.log('Candidate updated: ', candidate);
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Candidate[]> {
    throw new Error('Method not implemented.');
  }
}

export default HttpCandidateRepository;
