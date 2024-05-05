import './assets/main.css'
import './assets/script.js'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Импортируйте ваш роутер

const app = createApp(App);

app.use(router); // Используйте ваш роутер
app.mount('#app'); // Монтируйте ваше приложение на элемент с id 'app'

