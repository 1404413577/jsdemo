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
            // 修改ref中的值要用xxx.value
            count.value++;
        }
        return {count,btnClick}
       
    }
}
</script>


<style>

</style>