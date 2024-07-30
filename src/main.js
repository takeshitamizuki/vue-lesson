import { createApp } from 'vue'
import App from './views/App125.vue'
import BaseIcon from './components/BaseIcon.vue'
import './assets/main.css'
import router from "./index.js";
import { createPinia } from 'pinia'
import {useCounterStore} from "@/store/counter.js";

const app = createApp(App)
const pinia = createPinia()
const counterStore = useCounterStore()
console.log('main.js', counterStore.count)
app.component('BaseIcon', BaseIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
