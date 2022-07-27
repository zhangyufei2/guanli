<template>
  <div class="box">
    <div class="outer">
      <div class="left">
        <img src="../assets/image/login/login.png" alt="" />
      </div>
      <div class="right">
        <h1>用户登陆</h1>
        <input type="text" placeholder="账号/用户名" v-model="user" /><br />
        <input type="password" placeholder="密码" v-model="pass" />
        <br />
        <router-link to="/find">忘记密码？</router-link>
        <br />
        <input type="text" class="btn1" v-model="massges" />
        <button class="btn2">验证码</button><br />
        <button class="btn3" @click="home">登陆</button>
      </div>
    </div>
  </div>

  <nav v-show="show" @click="hide">??打烊了
    <p>确定</p>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const route = useRouter();
    const user = ref("");
    const pass = ref("");
    const massges = ref('');
    const show = ref(false);
    const hide = () => {
      show.value = false
    };
    const home = () => {
      if (user.value === "liupian" || user.value === "wanwan" && pass.value !== "" || massges.value != '') {
        let res = {
          user: user.value,
          pass: pass.value,
          massges: massges.value
        }
        sessionStorage.setItem("token", JSON.stringify(res))
        route.push("/home");
      } else {
        alert("打烊了")
      }
    };
    onMounted(() => { });

    return {
      home, user, pass, massges, show, hide
    };
  },
};
</script>

<style lang="less" scoped>
nav {
  width: 500px;
  height: 200px;
  position: absolute;
  top: 0px;
  left: 35%;
  border: 3px solid blue;
  border-radius: 30px;
  background: white;
  text-align: center;
  line-height: 100px;
  font-size: 50px;

  p {
    font-size: 30px;
    width: 100px;
    height: 50px;
    line-height: 50px;
    border: 1px solid gold;
    margin-left: 40%;
  }
}

body,
html {
  height: 100vh;
  overflow: hidden;
  position: absolute;
}

.box {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url(../assets/image/login/beijing01.png) center;

  .outer {
    background: #fff;
    margin: 70px auto;
    height: 350px;
    width: 700px;
    //border: 1px solid red;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // margin-top: 20px;
    border-radius: 50px;
    position: relative;
    overflow: hidden;

    .left {
      position: absolute;
      height: 400px;
      width: 400px;
      border-radius: 10px;
      left: 0;
      border-radius: 50%;
      background: #95b56d;
      left: -130px;
      overflow: hidden;

      img {
        height: 150px;
        width: 150px;
        position: absolute;
        right: 90px;
        top: 130px;
      }
    }

    .right {
      width: 350px;
      top: 40px;
      right: 50px;
      position: absolute;

      h1 {
        font-weight: 520;
        font-size: 20px;

        text-align: center;
      }

      input {
        margin: 10px 0;
        width: 350px;
        height: 35px;
        border: 1px solid black;
        border-radius: 3px;
      }

      a {
        text-decoration: none;
        color: #6fb7ff;
        position: relative;
        left: 250px;
        top: 4px;
        font-size: 16px;
      }

      button {
        background: #fff;
        border-style: none;
        border: 1px solid black;
        border-radius: 3px;
      }

      input.btn1 {
        width: 170px;
        height: 35px;
        margin-right: 5px;
      }

      .btn2 {
        width: 170px;
        height: 35px;
      }

      .btn3 {
        margin-top: 8px;
        width: 350px;
        height: 40px;
        background: #c4de9b;
        color: #fff;
      }
    }
  }
}
</style>
