  <template>
    <h4>孙子组件：{{mynum}}</h4>
  </template>
  
  <script>
  import {inject} from 'vue' 
  export default {
      setup(){
          const mynum = inject('num');
          return {mynum}
      }
  }
  </script>
  