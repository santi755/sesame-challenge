import { faker } from '@faker-js/faker';
import { vi, describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import CandidateForm from '@src/components/patterns/candidate-form/CandidateForm.vue';
import type { CandidateFormType } from '@src/types/candidate';

// TODO: Refactor this to mock the store with a pattern (Mother, Builder, etc)
vi.mock('@src/stores/candidateStatus', () => ({
  useCandidateStatusStore: () => ({
    candidateStatus: [
      { id: '1', name: 'Active' },
      { id: '2', name: 'Inactive' }
    ]
  })
}));

describe('CandidateForm.vue', () => {
  const candidate: CandidateFormType = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    statusId: faker.string.uuid()
  };

  it('Should render correctly', () => {
    const wrapper = mount(CandidateForm, { props: { candidate } });

    expect(wrapper.exists()).toBe(true);
  });

  it('Should initialize the form with the correct values', () => {
    const wrapper = mount(CandidateForm, { props: { candidate } });

    const firstNameInput = wrapper.find('input[placeholder="Ej: Alberto"]')
      .element as HTMLInputElement;
    const lastNameInput = wrapper.find('input[placeholder="Ej: López Giménez"]')
      .element as HTMLInputElement;

    expect(firstNameInput.value).toBe(candidate.firstName);
    expect(lastNameInput.value).toBe(candidate.lastName);
  });
});
