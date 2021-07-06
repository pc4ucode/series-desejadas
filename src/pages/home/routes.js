export default [
  {
    name: 'home',
    path: '/',
    component: () => import(/* webpackChunkName: "login" */ './Home')
  }
]
