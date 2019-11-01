<template>
  <div>
    <div style="border: 1px solid red">
      <div>{{dataOne}}</div>
      <div>我是Header组件</div>
      <div>
        <button @click="getPatent">通过$parent</button>
        <div>从上一级父组件获取数据：{{dataThree}}</div>
      </div>
      <div>
        <button @click="getRootParent">通过$root</button>
        <div>从根父组件获取数据：{{dataFour}}</div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'myHeader',
    data() {
      return {
        dataOne: '12',
        dataTwo: '14',
        dataThree: '',
        dataFour: ''
      };
    },
    methods: {
      getPatent() {
        this.dataThree = this.$parent.magNext;
      },
      getRootParent() {
        this.dataFour = this.$root.rootData;
      }
    },
    beforeCreate: function () {
      console.log('我是beforeCreate');
    },
    activated: function () {
      this.dataOne = '16';
      console.log('我是activated');
    },
    deactivated: function () {
      console.log('deactivated');
    }
  };

</script>
<style scoped>
  button{
    width: 100px;
    height: 50px;
    background-color: #00b57e;
    border-radius: 24px;

  }
</style>
