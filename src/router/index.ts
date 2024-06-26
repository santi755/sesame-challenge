import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Candidates',
    component: () => import('@src/views/CandidatesView.vue')
  },
  {
    path: '/on-boarding',
    name: 'OnBoarding',
    component: () => import('@src/views/OnBoardingView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
