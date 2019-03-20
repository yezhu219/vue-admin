<template>
  <div class="container">
    <div class="login-box">
      <h3>后台管理系统</h3>
      <input type="text" placeholder="账号" v-model.trim="username">
      <input type="text" placeholder="密码" v-model.trim="password">
      <div class="login-bottom">
        <div class="left">
          <input type="checkbox">
          <span>记住密码</span>
        </div>
        <p @click="login">登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      let params = {
        username: this.username,
        password: this.password
      }
      this.$axios.post('/login', params).then(res => console.log(res))
    }
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(82, 196, 230),
    rgba(76, 154, 237)
  );
  position: relative;
  .login-box {
    width: 300px;
    height: 200px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h3 {
      margin-bottom: 30px;
    }
    > input {
      border: none;
      outline: none;
      border-bottom: 1px solid #fff;
      margin-top: 20px;
      width: 80%;
      background-color: rgba(79, 175, 233);
      &::placeholder {
        color: #fff;
      }
    }
    .login-bottom {
      margin-top: 20px;
      line-height: 32px;
      .left {
        float: left;
      }
      input {
        // float: left;
        margin-left: 30px;
        vertical-align: middle;
      }
      span {
        font-size: 12px;
        // float: left;
        vertical-align: middle;
      }
      p {
        display: inline-block;
        width: 80px;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 10px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        margin-left: 30px;
        // float: right;
      }
    }
  }
}
</style>
