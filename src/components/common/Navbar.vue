<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-14 21:49:31
 * @LastEditTime: 2020-07-27 21:33:25
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\common\Navbar.vue
--> 
<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/bilibili.png" alt />
    </div>
    <div class="search">
      <p>
        请输入内容
        <van-icon class="search_input" name="search"></van-icon>
      </p>
    </div>
    <div class="avatar">
      <img :src="imgUrl" alt @click="$router.push('/edit')" />
      <p>下载app</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: ''
    }
  },
  async mounted() {
    const res = await this.$http.get('/user/' + localStorage.getItem('id'))
    this.imgUrl = res.data[0].user_img
  }
}
</script>
<style lang='scss' scoped>
.navbar {
  height: 12.5vw;
  background-color: #fff;
  display: flex;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    img {
      width: 80%;
    }
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      background-color: #f4f4f4;
      height: 26px;
      padding-left: 35px;
      line-height: 26px;
      width: 90%;
      font-size: 12px;
      color: #aaa;
      position: relative;
      border-radius: 10px;
      .search_input {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-42%);
      }
    }
  }
  .avatar {
    display: flex;
    justify-self: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      padding: 5px 10px;
      margin: 0 8px;
      background-color: #fb7299;
      color: #fff;
      border-radius: 3px;
      font-size: 13px;
    }
  }
}
</style>
