<template>
  <div id="app">
    <!--<div class="botton_tab">-->
      <!--<div class="tabs" :class="isActive=='1'?'tab_active':''" v-on:click="goHome">-->
        <!--<div class="iconfont icon-hospitalize tabs_icon"></div>-->
        <!--<div class="tabs_text">就医</div>-->
      <!--</div>-->
      <!--<div class="tabs" :class="isActive=='2'?'tab_active':''" >-->
        <!--<div class="iconfont icon-serve tabs_icon"></div>-->
        <!--&lt;!&ndash;<div class="tabs_text">服务</div>&ndash;&gt;-->
        <!--<router-link :to="{name:'AppointDept',params:{id:2}}">服务</router-link>-->
      <!--</div>-->
      <!--<div class="tabs" :class="isActive=='3'?'tab_active':''" v-on:click="goMy">-->
        <!--<div class="iconfont icon-me tabs_icon"></div>-->
        <!--<router-link :to="'/Center/'+idMy" class="tabs_text">我的</router-link>-->
      <!--</div>-->

    <!--</div>-->
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
