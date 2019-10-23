import Vue from 'vue';
import RouterMain from 'vue-router';
import Header from '@/components/MainModule/Header';
import FooterBar from '@/components/MainModule/FooterBar';

Vue.use(RouterMain);

export default new RouterMain({
  routes: [
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/FooterBar',
      name: 'FooterBar',
      component: FooterBar
    }
  ]
});
