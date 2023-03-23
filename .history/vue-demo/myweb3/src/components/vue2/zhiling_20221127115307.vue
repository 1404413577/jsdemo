<template>
  <div>
    <input type="text" v-model="msg" v-on:input="iptChange"/>
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
  methods:{
    iptChange(e) {
        console.log(e.target.value);
        this.msg = e.target.value

    }
  }
};
</script>

<style></style>
