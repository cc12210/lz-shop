<template>
  <!-- 提现 -->
  <div class="takeMoney">
    <div class="takeMoney_top">
      <span>账户余额提现</span>
    </div>
    <div class="takeMoney_bot">
      <span>
        提现手续费说明：提现手续费费率为
        <p>1%</p>
      </span>
      <div class="takeMoney_con">
        <div class="text_money">
          可提现金额：
          <span>{{textMoney}}元</span>
        </div>
        <el-form
          :model="takeMoney"
          :rules="rules"
          ref="takeMoney"
          label-width="100px"
          class="demo-takeMoney"
        >
          <el-form-item label="提现金额" prop="money">
            <el-input v-model="takeMoney.money">
              <span>元</span>
            </el-input>
            <p>人民币不少于1元</p>
          </el-form-item>
          <el-form-item label="选择银行" prop="money" class="takeMoney_bank">
            <el-select v-model="takeMoney.value" placeholder="请选择银行" class="user_bank">
              <el-option
                v-for="item in takeMoney.bank"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="submitForm_but">
            <el-button class="submit" type="primary" @click="submitForm('takeMoney')">确认提现</el-button>
          </el-form-item>
          <el-form-item class="submitForm_but submitForm_sim">
            <el-button class="submit" type="primary" @click="submitForm('takeMoneyReset')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //  var checkmoney = (rule,value,callback)=>{
    //     var textMoney = this.textMoney
    //       if(value> textMoney){
    //           alert("提现金额不能大于现有余额")
    //       }
    //   }
    return {
      textMoney: "200",
      takeMoney: {
        money: "",
        bank: [
          {
            value: "1",
            label: "中国银行"
          },
          {
            value: "2",
            label: "建设银行"
          }
        ],
        value: ""
      },

      rules: {
        //   money:[
        //         {validator: checkmoney, trigger: 'blur'}
        //   ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      var a = this.textMoney;
      console.log(a);
      var b = this.takeMoney.money;
      console.log(b);
      if (this.takeMoney.money > a) {
        alert("提现金额不能大于现有余额");
        this.takeMoney.money =''
      } else {
        this.$refs[formName].validate(valid => {
          if (valid) {
            console.log(this.$refs[formName].model);
          } else {
            alert("信息不完整！！");
            return false;
          }
        });
      }
    },
    // submitForm(formName) {
    //   // console.log(formName)
    //   this.$refs[formName].validate(valid => {
    //     var q = this.$refs[formName].model.money;
    //     console.log(q);
    //     var a = this.textMoney;
    //     console.log(a);
    //     // if (q > a) {
    //     //   alert("提现金额不能大于现有余额");
    //     //   q =''
    //     // } else {
    //     //   if (valid) {
    //     //     console.log(this.$refs[formName].model);
    //     //   } else {
    //     //     alert("信息不完整！！");
    //     //     return false;
    //     //   }
    //     // }

    //     if (valid) {
    //       if (q > a) {
    //         alert("提现金额不能大于现有余额");
    //       } else {
    //         console.log(this.$refs[formName].model);
    //       }
    //     } else {
    //       alert("信息不完整！！");
    //       return false;
    //     }
    //   });
    // },
    takeMoneyReset(formName) {}
  }
};
</script>
<style lang="less" scoped>
.takeMoney {
  width: 100%;
  min-height: 618px;
  background: #fff;
  .takeMoney_top {
    height: 62px;
    padding: 0 43px;
    border-bottom: 1px solid #e8e8e8;
    span {
      float: left;
      height: 100%;
      line-height: 62px;
    }
  }
  .takeMoney_bot {
    height: 500px;
    padding: 20px 134px;
    text-align: left;
    span {
      font-size: 12px;
      display: inline;
      color: #666;
      p {
        display: inline;
        color: #006699;
      }
    }
    .takeMoney_con {
      margin-top: 30px;
      margin-left: 10px;
      .demo-takeMoney {
        margin-left: 10px;
      }
      .text_money {
        font-size: 14px;
        color: #666;
        margin-bottom: 30px;
        span {
          font-size: 16px;
          color: #ff0027;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
<style lang="less">
.demo-takeMoney {
  .el-input__inner {
    border-radius: 0;
  }
  .el-form-item {
    margin-bottom: 40px;

    .el-form-item__label {
      text-align: left;
      width: 68px !important;
    }
    .el-form-item__content {
      margin-left: 70px !important;
      width: 206px;
      height: 40px;
      position: relative;
      span {
        position: absolute;
        right: 20px;
      }
    }
    p {
      margin-top: -7px;
      font-size: 12px;
      color: #999;
    }
  }
  .takeMoney_bank {
    .el-form-item__content {
      .el-select {
        width: 267px;
      }
    }
    .el-input__suffix-inner {
      position: absolute;
      right: -8px !important;
    }
  }
  .submitForm_but {
    float: left;
    .el-form-item__content {
      width: 102px;
      height: 32px;

      line-height: 0;
    }
    .el-button {
      width: 102px;
      height: 32px;
      background: #f3262d;
      border: none;
      &:hover {
        background: #f43c42;
      }
      span {
        right: 23px;
        line-height: 2px;
      }
    }
  }
  .submitForm_sim {
    margin-left: -32px !important;
    .el-button {
      border: 1px solid #f3262d;
      background: #fff;
      color: #f3262d;
      span {
        right: 36px;
        line-height: 2px;
      }
    }
  }
}
</style>



