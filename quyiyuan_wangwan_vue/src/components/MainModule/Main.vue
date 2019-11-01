<template>
  <div>
    <div>main组件</div>
    <div>{{sonMsg}}</div>
    <div style="padding-bottom: 50px">{{sonMsgNext}}</div>

    <!--子组件给副组件传值两种方式1：@transfer;2:v-on:方法-->
    <FooterBar psMsg="我是父组件传的值" @transfer="getData" v-on:childByValue="childByValue"></FooterBar>
    <keep-alive>
    <myHeader></myHeader>
    </keep-alive>

    <div>我使用全局过滤器计算出工资是是{{workMoney | MoneyFormat}}</div>
  </div>
</template>
<script>
  // 局部注册组件
  import FooterBar from './FooterBar';
  import myHeader from './Header';

  export default {
    name: 'Main',
    data() {
     return {
       sonMsg: '90',
       sonMsgNext: '',
       workMoney: '100.01232'
     };
    },
    // 局部注册组件
    components: {
      FooterBar,
      myHeader
    },
    provide: {
      parentData: this.workMoney
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
