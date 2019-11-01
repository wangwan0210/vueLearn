<template>
  <div>
    <div class="fff" style="color: red" v-if="isShow">{{fromData}}</div>
    <button @click="taggleShow">修改状态</button>
  </div>
</template>

<script>
  import taggle from '../mixins/toggle';
    export default {
      name: 'AppointDept',
      data() {
        return {
          msgd: this.$route.params.id
        };
      },
      mixins: [taggle]
    };
</script>

<style scoped>
  button{
    width: 70px;
    height: 30px;
    background-color: #00b57e;
    border-radius: 12px;
  }

</style>
