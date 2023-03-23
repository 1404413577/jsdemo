<template>
  <div>
    <label
      >id:
      <input type="text" v-model="id" />
    </label>
    <label
      >Name:
      <input type="text" v-model="name" />
    </label>
    <label
      >date:
      <input type="text" v-model="date" />
    </label>
    <label
      >prince:
      <input type="text" v-model="prince" />
    </label>
    <label
      >num:
      <input type="text" v-model="num" />
    </label>
    <input type="button" value="add" @click="add" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
      name: "",
      date: "",
      prince: "",
      num: "",
    };
  },
  methods: {
    // 添加数据
    add() {
      axios({
        url: "http://localhost:5050/book/add",
        method: "POST",
        data: {
          id: this.id,
          name: this.name,
          date: this.harvestTime,
          prince: this.prince,
          num: this.name,
        },
        success(res) {
          console.log(res);
        },
        error(err) {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style></style>
