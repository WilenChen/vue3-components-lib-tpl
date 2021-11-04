import { createApp } from 'vue';
import App from './App.vue';
import UI from '../packages';
// import iotUI from '../lib/index.es';

const app = createApp(App);
app.use(UI);

app.mount('#app');

console.log(app._component);
