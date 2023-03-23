<template>
  <div>
    <p>{{count}}</p>
    <button @click="btnFn">累加</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        btnFn () {
            count++
        }

    }

}
</script>

<style>

</style>