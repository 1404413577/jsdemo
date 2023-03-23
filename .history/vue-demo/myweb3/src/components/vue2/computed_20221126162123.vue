<template>
  <div>
    <ul>
      <li>名：{{ firstname }}</li>
      <li>姓：{{ lastname }}</li>
      <li>姓名: <input type="text" v-model="username" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "liu",
      lastname: "hai",
    };
  },
  methods: {},
  computed: {
    username() {
        return this.firstname + " " + this.lastname
    },
  },
};
</script>

<style></style>
