import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Loading from '@/components/Loading.vue';

const app = createApp(App);

app.component('Loading', Loading);

app.use(router);

app.mount('#app');
