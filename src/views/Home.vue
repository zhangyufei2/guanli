<template>
  <div class="father">
    <div class="home">
      <a-layout style="min-height: 100vh">
        <a-menu :selectedKeys="selectedKeys" @click="select" :openKeys="openKeys" @openChange="openChangeHand"
          theme="dark" mode="inline">
          <a-menu-item key="1" style="height: 130px">
            <pie-chart-outlined />
            <img src="../assets/image/logo02.png" alt="" />
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>首页</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>数据中心</span>
              </span>
            </template>
            <a-menu-item key="3">
              <router-link to="/home/customer">客户数据</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/home/realtime">实时数据</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>订单管理</span>
              </span>
            </template>
            <a-menu-item key="6">
              <router-link to="/home/orderall">全部订单</router-link>
            </a-menu-item>
            <a-menu-item key="7">
              <router-link to="/home/unpaid">待支付订单</router-link>
            </a-menu-item>
            <a-menu-item key="8">
              <router-link to="/home/drop">待发货订单</router-link>
            </a-menu-item>
            <a-menu-item key="111">
              <router-link to="/home/shipped">已支付订单</router-link>
            </a-menu-item>
            <a-menu-item key="222">
              <router-link to="/home/canceled">已取消订单</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <user-outlined />
                <span>商品管理</span>
              </span>
            </template>
            <a-menu-item key="33">
              <router-link to="/home/goodsall">全部商品</router-link>
            </a-menu-item>
            <a-menu-item key="45">
              <router-link to="/home/goodsnew">新增商品</router-link>
            </a-menu-item>
            <a-menu-item key="44">
              <router-link to="/home/baby">豌豆仓库</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template #title>
              <span>
                <team-outlined />
                <span>促销管理</span>
              </span>
            </template>
            <a-menu-item key="66">
              <router-link to="/home/coupons">秒杀商品</router-link>
            </a-menu-item>
            <a-menu-item key="71">
              <router-link to="/home/new">新增优惠卷</router-link>
            </a-menu-item>
            <a-menu-item key="81">
              <router-link to="/home/news">新增秒杀</router-link>
            </a-menu-item>
            <a-menu-item key="1110">
              <router-link to="/home/seckill">新增管理</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout>
    </div>
    <div class="data">
      <Top v-show="flase"></Top>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Top from "../components/Top.vue";
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'

export default {
  name: "Home",
  setup() {

    const store = useStore()
    const handleOpen = () => { };
    const handleClose = () => { };
    const selectedKeys = ref(["4"]);
    const openKeys = ref(["sub1"]);
    const openChangeHand = (val) => {
      sessionStorage.setItem('openKeys', val.join(","))
      openKeys.value = val
    };
    const select = (val) => {
      sessionStorage.setItem('selectedKeys', val.key)
      selectedKeys.value[0] = val.key;
    };
    onMounted(() => {
      selectedKeys.value[0] = sessionStorage.getItem('selectedKeys') || "4"
      openKeys.value = sessionStorage.getItem('openKeys') && sessionStorage.getItem('openKeys').split(",")
    })
    return {
      handleOpen,
      select,
      handleClose,
      openChangeHand,
      selectedKeys,
      openKeys, store
    };
  },
  components: {
    Top,
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

/deep/.ant-layout {
  background: #96b46f;
  min-height: 100vh;
  width: 200px;
  border-radius: 0 50px 0 0;
  z-index: 100;

  .ant-menu-dark.ant-menu-inline {
    border-radius: 0 50px 0 0;
    z-index: 100;
  }

  .ant-menu-dark.ant-menu-inline,
  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #96b46f;
  }
}

.father {
  display: flex;
}

.data {
  overflow: hidden;
  flex: 1;
  padding-left: 15px;
}

#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-background {
  background: #96b46f;
}
</style>
