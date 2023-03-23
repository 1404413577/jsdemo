<template>
  <div>
    <p>{{count}}</p>
    <button @click="btnClick">累加</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    data(){
        return {
            count: 0
        }
    },
    setup(){
        const count = ref(1);	// 此时我们使用ref指定count的默认值为1，因此上面data中的count会失效
        let btnClick = () => {
            count.value++;		// 修改ref中的值要用xxx.value
        }
        return {count, btnClick}
    }
}
</script>


<style>

</style>