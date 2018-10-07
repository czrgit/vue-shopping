// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Cell, CellGroup, Button, Row, Col,Swipe,SwipeItem,Lazyload,List,Tabbar,TabbarItem,Icon,Tab,Tabs,Checkbox, CheckboxGroup, Card, SubmitBar, Toast,Tag} from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Tabbar).use(TabbarItem).use(Icon).use(Tab).use(Tabs).use(Cell).use( CellGroup).use(Checkbox).use(CheckboxGroup).use(Card).use(SubmitBar).use(Toast).use(Tag)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
