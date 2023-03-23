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
          <td>{{ item.id }}</td>
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
      >prince:
      <input type="text" v-model="prince" />
    </label>
    <label
      >num:
      <input type="text" v-model="num" />
    </label>
    <input type="button" value="add" @click="add" />
  </div>
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
      id: "",
      name: "",
      prince: "",
      num: "",
    };
  },
  created() {
    getBook({}).then((res) => {
      // console.log(res);
      this.books.push(res.data);
    });
  },
  methods: {
    add() {
      axios({
        url: "http://localhost:5050/book/add",
        method: "POST",
        data: {
          id: this.id,
          name: this.name,
          date: this.harvestTime,
          prince: this.prince,
          num: this.num,
        },
      }).then((res)=>{
        console.log(res);
        // console.log(this.books);
        this.books=res.data;
    
      });
      console.log(this.books);
    },
    addFn(index) {
      this.books[index].num++;
    },
    subFn(index) {
      this.books[index].num--;
      if (this.books[index].num == 0) {
        this.books.splice(index, 1);
      }
    },
    remove(id) {
      console.log(id);
      axios({
        url: "http://localhost:5050/book/del",
        method: "POST",
        data: {
          id: id,
        }
      });
      this.books.splice(id, 1);
    },
  },
  computed: {
    totalPrice() {
      return this.books.reduce((prev, current) => {
        prev += current.num * current.prince;
        return prev;
      }, 0);
    },
    harvestTime() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      var time = `${year}-${month}-${day}-${hour}-${minute}-${second}`;
      return time;
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
