import Vue from 'vue' 
import VueRouter from 'vue-router' 
import HomeView from '../views/HomeView.vue' 
import AboutView from '../views/AboutView.vue' 
import Movie from '../components/movie.vue' 
import Admin from '../components/admin.vue' 
 
Vue.use(VueRouter) 
 
const routes = [ 
  { 
    path: '/', 
    name: 'home', 
    component: HomeView 
  }, 
  { 
    path: '/about', 
    name: 'about', 
    component: AboutView 
  }, 
  { 
    path: '/:id', 
    name: 'movie', 
    component: Movie 
  },
  { 
    path: '/adminpanel', 
    name: 'admin', 
    component: Admin 
  } 
] 
 
const router = new VueRouter({ 
  mode: 'history', 
  base: process.env.BASE_URL, 
  routes 
}) 
 
export default router