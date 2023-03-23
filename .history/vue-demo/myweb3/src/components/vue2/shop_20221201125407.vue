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
          <td>{{ item.prince }}</td>
          <td>
            <button @click="subFn(index)">-</button>
            <span>{{ item.num }}</span>
            <button @click="addFn(index)">+</button>
          </td>
          <td>
            <button @click="remove(index)">移除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>总价格：{{ totalPrice }}</p>

    <hr />
    <button @click="addFn">添加数据</button>
  </div>
</template>

<script>
import { getBook, addBook, delBook } from "@/api";
import axios from "axios";
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
      if (this.books[index].num == 0) {
        this.books.splice(index, 1);
      }
      this.books[index].num--;
    },
    remove(index) {
      delBook({
        data: this.books[index].data,
      }).then((res) => {
        console.log(res);
      });
    },
    // data: { id: 7, name: "js", date: "2023-8-9", prince: 55, num: 8 },
    addFn() {
      axios({
        url: "/book/add",
        method: "POST",
        data: {
          id: 13,
          name: "js",
          date: getNowTime(),
          prince: "56",
          num: "1",
        },
        success(res) {
          console.log(res);
        },
        error(err) {
          console.log(err);
        },
      });

      // addBook({
      //   data: { id: 7, name: "js", date: "2023-8-9", prince: 55, num: 8 },
      // }).then((res) => {
      //   console.log(res);
      // });
    },
  },
  computed: {
    totalPrice() {
      return this.books.reduce((prev, current) => {
        prev += current.num * current.prince;
        return prev;
      }, 0);
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
