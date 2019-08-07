<template>
  <!-- 我的订单 -->
  <div class="myOrder">
    <span class="my_new">基本信息</span>
    <div class="myOrder_form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="头像" prop="imageUrl" class="imageUrl" >
          <el-upload
            class="avatar-uploader avater_img"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            v-model="ruleForm.imageUrl"
          >
            <img v-if="imageUrl" :src="imageUrl"  class="avatar" />
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
            <i v-else class="head_img"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" required class="user_sex" prop="radio">
          <el-radio-group v-model="ruleForm.radio" label="性别" prop="radio" class="user_sex">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
            <el-radio :label="3">保密</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" required class="user_birthday" >
          <el-radio-group
            v-model="ruleForm.birthday"
            label="生日"
            prop="birthday"
            class="user_birthday"
          >
            <el-select v-model="ruleForm.year" placeholder="请选择" class="user_yesr">
              <el-option
                v-for="item in 28"
                :key="1990+item"
                :label="1990+item"
                :value="1990+item"
              >{{1990+item}}</el-option>
            </el-select>
            <el-select
              v-model="ruleForm.month"
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择"
              class="user_yesr"
            >
              <el-option v-for="item in 12" :key="item" :label="item" :value="item">{{item}}</el-option>
            </el-select>

            <el-select
              v-model="ruleForm.day"
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择"
              class="user_yesr"
            >
              <el-option v-for="item in 30" :key="item" :label="item" :value="item">{{item}}</el-option>
            </el-select>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="手机" required prop="phone" class="user_phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" required class="user_birthday user_address">
          <el-radio-group
            v-model="ruleForm.address"
            label="联系地址"
            prop="address"
            class="user_birthday user_address"
          >
            <el-select v-model="ruleForm.province" placeholder="请选择" class="user_yesr">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <el-select
              v-model="ruleForm.city"
              
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择"
              class="user_yesr"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="ruleForm.town"
              
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择"
              class="user_yesr"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="详细地址" prop="detailedAddress" class="user_detaile" >
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 5}"
            resize="none"
            prop="textarea"
            maxlength="100"
            placeholder="请输入内容"
            v-model="ruleForm.textarea"
            class="user_address user_de"
          ></el-input>
        </el-form-item>
        <el-form-item class="submitForm">
          <el-button class="submit" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
            var checkPhone = (rule,value,callback)=>{
          if(!value){
              return callback(new Error('手机号不能为空'))
          }else{
              const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      }
    //    var checkSex = (rule,value,callback)=>{
    //       if(!value){
    //           return callback(new Error('性别不能为空'))
    //       }else{
    //       console.log(reg.test(value));
    //       if (reg.test(value)) {
    //         callback();
    //       } 
    //     }
    //    }
    //     var checkyesr = (rule,value,callback)=>{
    //       if(!value){
    //           return callback(new Error('生日不能为空'))
    //       }else{
    //       console.log(reg.test(value));
    //       if (reg.test(value)) {
    //         callback();
    //       } 
    //     }
    //   }
    return {
      imageUrl: "",

      options: [],
      ruleForm: {
        
        name: "",
        region: "",
        radio: "",
        delivery: false,
        resource: "",
        desc: "",
        // sex: "",
        birthday: [],
        phone: "",
        address: "",
        province: "",
        city: "",
        town: "",
        birthday: "",
        // year: "",
        // month: "",
        // day: "",
        textarea: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        radio: [
          { required: true, message: "请选择性别", trigger: "change" }
        ],
        birthday:[
            {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        phone: [
          {validator: checkPhone, trigger: 'blur'}
        ],
        address: [
          { required: true, message: "请选择地址", trigger: "change" }
        ],
        textarea: [{ required: true, message: "请填写详细地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
        // var imageUrl = this.ruleForm.imageUrl
      this.imageUrl = URL.createObjectURL(file.raw);
    //   console.log{this.imageUrl}
        console.log(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
      submitForm(formName) {
      var a={...this.imageUrl,...this.$refs[formName].model}
    // console.log(formName)
    this.$refs[formName].validate(valid => {
        var a={...this.imageUrl,...this.$refs[formName].model}
      if (valid) {
        // alert("submit!");
        console.log(a)
        
       
       
      } else {
        alert("信息不完整！！");
        return false;
      }
    });
  },
  }

  
};
</script>

<style lang="less" scoped>
.myOrder {
  width: 100%;
  min-height: 638px;
  background: #fff;
  .my_new {
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
  .myOrder_form {
    font-size: 14px;
    color: #999;

    .imageUrl {
      display: block;
      margin: 0 auto;

      .avatar {
        width: 95px;
        height: 95px;
      }
      .head_img {
        width: 95px;
        height: 95px;
        display: block;
        // margin-bottom: 20px;
      }
    }

    .user_sex {
      display: block;
      width: 50%;
      margin: 0 auto;
      .user_sex {
        margin-top: 12px;
      }

      span {
        //    display: block;
        //    width: 15px;
        //    height: 15px;
        color: #333;
        font-size: 14px;
      }
    }
    .user_birthday {
      margin-top: 6px;
      .user_birthday {
        float: left;
      }
      .user_yesr {
        width: 93px;
      }
    }
    .user_phone,
    .user_detaile {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
<style lang="less"  scoped>
.avater_img {
  border: 2px solid #e3e1df;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin: 0 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avater_img {
  /* border: 2px solid #E3E1DF; */
  margin-bottom: 10px;
}
.el-input {
  width: 95%;
}
.avater:hover {
  background: #333;
  opacity: 0.5;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-form-item {
  width: 50%;
  display: inline-block;
}
.el-radio-group {
  margin-left: 9px !important;
  margin-top: 12px;
}
.user_birthday {
  .el-input {
    width: 100%;
    float: left;
  }
}
.user_de {
  margin-left: 9px;
  height: 102px;
}
.submitForm{
    margin-top: 48px;
    .submit{
        float: left;
        margin-left: 10px;
        line-height: 6px;
        width: 110px;
        height: 38px;
        background: #f3262d;
        font-size: 14px;
        color: #fff;
        border: none;
        &:hover{
            background: #F43C42;
        }
    }
    
}
</style>
<style lang="less">
.el-upload .el-upload--text:hover {
  background: #333;
  opacity: 0.5;
}
.imageUrl {
  .el-form-item__label {
    line-height: 102px;
  }
}
.el-form-item__error{
            top: 26%;
    text-align: left;
    left: 409px;
    width: 110px;
    }
</style>

