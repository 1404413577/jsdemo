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
          <td>{{item.price | priceRule}}</td>
          <td></td>
          <td>
            <button @click="sub(index)">-</button>
            <span>{{index.num}}</span>
            <button @click="add(index)">+</button>
          </td>
          <td>
            <button @click="remove(index)">移除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
            <td colspan="6">总价格：{{totalPrice | priceRule}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { getBook } from '@//api'
export default {
  data() {
    return {
      
    };
  },
  created(){
    getBook({
    }).then(res=>{
      console.log(res);
    })
  },
  filters: {},
  computed: {},
  methods: {},
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
