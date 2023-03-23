<template>
  <div class="main">
    <div>
        <nav>
            <span @click="btnFn(1)">图片</span>
            <span @click="btnFn(2)">专栏</span>
            <span @click="btnFn(3)">热点</span>
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
    },
    methods:{
        btnFn(val) {
            this.status = val;
        }
    }

}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.main{
    width: 500px;
    height: 300px;
    background-color: aquamarine;
    
}

.main nav{
    width: 100%;
    height: 50px;
    background-color: bisque;
}
.main nav span{
    width: 80px;
    border: 1px solid darkcyan;
}
</style>