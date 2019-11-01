<template>
  <div>
    <div style="color: #006633;font-size: 20px">父组件传过来的值{{psMsg}}</div>
    <div>我是父组件通过provide传递，子组件通过inject拿到的{{parentMsg}}</div>
    <button @click="setUser">传值给父组件</button>
    <keep-alive>
      <myHeader></myHeader>
    </keep-alive>
  </div>
</template>
<script>
  import myHeader from './Header';
  export default {
    name: 'FooterBar',
    inject: ['parentData'],
    data() {
      return {
        mag: '儿子组件传值',
        magNext: '儿子组件另一种传值',
        parentMsg: this.parentData,
        refData: '我是通过$refs获取的子组件的值'
      };
    },
    components: {
      myHeader
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
<style scoped>
  button{
    width: 90px;
    height: 50px;
    background-color: red;
    border-radius: 12px;
  }
</style>
