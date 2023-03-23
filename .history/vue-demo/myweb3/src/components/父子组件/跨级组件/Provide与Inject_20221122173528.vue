<template>
  <div>
    <div></div>
  </div>
</template>

<script>
import {provide} from 'vue' // 显式导入
export default {
  components:{

  },
  setup() {
    // 此处name必须是String类型，value则不限制
    provide(name, value)
  }
}


</script>

<style>

</style>