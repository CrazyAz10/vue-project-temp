var cmn = {};
//常用正则
var url_param = {
	starts_with_slashes: /^\/+/,
	ends_with_slashes: /\/+$/,
	pluses: /\+/g,
	query_separator: /[&;]/,
	uri_parser: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
};
//将url字符串转换成url对象
cmn.parseUri = function(str) {
	var parser = url_param.uri_parser;
	var parserKeys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "isColonUri", "relative", "path", "directory", "file", "query", "anchor"];
	var m = parser.exec(str || "");
	var parts = {};
	parserKeys.forEach(function(key, i) {
		parts[key] = m[i] || ""
	});
	return parts
};
//设置cookie
cmn.sc = function(n, v, s) {
	var e = new Date();
	e.setTime(e.getTime() + s * 1000);
	document.cookie = n + "=" + escape(v) + "; path=/;expires=" + e.toGMTString()
};
//获取cookie
cmn.gc = function(n) {
	var a, r = new RegExp("(^| )" + n + "=([^;]*)(;|$)");
	if(a = document.cookie.match(r)) {
		return unescape(a[2])
	} else {
		return null
	}
};
export default cmn;