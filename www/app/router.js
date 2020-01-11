import App from "./components/App.vue";
import VueRouter from "vue-router";
import Index from "./components/index/Index.vue";
import Video from "./components/video/Video.vue";
import Detail from "./components/detail/Detail.vue";
 
//路由清单
export default new VueRouter({
	"routes" : [
		{
			path : "/index" , 
			component : App,
			children : [
				{
					name : "index",
					path : "/index/index",
					component : Index
				},
				{
					name : "video",
					path : "/index/video",
					component : Video
				}
			]
		},
		{
			name : "detail",
			path : "/detail",
			component : Detail
		},
		// 当进入其他栏目的时候，此时跳转回首页
		{
			path : "/*" , 
			redirect : "/index/index"
		}
	]
});