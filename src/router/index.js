import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import Category from '@/components/pages/Category'
import Cart from '@/components/pages/Cart'
import Personal from '@/components/pages/Personal'
import tabbar from '@/components/component/tabbar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall,tabbar
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category,tabbar
    },
    {
      path: '/Cart',
      name: 'Cart',
      component:Cart,tabbar
    },
    {
      path: '/Personal',
      name: 'Personal',
      component:Personal,tabbar
    }
  ]
})
