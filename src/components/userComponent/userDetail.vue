<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-15 22:40:50
 * @LastEditTime: 2020-07-27 21:28:00
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\userComponent\userDetail.vue
-->
<template>
  <div class="userDetail">
    <div>
      <div>
        <img :src="userinfo.user_img" alt />
      </div>
      <div class="user_edit">
        <div class="user_edit_detail">
          <p>
            <span>269</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>101</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>121</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div class="user_btn" @click="$router.push('/edit')">编辑资料</div>
      </div>
    </div>
    <div class="username">
      <div>雨落如天</div>
      <p>这个人很神秘，什么都没有写</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userinfo'],
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.userDetail {
  background-color: #fff;
  padding: 2px 12px;
  > div {
    display: flex;
  }
  img {
    height: 85px;
    width: 85px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .user_edit {
    flex: 1;
    .user_edit_detail {
      display: flex;
      margin-top: 10px;
      p {
        flex: 1;
        display: flex;
        justify-self: center;
        align-items: center;
        flex-direction: column;
        font-size: 13px;
        .user_text {
          color: #ccc;
        }
      }
    }
    .user_btn {
      border: 1px solid #fb7299;
      padding: 5px;
      display: flex;
      text-align: center;
      justify-content: center;
      margin-top: 8px;
      color: #fb7299;
      border-radius: 3px;
    }
  }
  .username {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    p {
      font-size: 12px;
      color: #999;
      padding: 10px 0;
    }
  }
}
</style>
