<template>
    <div>
        <p>首页</p>
        <p>{{count}}</p>
        <button @click="btnClickFn">累加</button>
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

function objFn(){
    const obj = reactive({
        username:"hai",
    })

    let btnClick1 = () => {
            obj.username = "Mary"
        }
        
    console.log(obj.username)
    return {obj ,changeObj}
    

}
</script>

<style>

</style>