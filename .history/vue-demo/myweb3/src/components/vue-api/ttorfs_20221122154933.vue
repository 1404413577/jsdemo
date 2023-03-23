<template>
  <div>{{count}}</div>
  <button @click="changeCountFn">累加</button>
  <h1>{{obj.username}}</h1>
  <button @click="changeObj">修改</button>
</template>

<script>
import { ref,reactive, toRefs } from 'vue';
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
        let newObj = toRefs(obj)
        return {count,obj,changeCountFn,...newObj ,changeObj}
    }

}
</script>

<style>

</style>