<template>
  
</template>

<script>
import { GetHomeData, GoLogin } from '@/request/api'
export default {
  created(){
    GetHomeData({
      page: 1
    }).then(res=>{
      console.log(res);
    })
  },
  methods: {
    btnClick(){
      GoLogin({
        username: "Lucy"
      }).then(res=>{
        console.log(res);
      })
    }
  }
}
</script>


<style>

</style>