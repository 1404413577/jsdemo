<template>
    <h2>{{count}}</h2>
    <button @click="btnClick">累加</button>
    <p>姓名：{{obj.username}}</p>
    <button @click="btnClick1">修改姓名</button>
  </template>
  
  <script>
  import {ref, reactive} from 'vue'
  export default {
      setup(){
            // 使用reactive
          let obj = reactive({
              username: "Jack"
          })
          let btnClick1 = () => {
              obj.username = "Mary"
          }
                  return {...clickCountFn(), obj, btnClick1}
      }
  }
  
  function clickCountFn(){
      const count = ref(1);
      let btnClick = () => {
          count.value++;
      }
      return {count, btnClick}
  }
  </script>
  