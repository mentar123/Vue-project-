import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/books.vue'
import Words from './views/words.vue'
import Signin from './views/signin.vue'
import Signup from './views/signup.vue'
import Profile from './views/profile.vue'
import store from './store'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/words',
      name: 'Words',
      component: Words
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
   
  ],
  mode:'history'
})
function AuthGuard(from,to,next){
  if(store.getters.isAuthenticated){
    next()
  }else{
    next('/signin');
  }
}