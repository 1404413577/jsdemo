<template>
  <div>
    <input type="text" v-model="msg" v-on:input="iptChange"/>
    <p>{{ msg }}</p>

    <hr>
    <select v-model="result">
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="watermelo">西瓜</option>
    </select>
  </div>
</template>
// v-model 是语法糖 v-model = :value+ @input 
<script>
export default {
  data() {
    return {
      msg: "你好 世界",
      result:"watermelo",
    };
  },
  methods:{
    iptChange(e) {
        // 每次触发DOM事件时会产生一个事件对象（也称event对象），此处的参数e接收事件对象。
        // 而事件对象也有很多属性和方法，其中target属性是获取触发事件对象的目标，
        // 也就是        绑定事件的元素，e.target表示该DOM元素，然后在获取其相应的属性值。
        console.log(e.target.value);
        this.msg = e.target.value
    }
  }
};
</script>

<style></style>
