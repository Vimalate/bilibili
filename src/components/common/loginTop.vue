<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:51:07
 * @LastEditTime: 2020-07-14 21:38:29
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\common\loginTop.vue
-->
<template>
  <div class="login_top">
    <div></div>
    <div>{{ middleTop }}</div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop'],
  data() {
    return {}
  },
  components: {}
}
</script>

<style scoped lang="scss">
.login_top {
  height: 45px;
  display: flex;
  background-color: #fff;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}
</style>
