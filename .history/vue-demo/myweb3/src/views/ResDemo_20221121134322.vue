<template>
  <div>

  </div>
</template>

<script>
import { GetListData } from '@/request/api'
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