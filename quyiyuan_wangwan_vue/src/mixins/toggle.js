const taggle = {
  data() {
    return {
      isShow: false,
      fromData: '我是mixins数据'
    };
  },
  methods: {
    taggleShow() {
      this.isShow = !this.isShow;
    }

  }
};
 export default taggle;
