<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-28 22:12:26
 * @LastEditTime: 2020-07-30 22:38:41
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\Detail.vue
-->
<template>
  <div>
    <div class="detail" @click="$router.push(`/detail/${detailItem.id}`)">
      <div class="video">
        <img :src="detailItem.img" alt width="100%" />
        <span class="play">1477</span>
        <span class="comment">{{detailItem.commentlen}}</span>
      </div>
      <p>{{detailItem.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['detailItem']
}
</script>

<style lang="scss" scoped>
.detail {
  p {
    font-size: 12px;
  }
}
.video {
  position: relative;
  color: #aaa;
  .play {
    position: absolute;
    bottom: 2px;
    left: 3px;
  }
  .comment {
    position: absolute;
    bottom: 2px;
    right: 3px;
  }
}
</style>
