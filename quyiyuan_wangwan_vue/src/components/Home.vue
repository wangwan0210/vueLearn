<template>
  <div class="hello">
    <div >
      <router-link class="item_div" :to="{name:'DeliciousFood',params:{id:2}}">
        <span class="icon-accompany-card span_icon_one" ></span>
        <span>美食</span>
      </router-link>
      <div v-on:click = "goMotion" class="item_div">
        <span class="icon-accompany-card span_icon_two"></span>
        <span>文化</span>
      </div>
      <!--append 属性，在当前要跳转路由前加基路由;tag 属性router-link会渲染成tag指定标签-->
      <router-link  tag="div" :to="'/Culture/'+myid" append class="item_div">
        <span class="icon-accompany-card span_icon_three"></span>
        <span>运动</span>
      </router-link>
      <div>
        <!--replace 属性，走的是$route.replace();-->
        <router-link  :to="'/Main/'" replace class="item_div">
          <span class="icon-accompany-card span_icon_three"></span>
          <span>生活</span>
        </router-link>
      </div>
      <div>我从vuex状态管理直接获取的值为{{this.$store.state.count}}</div>
      <div>我从vuex状态管理通过getter获取的值为{{this.$store.getters.getStateCount}}</div>
      <button @click="addVuexCount">加</button>
      <button @click="reduceVuexCount">减</button>
    </div>

  </div>
</template>
<script>
  import Uploader from 'vux-uploader';
  export default {
  name: 'Home',
  data() {
    return {
      myid: 10,
      msg: 'Welcome to Your Vue.js App',
      price: 80,
      delbutton: false,
      fileListFront: [],
      fileListBack: [],
      images: []
    };
  },
  methods: {
    goMotion() {
      //
      this.isActive = '3';
      this.$router.push({name: 'Motion', params: {id: '1'}});
    },
    goUpload() {
      this.$router.push({name: 'uploadExample'});
    },
    addVuexCount() {
      this.$store.commit('add');
    },
    reduceVuexCount() {
      this.$store.commit('reduce');
    }
  },
    components: {
      Uploader
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item_div{
  height: 50px;
  line-height: 50px;
}
  .span_icon_one{
    font-size: 30px;
    color: red;
    position: relative;
    top: 10px;
  }
.span_icon_two{
  font-size: 30px;
  color: #3d61ff;
  position: relative;
  top: 10px;
}
.span_icon_three{
  font-size: 30px;
  color: #44ff44;
  position: relative;
  top: 10px;
}
.front .vux-uploader_input-box {
  background-image: url("../assets/images/id_card.png");
}
.back .vux-uploader_input-box {
  background-image: url("../assets/images/id_card.png");
}

</style>
