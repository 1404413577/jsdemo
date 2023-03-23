<template>
    <div>
        <p>首页</p>
        <p>{{count}}</p>
        <button @click="btnClickFn">累加</button>
    </div>
</template>

<script>
import {ref} from "vue";
export default {
    setup(){
        return btnClickFn;
       
    },
    function (){
        const count = ref(0);
        btnClickFn = () =>{
            count.value++;
        }
    }
    


}
</script>

<style>

</style>