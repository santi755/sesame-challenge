import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { Menu } from '@src/types/menu';

export const useMenuStore = defineStore('menu', () => {
  const menu = ref<Menu[]>([
    {
      name: 'administrador',
      showItems: true,
      items: [
        {
          name: 'talento',
          icon: 'StarIcon',
          showItems: true,
          items: [
            {
              name: 'Reclutamiento',
              to: '/',
              active: true // Aux prop to know which item is active
            },
            {
              name: 'OnBoarding',
              to: '/on-boarding',
              active: false // Aux prop to know which item is active
            }
          ]
        }
      ]
    }
  ]);

  return { menu };
});
