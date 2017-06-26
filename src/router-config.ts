import Home from './Home.vue';  
import Index from './Index.vue'
import Countdown from './Play.vue'

export const routes = [  
  {
    path:'/',
    component:Index,
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