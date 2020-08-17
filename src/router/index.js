import Vue from 'vue'
import VueRouter from 'vue-router'
import General from '../views/General';
import Chat from '../views/Chat';
import SelfIntroduction from '../views/SelfIntroduction';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'General',
      component: General
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/SelfIntroduction',
      name: 'SelfIntroduction',
      component: SelfIntroduction
    },
  ]

const router = new VueRouter({
  routes
})

export default router
