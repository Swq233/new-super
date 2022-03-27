import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/home')
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile')
const Category = () => import('views/category/category')


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/home'

  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
  ,
  {
    path: '/category',
    component: Category
  }

  ,
  {
    path: '/home',
    component: Home
  }



]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
