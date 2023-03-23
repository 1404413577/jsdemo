<template>
    <h2>{{count}}</h2>
    <button @click="btnClick">累加</button>
  </template>
  
  <script>
  import {ref} from 'vue'
  export default {
      setup(){
            // 函数调用后就会返回一个对象，因此我们直接return
          return clickCountFn()
            // 如果后期还想同时返回其他数据，可以将clickCountFn()的返回结果展开
            // return {...clickCountFn(), 其他数据}
      }
  }
  
  // 封装一个函数，这样这块功能我们就能单独管理了
  function clickCountFn(){
      const count = ref(1);
      let btnClick = () => {
          count.value++;
      }
      return {count, btnClick}
  }
  </script>
  