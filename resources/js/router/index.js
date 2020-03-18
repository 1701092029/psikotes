import Vue from "vue"
import Router from "vue-router"

import login from "./login"
import register from "./register"
import soal from "./soal"

Vue.use(Router)
const router = new Router({
    mode:'history',
    routes:[
        login,
        register,
        soal
    ]
})

export default router
