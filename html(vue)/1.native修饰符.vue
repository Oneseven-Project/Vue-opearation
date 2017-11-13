<template>
  <router-link :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'" v-if="item.path" @click.native="toggle(index, item)"> 当你给一个vue组件绑定事件时候，要加上native！如果是普通的html元素！就不需要 感觉native就是把组件变回原生DOM的一种方式 </template>
<script>
</script>
<style>

</style>