import Vue from 'vue';
// 全局指令
const sexColor = Vue.directive('sexColor', {
  bind: function (el, binding, vnode) {
    let dd = binding.arg.sexTemValue;
    if (dd == '1') {
      el.style.color = 'red';
    } else {
      el.style.color = 'blue';
    }
  },
  update: function (el, binding, vnode) {
    let dd = binding.arg.sexTemValue;
    if (dd == '1') {
      el.style.color = 'red';
    } else {
      el.style.color = 'blue';
    }
  },
  inserted: function (el, binding, vnode) {
    let dd = binding.arg.sexTemValue;
    if (dd == '1') {
      el.style.color = 'red';
    } else {
      el.style.color = 'blue';
    }
  }
});
export default {sexColor};
