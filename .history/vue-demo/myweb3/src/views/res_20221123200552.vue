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
export default {
  data() {
    return {
      itemIndex: 1,
      btnList: [
        {
          name: "苹果",
          nameContent: "我是苹果",
        },
        {
          name: "杨桃",
          nameContent: "我是杨桃",
        },
        {
          name: "杨梅",
          nameContent: "我是杨梅",
        },
        {
          name: "荔枝",
          nameContent: "我是荔枝",
        },
      ],
    };
  },
  created(){
    getProduct().then(res=>{
      console.log(res);
    }),
    getHome().then(res1=>{
      console.log(res1)

    })
  },
  methods: {
    btnClick(index) {
      this.itemIndex = index;
    },
  },
};
</script>


<style>

</style>