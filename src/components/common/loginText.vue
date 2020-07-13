<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 14:26:13
 * @LastEditTime: 2020-07-13 14:34:11
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\common\loginText.vue
--> 
<template>
  <div>
    <van-field v-model="text" :type="type" :placeholder="placeholder" :label="label" :rule="rule" />
  </div>
</template>

<script>
export default {
  props: ["label", "type", "placeholder", "rule"],
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
</style>