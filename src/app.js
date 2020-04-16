
// 导入index页面头部
// import deadline from './VueCompent/head/deadline.vue'
// import swiper1 from './VueCompent/head/swiper.vue'

// // 导入index页面主内容
// import aitrafficstate from './VueCompent/maincon/AItrafficState.vue'
// import carspollution from './VueCompent/maincon/carspollution.vue'
// import citycars from './VueCompent/maincon/citycarsnum.vue'
// import teammember from './VueCompent/maincon/teammember.vue'
// import contactus from './VueCompent/maincon/contactus.vue'

// //导入index页面尾部
// import footerline from './VueCompent/bottom/footer.vue'
// import aboutwe from './VueCompent/bottom/aboutwe.vue'

import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// 导入矢量图标
import './css/Iconfont.css'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

import indexmain from './VueCompent/indexmain.vue'

var vm = new Vue({
	el:'#main',
	data:{
		// msg:'123456'
	},
	methods:{},
	components:{
		// deadline,
		// swiper1,
		// footerline,
		// aboutwe,
		// contactus,
		// teammember,
		// citycars,
		// carspollution,
		// aitrafficstate,
		// account
	},
	router,
	render: c => c(indexmain)
	//使用render去渲染
})