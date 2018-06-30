项目说明：
	该项目并非已完成的项目，而是一个搭建好的模型框架，方便初期开发节省时间，
	里面有一些静态页面，可以直接删掉
	项目已有依赖： 
		除了vue-cli已有的依赖外
		axios
		vuex
		sass
		vue-social-share	//分享工具
		md5
		base64
		font-awesome
		element-ui
		babel-polyfill		//es6转译 兼容ie9+处理
		
	目录结构说明：
	├─build
	├─config
	├─src
	│  ├─assets
	│  │  ├─css
	│  │  │  └─index.scss	//主题样式
	│  │  ├─images
	│  │  └─lib
	│  │      ├─font-awesome-4.7.0
	│  │      │  ├─css
	│  │      │  ├─fonts
	│  │      │  ├─less
	│  │      │  └─scss
	│  │      └─swiper
	│  ├─components
	│  │  ├─Activity
	│  │  │  └─staticAssets
	│  │  ├─BBY
	│  │  │  └─staticAssets
	│  │  ├─Footer
	│  │  │  └─staticAssets
	│  │  ├─Header
	│  │  │  └─staticAssets
	│  │  ├─Index				//单文件组件
	│  │  │  └─staticAssets		//当前组件所需的静态资源
	│  │  ├─JoinUs
	│  │  │  └─staticAssets
	│  │  └─Register
	│  │      └─staticAssets
	│  ├─routes
	│  ├─store					//状态管理
	│  │  └─module
	│  └─util					//公共方法
	│	  ├─filter.js			//通用过滤器
	│	  ├─http.js				//自封装axios
	│	  ├─requestUrl.js		//网站请求地址管理集
	│	  └─util.js				//通用方法
	├─static
	└─test
		├─e2e
		│  ├─custom-assertions
		│  └─specs
		└─unit
			└─specs