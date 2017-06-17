import Home from './Home.vue';  
import Indexs from './Index.vue'
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
];