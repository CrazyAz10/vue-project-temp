import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Index from '@/components/Index';//首页
import Register from '@/components/Register';//登录-注册
import BBY from '@/components/BBY';//BBY
import JoinUs from '@/components/JoinUs';//加入我们
import Activity from '@/components/Activity';//活动
export default new VueRouter({
	mode: 'history',//history模式
	routes:[
		{ path: '/', component: Index },
		{ path: '/register', component: Register },
		{ path: '/bby', component: BBY },
		{ path: '/Joinus', component: JoinUs },
		{ path: '/activity', component: Activity }
	]
})