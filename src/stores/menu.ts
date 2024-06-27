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
              to: '/'
            },
            {
              name: 'OnBoarding',
              to: '/on-boarding'
            }
          ]
        }
      ]
    }
  ]);

  return { menu };
});
