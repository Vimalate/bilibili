<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-26 17:04:56
 * @LastEditTime: 2020-07-26 21:00:50
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\common\editBanner.vue
-->
<template>
  <div class="editbanner" @click="bannerClick">
    <span>{{ left }}</span>
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ['left', 'right'],
  methods: {
    bannerClick() {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.editbanner {
  background-color: #fff;
  padding: 15px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
