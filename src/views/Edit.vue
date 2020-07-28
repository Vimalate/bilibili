<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-26 16:59:29
 * @LastEditTime: 2020-07-27 21:40:11
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\views\Edit.vue
-->
<template>
  <div v-if="model" class="edit">
    <div class="navbar">
      <nav-bar></nav-bar>
    </div>
    <div class="uploadfile">
      <van-uploader
        class="uploadimg"
        :after-read="afterRead"
        preview-size="100vw"
      />
      <edit-banner left="头像" class="avator">
        <img :src="model.user_img" slot="right" alt v-if="model.user_img" />
        <img src="@/assets/logo.png" slot="right" alt v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="bannerClick">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="genderShow = true">
      <a href="javascript:;" slot="right">{{
        model.gender === 1 ? '男' : '女'
      }}</a>
    </edit-banner>
    <edit-banner left="个签" @bannerClick="textClick">
      <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </edit-banner>

    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmUpdate"
      @cancel="value = ''"
    >
      <van-field v-model="value" placeholder="请输入用户名" autofocus />
    </van-dialog>

    <van-dialog
      v-model="textShow"
      title="个签"
      show-cancel-button
      @confirm="confirmSignature"
      @cancel="value = ''"
    >
      <van-field
        v-model="signature"
        type="textarea"
        placeholder="请输入个性签名"
        autofocus
      />
    </van-dialog>

    <van-action-sheet
      v-model="genderShow"
      cancel-text="取消"
      :actions="actions"
      @select="onSelect"
    />
    <div class="goBack" @click="goBack">返回个人中心</div>
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
      genderShow: false,
      value: '',
      signature: '',
      actions: [
        { name: '男', val: 1 },
        { name: '女', val: 0 }
      ]
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
    goBack() {
      this.$router.go(-1)
    },
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
      if (res.data.code == 200) {
        this.$msg.success('修改成功')
      }
    },
    onSelect(data) {
      this.model.gender = data.val
      this.userUpdate()
      this.genderShow = false
    },
    bannerClick() {
      this.show = !this.show
    },
    textClick() {
      this.textShow = !this.textShow
    },
    confirmUpdate() {
      console.log('ok')
      this.model.username = this.value
      this.userUpdate()
      this.value = ''
    },
    confirmSignature() {
      this.model.user_desc = this.signature
      this.userUpdate()
      this.signature = ''
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
.goBack {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  background-color: #fff;
  padding: 10px 0;
  margin-top: 20px;
  font-size: 4.5vw;
}
</style>
