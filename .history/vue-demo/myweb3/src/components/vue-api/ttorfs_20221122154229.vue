<template>
  <div>{{count}}</div>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
    setup() {
        const count = ref(1);
        let obj = reactive({
            username:"hai"
        })
        
    }

}
</script>

<style>

</style>