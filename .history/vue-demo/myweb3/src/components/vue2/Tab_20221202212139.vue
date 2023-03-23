<template>
  <div class="main">
    <div>
      <nav>
        <span @click="btnFn(1)">图片</span>
        <span @click="btnFn(2)">专栏</span>
        <span @click="btnFn(3)">热点</span>
      </nav>

      <div v-show="status == 1">1</div>
      <div v-show="status == 2">2</div>
      <div v-show="status == 3">3</div>
    </div>
  </div>
</template>

<script>
import { getBanner } from "@/api/index.js";
export default {
  data() {
    return {
      status: 1,
      lun: [],
    };
  },
  created() {
    getBanner({}).then((res)=>{
        this.lun = res.data;
        console.log(res.data)
    })
  },
  methods: {
    btnFn(val) {
      this.status = val;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.main {
  width: 500px;
  height: 300px;
  background-color: aquamarine;
}

.main nav {
  width: 100%;
  height: 50px;
  background-color: bisque;
  display: flex;
  justify-content: space-around;
}
.main nav span {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid darkcyan;
  cursor: pointer;
}
</style>
