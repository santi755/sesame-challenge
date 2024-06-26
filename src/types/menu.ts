import { icons } from '@/components/atoms/icons/icons';

export interface SubMenuItem {
  name: string;
  active: boolean;
  to: string;
}

export interface SubMenu {
  name: string;
  icon: keyof typeof icons;
  showItems: boolean;
  items?: SubMenuItem[];
}

export interface Menu {
  name: string;
  showItems: boolean;
  items?: SubMenu[];
}
