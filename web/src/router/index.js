import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import config from '../config'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'Games',
        component: Game,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: config.URL_SUBDIR,
    routes
})

export default router
