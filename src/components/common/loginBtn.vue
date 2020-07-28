<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 20:26:58
 * @LastEditTime: 2020-07-13 21:03:42
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\common\loginBtn.vue
-->
<template>
  <div class="btn">
    <div class="loginBtn" @click="register">{{ btnText }}</div>
  </div>
</template>

<script>
export default {
  props: ['btnText'],
  data() {
    return {}
  },
  methods: {
    register() {
      this.$emit('registerSubmit')
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  padding: 15px 10px;
}
.loginBtn {
  height: 45px;
  background-color: #ff9db5;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 22.5px;
}
</style>
