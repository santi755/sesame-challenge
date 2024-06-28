import container from '@core/config/inversifyConfig';

export default function useInversifyContainer() {
  return { inversifyContainer: container };
}
