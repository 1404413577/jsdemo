<template>
  <div>父组件</div>
  <hr>
  <Child :name="num" />
</template>

<script>
import Child from "./Child.vue"
export default {
    data() {
        return{
            num:10

        }
    },
    props:['num'],
    components:{
        Child
    }

}
</script>

<style>

</style>