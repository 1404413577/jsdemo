<template>
  <div>
    
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
  
  },
  computed: {

  },
  methods: {

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
