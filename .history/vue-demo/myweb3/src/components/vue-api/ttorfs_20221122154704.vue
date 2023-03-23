<template>
  <div>{{count}}</div>
  <button @click="changeCountFn">累加</button>
  <h1>{{obj.username}}</h1>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
    setup() {
        const count = ref(1);
       
        let changeCountFn = () =>{
            count.value++;
        }
        let obj = reactive({
            username:"hai"
        })
        let changeObj = () =>{
            obj.username = "lang"
        }
        return {count,obj,changeCountFn,changeObj}
    }

}
</script>

<style>

</style>