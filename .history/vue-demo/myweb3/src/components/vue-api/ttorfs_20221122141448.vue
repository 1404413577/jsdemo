<template>
  
</template>

<script>
export default {
    setup(){
        let obj = reactive({
            username: "Jack"
        })
        let btnClick1 = () => {
            obj.username = "Mary"
        }
        // 通过toRefs方法
        let refObj = toRefs(obj);
      	// 通过...refObj将数据扩展
        return {...clickCountFn(), ...refObj, btnClick1}
    }

}
</script>

<style>

</style>