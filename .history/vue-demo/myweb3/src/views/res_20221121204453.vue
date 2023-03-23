<template>
  <div>
      <h1>你好 测试</h1>
  </div>
</template>

<script>
import  {getProduct,  getHome}  from '@/api/index'
export default {
  created(){
    getProduct().then(res=>{
      console.log(res);
    }),
    getHome().then(res1=>{
      console.log(res1)

    })
  },

}

console.log("123")
</script>


<style>

</style>