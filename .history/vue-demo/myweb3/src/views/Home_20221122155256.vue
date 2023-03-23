<template>
    <div>
        <Setup /> 
        <Reactive />
        <TTrefs />
        <ProInj />
    </div>
</template>

<script>
import Setup  from '../components/vue-api/setup.vue'
import Reactive from "../components/vue-api/reactive.vue"
import TTrefs from "../components/vue-api/ttorfs.vue"
import ProInj from "../components/vue-api/Provide与Inject.vue"
export default {
    components: {
        Setup,
        Reactive,
        TTrefs,
        ProInj

    }

}


</script>

<style>

</style>