import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
import * as echarts from 'echarts'
 
const app = createApp(App)
 
app.config.globalProperties.$echarts = echarts 
 
app.use(store).use(router).use(VideoPlayer).mount('#app')

