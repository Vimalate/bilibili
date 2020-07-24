<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-14 21:47:40
 * @LastEditTime: 2020-07-24 22:19:07
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
import NavBar from '@/components/common/Navbar.vue'
import UserDetail from '@/components/userComponent/userDetail.vue'
export default {
  data() {
    return {
      model: {}
    }
  },
  components: {
    NavBar,
    UserDetail
  },
  methods: {
    async getUserinfoData() {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      console.log(res)
    }
  },
  created() {
    this.getUserinfoData()
  }
}
</script>
<style lang='scss' scoped>
.userinfo {
  .backImg {
    width: 100%;
    height: 91px;
  }
}
</style>