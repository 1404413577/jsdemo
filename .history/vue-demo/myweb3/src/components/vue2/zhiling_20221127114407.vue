<template>
  <div>
    <input type="text" v-bind="msg" />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "你好 世界",
    };
  },
};
</script>

<style></style>
