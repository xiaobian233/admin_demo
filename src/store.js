import Vue from 'vue'
import Vuex from 'vuex'
import router from "./router"
import {users} from "./api/routes"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //定义数据
    async_routes:[],  //路由规则
    
  },
  mutations: {    //修改数据
    list_arr(state,obj){
      let arr=[];
      obj.map(v=>{
        v.children.map(val=>{
          arr.push({
              path:`/${val.path}`,
              component:()=> import (`./components/${v.path}/${val.path}`),
              str:`./components/${v.path}/${val.path}`
          })
        })
      })      
      if(state.async_routes.length>0)router.options.routes[2].children=[];  //清空动态数组
      state.async_routes=arr; //路由
      router.options.routes[2].children.push(...arr)
      router.addRoutes(router.options.routes) //挂载路由
      //跳转侧边栏首页
      // sessionStorage.setItem("path",JSON.stringify(arr[0].path)) //进入路由跳转 
      setTimeout(()=>{
        router.push(arr[0].path)
      },666)
    }
  },
  getters: {     //定义修饰数据,类似于 计算属性

  },
  actions: {    //修改异步数据,提交对象为 mutations
    async_route(state,obj){
      let userList=users(obj);  //权限列表
      state.commit('list_arr',userList)
      sessionStorage.setItem("routes",JSON.stringify(userList))  //侧边栏
    }
  }
})
