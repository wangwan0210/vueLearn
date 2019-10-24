<template>
  <div>
    <div>main</div>
    <div>{{sonMsg}}</div>
    <div style="padding-bottom: 50px">{{sonMsgNext}}</div>

    <!--子组件给副组件传值两种方式1：@transfer;2:v-on:方法-->
    <FooterBar psMsg="我是父组件传的值" @transfer="getData" v-on:childByValue="childByValue"></FooterBar>
  </div>
</template>
<script>
  // 局部注册组件
  import FooterBar from './FooterBar';

  export default {
    name: 'Main',
    data() {
     return {
       sonMsg: '90',
       sonMsgNext: ''
     };
    },
    // 局部注册组件
    components: {
      FooterBar
    },
    methods: {
      getData(sonMsg) {
        this.sonMsg = sonMsg;
      },
      childByValue(value) {
        this.sonMsgNext = value;
      }
    }
  };
</script>
<style></style>
