import Vue from 'vue';
import Router from 'vue-router';
import Header from '../components/Header';
import HotNews from '../components/HotNews';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Header,
      children: [
        {
          path: '',
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
