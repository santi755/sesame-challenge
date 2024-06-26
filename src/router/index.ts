import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Candidates',
    component: () => import('@/views/CandidatesView.vue')
  },
  {
    path: '/on-boarding',
    name: 'OnBoarding',
    component: () => import('@/views/OnBoardingView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
