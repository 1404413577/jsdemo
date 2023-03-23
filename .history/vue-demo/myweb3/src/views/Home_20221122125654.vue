<template>
    <div>
        <p>首页</p>
        <p>{{count}}</p>
    </div>
</template>

<script>
import {ref} from "vue";
export default {
    setup(){
        let count = ref(0);
        return {count}
    }
    


}
</script>

<style>

</style>