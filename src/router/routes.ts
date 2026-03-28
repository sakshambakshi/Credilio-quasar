import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'NewsListPage', component: () => import('pages/NewsListinIndexPage.vue') },
      {
        path: '/news/:id',
        name: 'NewsSelectedPage',
        component: () => import('pages/DetailListIndexPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
