<template>
  <div>
    <p>{{count}}</p>
    <button @click="btnClick">累加</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let count = ref(0);
        let btnClick = ()=>{
            count++;
        }
        return {count,btnClick}
       
    }
}
</script>


<style>

</style>