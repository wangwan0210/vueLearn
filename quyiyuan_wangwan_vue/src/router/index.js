import Vue from 'vue';
import RouterTemp from 'vue-router';
import Home from '@/components/Home';
import Motion from '@/components/Motion';
import Culture from '@/components/Culture';
import DeliciousFood from '@/components/DeliciousFood';
import Main from '@/components/MainModule/Main';
import RouterMain from './mainChildRouter';// 路由模块管理

Vue.use(RouterTemp);

export default new RouterTemp({
  routes: [
    {
      path: '/',
      redirect: Home// 默认首页
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Motion',
      name: 'Motion',
      component: Motion
    },
    {
      path: '/Culture/:id',
      name: 'Culture/:id',
      component: Culture
    },
    {
      path: 'DeliciousFood',
      name: 'DeliciousFood',
      component: DeliciousFood
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children: [
        ...RouterMain
      ]
      // // 组件独享前置守卫
      // beforeEnter: (to, from, next) => {
      //   // ...
      // }
    }
  ]
});
// 全局前置守卫
// RouterTemp.beforeEach((to, from, next) => {
//   // ...
// });
