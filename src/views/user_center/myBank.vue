<template>
  <!-- 银行卡管理 -->
  <div class="bank_box">
    <div class="myBank" v-show="showb">
      <div class="myBank_top">个人银行卡</div>
      <div class="myBank_cont" v-if="flag=='cont'">
        <!-- 没有绑定银行卡状态 -->
        <div class="myBank_none" v-if="ruleFormE.length ==0">
          <img src="../../assets/guzhuimg/ban.png" alt="img" />
          <el-button class="ban_but" @click="cont_addE()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tianjia" class="ccccc" />
            </svg>添加个人银行卡
          </el-button>
        </div>
        <!-- 有绑定银行卡状态 -->
        <div class="myBank_none myBank_q" v-else>
          <div class="myBank_none_box">
            <li
              class="myBank_true"
              v-for="(item, index) in ruleFormE"
              :key="index"
              @click="selectItemActionE(index)"
              :class="{active: index==selectIndex}"
            >
              <div class="myBank_d">
                <span @click="deleteInfoActionE(index)">删除</span>
                <!-- <span @click="modifyInfoActionE(index)">编辑</span> -->
              </div>
              <div class="myBank_name">{{item.region}}</div>
              <div class="myBank_num">{{item.bankNum}}</div>
              <div class="myBank_user">{{item.accountname}}</div>
            </li>
             <el-button class="ban_but" @click="cont_addE()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tianjia" class="ccccc" />
            </svg>添加个人银行卡
          </el-button>
          </div>
         
        </div>
      </div>

      <!-- 添加银行卡 -->
      <div class="myBank_add" v-else-if="flag=='add'">
        <el-form
          :rules="rules"
          :model="ruleFormE2"
          ref="ruleFormE2"
          label-width="100px"
          class="demo-ruleFormE"
        >
          <el-form-item label="开户行名称：" prop="region">
            <el-select v-model="ruleFormE2.region" placeholder="请选择" class="region_1">
              <el-option label="中国银行" value="中国银行"></el-option>
              <el-option label="工商银行" value="工商银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡账号：" prop="bankNum">
            <el-input v-model="ruleFormE2.bankNum" maxlength="25"></el-input>
            <template class="take_bankM">
              <span class="take_bankM">请绑定储蓄卡，否则不能提现</span>
            </template>
          </el-form-item>
          <el-form-item label="开户户名：" prop="accountname">
            <el-input v-model="ruleFormE2.accountname"></el-input>
          </el-form-item>
          <el-form-item label="开户支行名称：" prop="accountBank">
            <el-input v-model.number="ruleFormE2.accountBank"></el-input>
          </el-form-item>
          <el-form-item prop="type">
            <el-radio-group v-model="ruleFormE2.type">
              <el-radio name="type" :label="1">
                <template>
                  <span>
                    我已阅读并同意
                    <p>绑定银行卡协议</p>
                  </span>
                </template>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitFormE('ruleFormE2')">确定绑定</el-button>
            <!-- <el-button @click="resetForm('ruleFormE2')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <!-- 编辑银行卡 -->
      <!-- <div class="myBank_add" v-else-if="flag=='redact'">
        <el-form
          :rules="rules"
          :model="ruleFormE3"
          ref="ruleFormE3"
          label-width="100px"
          class="demo-ruleFormE"
        >
          <el-form-item label="开户行名称：" prop="region">
            <el-select v-model="ruleFormE3.region" placeholder="请选择">
              <el-option label="中国银行" value="中国银行"></el-option>
              <el-option label="工商银行" value="工商银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="银行卡账号：" prop="bankNum">
            <el-input v-model="ruleFormE3.bankNum"></el-input>
            <template class="take_bankM">
              <span class="take_bankM">请绑定储蓄卡，否则不能提现</span>
            </template>
          </el-form-item>
          <el-form-item label="开户户名：" prop="accountname">
            <el-input v-model="ruleFormE3.accountname"></el-input>
          </el-form-item>
          <el-form-item label="开户支行名称：" prop="accountBank">
            <el-input v-model.number="ruleFormE3.accountBank"></el-input>
          </el-form-item>
          <el-form-item prop="type">
            <el-radio-group v-model="ruleFormE3.type">
              <el-radio name="type" :label="1">
             
                <template>
                  <span>
                    我已阅读并同意
                    <p>绑定银行卡协议</p>
                  </span>
                </template>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="finishModifyActionE()">确定修改</el-button>
          </el-form-item>
        </el-form>
      </div> -->
    </div>
    <div class="myBank myBankE" v-show="showe">
      <div class="myBank_top">对公银行卡</div>
      <div class="myBank_cont" v-if="flage=='cont'">
        <!-- 没有绑定对公银行卡状态 -->
        <div class="myBank_none" v-if="ruleForm.length ==0">
          <img src="../../assets/guzhuimg/ban.png" alt="img" />
          <el-button class="ban_but" @click="cont_add()">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tianjia" class="ccccc" />
            </svg>添加对公银行卡
          </el-button>
        </div>
        <!-- 有绑定对公银行卡状态 -->
        <div class="myBank_none myBank_q" v-else>
          <div class="myBank_none_box">
            <li
              class="myBank_true"
              v-for="(item, index) in ruleForm"
              :key="index"
              @click="selectItemAction(index)"
              :class="{active: index==selectIndex}"
            >
              <div class="myBank_d">
                <span @click="deleteInfoAction(index)">删除</span>
                <!-- <span @click="modifyInfoAction(index)">编辑</span> -->
              </div>
              <div class="myBank_name">{{item.region}}</div>
              <div class="myBank_num">{{item.bankNum}}</div>
              <div class="myBank_user">{{item.accountname}}</div>
            </li>
             <el-button class="ban_but" @click="cont_add()">
            <i></i>添加对公银行卡
          </el-button>
          </div>
         
        </div>
      </div>

      <!-- 添加对公银行卡 -->
      <div class="myBank_add" v-else-if="flage=='add'">
        <el-form
          :rules="rules"
          :model="ruleForm2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="对公开户行名称：" prop="region">
            <el-select v-model="ruleForm2.region" placeholder="请选择">
              <el-option label="中国银行" value="中国银行"></el-option>
              <el-option label="工商银行" value="工商银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="对公银行卡账号：" prop="bankNum">
            <el-input v-model="ruleForm2.bankNum"></el-input>
            <template class="take_bankM">
              <span class="take_bankM">请绑定储蓄卡，否则不能提现</span>
            </template>
          </el-form-item>
          <el-form-item label="对公开户户名：" prop="accountname">
            <el-input v-model="ruleForm2.accountname"></el-input>
          </el-form-item>
          <el-form-item label="对公开户支行名称：" prop="accountBank">
            <el-input v-model.number="ruleForm2.accountBank"></el-input>
          </el-form-item>
          <el-form-item prop="type">
            <el-radio-group v-model="ruleForm2.type">
              <el-radio name="type" :label="1">
                <template>
                  <span>
                    我已阅读并同意
                    <p>绑定银行卡协议</p>
                  </span>
                </template>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">确定绑定</el-button>
            <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <!-- 编辑对公银行卡 -->
      <!-- <div class="myBank_add" v-else-if="flage=='redact'">
        <el-form
          :rules="rules"
          :model="ruleForm3"
          ref="ruleForm3"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="对公开户行名称：" prop="region">
            <el-select v-model="ruleForm3.region" placeholder="请选择">
              <el-option label="中国银行" value="中国银行"></el-option>
              <el-option label="工商银行" value="工商银行"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="对公银行卡账号：" prop="bankNum">
            <el-input v-model="ruleForm3.bankNum"></el-input>
            <template class="take_bankM">
              <span class="take_bankM">请绑定储蓄卡，否则不能提现</span>
            </template>
          </el-form-item>
          <el-form-item label="对公开户户名：" prop="accountname">
            <el-input v-model="ruleForm3.accountname"></el-input>
          </el-form-item>
          <el-form-item label="对公开户支行名称：" prop="accountBank">
            <el-input v-model.number="ruleForm3.accountBank"></el-input>
          </el-form-item>
          <el-form-item prop="type">
            <el-radio-group v-model="ruleForm3.type">
              <el-radio name="type" :label="1">
                <template>
                  <span>
                    我已阅读并同意
                    <p>绑定银行卡协议</p>
                  </span>
                </template>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="finishModifyAction()">确定修改</el-button>
          </el-form-item>
        </el-form>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var checkbank = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("银行卡不能为空"));
      } else {
        const reg = /^[+]{0,1}(\d+)$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的银行卡"));
        }
      }
    };
    return {
      // 个人银行卡
      flag: "cont",
      showb: true,
      ruleFormE2: {
        region: "",
        bankNum: "",
        accountname: "",
        accountBank: "",
        type: ""
      },
      ruleFormE: [],
      ruleFormE3: {},
      selectIndex: -1,
      ruleFormEindex: -1,
      // 对公银行卡
      showe: true,
      flage: "cont",
      ruleForm2: {
        region: "",
        bankNum: "",
        accountname: "",
        accountBank: "",
        type: ""
      },
      ruleForm: [],
      ruleForm3: {},
      selectIndex: -1,
      ruleFormindex: -1,
      rules: {
        bankNum: [{ validator: checkbank, trigger: "blur" }],
        region: [{ required: true, message: "开户行名称", trigger: "blur" }],
        accountname: [
          { required: true, message: "请输入开户户名", trigger: "blur" }
        ],
        accountBank: [
          { required: true, message: "请输入开户支行名称", trigger: "blur" }
        ],
        type:[{required: true, message: ' ', trigger: 'change'}]
      }
    };
  },
  methods: {
    // 跳转添加个人银行卡
    cont_addE() {
      this.flag = "add";
      this.showe = false;
    },
    // 添加个人银行卡
    submitFormE(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          var model = this.$refs[formName].model;
          console.log(model);
          var bankNum = model.bankNum;
          //   银行卡隐藏
          var reg = /^(\d{4})\d+(\d{4})$/;
          var str = bankNum.replace(reg, "$1**** **** $2");
          var info = {
            region: model.region,
            bankNum: str,
            accountname: model.accountname,
            accountBank: model.accountBank
          };
          //   console.log(info);
          this.ruleFormE.push(info);
          console.log(this.ruleFormE);
          this.flag = "cont";
          this.showe = true;
        } else {
          // console.log("error submit!!");

          return alert("信息不匹配");
        }
      });

      this.resetForm(formName);
    },

    selectItemActionE(index) {
      if (this.selectIndex === index) {
        this.selectIndex = -1;
      } else {
        this.selectIndex = index;
      }
    },
    // 编辑个人银行卡
    // modifyInfoActionE(index) {
    //     // var model = this.$refs[formName].model;
    //       console.log(this.ruleFormE[index]+"bianji");
    //       // var bankNum = model.bankNum;
    //       //   银行卡隐藏
    //       // var reg = /^(\d{4})\d+(\d{4})$/;
    //       // var str = bankNum.replace(reg, "$1**** **** $2");
    //   console.log(index + "qqqq");
    //   this.flag = "redact";
    //   this.showe = false;
    //   this.ruleFormE3 = { ...this.ruleFormE[index] };
    //   this.ruleFormEindex = index;
    //   console.log(this.ruleFormE3);
    // },
    // finishModifyActionE() {
    //   this.ruleFormE.splice(this.ruleFormEindex, 1, this.ruleFormE3);
    //   this.flag = "cont";
    //   this.showe = true;
    //   console.log(this.ruleFormE+"eeeeeeeeeeeeeeeee");
    //   console.log("2222222");
      
    // },
    // 删除个人银行卡
    deleteInfoActionE(index) {
      this.ruleFormE.splice(index, 1);
    },
    // 跳转新增对公银行卡
    cont_add() {
      this.flage = "add";
      this.showb = false;
    },
    // 新增对公银行卡
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          var model = this.$refs[formName].model;
          var bankNum = model.bankNum;
          //   银行卡隐藏
          var reg = /^(\d{4})\d+(\d{4})$/;
          var str = bankNum.replace(reg, "$1**** **** $2");
          var info = {
            region: model.region,
            bankNum: str,
            accountname: model.accountname,
            accountBank: model.accountBank
          };
          //   console.log(info);
          this.ruleForm.push(info);
          console.log(this.ruleForm);
          this.flage = "cont";
          this.showb = true;
        } else {
          console.log("error submit!!");
          return alert("信息不匹配");
        }
      });
      this.resetForm(formName);
    },
    // 清空数据
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.flage = "cont";
    },
    selectItemAction(index) {
      if (this.selectIndex === index) {
        this.selectIndex = -1;
      } else {
        this.selectIndex = index;
      }
    },
    // 编辑对公数据
    // modifyInfoAction(index) {
    //   console.log(index + "qqqq");
    //   this.flage = "redact";
    //   this.ruleForm3 = { ...this.ruleForm[index] };
    //   this.ruleFormindex = index;
    //   console.log(this.ruleForm3);
    //   this.showb = false;
    // },
    // finishModifyAction() {
    //   this.ruleForm.splice(this.ruleFormindex, 1, this.ruleForm3);
    //   this.flage = "cont";
    //   console.log(this.ruleForm);
    //   console.log("2222222");
    //   this.showb = true;
    // },
    // 删除对公数据
    deleteInfoAction(index) {
      this.ruleForm.splice(index, 1);
    }
  }
};
</script>
<style lang="less" scoped>
.bank_box {
  .myBank,
  .myBankE {
    // height: 619px;
    background: #fff;
    .myBank_top {
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
    .myBank_cont {
      // height: 339px;
      border-bottom: 1px solid #eee;
      margin: 0 20px;
      .myBank_none {
        img {
          width: 197px;
          height: 187px;
          display: block;
          margin: 0 auto;
        }
        .ban_but {
          width: 352px;
          height: 51px;
          border: 1px dashed #ccc;
          border-radius: 12px;
          color: #0066cc;
          font-size: 16px;
          margin: 20px 0 60px;
          .icon {
            height: 26px;
            width: 26px;
            vertical-align: -8px;
            overflow: hidden;
            margin-right: 10px;
            font-size: 40px;
            .ccccc {
            }
          }
        }
      }
      .myBank_q {
        .myBank_none_box {
          width: 100%;
          min-height: 320px;
          margin-bottom: 20px;
          word-wrap: break-word;
          overflow: auto;

          .myBank_true {
            width: 261px;
            height: 146px;
            background: url("../../assets/guzhuimg/bankb.png") no-repeat;
            float: left;
            margin-right: 37px;
            margin-bottom: 24px;
            .myBank_d {
              height: 20px;
              margin-top: 15px;
              // padding-right: 18px;
              span {
                font-size: 12px;
                color: #fff;
              }
              & > span:first-child {
                float: right;
              }
              & > span:last-child {
                float: right;
                margin-right: 20px;
              }
            }
            .myBank_name {
              margin-left: 20px;
              margin-top: 25px;
              text-align: left;
              color: #fff;
              font-size: 12px;
            }
            .myBank_num {
              font-size: 18px;
              color: #fff;
              text-align: left;
              margin-left: 20px;
              margin-top: 8px;
            }
            .myBank_user {
              font-size: 14px;
              color: #fff;
              text-align: left;
              margin-left: 20px;
              margin-top: 8px;
            }
          }
        }
        .ban_but {
          width: 261px;
          height: 146px;
          margin-bottom: 50px;
          margin-top: 0;
          float: left;
          border: 2px solid #eee;
          i {
            width: 26px;
            height: 26px;
            display: block;
            background: #0066cc;
            margin: 0 auto;
            border-radius: 50%;
            margin-bottom: 10px;
          }
        }
      }
    }
    .myBank_add {
      padding: 0 55px;
      height: 525px;
    }
  }
  .myBankE {
    .myBank_top {
      border-bottom: 0;
    }
  }
}
</style>
<style lang="less">
.myBank,
.myBankE {
  .myBank_add {
    .demo-ruleFormE,
    .demo-ruleForm {
      .el-form-item {
        .el-form-item__label {
          width: 138px !important;
        }
        .el-form-item__content {
          float: left;
          overflow: auto;
          width: 628px;
          text-align: left;
          margin-left: 0 !important;
          .el-select {
            width: 100%;
          }
          .el-input {
            display: block;
            width: 295px;
            .el-input__inner {
              height: 36px;
            }
          }
          .take_bankM {
            font-size: 12px;
            color: #f3262d;
          }
          .el-form-item__error {
            top: 12%;
            left: 313px;
            width: 133px;
          }
          .el-radio-group {
            margin-top: -13px;
            .el-radio__inner {
              border-radius: 5px;
            }
          }
          .el-radio-group {
            span {
              float: left;
              color: #666;
              p {
                float: right;
              }
            }
            .el-radio__label {
              color: #666;
              p {
                color: #0066cc;
              }
            }
          }
        }
      }
      & > .el-form-item:nth-child(5) {
        margin-left: 110px;
      }
      & > .el-form-item:last-child {
        margin-left: 110px;

        .el-button {
          width: 110px;
          height: 36px;
          border: none;
          background: #f3262d;
        }
      }
    }
  }
}
.myBankE {
  .myBank_add {
    .demo-ruleForm {
      .el-form-item {
        .el-form-item__label {
          width: 148px !important;
        }
      }
      & > .el-form-item:nth-child(5) {
        margin-left: 148px;
      }
      & > .el-form-item:last-child {
        margin-left: 138px;

        .el-button {
          width: 148px;
          height: 36px;
          border: none;
          background: #f3262d;
        }
      }
    }
  }
}
.el-select-dropdown{
      min-width: 295px!important;
    }
</style>


