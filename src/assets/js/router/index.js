import Vue from 'vue'
import VueRouter from 'vue-router'

import Result from '../components/Result.vue'
import App from '../components/Form.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Form', component: App, props:true },
    { path:'/result', name: 'Result', component: Result, App}
  ],
});

export default router;
