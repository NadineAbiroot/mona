import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Account from '../components/Account.vue'
import Profile from '../components/Profile.vue'
import Home from '../components/Home.vue'
import Plans from '../components/Plans.vue'
import ProfileTest from '../components/ProfileTest.vue'
import Confirm from '../components/Confirm.vue'
import '../assets/main.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/profile1',
    name: 'ProfileTest',
    component: ProfileTest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
