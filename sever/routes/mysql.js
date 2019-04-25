// 连接数据库

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'vuexms'
});
 
// 把数据库暴露出去

module.exports=connection