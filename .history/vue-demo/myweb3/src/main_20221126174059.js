import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// 用法：1.{{ item.time | format("YYYY-MM-DD HH:mm:ss") }}
// 用法：2. this.$moment(this.time).format("YYYY-MM-DD HH:mm:ss");
import Moment from 'moment'

// 定义全局时间戳过滤器
Vue.filter('formatDate', function(value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})

Vue.config.productionTip = false