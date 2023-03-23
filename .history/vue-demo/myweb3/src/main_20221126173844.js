import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// 用法：1.{{ item.time | format("YYYY-MM-DD HH:mm:ss") }}
// 用法：2. this.$moment(this.time).format("YYYY-MM-DD HH:mm:ss");
Vue.filter('format', function (input, fmtstring) {
    // 使用momentjs这个日期格式化类库实现日期的格式化功能
    return moment(input).format(fmtstring);
  });