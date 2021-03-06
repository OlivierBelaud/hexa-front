import Home from '../../view/pages/Home.vue';
import Page1 from '../../view/pages/Page1.vue';
import { counterRoutes } from '../../../counter/application/router';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  ...counterRoutes
];
