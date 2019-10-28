// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import userInfoFilters from './filtres/userInfo';
import baseCss from '../static/css/base.css';
import fontCss from '../static/fonts/font.css';
import store from '../src/store/index';
// 用于在某些条件下隐藏元素
Object.keys(userInfoFilters).forEach(k => Vue.filter(k, userInfoFilters[k]));
Vue.config.productionTip = false;
Vue.use(baseCss);
Vue.use(fontCss);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');
