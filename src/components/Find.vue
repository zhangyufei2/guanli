<template>
  <div class="box">
    <div class="outer">
      <div class="left">
        <img src="../assets/image/logo.png" alt="" />
      </div>
      <div class="right">
        <h1>找回密码</h1>
        <input type="text" v-model="phone" placeholder="请输入注册手机号" /><br />
        <input type="text" v-model="user" placeholder="请输入注册用户名" /><br />
        <br />
        <input class="some" type="text" v-model="massges" placeholder="请输入短信验证码" style="font-size: 10px" />

        <input type="text" style="
            background: #c4de9b;
            color: #fff;
            border-style: none;
            padding-left: 5px;
          " placeholder="获取验证码" class="btn1" name="" id="" />
        <br />
        <input style="font-size: 10px" type="text" v-model="password" placeholder="请输入新密码" /><br />
        <input style="font-size: 10px" type="text" v-model="newPassword" placeholder="请输入确认新密码" /><br />
        <button class="btn3" @click="home">登陆</button>
      </div>
    </div>
  </div>
  <nav v-show="show" @click="hide">您输入有误，请重新输入！
    <p>确定</p>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Find",
  setup() {
    const show = ref(false)
    const hide = () => {
      show.value = false
    }
    const router = useRouter();
    const user = ref('')
    const massges = ref('')
    const password = ref('')
    const newPassword = ref('')
    const phone = ref('')
    const home = () => {
      let result = JSON.parse(sessionStorage.getItem('token'))
      console.log(massges.value)
      console.log(result.massges)
      if (user.value == result.user &&
        massges.value == result.massges &&
        newPassword.value == password.value


      ) {
        sessionStorage.setItem('token', JSON.stringify(result))
        console.log(result)
        router.push("/home");
      } else {
        alert("您输入有误，请重新输入！")
      }
    };
    return {
      home, user, massges, password, newPassword, phone, show, hide
    };
  },
};
</script>

<style lang="less" scoped>
nav {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 0px;
  left: 35%;
  border: 3px solid blue;
  border-radius: 30px;
  ;
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

.box {
  height: 1000px;
  width: 100%;

  background: #ccdeb6;
  text-align: center;

  .outer {
    border-radius: 35px;
    background: #fff;
    position: relative;
    height: 400px;
    width: 700px;
    overflow: hidden;
    margin: 0px auto;
    top: 90px;

    .left {
      overflow: hidden;
      background: #95b56d;
      width: 500px;
      height: 480px;

      text-align: center;
      position: absolute;
      border-radius: 50%;
      left: -200px;
      // top: 160px;
      top: -15px;

      img {
        height: 190px;
        width: 190px;
        position: absolute;
        top: 130px;
        right: 60px;
      }
    }

    .right {
      cursor: pointer;
      width: 400px;
      height: 100%;

      position: relative;
      right: -300px;
      text-align: center;

      h1 {
        margin-top: 50px;
        font-weight: 520;
        font-size: 20px;
        margin-bottom: 20px;
      }

      input {
        margin-bottom: 15px;
        width: 200px;
        height: 25px;
        border: 1px solid black;
      }

      .some {
        margin-bottom: 15px;
        width: 105px;
        height: 25px;
        position: relative;
        right: 7px;
      }

      button {
        background: #fff;
        border-style: none;
        border: 1px solid black;
      }

      .btn1 {
        width: 80px;
        height: 25px;
        position: relative;
        right: -5px;
      }

      .btn2 {
        width: 100px;
        height: 30px;
        position: relative;
        top: -8px;
      }

      .btn3 {
        margin-top: 8px;
        width: 200px;
        height: 30px;
        background: #c4de9b;
        color: #fff;
      }
    }
  }
}
</style>
