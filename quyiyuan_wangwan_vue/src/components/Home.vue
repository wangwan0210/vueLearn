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
      <router-link  tag="div" :to="'/Culture/'+myid" replace class="item_div">
        <span class="icon-accompany-card span_icon_three"></span>
        <span>运动</span>
      </router-link>
      <div>
        <!--replace 属性，走的是$route.replace();-->
        <router-link  :to="'/Main/'" append class="item_div">
          <span class="icon-accompany-card span_icon_three"></span>
          <span>生活</span>
        </router-link>
      </div>
      <div>我从vuex状态管理直接获取的值为{{this.$store.state.count}}</div>
      <div>我从vuex状态管理通过getter获取的值为{{this.$store.getters.getStateCount}}</div>
      <button @click="addVuexCount">加</button>
      <button @click="reduceVuexCount">减</button>
      <div id="alertId"></div>
      <!--自定义指令v-sexColor-->
      <div v-sexColor:{sexTemValue:sexValue} @click="changeSex">我的性别是{{sexValue | getSex}}</div>

     <!-- model选项的使用-->
      <my-input v-model="name" value="some value"></my-input>
      <div>{{name}}</div>
    </div>

  </div>
</template>
<script>
  import Uploader from 'vux-uploader';
  import myInput from './myInput';
  export default {
  name: 'Home',
  data() {
    return {
      myid: 10,
      sexValue: '2',
      name: '请输入姓名'
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
    },
    changeSex() {
      if (this.sexValue == '1') {
        this.sexValue = '2';
      } else {
        this.sexValue = '1';
      }
    }
  },
    // 局部组件过滤器
  filters: {
    getSex: function (value) {
      let sex = '男生';
      if (value == '1') {
        sex = '男生';
      } else {
        sex = '女孩';
      }
      return sex;
    }
  },
  components: {
    Uploader,
    myInput
  },
    watch: {
      myid(val, oldVal) {

      }

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
