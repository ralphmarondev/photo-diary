import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/config/app.scss'
import 'bootstrap'

import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')
