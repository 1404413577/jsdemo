<template>
  <div class="main">
    <div>
        <nav>
            <span @click="btn(1)">图片</span>
            <span @click="btn(2)">专栏</span>
            <span @click="btn(3)">热点</span>
        </nav>
        <div v-show="status == 1">1</div>
        <div v-show="status == 2">2</div>
        <div v-show="status == 3">3</div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            status : 1
        }
    }

}
</script>

<style>

</style>