import { createApp } from 'vue'
import App from './App.vue'


import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import router from './router'


const app = createApp(App)

app.use(vue3videoPlay)


app.use(router)
app.mount('#app')

