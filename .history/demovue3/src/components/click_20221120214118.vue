<template>
    <h2>{{count}}</h2>
  <button @click="btnClick">累加</button>
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        btnclick(){
            this.count++
        }
        
    }

}
</script>

<style>

</style>