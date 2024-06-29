import { icons } from '@src/components/atoms/icons/icons';

export interface Icon {
  icon?: keyof typeof icons;
  size: number;
}
