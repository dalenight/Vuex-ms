var express = require('express');
var router = express.Router();

//------- 引入数据库模块 ----------------
const connection = require('./mysql')

//---------- 连接数据 ------------------
connection.connect((res) =>{
  // console.log(res)
  console.log("数据库连接成功！")
})

/*-------------- 接受登陆请求 ---------------*/
router.post('/checklogin', function(req, res) {

  let{username,password}=req.body;
  const sqlStr=`select * from users where username='${username}' and password='${password}'`

  connection.query(sqlStr,(err,data) =>{
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })
  // console.log(username,password)
  // res.send('111');
});

// ------------- 接受用户列表的请求 -------------

router.get('/getuserlist',(req,res) => {
  const sqlStr = 'select * from userlist'
  connection.query(sqlStr,(err,data) =>{
    if(err){
      throw err;
    } else {
      res.send(data)
    }
  })
});


// ----------- 获取商品列表信息 ---------------

// var app = express()
var goodsData = require('../mock/goods.json')
router.get('/goods',function(req,res,next){
  
  // const sqlStr='select * from goods'
  // connection.query(sqlStr,(err,data) => {
  //   if(err){
  //     throw err;
  //   } else {
  //     res.send(data)
  //   }
  // })

  res.json(goodsData)
})
  
// app.use(router)

module.exports = router;
