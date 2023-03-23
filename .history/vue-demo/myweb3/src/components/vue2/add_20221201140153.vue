<template>
    <div>
      <ul>
        <li v-for="(time,index) of listTable" :key="index" @click="copyNew(time,index)">
          {{time.id}}{{time.name1}}{{time.name2}} 添加
        </li>
      </ul>
  </div>
</template>

<script>
export default {
   data(){
      return{
        listTable:[
          {id:'1',name1:'a1',name2:'b1'},
          {id:'2',name1:'a2',name2:'b2'},
          {id:'3',name1:'a3',name2:'b3'},
        ],
      }
    },
}
</script>
