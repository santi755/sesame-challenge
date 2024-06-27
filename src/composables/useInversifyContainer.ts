import { inject } from 'vue';

export default function useInversifyContainer() {
  const inversifyContainer = inject('inversifyContainer');

  if (!inversifyContainer) {
    throw new Error('inversifyContainer not found');
  }
  return { inversifyContainer };
}
