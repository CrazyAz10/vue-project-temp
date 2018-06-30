import Vue from 'vue'
import { get, post, patch, put } from './util/http.js'//自封装的axios文件
import App from './App.vue'
import store from './store'//引入vuex配置
// import VCharts from 'v-charts'
import Element from 'element-ui'//引入element-ui组件
import 'element-ui/lib/theme-chalk/index.css'
// import Swiper from 'swiper'//swiper轮播插件
// import 'swiper/dist/css/swiper.min.css'//swiper轮播插件
import Cmn from './util/util.js'//引入公共方法
import './assets/lib/font-awesome-4.7.0/css/font-awesome.min.css'//awesome矢量图标库
import RequestUrl from './util/requestUrl.js'//网站请求路径
// import Share from 'vue-social-share'//分享工具
// import 'vue-social-share/dist/client.css'//分享工具样式
import md5 from 'js-md5';//引入md5
let Base64 = require('js-base64').Base64;//引入Base64位
import custom from './util/filters.js'
import 'babel-polyfill'
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})
/**
 * vue-social-share引入出现样式问题  默认字体文件路径不对
 * 需要修改node_modules\_vue-social-share@0.0.3@vue-social-share\dist\client.css文件里面的字体文件路径需要加'./'
 */
/**
 * Vue.$$  		jquery
 * Vue.$Cmn  	公共方法
 * Vue.$RQUrl  	项目请求地址
 * Vue.$Swiper   swiper轮播图插件
 * Vue.$ajax 	axios组件
 * Vue.$md5 	md5加密
 * Vue.$Base64  Base64编码
 */
Vue.use(Element)
// Vue.use(VCharts)
// Vue.use(Share)
Vue.prototype.$Cmn = Cmn
Vue.prototype.$RQUrl = RequestUrl
// Vue.prototype.$Swiper = Swiper
Vue.prototype.$get = get//axios-get请求写入vue原型链中
Vue.prototype.$post = post//axios-post请求写入vue原型链中
Vue.prototype.$patch = patch//axios-patch请求写入vue原型链中
Vue.prototype.$put = put//axios-put请求写入vue原型链中
Vue.prototype.$md5 = md5//md5写入vue原型链中
Vue.prototype.$Base64 = Base64//Base64写入vue原型链中
import router from './routes'//引入路由
Vue.config.productionTip = false

new Vue({
	render:h=>h(App),
	router,//加载路由
	store,//引入vuex
	mounted: function(){
			
	}
}).$mount('#app')
