<template>
    <div>
        <p>首页</p>
        <p>{{count}}</p>
        <p>{{username}}</p>
        <button @click="btnClickFn">累加</button>
        <button @click="btnClick1">点击</button>
    </div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
setup (){
    return clickCountFn(),objFn()
    
}
}

function clickCountFn(){
    const count = ref(1);
    let btnClickFn = () => {
        count.value++;
    }
    return {count, btnClickFn}
}

function clickCountFn(){
    const obj = reactive({
        username:"hai",
    })

    let btnClick1 = () => {
            obj.username = "Mary"
        }
        return {...clickCountFn(), obj, btnClick1}
}
</script>

<style>

</style>