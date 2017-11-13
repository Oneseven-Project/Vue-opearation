<template>
  <module-template :item="child" :key="$index" :type="type"></module-template>
</template>

<script>
  // 在自身组件中使用自身，就用组件递归；
  在main.js中要引入与注册
  import ModuleTemplate from '@/components/public/module-template'
  Vue.component('module-template', ModuleTemplate)
</script>

<style>
</style>