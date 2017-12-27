import Vue from 'vue';
import Router from 'vue-router';

import Page100 from '@/pages/Page100';
import Page300 from '@/pages/Page300';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Page100' },
    },
    {
      path: '/page/100',
      component: Page100,
    },
    {
      path: '/page/300',
      component: Page300,
    },
  ],
});
