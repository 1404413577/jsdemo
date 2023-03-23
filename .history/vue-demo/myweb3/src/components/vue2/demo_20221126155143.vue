<template>
  <div>
    <input type="text" v-model="msg" />
    <h3>{{ msg }}</h3>
    <button v-on:click="btnFn(1)">1</button>
    <button v-on:click="btnFn(2)">2</button>
    <button v-on:click="btnFn(3)">3</button>
    <hr />
    <h2 v-show="status == 1">1</h2>
    <h2 v-show="status == 2">2</h2>
    <h2 v-show="status == 3">3</h2>

    <hr />
    <button @click="dianji">点击</button>
    <div class="box" v-show="flag"></div>

    <hr />
    <a v-bind:href="link">跳转到百度</a>
    <a :href="link">跳转到百度</a>
    <button @click="goSin">切换为新浪</button>

    <hr />
    <ul>
      <!-- <li v-for="(item, index) in arr">{{ index }} - {{ item }}</li> -->
    </ul>
    <ul>
      <li v-for="(item, index) in list">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "你好 世界",
      status: 1,
      flag: true,
      link: "http://baidu.com",
      arr: ["张三", "里斯", "瓦昂五"],
      list:[
        {id:"m1",name:"张三"}
        {id:"m2",name:"里斯"}
        {id:"m3",name:"王五"}
        {id:"m4",name:"狗蛋"}
      ]
    };
  },
  methods: {
    btnFn(val) {
      this.status = val;
    },
    dianji() {
      console.log("123");
      this.msg = "";
      this.flag = !this.flag;
    },
    goSin() {
      this.link = "http://sina.com.cn";
    },
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>
