<template>
    <Child />
  </template>
  
  <script>
  import {provide} from 'vue' // 显式导入
  import Child from './Child.vue'
  export default {
      components: {
          Child
      },
      setup(){
          provide('num', 789)
      }
  }
  </script>

  <style></style>
  