<template>
  <div>
    <span>{{psMsg}}</span>
    <button @click="setUser">给父组件传值</button>
  </div>
</template>
<script>
  export default {
    name: 'FooterBar',
    data() {
    return {
      mag: '儿子组件传值',
      magNext: '儿子组件另一种传值'
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
