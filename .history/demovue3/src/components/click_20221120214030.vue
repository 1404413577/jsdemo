<template>
    <h3>
        {{count}}
    </h3>
    <button @click="btnclick">累加</button>
  
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