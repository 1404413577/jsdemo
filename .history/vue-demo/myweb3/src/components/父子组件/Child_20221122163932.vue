<template>
  <div>
    <sunzi :num="num"/>
  </div>
  
</template>

<script>
import sunzi  from "./sunzi.vue"
export default {
    props:['num'],
    components :{
        sunzi
    }

}
</script>

<style>

</style>