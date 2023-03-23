<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in titles" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in books" :key="item.id">
          <td>{{ index }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.prince | filterMoney }}</td>
          <td>
            <button @click="subFn(index)">-</button>
            <span>{{ item.num }}</span>
            <button @click="addFn(index)">+</button>
          </td>
          <td>
            <button>移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>总价格：{{ 123 | filterMoney }}</p>
  </div>
</template>

<script>
import { getBook } from "@/api";
export default {
  data() {
    return {
      titles: ["编号", "书籍名称", "出版日期", "价格", "购买数量", "操作"],
      books: [],
    };
  },
  created() {
    getBook({}).then((res) => {
      console.log(res);
      this.books = res.data;
    });
  },
  methods: {
    addFn(index) {
      this.books[index].num++;
    },
    subFn(index) {
      if (this.books[idx].num == 0) {
        this.books.splice(idx, 1);
      }
      this.books[index].num--;
    },
  },
};
</script>

<style scoped>
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th {
  background-color: #f7f7f7;
}
</style>
