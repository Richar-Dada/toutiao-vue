import Vue from 'vue';
import Router from 'vue-router';
import Nav from '../components/Nav';
import HotNews from '../components/HotNews';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '',
          name: '',
          component: HotNews,
        },
        {
          path: 'hot-news',
          name: 'HotNews',
          component: HotNews,
        },
      ],
    },
  ],
});
