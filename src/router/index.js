import Vue from 'vue'
import Router from 'vue-router';
import guide from '../views/guide.vue'
import about from '../views/about.vue'
import content from '../views/content.vue';
import news from '../views/news.vue';
import message from '../views/message.vue';
import detaile from '../views/messageDeatile.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/guide',
    component: guide
  }, {
    path: '/about',
    component: about
  }, {
    path: '/content',
    component: content,
    children: [{
        path: 'news',
        component: news,
      }, {
        path: 'message',
        component: message,

      },
      {
        path: 'detaile',
        name: 'detaile',
        component: detaile,
      }, {
        path: '',
        redirect: 'news',
      }
    ]
  }, {
    path: '*',
    redirect: '/about'
  }, ]
})
