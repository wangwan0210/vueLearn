<template>
  <div>
    <div>main组件</div>
    <div>{{sonMsg}}</div>
    <div style="padding-bottom: 50px">{{sonMsgNext}}</div>
    <!--子组件给副组件传值两种方式1：@transfer;2:v-on:方法-->
    <FooterBar ref="foorBar_Ref" psMsg="我是父组件传的值" @transfer="getData" v-on:childByValue="childByValue"></FooterBar>
    <div>我使用全局过滤器计算出工资是是{{workMoney | MoneyFormat}}</div>
    <button style="background-color: #6caaff" @click="getChidFromRef"> 通过$refs获取子组件值</button>
    <div>{{parentDataRef}}</div>
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
       sonMsgNext: '',
       workMoney: '100.01232',
       parentDataRef: ''
     };
    },
    // 局部注册组件
    components: {
      FooterBar
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
      },
      getChidFromRef() {
        this.parentDataRef = this.$refs.foorBar_Ref.refData;
      }
    }
  };
</script>
<style></style>
