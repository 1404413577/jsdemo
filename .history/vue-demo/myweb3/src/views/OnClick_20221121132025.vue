<template>
  <div>
    <p>{{count}}</p>
    <button @click="btnClick">累加</button>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  setup() {
    return {
        count:0
    };
  },
  methods: {
        btnClick(){
            this.count++;
        }
    }
};
</script>


<style>

</style>