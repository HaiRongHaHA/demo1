// import { RouteRecordRaw } from 'vue-router';

const Home = () => import('@/views/Home');
const Vuex = () => import('@/views/Vuex');

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex,
  },
];

// routes: Array<RouteRecordRaw> =
