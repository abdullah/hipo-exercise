import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/index';
import Detail from '@/components/Detail/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail/:id?',
      props: true,
      name: 'detail',
      component: Detail,
    },
  ],
});
