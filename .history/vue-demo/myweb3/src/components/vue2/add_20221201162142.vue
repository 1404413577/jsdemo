<template>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      prince: "",
      num: "",
    };
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
      }).then((res) => {
        console.log(res.data);
        this.$forceUpdate();
      });
      // this.$forceUpdate();

      getBook({}).then((res) => {
        console.log(res.data);
        this.books = res.data;
      });
    },
  },
  computed: {
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

<style></style>
