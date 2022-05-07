import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VuetifyMoney from "vuetify-money";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VuetifyMoney)
app.use(router)

app.mount('#app')
