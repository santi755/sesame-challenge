import { icons } from '@src/components/atoms/icons/icons';

export interface InputText {
  label?: string;
  placeholder: string;
  icon?: keyof typeof icons;
}

export interface SelectStandard {
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
}
