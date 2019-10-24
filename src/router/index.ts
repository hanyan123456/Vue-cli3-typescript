/*
 * @Author: 寒嫣
 * @Date: 2019-10-22 14:02:48
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/layout.vue'
// import Home from '../views/home.vue'

Vue.use(VueRouter)
/**
* hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
* name:'router-name'             路由名称，必须填写
* meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
  }
**/
// 导出路由，外部组件可以访问
export const asyncRouterMap = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    hidden: true,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', icon: 'fa fa-home' },
        component: () => import('@/views/home.vue')
      }
    ]
  },
  {
    path: '/dataMain',
    name: 'dataMain',
    component: Layout,
    hidden: true,
    meta: { title: '数据管理', icon: 'fa fa-database' },
    redirect: '/tableData',
    children: [
      {
        path: '/tableData',
        name: 'tableData',
        meta: { title: '表格管理', icon: 'fa fa-table' },
        component: () => import('@/views/dataMain/tableData.vue')
      },
      {
        path: '/chartsData',
        name: 'chartsData',
        meta: { title: '图表管理', icon: 'fa fa-bar-chart' },
        component: () => import('@/views/dataMain/chartsData.vue')
      },
      {
        path: '/formData',
        name: 'formData',
        meta: {
          title: '表单管理',
          icon: 'fa fa-file-text-o',
          roles: ['admin', 'editor']
        },
        component: () => import('@/views/dataMain/formData.vue')
      }
    ]
  },
  {
    path: '/userManage',
    name: 'userManage',
    component: Layout,
    hidden: true,
    redirect: '/accountData',
    children: [
      {
        path: '/accountData',
        name: 'accountData',
        meta: { title: '账户管理', icon: 'fa fa-user-plus', roles: ['admin'] },
        component: () => import('@/views/userManage/accountData.vue')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/userInfo',
    hidden: false,
    children: [
      {
        path: '/userInfo',
        name: 'userInfo',
        meta: { title: '个人中心' },
        component: () => import('@/views/userManage/useInfo.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    hidden: false,
    meta: { title: '404' },
    component: () => import('@/views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/login',
    hidden: false,
    name: 'login',
    meta: { title: '系统登录' },
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/password',
    hidden: false,
    name: 'password',
    meta: { title: '找回密码' },
    component: () => import('@/views/Login/passWord.vue')
  },
]




// const routes = [
// {
//   path: '/',
//   name: 'layout',
//   component: Layout
// },
// {
//   path: '/login',
//   name: 'login',
//   component: () => import('@/views/Login/login.vue')
// },
// {
//   path: '/password',
//   name: 'password',
//   component: () => import('@/views/Login/passWord.vue')
// },
// ]

const router: any = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
})
router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = localStorage.tsToken ? true : false
  if (to.path == '/login' || to.path == '/password') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
