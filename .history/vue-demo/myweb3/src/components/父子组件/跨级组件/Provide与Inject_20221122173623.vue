<template>
  <div>
    <div></div>
  </div>
</template>

<script>
import {provide,inject} from 'vue' // 显式导入
export default {
  setup(){
    provide(name, value)
      	// name即为传过来的字段，第二个参数可选，可填写默认值
        const val = inject(name, defaultValue);
      	return {val}
    }
}


</script>

<style>

</style>