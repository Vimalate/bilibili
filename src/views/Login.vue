<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:45:37
 * @LastEditTime: 2020-07-24 21:46:52
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\Login.vue
--> 
<template>
  <div class="container">
    <login-top middleTop="登录bilibili">
      <div slot="right" class="go_login" @click="goRegister">去注册</div>
    </login-top>
    <!-- <login-text
      label="姓名"
      style="margin:4.167vw 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="res=>model.name=res"
    ></login-text>-->
    <login-text
      label="账号"
      placeholder="请输入账号"
      style="margin:4.167vw 0"
      rule="^.{6,16}$"
      @inputChange="res=>model.username=res"
    ></login-text>
    <login-text
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="res=>model.password=res"
    ></login-text>
    <login-btn btnText="登录" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/loginTop'
import LoginText from '@/components/common/loginText'
import LoginBtn from '@/components/common/loginBtn'
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async registerSubmit() {
      let rule = /^.{6,16}$/ //输入不超过16位
      if (rule.test(this.model.username) && rule.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        console.log(res)
        this.$msg.fail(res.data.msg)
        if (res.data.code == 301 || res.data.code == 302) {
          return
        }
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 500)
      } else {
        this.$msg.fail('格式不正确')
      }
    },
    goRegister() {
      this.$router.push('/register')
    }
  },
  components: { LoginTop, LoginText, LoginBtn }
}
</script>

<style scoped lang="scss">
.go_login {
  font-size: 14px !important;
}
</style>
