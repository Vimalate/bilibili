<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-14 21:49:31
 * @LastEditTime: 2020-07-14 22:27:59
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
      <img
        src="data:image/jpeg;base64,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"
        alt
      />
      <p>下载app</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
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
