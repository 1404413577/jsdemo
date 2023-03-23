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
    let obj = reactive({
        username:"hai",
        age:22,
        hobbies:["弹吉他","弹钢琴"]
    })

    let changeObj = () =>{
        obj.username = "lang"  
    }
    console.log(obj.username)
    return {obj ,changeObj}
    

}
</script>

<style>

</style>