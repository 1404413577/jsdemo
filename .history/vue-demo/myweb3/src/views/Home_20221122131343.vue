<template>
    <div>
        <p>首页</p>
        <p>{{count}}</p>
        <button @click="btnClick">累加</button>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
setup (){
    return btnClickFn
    
}
}
function btnClickFn(){
    const {count} = ref(0);
    let btnClick = () =>{
        count.value++;
    }
    return {count,btnClick}

}
</script>

<style>

</style>