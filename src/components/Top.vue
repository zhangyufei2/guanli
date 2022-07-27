<template>
  <div class="top">
    <div class="top_left">
      <span>{{ title1 }}</span>
      <input type="text" value="请输入搜索内容" />
    </div>
    <div class="top_right">
      <span>
        <img class="inc" src="../assets/icon/icon14.png" alt="" />
      </span>
      <span>
        <img class="yuan" src="../assets/icon/tupian03.png" alt="" />
        <router-link to="/find">wanwan</router-link>
      </span>
      <span>
        <img class="inc" src="../assets/icon/icon15.png" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.top {

  &::after {
    content: '';
    width: 50px;
    height: 70px;
    position: absolute;
    left: 160px;
    top: 0;
    background: #c4dd9c;
    z-index: 1;
  }

  width: calc(100%+210px);
  line-height: 70px;
  height: 70px;
  margin-left:-210px;
  padding-left: 210px;
  margin-bottom:20px;
  background: #c4dd9c;
  display: flex;
  justify-content: space-between;

  .top_left {
    margin-left: 30px;

    input {
      margin-left: 60px;
      display: inline-block;
      border-radius: 5px;
      height: 22px;
      text-indent: 5px;
      border: 1px solid gray;
    }
  }

  .top_right {
    text-align: center;
    margin-right: 20px;

    span {

      margin-right: 10px;
      margin-top: 3px;
      display: inline-block;

      .inc {
        width: 20px;

      }
    }

    .inc {

      width: 20px;

    }

    .yuan {
      border-radius: 50%;
      display: inline-block;
    }

    a {
      text-decoration: none;
      margin-top: -5px;
      display: inline-block;
      position: relative;
      top: 4px;
      font-size: 15px;
      margin: 0 3px;
    }
  }
}
</style>
