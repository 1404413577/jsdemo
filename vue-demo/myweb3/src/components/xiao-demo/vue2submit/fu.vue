<template>
  <div>
    <children
      :title="title"
      @getChildren="getChildren"
      :content="content"
    ></children>
    <div>子组件说： {{ childrenAsk }}</div>
  </div>
</template>
<script>
import children from "@/components/xiao-demo/vue2submit/zi.vue";
export default {
  components: {
    children,
  },
  data() {
    return {
      title: "我是父组件传过来的值",
      childrenAsk: "", // 接收子组件传值的赋值
      content: "你好 世界",
    };
  },
  methods: {
    getChildren(val) {
      this.childrenAsk = val;
      this.content = val;
      console.log('value: ' + val)
    },
  },
};
</script>
