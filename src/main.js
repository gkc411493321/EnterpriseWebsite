import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Animated from 'animate.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(ViewUI);
Vue.use(Animated)

NProgress.configure({
	easing: 'ease', // 动画方式    
	speed: 1500, // 递增进度条的速度    
	showSpinner: false, // 是否显示加载ico    
	trickleSpeed: 200, // 自动递增间隔    
	minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
	// 每次切换页面时，调用进度条
	NProgress.start();
	next();
	// 回到页面顶部
	// chrome
	document.body.scrollTop = 0
	// firefox
	document.documentElement.scrollTop = 0
	// safari
	window.pageYOffset = 0
})
router.afterEach(() => {
	// 在即将进入新的页面组件前，关闭掉进度条
	NProgress.done()
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
