<template>
    <div class="container">
    <div class="nav">
      <div class="btn" :class="{active : itemIndex == 1}" @click="btnClick(1)">苹果</div>
      <div class="btn" :class="{active : itemIndex == 2}" @click="btnClick(2)">杨桃</div>
      <div class="btn" :class="{active : itemIndex == 3}" @click="btnClick(3)">杨梅</div>
      <div class="btn" :class="{active : itemIndex == 4}" @click="btnClick(4)">荔枝</div>
    </div>
    <div class="detail">
      <div v-if="itemIndex == 1">我是苹果</div>
      <div v-if="itemIndex == 2">我是杨桃</div>
      <div v-if="itemIndex == 3">我是杨梅</div>
      <div v-if="itemIndex == 4">我是荔枝</div>
    </div>
  </div>
</template>

<script>
import  {getProduct,  getHome}  from '@/api/index'
import {ref} from "ref"
export default {
  setup(){
    const itemIndex = 

  },
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