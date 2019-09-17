import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/index",
      component: () => import("./components/indexcal.vue"),
      children: [
        // {
        //   path:"/user1-1",
        //   component:()=> import (`./components/user1/user1-1`)
        // },
        // {
        //   path:"/user1-2",
        //   component:()=> import (`./components/user1/user1-2`)
        // }
      ]
    },
    {
      path: "/404",
      component: () => import("./views/d404.vue")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  },
})

//取消router跳转警告
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;

//全局前置路由
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("user") ? true : false;    //判断是否有属性值
  if (token) {
    if (store.state.async_routes.length > 0) {      //判断是否页面刷新
      next()
    } else {
      if (sessionStorage.getItem("routes")) {       //判断本地是否有存储
        if (to.path.indexOf("/login") !== -1) return next() //判断url输入的是否为login
        store.dispatch("async_route", JSON.parse(sessionStorage.getItem("user")))
      }
    }
  } else {
    if (to.path.indexOf("/login") !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

//全局后置钩子
// router.afterEach((to, from) => {
//   let bodySrcollTop = document.body.scrollTop
//   if (bodySrcollTop !== 0) {
//     document.body.scrollTop = 0
//     return
//   }
//   let docSrcollTop = document.documentElement.scrollTop
//   if (docSrcollTop !== 0) {
//     document.documentElement.scrollTop = 0
//   }
// })