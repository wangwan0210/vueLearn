<template>
  <div class="hello">
    <!--<div v-on:click="goNext" style="margin-top: 20px">预约</div>-->
    <el-container>
      <el-header>
        <el-row type="flex" :gutter="24">
          <el-col :span="8">
            <el-button type="text">王婉</el-button>
            <el-button type="text" disabled>30</el-button>
          </el-col>
          <el-col :span="16">
            <el-row type="flex" class="row-bg" justify="end">
              <el-col :span="6"><div class="grid-content bg-purple">首页</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-light">关于我</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">专业技能</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">我的作品</div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">联系我</div></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    goNext () {
      this.$router.push({name: 'AppointDept', params: {id: '2'}});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .el-row{
    color: white;
    font-size: 16px;
  }
  .el-col{
    padding: 0 !important;
    height: 60px;
    line-height: 60px;
  }
  .el-header{
    background-color: #ced3da;
    padding: 0px;
  }

</style>
