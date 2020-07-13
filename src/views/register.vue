<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:45:37
 * @LastEditTime: 2020-07-13 21:16:48
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\register.vue
--> 
<template>
  <div class="container">
    <login-top middleTop="注册bilibili"></login-top>
    <login-text
      label="姓名"
      style="margin:4.167vw 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="res=>name=res"
    ></login-text>
    <login-text label="账号" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res=>username=res"></login-text>
    <login-text
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="res=>password=res"
    ></login-text>
    <login-btn btnText="注册" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/loginTop";
import LoginText from "@/components/common/loginText";
import LoginBtn from "@/components/common/loginBtn";
export default {
  data() {
    return {
      name: "",
      username: "",
      password: ""
    };
  },
  methods: {
    async registerSubmit() {
      if (this.name && this.username && this.password) {
        console.log("按钮");
        const res = await this.$http.post("/register", {
          name: this.name,
          username: this.username,
          password: this.password
        });
      }
    }
  },
  components: { LoginTop, LoginText, LoginBtn }
};
</script>

<style scoped lang="scss">
</style>
