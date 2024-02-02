import { createApp } from 'vue'
//引入懒加载插件
import { lazyPlugin } from './directives/lazyLoad'
import App from './App.vue'
const app = createApp(App)
app.use(lazyPlugin)
app.mount('#app')
