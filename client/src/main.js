import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {autoAnimatePlugin} from '@formkit/auto-animate/vue'
import './index.css'

const app = createApp(App).use(autoAnimatePlugin);
app.use(router)
app.mount("#app")


