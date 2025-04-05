import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',
    meta: { title: '登录', noCache: true },
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: (resolve) => require(['@/views/features/redirect'], resolve)
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: (resolve) => require(['@/views/home'], resolve),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/municipal',
    component: Layout,
    hidden: true,
    redirect: '/municipal/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/details/municipalUnits/base'], resolve),
        name: 'MunicipalBase',
        meta: { title: '公共数据调查基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/municipalUnits/table'], resolve),
        name: 'MunicipalTable',
        meta: { title: '市级政府公共数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/district',
    component: Layout,
    hidden: true,
    redirect: '/district/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/details/districtUnits/base'], resolve),
        name: 'DistrictBase',
        meta: { title: '公共数据调查基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/districtUnits/table'], resolve),
        name: 'DistrictTable',
        meta: { title: '区级政府公共数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'center',
        component: (resolve) => require(['@/views/system/user/center'], resolve),
        name: '个人中心',
        meta: { title: '个人中心' }
      }
    ]
  }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
