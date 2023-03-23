<template>
  <div>
    <p>{{count}}</p>
    <button @click="btnFn">累加</button>
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
};
</script>


<style>

</style>