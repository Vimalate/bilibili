/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-26 16:50:00
 * @Description: 
 * @FilePath: \bilibili\bilibili\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 'off',
    // //强制使用单引号
    // quotes: ['error', 'single'],
    // //强制不使用分号结尾
    // semi: ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};