<template>
    <div class="register">
         <!-- 登陆背景视频 -->
        <video class="video" oncontextmenu="return false;" loop autoplay muted src="../assets/login/big.webm"></video>
        <!-- 注册窗口 -->
        <el-row :gutter="20" >
            <el-col :span="15" :offset="14">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="zhuce">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <input class="birthday" type="date">
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
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
    a{color:inherit; font:inherit;text-decoration:none;}
    .register{
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
      padding: 30px 70px 10px 0;
    }
    .birthday{
      width: 65%;
      border: 0px;
      border-radius: 3px;
      line-height: 35px;
      outline:none;
      margin: 0 0 20px 100px;
    }
</style>