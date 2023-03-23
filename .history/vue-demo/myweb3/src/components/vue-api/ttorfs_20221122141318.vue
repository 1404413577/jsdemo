<template>
    <h2>{{count}}</h2>
    <button @click="btnClick">累加</button>
      <!-- 无需obj.username，直接username即可 -->
    <p>姓名：{{username}}</p>
    <button @click="btnClick1">修改姓名</button>
  </template>
  
  <script>
  // 新增toRefs方法
  import {ref, reactive, toRefs} from 'vue'
  export default {
      setup(){
          let obj = reactive({
              username: "Jack"
          })
          let btnClick1 = () => {
              obj.username = "Mary"
          }
          // 通过toRefs方法
          let refObj = toRefs(obj);
            // 通过...refObj将数据扩展
          return {...clickCountFn(), ...refObj, btnClick1}
      }
  }
  

  </script>
  