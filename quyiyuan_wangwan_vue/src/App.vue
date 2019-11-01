<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isActive: '1',
        idMy: 1
      };
    },
    methods: {

    }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.botton_tab{
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #4744441a;
}
.tabs{
  font-size: 20px;
  width: 33%;
  line-height: 50px;
  height: 50px;
}
.tabs_icon{
  margin-top: 5px;
}
.tabs_text{
  font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
}
  .tab_active{
    color: #00b57e;
  }
</style>
