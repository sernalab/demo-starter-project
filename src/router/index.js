import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Profile from '@/pages/Profile'
import Applicants from '@/pages/Applicants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/applicants',
      name: 'Applicants',
      component: Applicants
    }
  ]
})