import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Applicants from '@/pages/Applicants'
import Projects from '@/pages/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
