<template>
  <!-- 修改登录密码 -->
  <div class="revisionPass">
    <div class="revisionPass_top">登录密码修改</div>
    <div class="revisionPass_bot">
      <span>
        <i></i>网站密码用于用户登录，请妥善保管密码，凌天众媒工作人员不会以任何理由向您索取密码
      </span>
      <div class="revisionPass_cont">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item label="当前密码" prop="pass" :label-width="formLabelWidth">
            <el-col :span="8">
              <el-input v-model="ruleForm.pass" placeholder="请输入原密码" type="password"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="新密码" prop="newpass" :label-width="formLabelWidth">
            <el-col :span="8">
              <el-input
                v-model="ruleForm.newpass"
                placeholder="请输入5～12位密码"
                id="newkey"
                type="password"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="确认新密码" prop="checknewpass" :label-width="formLabelWidth">
            <el-col :span="8">
              <el-input
                v-model="ruleForm.checknewpass"
                placeholder="请再次输入新密码"
                id="newkey1"
                type="password"
              ></el-input>
            </el-col>
          </el-form-item>
        </el-form>
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    /*****检验两次密码是否一致***/
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (value.length < 5 || value.length > 12) {
          callback(new Error("请输入5～12位密码"));
        } else if (this.ruleForm.checknewpass !== "") {
          this.$refs.ruleForm.validateField("checknewpass");
        } else {
          callback();
        }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.newpass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {}, //修改密码的表单
      formLabelWidth: "150px",

      rules: {
        pass: [
          {
            required: true,
            trigger: "blur",
            message: "请输入密码"
          }
        ],
        newpass: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        checknewpass: [
          {
            validator: validatePass2,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      //   var obj = {
      //     username: this.username,
      //     oldpwd: this.ruleForm.pass,
      //     newpwd: this.ruleForm.newpass
      //   };
      //   console.log(obj);
      //   postData("接口", obj).then(response => {
      //     if (response.status == 200) {
      //       this.$message({
      //         message: "保存成功",
      //         type: "success"
      //       });
      //     } else {
      //       this.$message({
      //         message: "修改失败" + response.message,
      //         type: "error"
      //       });
      //     }
      //   });
    }
  }
};
</script>
<style lang="less" scoped>
.revisionPass {
  width: 100%;
  height: 620px;
  background: #fff;
  .revisionPass_top {
    display: block;
    height: 65px;
    text-align: left;
    margin: 0 20px;
    margin-bottom: 28px;
    line-height: 65px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
  .revisionPass_bot {
    height: 506px;
    text-align: left;
    padding: 10px 50px;
    span {
      padding: 12px 40px 12px 18px;
      font-size: 12px;
      color: #666;
      background: #ffe9eb;
      i {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: khaki;
        vertical-align: -4px;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
    .revisionPass_cont {
      height: 400px;
      margin-top: 80px;
    }
  }
}
</style>
<style lang="less">
.grid-content {
  .el-button {
    margin-left: 150px;
    padding: 11px 20px;
    background: #f3262d;
    border: none;
    border-radius: 2px;
    &:hover {
      background: #f43c42;
    }
  }
}
.revisionPass_cont {
  .el-col-8 {
    width: 31.33333%;
  }
}
</style>



