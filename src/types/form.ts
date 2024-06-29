import { icons } from '@src/components/atoms/icons/icons';

export interface InputText {
  label?: string;
  placeholder: string;
  icon?: keyof typeof icons;
  modelValue: string;
}

export interface SelectStandard {
  label?: string;
  modelValue: string;
  options: {
    value: string;
    label: string;
  }[];
}
