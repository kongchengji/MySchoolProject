import VueRouter from 'vue-router'

// 导入对应的路由组件
import home from './VueCompent/indexhome.vue'
import aitraffic from './VueCompent/aitrafficpage/aitraffic.vue'
import cityrnums from './VueCompent/aitrafficpage/croadns.vue'
import pollution from './VueCompent/aitrafficpage/thepollution.vue'

// 创建路由对象
var router = new VueRouter({
    // mode:'history',
    routes: [
        { path: '/', redirect: '/home' },
        {path: '/home',component: home},
        { path: '/home/aitraffic', component: aitraffic },
        { path: '/home/cityrnums', component: cityrnums },
        { path: '/home/pollution', component: pollution },
    ]
})
  
  // 把路由对象暴露出去
  export default router