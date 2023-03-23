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
  
  <!-- 孙子组件 -->
  <template>
    <h4>孙子组件：{{mynum}}</h4>
  </template>
  
  <script>
  import {inject} from 'vue' // 显式导入
  export default {
      setup(){
          const mynum = inject('num');
          return {mynum}
      }
  }
  </script>
  