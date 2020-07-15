<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-14 21:47:40
 * @LastEditTime: 2020-07-15 22:42:26
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\userinfo.vue
--> 
<template>
  <div class="userinfo">
    <NavBar />
    <div>
      <img
        class="backImg"
        src="http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/bannerTop_new.png"
        alt
      />
    </div>
    <UserDetail />
  </div>
</template>

<script>
import NavBar from "@/components/common/Navbar.vue";
import UserDetail from "@/components/userComponent/userDetail.vue";
export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    UserDetail
  }
};
</script>
<style lang='scss' scoped>
.userinfo {
  .backImg {
    width: 100%;
    height: 91px;
  }
}
</style>