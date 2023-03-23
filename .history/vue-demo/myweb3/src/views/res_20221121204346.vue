<template>
  <div>
      <h1>你好 测试</h1>
  </div>
</template>

<script>
import  {getProduct getHome}  from '@/api/index'
export default {
  created(){
    getProduct().then(res=>{
      console.log(res);
    })
  },

}

console.log("123")
</script>


<style>

</style>