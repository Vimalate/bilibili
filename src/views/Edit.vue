<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-26 16:59:29
 * @LastEditTime: 2020-07-26 21:14:44
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\Edit.vue
--> 
<template>
  <div v-if="model" class="edit">
    <div class="navbar">
      <nav-bar></nav-bar>
    </div>
    <div class="uploadfile">
      <van-uploader class="uploadimg" :after-read="afterRead" preview-size="100vw" />
      <edit-banner left="头像" class="avator">
        <img :src="model.user_img" slot="right" alt v-if="model.user_img" />
        <img src="@/assets/logo.png" slot="right" alt v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="bannerClick">
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="性别"></edit-banner>
    <edit-banner left="个签" @bannerClick="bannerClick"></edit-banner>

    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmUpdate">
      <van-field v-model="value" placeholder="请输入用户名" autofocus />
    </van-dialog>

    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmUpdate">
      <van-field v-model="value" type="textarea" placeholder="请输入个性签名" autofocus />
    </van-dialog>
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import editBanner from '@/components/common/editBanner.vue'
export default {
  data() {
    return {
      model: {},
      show: false,
      textShow: false,
      value: ''
    }
  },
  components: {
    NavBar,
    editBanner
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
      console.log(res)
    },
    async afterRead(data) {
      // 接收文件
      const formdata = new FormData()
      formdata.append('file', data.file)
      const res = await this.$http.post('/upload', formdata)
      // 显示为返回回来的头像
      this.model.user_img = res.data.url
      // 修改服务端
      this.userUpdate()
      console.log(res)
    },
    async userUpdate() {
      const res = await this.$http.post(
        '/update/' + localStorage.getItem('id'),
        this.model
      )
    },
    bannerClick() {
      this.show = !this.show
    },
    confirmUpdate() {
      console.log('ok')
      this.model.username = this.value
      this.userUpdate()
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.edit {
  a {
    color: #333;
  }

  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
  .uploadfile {
    position: relative;
    overflow: hidden;
    .uploadimg {
      opacity: 0;
      position: absolute;
    }
  }
}
.navbar {
  margin-bottom: 10px;
}
</style>