<template>
  <div>
      <h1>你好 测试</h1>
  </div>
</template>

<script>
import  GetListData  from '../fetch/api.js'

export default {
  created(){
    GetListData({
    }).then(res=>{
      console.log(res);
    })
  },
}
console.log("123")
</script>


<style>

</style>