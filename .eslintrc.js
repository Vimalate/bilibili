/*
 * @Author: Vimalakirti
 * @Date: 2020-07-13 13:06:39
 * @LastEditTime: 2020-07-13 20:41:37
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
    "no-unused-vars": 'off'
  }
};