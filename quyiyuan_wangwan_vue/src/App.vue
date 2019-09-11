<template>
  <div id="app">
    <div class="botton_tab">
      <div class="tabs" :class="isActive=='1'?'tab_active':''" v-on:click="goHome">
        <div class="iconfont icon-hospitalize tabs_icon"></div>
        <div class="tabs_text">就医</div>
      </div>
      <div class="tabs" :class="isActive=='2'?'tab_active':''" v-on:click="goServer">
        <div class="iconfont icon-serve tabs_icon"></div>
        <div class="tabs_text">服务</div>
      </div>
      <div class="tabs" :class="isActive=='3'?'tab_active':''" v-on:click="goMy">
        <div class="iconfont icon-me tabs_icon"></div>
        <div class="tabs_text">我的</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import '../static/fonts/font.css';
  import '../static/css/base.css';
  export default {
    name: 'App',
    data () {
      return {
        isActive: '1'
      };
    },
    methods: {
      goMy () {
        // 我的
        this.isActive = '3';
        this.$router.push({name: 'Center', params: {id: '1'}});
      },
      goServer () {
        // 服务
        this.isActive = '2';
        this.$router.push({name: 'AppointDept', params: {id: '2'}});
      },
      goHome () {
        // 就医
        this.isActive = '1';
        this.$router.push({name: 'Home', params: {id: '3'}});
      }
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
