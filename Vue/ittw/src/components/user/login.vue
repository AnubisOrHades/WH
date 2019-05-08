<template>
  <div class="login w">
    <h2>{{GLOBAL.token}}</h2>
    <router-link :to='{name:"home"}'>首页</router-link>
    <div class="content">
      <div class="login_img"></div>
      <div class="form">
        <div class="log_header" v-text="left_title"></div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机" prop="username" size="100px">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" v-show="sign_seen">
            <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass" v-show="sign_seen">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('ruleForm')" v-show="login_seen" v-text="left_title"></el-button>
            <el-button type="primary" @click="sign('ruleForm')" v-show="sign_seen" v-text="left_title"></el-button>
            <el-button v-text="right_title" @click="change"></el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="clear"></div>
    <p>{{json_data}}</p>
  </div>
</template>
<script>
export default {
  data () {
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'))
    //   } else {
    //     if (this.ruleForm.checkPass !== '') {
    //       this.$refs.ruleForm.validateField('checkPass')
    //     }
    //     callback()
    //   }
    // }
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'))
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('两次输入密码不一致!'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      left_title: '登录',
      right_title: '注册',
      login_seen: true,
      sign_seen: false,
      json_data: 'json_data',
      ruleForm: {
        username: '15988888888',
        code: '',
        password: '111111',
        checkPass: ''
      }
      // rules: {
      //   pass: [
      //     {validator: validatePass, trigger: 'blur'}
      //   ],
      //   checkPass: [
      //     {validator: validatePass2, trigger: 'blur'}
      //   ]
      // }
    }
  },
  methods: {
    login (formName) {
      var that = this
      this.axios({
        method: 'post',
        url: 'login/',
        data: this.ruleForm
      })
        .then(function (response) {
          // console.log(response.data['return']['token'])
          that.json_data = response.data['return']['token']
          that.GLOBAL.token = response.data['return']['token']
        })
        .catch(function (error) {
          console.log(error)
        })
      // this.axios.post('login/', {username: '15988888888', password: '111111'})
    },
    sign (formName) {
      alert(this.ruleForm)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          alert(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    change () {
      if (this.left_title === '登录') {
        this.left_title = '注册'
        this.right_title = '登录'
        this.login_seen = false
        this.sign_seen = true
      } else {
        this.left_title = '登录'
        this.right_title = '注册'
        this.login_seen = true
        this.sign_seen = false
      }
    }
  }
}
</script>
<style scoped>
  .content {
    width: 1100px;
    margin: 50px auto;
    border-radius: 10px;
  }

  .content .login_img {
    float: left;
    width: 550px;
    height: 500px;
    background: #5C2A44;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .content .form {
    float: left;
    width: 550px;
    height: 500px;
    background: #BC535A;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .form .log_header {
    width: 100%;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    color: #ffffff;
  }
</style>
