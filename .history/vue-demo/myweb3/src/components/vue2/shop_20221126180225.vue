<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(title, index) in titles" :key="index" v-text="title"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in books" :key="item.id">
          <td v-text="index"></td>
          <td v-text="item.name"></td>
          <td v-text="item.date"></td>
          <td>{{ item.prince | princeRule }}</td>
          <td>
            <button @click="sub(index)">-</button>
            <span>{{ item.num }}</span>
            <button @click="add(index)">+</button>
          </td>
          <td>
            <button @click="remove(index)">移除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">总价格：{{ totalPrice | priceRule }}</td>
        </tr>
      </tfoot>
    </table>
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
  filters: {
    priceRule(value) {
      return "￥" + value.toFixed(2);
    },
  },
  computed: {
    totalPrice() {
      return this.books.reduce((prev, current) => {
        prev += current.num * current.price;
        return prev;
      }, 0);
    },
  },
  methods: {
    add(idx) {
      this.books[idx].num++;
    },
    sub(idx) {
      this.books[idx].num--;
      if (this.books[idx].num == 0) {
        this.books.splice(idx, 1);
      }
    },
    remove(idx) {
      this.books.splice(idx, 1);
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
