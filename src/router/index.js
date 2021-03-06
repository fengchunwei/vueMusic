import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeContainer from '../components/tablebar/HomeContainer.vue'
import SingerContainer from '../components/tablebar/SingerContainer.vue'
import ListContainer from '../components/tablebar/ListContainer.vue'
import MyContainer from '../components/tablebar/MyContainer.vue'
import SearchContainer from '../components/tablebar/SearchContainer.vue'
import DayList from '../components/more/DayList.vue'

export default new Router({
  routes: [
    {path:'/',redirect:'/HomeContainer'},
    {path:'/HomeContainer',component:HomeContainer},
    {path:'/SingerContainer',component:SingerContainer},
    {path:'/ListContainer',component:ListContainer},
    {path:'/MyContainer',component:MyContainer},
    {path:'/SearchContainer',component:SearchContainer},
    {path:'/DayList',component:DayList},
  ]
})