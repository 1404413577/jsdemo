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
      >Name:
      <input type="text" v-model="name" />
    </label>
    <label
      >Name:
      <input type="text" v-model="name" />
    </label>
    <input type="button" value="add" @click="add" />
    <p v-for="item in list" :key="item.id">{{ item.id }}---{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      list: [
        {
          id: 1,
          name: "唐僧",
        },
        {
          id: 2,
          name: "猪八戒",
        },
        {
          id: 3,
          name: "孙悟空",
        },
        {
          id: 4,
          name: "沙悟净",
        },
      ],
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
