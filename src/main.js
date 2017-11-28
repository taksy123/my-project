import Vue from 'vue'
import VueRouter from 'vue-router'
import Result from './Result.vue'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path:'/result', name: 'Result', component: Result},
    { path: '/', name: 'App', component: App }
  ],
});

const app = new Vue({
  router
}).$mount('#app');
