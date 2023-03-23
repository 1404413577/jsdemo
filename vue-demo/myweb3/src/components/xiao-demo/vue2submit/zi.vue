<template>
  <div>
    <div>父组件传过来的值： {{ title }}</div>
    <button @click="askToFather">点击发送给父组件</button>
    <p>{{ content }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
      default: "你好 世界",
    },
  },
  data() {
    return {
      askMsg: "这是我给父组件说的话",
    };
  },
  methods: {
    askToFather() {
      this.$emit("getChildren", this.askMsg); // 推送的的自定义事件
      this.$emit("getChildren", "hello world");
    },
  },
};
</script>
