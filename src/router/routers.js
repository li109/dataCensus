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
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: (resolve) => require(['@/views/home'], resolve),
  //       name: 'Dashboard',
  //       meta: { title: '首页', icon: 'index', affix: true, noCache: true }
  //     }
  //   ]
  // },
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
  },
  {
    path: '/',
    component: Layout,
    redirect: '/list',
    children: [
      {
        path: 'list',
        component: (resolve) => require(['@/views/company/list'], resolve),
        name: 'List',
        meta: { title: '数据资源调查表', icon: 'index', affix: true, noCache: true }
      }
    ]
  },
  {
    path: '/units',
    component: Layout,
    hidden: true,
    redirect: '/units/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/governmentBase'], resolve),
        name: 'GovernmentBase',
        meta: { title: '公共数据调查基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/units/table'], resolve),
        name: 'UnitsTable',
        meta: { title: '市级政府公共数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/trade',
    component: Layout,
    hidden: true,
    redirect: '/trade/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/enterpriseBase'], resolve),
        name: 'TradeBase',
        meta: { title: '企业基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/trade/table'], resolve),
        name: 'TradeTable',
        meta: { title: '数据交易机构数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/lab',
    component: Layout,
    hidden: true,
    redirect: '/lab/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/enterpriseBase'], resolve),
        name: 'LabBase',
        meta: { title: '企业基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/lab/table'], resolve),
        name: 'LabTable',
        meta: { title: '国家实验室及全国重点实验室数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/service',
    component: Layout,
    hidden: true,
    redirect: '/service/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/enterpriseBase'], resolve),
        name: 'ServiceBase',
        meta: { title: '企业基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/service/table'], resolve),
        name: 'ServiceTable',
        meta: { title: '数据服务方数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/apply',
    component: Layout,
    hidden: true,
    redirect: '/apply/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/enterpriseBase'], resolve),
        name: 'ApplyBase',
        meta: { title: '企业基本情况', noCache: true }
      },
      {
        path: 'item/:id',
        component: (resolve) => require(['@/views/company/details/apply/item'], resolve),
        name: 'ApplyItem',
        meta: { title: '数据资源调查', noCache: true }
      },
      {
        path: 'other',
        component: (resolve) => require(['@/views/company/details/apply/other'], resolve),
        name: 'ApplyOther',
        meta: { title: '其他数据资源调查', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/apply/table'], resolve),
        name: 'ApplyTable',
        meta: { title: '数据应用方数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/serviceApply',
    component: Layout,
    hidden: true,
    redirect: '/serviceApply/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/enterpriseBase'], resolve),
        name: 'ServiceApplyBase',
        meta: { title: '企业基本情况', noCache: true }
      },
      {
        path: 'item/:id',
        component: (resolve) => require(['@/views/company/details/apply/item'], resolve),
        name: 'ServiceApplyItem',
        meta: { title: '数据资源调查', noCache: true }
      },
      {
        path: 'other',
        component: (resolve) => require(['@/views/company/details/apply/other'], resolve),
        name: 'ServiceApplyOther',
        meta: { title: '其他数据资源调查', noCache: true }
      },
      {
        path: 'serviceTable',
        component: (resolve) => require(['@/views/company/details/service/table'], resolve),
        name: 'ServiceApplyTable1',
        meta: { title: '数据服务方数据资源调查表', noCache: true }
      },
      {
        path: 'applyTable',
        component: (resolve) => require(['@/views/company/details/apply/table'], resolve),
        name: 'ServiceApplyTable2',
        meta: { title: '数据应用方数据资源调查表', noCache: true }
      }
    ]
  },
  {
    path: '/central',
    component: Layout,
    hidden: true,
    redirect: '/central/base',
    children: [
      {
        path: 'base',
        component: (resolve) => require(['@/views/company/enterpriseBase'], resolve),
        name: 'CentralBase',
        meta: { title: '企业基本情况', noCache: true }
      },
      {
        path: 'table',
        component: (resolve) => require(['@/views/company/details/central/table'], resolve),
        name: 'CentralTable',
        meta: { title: '央企数据资源调查', noCache: true }
      }
    ]
  },
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
