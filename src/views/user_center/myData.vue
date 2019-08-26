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
        <el-form-item label="头像" prop="userImg" class="userImg">
          <el-button @click="dialogTableVisible = true" class="userImg_btn">
            <template>
              <img v-bind:src="flimg" alt style="width:100px;height:100px;background:#ccc" />
            </template>
            <template>
              <div class="modifierImg">修改</div>
            </template>
          </el-button>
          <el-dialog title="头像设置" :visible.sync="dialogTableVisible" class="primary_btn">
            <template>
              <div class="upload_state">
                <span>支持JPG格式，图片大小不超过5MB</span>
                <span>头像最佳默认尺寸为120X120像素</span>
              </div>
            </template>
            <el-upload
              class="upload-demo"
              action="http://47.106.240.143/api/api/user/upavatar"
              :file-list="imageUrl"
              name="avatar"
              :headers="headers"
              :on-change="handleChange"
              ref="upload"
              :auto-upload="false"
              list-type="picture"
            >
              <el-button size="small">上传头像</el-button>
              <template>
                <span class="upload_statenone">未选择任何文件</span>
              </template>
            </el-upload>
            <template>
              <div class="announcements">
                <h3>注意事项</h3>
                <ol>
                  <li>请上传您的品牌LOGO或者个人真实头像</li>
                  <li>请不要在头像上面留电话、QQ、网址、邮箱等信息</li>
                  <li>上传遇到问题，请联系客服：123456789</li>
                </ol>
              </div>
            </template>
            <el-button
              class="but_sub"
              style="margin-left: 10px;"
              size="small"
              type="success"
              @click="submitUpload"
            >确定</el-button>
            <el-button
              style="margin-left: 10px;"
              size="small"
              type="success"
              @click="cancelUpload"
              class="but_sub but_can"
            >取消</el-button>
          </el-dialog>
        </el-form-item>

        <el-form-item label="昵称" prop="real_name">
          <el-input v-model="ruleForm.real_name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            <el-radio label="保密"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" required class="user_birthday">
          <el-radio-group label="生日" class="user_birthday" id="user_yesr">
            <el-select v-model="ruleForm.year" placeholder="请选择" class="user_yesr">
              <el-option
                v-for="item in 28"
                :key="1990+item"
                :label="1990+item"
                :value="1990+item"
              >{{1990+item}}</el-option>
            </el-select>
            <el-select v-model="ruleForm.month" collapse-tags placeholder="请选择" class="user_yesr">
              <el-option v-for="item in 12" :key="item" :label="item" :value="item">{{item}}</el-option>
            </el-select>

            <el-select v-model="ruleForm.date" collapse-tags placeholder="请选择" class="user_yesr">
              <el-option v-for="item in 30" :key="item" :label="item" :value="item">{{item}}</el-option>
            </el-select>
          </el-radio-group>
          <template>
            <div v-if="flag" class="err">生日信息不完整</div>
          </template>
        </el-form-item>
        <el-form-item type="namber" label="手机" prop="namber">
          <el-input :disabled="true" v-model="ruleForm.namber"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" class="province">
          <el-select v-model="ruleForm.province" placeholder="请选择">
            <el-option label="湖北省" value="1 "></el-option>
          </el-select>
          <el-select v-model="ruleForm.city " placeholder="请选择">
            <el-option label="黄石市" value="2 "></el-option>
          </el-select>
          <el-select v-model="ruleForm.district" placeholder="请选择">
            <el-option label="阳新县" value="3"></el-option>
          </el-select>
          <template>
            <div v-if="flagc" class="err">地址信息不完整</div>
          </template>
        </el-form-item>

        <el-form-item label="详细地址"  prop="address" class="address">
          <el-input type="textarea" placeholder="请输入详细地址" resize="none" v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item class="sun_btn">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    // var checkPhone = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error("手机号不能为空"));
    //   } else {
    //     const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    //     console.log(reg.test(value));
    //     if (reg.test(value)) {
    //       callback();
    //     } else {
    //       return callback(new Error("请输入正确的手机号"));
    //     }
    //   }
    // };
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (!reg.test(value)) {
          callback();
        } else {
          return callback(new Error("昵称不能为电话号码"));
        }
      }
    };
    return {
      dialogTableVisible: false,
      imageUrl: [],
      img: "",
      file: "",
      fileData: "",
      flimg: "",
      flag: false,
      flagc: false,
      
      ruleForm: {
        real_name: "",
        year: "",
        month: "",
        date: "",
        birthday: "",
        province: "",
        city: "",
        district: "",
        address: "",
        sex: "保密",
        upinfoData: "",
        fileDat: "",
        namber: "",

      },
      rules: {
        real_name: [
          { validator: checkName, trigger: "blur" },
          { min: 2, max: 16, message: "长度在 2 到 16 个字符", trigger: "blur" }
        ],
        // namber: [{ validator: checkPhone, trigger: "blur" }],
        year: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        month: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],

        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        address: [
          { required: true, message: "请填写详细地址", trigger: "blur" }
        ]
      }
    };
  },

  computed: {
    headers() {
      var Token = window.localStorage.getItem("Token");
      return {
        Authorization: "Bearer " + Token // 直接从本地获取token就行
      };
    }
  },
  created() {
    this.onlond();
  },
  methods: {
    onlond() {
      this.ruleForm.namber = window.localStorage.getItem("res");
      console.log(this.ruleForm.namber);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    cancelUpload() {
      this.$refs.upload.clearFiles();
    },
    submitForm(formName) {
      if (
        this.ruleForm.province == "" ||
        this.ruleForm.city == "" ||
        this.ruleForm.district == ""
      ) {
        this.flagc = true;
      } else {
        this.flagc = false;
      }
      if (
        this.ruleForm.year == "" ||
        this.ruleForm.month == "" ||
        this.ruleForm.date == ""
      ) {
        this.flag = true;
      } else {
        this.flag = false;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          var a = this.ruleForm.year;
          var b = this.ruleForm.month;
          var c = this.ruleForm.date;

          this.ruleForm.birthday = a + "-" + b + "-" + c;
          this.ruleForm.fileDat = this.fileData;
          console.log(this.ruleForm.birthday);
          console.log(this.ruleForm.fileDat);
          var data = {
            province: this.ruleForm.province,
            city: this.ruleForm.city,
            district: this.ruleForm.district,
            real_name: this.ruleForm.real_name,
            address: this.ruleForm.address,
            sex: this.ruleForm.sex,
            birthday: this.ruleForm.birthday,
            avatar: this.ruleForm.fileDat
          };
          console.log(data);
          this.$api
            .upinfodata(data)
            .then(res => {
              console.log(res.data);
              this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>修改成功</strong>',
          customClass:'sun_t',

        });
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");

          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(file, fileList) {
      this.imageUrl = fileList.slice(-1);
      var imageUrl = { ...this.imageUrl };
      console.log(imageUrl);

      // this.img = imageUrl[0].url;
      this.upinfoData = imageUrl[0];
      this.file = { ...this.upinfoData.response };
      this.fileData = this.file.file;
      this.flimg = "http://ltzm1.oss-cn-shenzhen.aliyuncs.com/" + this.fileData;
      console.log(this.flimg);
      console.log(this.upinfoData);
      console.log(this.fileData);
    }
  }
};
</script>

<style lang="less" scoped>
.myOrder {
  width: 100%;
  min-height: 619px;
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
  }
}
</style>
<style lang="less">
.myOrder_form {
  padding: 0px 126px;
   .el-input__inner:focus,.el-textarea__inner:focus,{
           border:1px solid #5DA6FF;
    outline: 0;
          box-shadow: 0px 0px 4px #5DA6FF;
        }
  .address {
    .el-form-item__error {
      top: 79% !important;
    }
  }
  .el-form-item {
    margin-bottom: 6px;
     .el-form-item__label{
            color: #999!important;
          }
    .el-form-item__content {
      text-align: left;
      .el-input {
        .el-input__inner {
          width: 394px !important;
          height: 38px !important;
          line-height: 38px !important;
          border-radius: 0 !important;
          color: #333!important;
        }
       
      }
      .el-form-item__error {
        top: 19%;
        left: 61% !important;
        width: 108px;
        padding-left: 20px;
      }
      .el-select {
        margin-right: 10px;
       
        .el-input__inner {
          width: 70px !important;
          height: 28px !important;
          padding: 0;
          font-size: 12px;
          padding-left: 10px;
        }
        
        .el-input__suffix {
          .el-input__icon {
            line-height: 40px !important;
            width: 100%;
          }
        }
      }
      #user_yesr {
        .user_yesr {
          .el-icon-arrow-up {
            line-height: 30px !important;
            width: 100%;
          }
        }
      }
      .err {
        color: #f56c6c;
        font-size: 12px;
        line-height: 1;
        padding-top: 4px;
        position: absolute;
        top: 19%;
        left: 61% !important;
        width: 108px;
        padding-left: 20px;
      }
      .el-textarea {
        .el-textarea__inner {
          width: 395px;
          height: 102px;
          border-radius: 0;
        }
      }
    }
    .el-button--primary {
    }
    .province {
      .el-input__inner {
        padding-left: 8px !important;
      }
    }

    .el-dialog {
      width: 650px;
      height: 600px;
      .el-dialog__header {
        font-size: 16px;
        color: #333;
      }
    }
  }
  .sun_btn {
    margin: 40px 0 0 0;
    .el-button {
      display: block;
      padding: 11px 40px;
      background: #f3262d;
      border: 0;
      & > .el-button:hover {
        display: block;
        background: #f43c42;
      }
    }
  }
  .userImg {
    .el-button:hover {
      background: #fff;
    }
    .el-form-item__label {
      line-height: 80px !important;
    }
    .el-form-item__content {
      line-height: 0 !important;
    }
    .userImg_btn {
      position: relative;
      width: 75px;
      height: 75px;
      border: 2px solid #e3e1df;
      border-radius: 50%;
      padding: 0 !important;
      overflow: hidden;
      img {
        width: 71px !important;
        height: 71px !important;
      }
      .modifierImg {
        position: absolute;
        width: 70px;
        height: 20px;
        bottom: 0;
        background: #000;
        opacity: 0.51;
        color: #fff;
        font-size: 12px;
        line-height: 20px;
        display: none;
      }
      &:hover {
        .modifierImg {
          display: block;
        }
      }
    }
    .primary_btn {
      .el-dialog__body {
        position: relative;
        .upload-demo {
          height: 238px;
          position: relative;
          .el-upload {
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -40px;
            .el-button {
              background: #f4f4f4;
              border: 1px solid #dfdfdf;
            }
            & > .el-button:hover {
              color: #666;
              background: #fff;
            }
            .el-button--small {
              font-size: 14px !important;
            }
            .upload_statenone {
              font-size: 12px;
              color: #666;
              margin-left: 10px;
            }
          }
          .el-upload-list {
            position: absolute;
            top: 0;
            display: block;
            width: 120px;
            height: 120px;
            // overflow: hidden;
            border: 1px solid #eee;
            left: 50%;
            margin-left: -61px;
            .el-upload-list__item {
              width: 120px;
              height: 120px;
              // overflow: hidden;
              border: 0 !important;
              margin-top: 0px !important;
              img {
                width: 97px;
                height: 99px;
                padding-bottom: 5px;
              }
            }

            .el-upload-list__item {
              transition: none;
              .el-upload-list__item-name {
                display: none;
              }
              .el-upload-list__item-status-label,
              .el-icon-close {
                display: none;
              }
            }
          }
        }
        .upload_state {
          position: absolute;
          bottom: 58%;
          height: 31px;
          left: 50%;
          margin-left: -96px;
          text-align: center;
          span {
            display: block;
            font-size: 12px;
            line-height: 12px;
          }
          & > span:last-child {
            margin-top: 5px;
            color: #f3262d;
          }
        }
        .announcements {
          width: 397px;
          height: 89px;
          padding: 10% 0 4% 35%;
          border-bottom: 1px dashed #ccc;
          h3 {
            display: block;
            margin-bottom: 20px;
          }
          ol {
            li {
              list-style: decimal;
              line-height: 22px;
              font-size: 14px;
              margin-left: 7px;
            }
          }
        }
        .but_sub {
          margin-left: 37% !important;
          margin-top: 33px;
          padding: 0;
          width: 75px;
          height: 38px;
          background: #f3262d;
          font-size: 14px;
          border: none;
        }
        .but_can {
          width: 75px;
          margin-left: 10px !important;
          height: 38px;
          color: #666;
          background: #fff;
          border: 1px solid #ccc;
        }
      }
    }
  }
 
  .el-form-item.is-error .el-input__inner,
  .el-form-item.is-error .el-input__inner:focus,
  .el-form-item.is-error .el-textarea__inner,
  .el-form-item.is-error .el-textarea__inner:focus,
  .el-message-box__input input.invalid,
  .el-message-box__input input.invalid:focus {
    border-color: #ccc;
  }
  .el-form-item.is-required:not(.is-no-asterisk)
    .el-form-item__label-wrap
    > .el-form-item__label:before,
  .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
    visibility: hidden;
  }
 
}
 .el-message{
          min-width: 106px!important;
          height: 36px!important;
          background: #dff1d9!important;
          top: 45%!important;
          left: 58%!important;
         padding: 0;
          .el-message__content{
             color: #468946;
             font-size: 14px;
            
          }
          .el-message__icon{
 padding: 0 6px 0 12px!important;
 margin-right: 0!important;
 
          }
         
        }
        
        </style>



