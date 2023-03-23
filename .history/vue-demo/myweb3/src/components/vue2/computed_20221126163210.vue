<template>
  <div>
    <ul>
      <li>名：{{ firstname }}</li>
      <li>姓：{{ lastname }}</li>
      <li>姓名: <input type="text" v-model="username" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "liu",
      lastname: "hai",
    };
  },
  methods: {},
  computed: {
    username:{
        // return this.firstname + " " + this.lastname
        get:function() {
            return  this.firstname + " " + this.lastname;
        },
        set(newval) {
            console.log(newval);
            let arr = newval.split("");
            firstname =arr[0];
            lastname = arr[1];

        }
        
    },
  },
};
</script>

<style></style>
