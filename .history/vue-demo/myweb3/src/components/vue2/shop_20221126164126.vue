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
          <td v-text="book.name"></td>
          <td v-text="book.date"></td>
          <td>{{ book.price | priceRule }}</td>
          <td>
            <button @click="sub(index)">-</button>
            <span>{{ book.num }}</span>
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
export default {
  data() {
    return {
      titles: ["编号", "书籍名称", "出版日期", "价格", "购买数量", "操作"],
      books: [
        {
          id: 1,
          name: "算法导论",
          date: "2006-9",
          price: 85,
          num: 1,
        },
        {
          id: 2,
          name: "UNIX编程艺术",
          date: "2006-2",
          price: 59,
          num: 1,
        },
        {
          id: 3,
          name: "Vue程序设计",
          date: "2008-10",
          price: 35,
          num: 1,
        },
        {
          id: 4,
          name: "颈椎康复",
          date: "2006-3",
          price: 129,
          num: 1,
        },
      ],
    };
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

<style>
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
