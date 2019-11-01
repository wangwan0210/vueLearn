<template>
  <div>
    <div>{{psMsg}}</div>
    <div>我是父组件通过provide传递，子组件通过inject拿到的{{parentMsg}}</div>
    <button @click="setUser">给父组件传值</button>
  </div>
</template>
<script>
  export default {
    name: 'FooterBar',
    inject: ['parentData'],
    data() {
      return {
        mag: '儿子组件传值',
        magNext: '儿子组件另一种传值',
        parentMsg: this.parentData
      };
    },
    props: ['psMsg'],
    methods: {
      setUser() {
        this.$emit('transfer', this.mag);
        this.$emit('childByValue', this.magNext);
      }
    }
  };
</script>
