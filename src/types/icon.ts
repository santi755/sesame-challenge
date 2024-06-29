import { icons } from '@src/components/atoms/icons/icons';

export type IconType = keyof typeof icons;

export interface Icon {
  icon?: IconType;
  size: number;
}
