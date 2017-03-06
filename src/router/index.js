import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import HotNews from '@/components/HotNews';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/hot-news',
          name: 'HotNews',
          component: HotNews,
        },
      ],
    },
  ],
});
