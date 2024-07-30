import {createRouter, createWebHistory} from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import BlogView from './views/BlogView.vue'
import ProfileView from './views/ProfileView.vue'
import PostsView from './views/PostsView.vue'
import LikesView from './views/LikesView.vue'
import NewsView from './views/NewsView.vue'
import PeopleYouMayKnow from './views/PeopleYouMayKnow.vue'
import HomeFooter from './views/HomeFooter.vue'
import ProfileFooter from './views/ProfileFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { hello: 'hello' },
      components: {
        default: HomeView,
        Sidebar: NewsView,
        Footer: HomeFooter
      }
    },
    {
      path: '/:id',
      name: 'profile',
      components: {
        default: ProfileView,
        Sidebar: PeopleYouMayKnow,
        Footer: ProfileFooter
      },
      children: [
        {
          path: 'posts',
          component: PostsView
        },
        {
          path: 'likes',
          component: LikesView
        },
      ]
    },
    {
      path: '/about',
      alias: ['/me', '/yoshipi'],
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog/:id',
      alias: '/article/:id',
      name: 'blog',
      component: BlogView,
      beforeEnter(to, from) {
        console.log('beforeEnter', to, from)
        return '/'
      }
    },
    {
      path: '/:catchAll(.*)*',
      name: 'notFound',
      props: true,
      redirect: {name: 'home'},
    }
  ],
  scrollBehavior(to, from, saveedPosition) {
    console.log(to, from, saveedPosition)
    return new Promise(resolve => {
      setTimeout(() => {
        if (saveedPosition) {
          return resolve(saveedPosition)
        }
        if (to.hash) {
          return resolve(
            {
              el: to.hash,
              top: 20,
              behavior: 'smooth'
            }
          )
        }
        return resolve({top: 0, left: 0, behavior: 'smooth'})
      }, 2000)
    })
  }
})
router.beforeEach(async(to, from) => {
  // if (to.meta.requireAuth)
  await new Promise ((resolve) => setTimeout(resolve, 2000))
  console.log(to, from)
  console.log('beforeEach')
  if (to.name === 'blog') return { name: 'home' }
})
router.beforeResolve(() => {
  console.log('beforeResolve')
})
router.afterEach(() => {
  console.log('afterEach')
})
export default router