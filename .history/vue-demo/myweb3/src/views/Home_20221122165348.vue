<template>
    <div>
        <Setup /> 
        <Reactive />
        <TTrefs />
        <Father />
        <ProInj />
    </div>
</template>

<script>
import Setup  from '../components/vue-api/setup.vue'
import Reactive from "../components/vue-api/reactive.vue"
import TTrefs from "../components/vue-api/ttorfs.vue"
import ProInj from "../components/父子组件/跨级组件/Provide与Inject.vue"
import Father  from "../components/父子组件/Father.vue"
export default {
    components: {
        Setup,
        Reactive,
        TTrefs,
        ProInj,
        Father

    }

}


</script>

<style>

</style>