<template>
  <div>
    <!-- <Demo /> -->
    <Tab />
    <SHOP />
    <ZL></ZL>
    <!-- <add></add> -->
    <!-- <videoVue></videoVue> -->
    <Echarts> </Echarts>
  </div>
</template>

<script>
// import Demo from "@/components/vue2/demo.vue";
import Tab from "@/components/vue2/Tab.vue";
import SHOP from "@/components/vue2/shop.vue";
import ZL from "@/components/vue2/zhiling.vue"
// import add from "@/components/vue2/add.vue"
// import videoVue from "@/components/vue2/video.vue";
import Echarts from "@/components/xiao-demo/Echarts.vue"
export default {
  components: {
    // Demo,
    Tab,
    SHOP,
    ZL,
    // add，
    // videoVue,
    Echarts
  },
};
</script>

<style>

</style>
