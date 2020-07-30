<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-30 22:28:24
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\Home.vue
-->
<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-tabs v-model="active" swipeable sticky>
      <van-tab v-for="(item, index) in categoryList" :title="item.title" :key="index">
        <div class="detail-container">
          <Detail class="detail-item" :detailItem="ite" v-for="(ite, idx) in item.list" :key="idx"></Detail>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/Navbar.vue'
import Detail from './Detail.vue'
export default {
  data() {
    return {
      categoryList: [],
      active: 0
    }
  },
  name: 'Home',
  components: { NavBar, Detail },
  methods: {
    async selectCategory() {
      const res = await this.$http.get('/category')
      // console.log(res)
      this.changeCategory(res.data)
    },
    changeCategory(data) {
      const category1 = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        return item
      })
      this.categoryList = category1
      this.getArticle()
    },
    async getArticle() {
      const item = this.categoryItem()
      const res = await this.$http.get('/detail/' + item._id, {
        params: {
          page: item.page,
          pagesize: item.pagesize
        }
      })
      console.log(res)
      item.list = [...res.data]
      console.log(item.list)
    },
    categoryItem() {
      const categoryitem = this.categoryList[this.active]
      // console.log(categoryitem)
      return categoryitem
    }
  },
  watch: {
    active() {
      this.getArticle()
    }
  },
  mounted() {
    this.selectCategory()
  }
}
</script>
<style lang="scss" scoped>
.home {
  background-color: #fff;
}
.detail-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detail-item {
    margin: 5px 0;
    width: 45%;
  }
}
</style>