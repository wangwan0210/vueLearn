import Vue from 'vue';
import RouterTemp from 'vue-router';
import Home from '@/components/Home';
import AppointDept from '@/components/AppointDept';
import Center from '@/components/Center';

Vue.use(RouterTemp);

export default new RouterTemp({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AppointDept',
      name: 'AppointDept',
      component: AppointDept
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center
    }
  ]
});
