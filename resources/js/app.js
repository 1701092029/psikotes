require('./bootstrap');
import Vue from "vue";
import App from './App';
import router from "./router"
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
// src/plugins/vuetify.js

import Vuetify from 'vuetify/lib'
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {}


new Vue({
    el: "#app",
    vuetify: new Vuetify(opts),
    router,
    template: "<App/>",
    components: {
        App
    }
})
