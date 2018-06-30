
import axios from 'axios';

var loadm = new Object();
// 加载跟多功能
loadm.addMore = function(d){
	d.url = ;//请求地址
	d.data = ;//请求参数
	d.type = ;//请求类型
	// d.oldData = ;//老数据  用于新数据请求到拼接
	axios({
		method: d.type,
		url: d.url,
		data: d.data
	}).then(function(res){
		return res;
	})
	.catch(function(err){
		return [];
	})
}

export default loadm;
