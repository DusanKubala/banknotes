import { createApp } from 'vue'
import App from './App.vue'
import BanknoteCard from "./components/BanknoteCard.vue"

const app = createApp(App);

app.component('banknote-card', BanknoteCard);

app.mount('#app')
