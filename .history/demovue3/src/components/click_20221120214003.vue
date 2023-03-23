<template>
    <h3>
        {{count}}
    </h3>
    <button @click="count++">累加</button>
  
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        this.count++
    }

}
</script>

<style>

</style>