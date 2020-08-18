import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageView from '../views/MessageView'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/:channelId',
      name: 'General',
      component: MessageView
    },
    {
      path: '*',
      redirect: '/general'
    }
  ]

const router = new VueRouter({
  routes
})

export default router
