<template>
  <div>
    <input type="text" :value="userName" @input="updateVal($event.target.value)">
  </div>
</template>
<script>
  export default{
    name: 'myInput',
    data() {
      return {
        msg: ''
      };
    },
    model: {
      prop: 'userName',
      event: 'changeMyInputValue'
    },
    props: {
      userName: {
        type: String,
        default: 'wangwan'
      }
    },
    methods: {
      updateVal(val) {
        this.$emit('changeMyInputValue', val);
      }
    }
  };
</script>
<style scoped>
  input{
    width: 200px;
    height: 40px;
    border: 1px solid #dddddd;
  }
</style>
