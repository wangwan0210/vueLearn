<template>
  <div>
    <span>{{dataOne}}</span>
  </div>

</template>
<script>
  export default {
    name: 'myHeader',
    data() {
      return {
        dataOne: '12',
        dataTwo: '14'
      };
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
