<template>
    <div>
        <p>首页</p>
        <p>{{count}}</p>
        <button @click="btnClickFn">累加</button>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    data(){
        return {
            // count: 0		// 一旦把setup中的代码抽离，return中对应的值要去掉，否则ref无效
        }
    },
    setup(){
      	// 函数调用后就会返回一个对象，因此我们直接return
        return clickCountFn()
      	// 如果后期还想同时返回其他数据，可以将clickCountFn()的返回结果展开
      	// return {...clickCountFn(), 其他数据}
    }
}

// 封装一个函数，这样这块功能我们就能单独管理了
function clickCountFn(){
    const count = ref(1);
    let btnClickFn = () => {
        count.value++;
    }
    return {count, btnClickFn}
}
</script>

<style>

</style>