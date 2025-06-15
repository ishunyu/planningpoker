import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import user from '@/models/user'
import ls from 'local-storage'
import config from './config'

user.name = ls.get('user_name')
user.id = ls.get('user_id')

axios.interceptors.request.use(req => {
    req.headers.authorization = `Bearer ${user.id}`;
    return req;
});

const apiBase = config.URL_SUBDIR + "/api/v1";
console.log("API base URL:", apiBase);

axios.defaults.baseURL = apiBase;

Vue.config.productionTip = false

const vue = new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

window.addEventListener('beforeunload', () => {
    vue.$destroy();
});
