<template>
 <div  class="login">


   <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">

   <h1 class="title"> 
     <i class="el-icon-setting"></i>
     Vuex-Ms</h1>

 <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
  </el-form-item>
 

  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form>
 </div>
</template>

<script>
export default {
    data() {

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.username !== '') {
            this.$refs.loginForm.validateField('username');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (value !== this.loginForm.pass) {
          callback(new Error('请输入用户名!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          password: '',
          username: ''
        },
        rules: {
          username: [
             { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ],
          password: [
             { required: true, message: '请输入用户名密码', trigger: 'blur' },
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this=this
            this.axios.post('./api/checklogin',{
              username:_this.loginForm.username,
              password:_this.loginForm.password
            }).then(res => {

              if(res.data.length){
                console.log('resData'+res.data[0])
                // -- 把用户信息存入本地存储 -- 这样出现页面刷新数据丢失的问题
                // localStorage.setItem('userinfo',JSON.stringify(res.data[0]))
                // let userinfo = JSON.parse(localStorage.getItem('userinfo'))
                // let userinfo = res.data[0]
                // console.log('userinfo='+userinfo)
                _this.$store.commit('SAVE_USERINFO',res.data[0])

                _this.$message({
                  showClose: true,
                  message: '恭喜你，登陆成功',
                  type: 'success'
                });
                _this.$router.push('/index')
              }else{
                _this.$message.error('错了哦，请输入正确密码');
              }
              // console.log(res)
              // console.log('接受后端验证登陆的数据',res.data)
            })
                    } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

html, body, #app, .login{
  height: 100%;
}

.login{
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-form{
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0px 45px 10px 20px ;
}

.title{
  font-size: 20px;
  margin: 40px 0 20px 0 ;
}



</style>
