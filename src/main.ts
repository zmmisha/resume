import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const name = 'hello'

console.log(name);



createApp(App).use(router).mount('#app')
