import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/lt_news'
    },
    {
      path: '/lt_news',
      name: 'news',
      component: News,
    }
  ]
})
