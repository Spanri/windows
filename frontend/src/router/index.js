import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'
import Shop from '@/components/Shop'
import Calculator from '@/components/Calculator'
import NotFound from '@/components/NotFound'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/calc',
      name: 'Calculator',
      component: Calculator
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
