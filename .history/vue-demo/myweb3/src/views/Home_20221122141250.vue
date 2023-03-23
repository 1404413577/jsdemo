<template>
    <div>
        <Setup /> 
        <Reactive />
        <TTrefs />
    </div>
</template>

<script>
import Setup  from '../components/vue-api/setup.vue'
import Reactive from "../components/vue-api/reactive.vue"
import TTrefs from "../components/vue-api/ttorfs.vue"
export default {
    components: {
        Setup,
        Reactive,
        TTrefs

    }

}


</script>

<style>

</style>