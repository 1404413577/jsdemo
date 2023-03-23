<template>
  <div>
      <h1>你好 测试</h1>
  </div>
</template>

<script>
import  GetListData  from '../fetch/api'

export default {
  created(){
    GetListData({
    }).then(res=>{
      console.log(res);
    })
  },

}
methods:{
     tijiao(){
         var that=this;    //使用that 指向外部的this（即vue对象）
         this.axios({
             method:'post',
             url:''
          }).then(function(resp){
                console.log(resp.data);
                this.mes=resp.data;
                })
            }
        }

console.log("123")
</script>


<style>

</style>