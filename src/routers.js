import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'


export default new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },

        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },

        {
            path: '/shop/:id',
            component: Product,

        }
    ]
})

