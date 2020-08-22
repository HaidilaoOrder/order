<template>
    <div class="login">
         <!-- 登陆背景视频 -->
        <video class="video" oncontextmenu="return false;" loop autoplay muted src="../assets/login/big.webm"></video>
        <!-- 注册窗口 -->
        <el-row :gutter="20" >
            <el-col :span="15" :offset="14"  :xs="20" :sm="20" :md="4" :lg="4" :xl="4">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="zhuce">
                  <div class="span">
                      <span >账号密码登录 | </span>
                      <span>二维码登录</span>
                  </div>
                  <el-divider class="hr"></el-divider>
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')">立即登录</el-button>
                </el-form-item>
              </el-form>
              </el-col>
        </el-row>
    </div>
</template>



<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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


<style scoped>
    .span{
        color: white;
        font:inherit;text-decoration:none;
        width:110%;
    }
    .login{
        margin-top: 105px;
        padding: 0;
        overflow:hidden; 
    }
    .video{
        width: 100%;height:610px;object-fit: fill;
    }
    .zhuce{
      margin:0;padding: 0;
      position: absolute;
      bottom: 200px;
      background: rgba(0,0,0,.5);
      border-radius: 20px;
      padding: 30px 30px 10px 0;
    }
    .hr{width: 110%;}
</style>