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
  
  <!-- 1、setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数 也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的

2、setup函数是 Composition API（组合API）的入口

3、在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用

4、由于我们不能在 setup函数中使用 data 和 methods，所以Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined

5、setup函数只能是同步的不能是异步的

#2、API - ref -->