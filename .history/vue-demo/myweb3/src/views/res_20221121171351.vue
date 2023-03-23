<template>
  <div>
      <h1>你好 测试</h1>
  </div>
</template>

<script>
import { GetListData } from '@/request/api'
export default {
  created(){
    GetListData((res)=>{
      console.log(res)

    })
  }
}
</script>


<style>

</style>