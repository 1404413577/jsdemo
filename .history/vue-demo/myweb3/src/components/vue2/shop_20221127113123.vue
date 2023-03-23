<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in titles" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody></tbody>
      <tfoot></tfoot>
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
