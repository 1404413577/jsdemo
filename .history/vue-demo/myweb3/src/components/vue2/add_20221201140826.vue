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
import axios from 'axios';
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
    add() {

        
      // 添加数据
      this.list.unshift({
        id: this.id,
        name: this.name,
      });
    },
  },
};
</script>

<style></style>
