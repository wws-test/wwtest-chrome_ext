import { createApp } from 'vue'

import App from '../view/popup.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
// import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/tailwind.css';
import '@/assets/css/popup.css';
import Vuetify from '../plugins/vuetify';


const api = axios.create({
    baseURL: 'http://localhost:3000',
});

const app = createApp(App);

app.use(Vuetify)

app.use(VueAxios, api);

// Send log messages to background.js
app.config.globalProperties.$log = function (message) {
    chrome.runtime.sendMessage({ action: 'log', message: message });
};

app.mount('#app');


