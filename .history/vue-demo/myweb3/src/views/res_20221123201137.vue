<template>
  <div class="container">
    <div class="nav">
      <div
        class="btn"
        :class="{ active: itemIndex == index }"
        v-for="(item, index) in btnList"
        :key="index"
        @click="btnClick(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      class="detail"
      v-for="(item, index) in btnList"
      :key="index"
      v-show="itemIndex == index"
    >
      {{ item.nameContent }}
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


<style scoped>
.container {
  width: 500px;
  height: 500px;
}
.nav{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  background-color: chartreuse;
  align-items: center;
}
.detail{
  width: 100%;
  height: 70%;
  background-color: aqua;
  padding-top: 100px;
  text-align: center;
}
</style>