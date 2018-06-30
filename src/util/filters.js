//通用过滤器

let dateServer = {
  //文章内容长度超出显示...  v是原文，t是展开状态，m是文章收缩状态显示的字符长度
  //例如： text=abcdefg; {{text|WordLimit(1,5)}}==== 'abcde...'
  WordLimit: function(v, t, m) {
    var lt = v,
      mt;
    if (lt.length > m) {
      mt = lt.slice(0, m) + "..."
    } else {
      mt = lt
    }
    return t ? lt : mt
  },
  //日期过滤器  两种返回形式 YYYY-MM-DD 和 YYYY-MM-DD hh:mm:ss 传参只需传其中一种
  Date: function(input, p) {
    var d = new Date(input)
    var year = d.getFullYear()
    var month = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : '' + (d.getMonth() + 1)
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
    var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours()
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes()
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds()
    if (p == 'YYYY-MM-DD') {
      return year + '-' + month + '-' + day
    } else if (p == 'YYYY-MM-DD hh:mm:ss') {
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
    } else {
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
    }
  }
}
export default dateServer
