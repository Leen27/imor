import './assets/normalize.css'
import './assets/main.css'
import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@cvrts/ui/dist/style.css'
import '@cvrts/editor/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
