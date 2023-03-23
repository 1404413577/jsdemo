<template>
  <div>
    父组件传过来的值：{{num}}
    <sunzi />
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