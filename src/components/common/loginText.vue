<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-13 14:26:13
 * @LastEditTime: 2020-07-13 20:49:25
 * @Description: 
 * @FilePath: \bilibili\bilibili\src\components\common\loginText.vue
-->
<template>
  <div>
    <van-field
      :type="type"
      :placeholder="placeholder"
      :label="label"
      :rule="rule"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'placeholder', 'rule'],
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleRule() {
      console.log(this.rule)

      const rule = new RegExp(this.rule)
      if (rule.test(this.content)) {
        this.$emit('inputChange', this.content)
        console.log('校验成功')
      }
    }
  },
  watch: {
    content() {
      this.handleRule()
    }
  }
}
</script>
<style lang="scss" scoped></style>
