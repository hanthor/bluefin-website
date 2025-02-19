import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './style/index.scss'
import { i18n } from './locales/schema';
import './assets/tailwind.css';

const app = createApp(App)
app.use(i18n)
app.mount('#app')
