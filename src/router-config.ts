import Home from './Home.vue';  
import Indexs from './Index.vue'
import Countdown from './Play.vue'

export const routes = [  
  {
    path:'/',
    component:Indexs,
    children:[]
  },
  {
    path: '/Home',
    component: Home,
    children: [],
  },
  {
    path: '/Play',
    component: Countdown,
    children: [],
  },
];