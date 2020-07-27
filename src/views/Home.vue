<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-27 22:11:14
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\Home.vue
--> 
<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-tabs v-model="active" sticky>
      <van-tab
        v-for="(item,index) in categoryList"
        :title="item.title"
        :key="index"
      >{{ item.title }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/Navbar.vue'
export default {
  data() {
    return {
      categoryList: [],
      active: 0
    }
  },
  name: 'Home',
  components: { NavBar },
  methods: {
    async selectCategory() {
      const res = await this.$http.get('/category')
      console.log(res)
      this.changeCategory(res.data)
    },
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = []
        return item
      })
      console.log(category1)
      this.categoryList = category1
    },
    async getArticle() {
      const item = this.categoryItem()
      const res = await this.$http.get('/detail' + item._id)
    },
    categoryItem() {
      const categoryitem = this.categoryList[this.active]
      console.log(categoryitem)
      return categoryitem
    }
  },
  watch: {
    active() {
      this.categoryItem()
    }
  },
  mounted() {
    this.selectCategory()
  }
}
</script>
