
<!-- 我的订单 -->
<template>
  <div class="mayOrder">
    <span class="my_order">服务订单</span>
    <div class="myDeposit_bot">
      <!-- <span class="order_f">服务订单（{{}}）</span> -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline time_bot">
        <el-form-item label="下单时间">
          <el-date-picker
            v-model="formInline.time"
            type="daterange"
            range-separator="至"
            start-placeholder="选择日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="全部" class="region_bot">
          <el-select v-model="formInline.region" placeholder="状态">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="user_bot">
          <el-input v-model="formInline.user" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="onSubmit">确定</el-button>
        </el-form-item>
      </el-form>
      <table cellspacing cellpadding class="table">
        <thead class="thead">
          <tr>
            <th>订单信息</th>
            <th>单价（元）</th>
            <th>数量</th>
            <th>订单总金额</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody class="tbody" v-for="(item ,index) in orderList" :key="index">
          <tr class="tr_top" v-for="(itemList , index) in item" :key="index">
            <td>
              <span>{{itemList.time}}</span>
              <span>
                订单号：
                <p>{{itemList.order}}</p>
              </span>
              <span>{{itemList.company}}</span>
            </td>
            <td>
              <span>
                <li>{{itemList.img}}</li>
                <li>{{itemList.name}}</li>
                <li>素材时长：{{itemList.timeJop}}</li>
                <li>投放周期：{{itemList.week}}</li>
              </span>
              <span>￥{{itemList.price}}</span>
              <span>{{itemList.num}}</span>
              <span>￥{{itemList.orderPrice}}</span>
              <span v-if="itemList.state==1">
                <p style="color:#FF6C00;">待托管</p>
                <p>查看详情</p>
              </span>
              <span v-else-if="itemList.state==2">
                <p>已成交</p>
                <p>查看详情</p>
              </span>
              <span v-else-if="itemList.state==3">
                <p style="color:#FF6C00;">待签署</p>
                <p>查看详情</p>
              </span>
              <span v-else-if="itemList.state==4">
                <p style="color:#FF6C00;">待签署</p>
                <p>查看详情</p>
              </span>
              <span v-else-if="itemList.state==5">
                <p>已冻结</p>
                <p>查看详情</p>
              </span>

              <span v-if="itemList.state==1">
                <p>
                  <el-button type="text" @click="dialogFormVisible = true">托管赏金</el-button>
                </p>
                <!-- <p>取消订单</p> -->
              </span>
              <span v-else-if="itemList.state==2">
                <p class="check">查看合同</p>
                <p>申请发票</p>
              </span>
              <span v-else-if="itemList.state==3">
                <p class="check">签署合同</p>
              </span>
              <span v-else-if="itemList.state==4">
                <p class="check">发起合同</p>
              </span>

              <span v-else-if="itemList.state==5">
                <p class="check_t">查看退款</p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="block" id="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          background
          :page-size="10"
          layout="total,prev, pager, next, jumper"
          prev-text="上一页"
          next-text="下一页"
          :total="100"
        ></el-pagination>
        <div class="sbm">确定</div>
      </div>
      <div class="clear"></div>
    </div>
    <el-dialog
      :before-close="handleClose"
      v-if="payNum ==1"
      title="托管赏金"
      :visible.sync="dialogFormVisible"
      class="t_money"
    >
      <div>
        <span>赏金金额</span>
        <li>￥3333333.33</li>
      </div>
      <div>
        <span class="span_pay">支付方式</span>
        <el-radio-group v-model="radio2" class="payment">
          <el-radio :label="1">
            <span class="pay">余额支付</span>
            可用余额：
            <span class="pay_color">￥3333333.23</span>
          </el-radio>
          <el-radio :label="2">支付宝支付</el-radio>
          <el-radio :label="3">微信支付</el-radio>
          <el-radio :label="4" class="pay_bank">
            <span>企业或个人银行线下转账支付</span>
            <el-button class="pay_list" type="text" @click="dialogTableVi = true">查看线下转账支付银行</el-button>
          </el-radio>
        </el-radio-group>
      </div>
      <el-button @click="modePayment">确定</el-button>
    </el-dialog>
    <el-dialog
      v-else-if="payNum ==2"
      title="微信支付"
      :before-close="handleClose"
      :visible.sync="dialogFormVisible"
      class="t_money"
    >
      <div>
        <span class="pay_wx">您正在使用微信支付，请扫以下二维码进行支付</span>
      </div>
      <div class="img_pay">
        <img class="wx_img" src alt />
      </div>
    </el-dialog>
    <el-dialog
      v-else-if="payNum == 3"
      title="线下银行支付"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
      class="bank_money"
    >
      <div class="pay_b">
        <span class="pay_wx">
          您选择了线下转账支付，请牢记
          <p>转账识别码</p>并将此识别码填写在转账备注说明
        </span>
      </div>
      <div class="img_pay">
        转账识别码：
        <p>1111111111111</p>
      </div>
      <el-button @click.stop="modePay">确定</el-button>
    </el-dialog>
    <el-dialog
      title="支持转账银行"
      :visible.sync="dialogTableVi"
      :before-close="handleClose"
      class="banList"
    >
      <div class="ban_b" v-for="(ban , index) in banList" :key="index">
        <div v-for="(item , index) in ban" :key="index">
          <img :src="item.img" alt />
          <div class="ban_list">
            <li>
              <span>银行账号：</span>
              <span>{{item.banNumber}}</span>
            </li>
            <li>
              <span>开户名：</span>
              <span>{{item.banName}}</span>
            </li>
            <li>
              <span>开户行：</span>
              <span>{{item.banN}}</span>
            </li>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage3: 1,
      dialogFormVisible: false,
      dialogTableVi: false,
      radio2: 1,
      payNum: 1,
      formInline: {
        user: "",
        region: "",
        time: ""
      },
      banList: [
        [
          {
            img: "",
            banNumber: "1111111111111111111",
            banName: "深圳凌天众媒",
            banN: "招商银行保安新安支行"
          }
        ],
        [
          {
            img: "",
            banNumber: "1111111111111111111",
            banName: "深圳凌天众媒",
            banN: "招商银行保安新安支行"
          }
        ],
        [
          {
            img: "",
            banNumber: "1111111111111111111",
            banName: "深圳凌天众媒",
            banN: "招商银行保安新安支行"
          }
        ]
      ],
      orderList: [
        [
          {
            time: "2019-05-24  12:29:23",
            order: "154945851262",
            company: "金墨文化传播有限公司",
            img: "",
            name: "品牌科技公司餐饮门店食品产品LOGO设计商标标志logo设计",
            price: "150000",
            num: "2",
            orderPrice: "1500",
            state: "1",
            timeJop: "2S",
            week: "月"
          }
          // {operation:''}
        ],
        [
          {
            time: "201:29:23",
            order: "1551262",
            company: "金墨播有限公司",
            img: "",
            name: "品牌科技门店食品产品LOGO设计商标标志logo设计",
            price: "15000",
            num: "2",
            orderPrice: "1500",
            state: "2"
          }
          // {operation:''}
        ],
        [
          {
            time: "201:29:23",
            order: "1551262",
            company: "金墨播有限公司",
            img: "",
            name: "品牌科技门店食品产品LOGO设计商标标志logo设计",
            price: "15000",
            num: "2",
            orderPrice: "1500",
            state: "3"
          }
          // {operation:''}
        ],
        [
          {
            time: "201:29:23",
            order: "1551262",
            company: "金墨播有限公司",
            img: "",
            name: "品牌科技门店食品产品LOGO设计商标标志logo设计",
            price: "15000",
            num: "2",
            orderPrice: "1500",
            state: "4"
          }
          // {operation:''}
        ],
        [
          {
            time: "201:29:23",
            order: "1551262",
            company: "金墨播有限公司",
            img: "",
            name: "品牌科技门店食品产品LOGO设计商标标志logo设计",
            price: "15000",
            num: "2",
            orderPrice: "1500",
            state: "5"
          }
          // {operation:''}
        ]
      ]
    };
  },
  created() {
    // console.log(this.orderList[index])
  },
  methods: {
    onSubmit(formName) {
      console.log(this.formInline);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    getcolor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background:#e8e8e8;text-align: center;";
      }
    },
    getcenter({ row, column, rowIndex, columnIndex }) {
      return "text-align: center;";
    },
    handleClose() {
      window.location.reload();
    },
    modePayment() {
      this.payNum = this.radio2;
    },
    modePay() {
      window.location.reload();
    }
    // dialogTableVi(){
    //   this.dialogFormVisible=false
    // }
  }
};
</script>
<style lang="less" scoped>
.mayOrder {
  width: 100%;
  min-height: 619px;
  background: #fff;
  .my_order {
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
  .myDeposit_bot {
    padding: 0 20px;
    .order_f {
      width: 113px;
      height: 45px;
      display: block;
      position: relative;
      line-height: 45px;
      color: #666;
      font-size: 14px;
      border-top: 1px solid #f3262d;
      top: -1px;
      text-align: left;
    }
    .table {
      .thead {
        display: block;
        width: 990px;
        height: 34px;
        background: #f4f6f8;
        tr {
          th {
            font-size: 12px;
            color: #666;
          }
          & > th:first-child {
            width: 386px;
            text-align: left;
            padding-left: 20px;
            height: 34px;
          }
          & > th:nth-child(2),
          & > th:nth-child(4) {
            width: 112px;
          }
          & > th:nth-child(3) {
            width: 80px;
          }
          & > th:nth-child(5) {
            width: 122px;
          }
          & > th:last-child {
            width: 171px;
          }
        }
      }
      .tbody {
        width: 990px;
        height: 135px;

        overflow: hidden;
        tr {
          td {
            font-size: 12px;
            color: #999;
          }
          & > td:first-child {
            background: #f4f6f8;
            height: 35px !important;
            display: block;
            margin-top: 20px;
            span {
              float: left;
              text-align: left;
              line-height: 35px;
            }
            & > span:nth-child(1) {
              margin-left: 10px;
            }
            & > span:nth-child(2) {
              margin: 0 100px 0 100px;
              p {
                float: right;
              }
            }
          }
          & > td:last-child {
            height: 99px !important;
            display: block;
            line-height: 99px;
            border: 1px solid #f4f6f8;
            span {
              display: inline-block;
              float: left;
              overflow: hidden;
              border-right: 1px solid #f4f6f8;
              .check {
                background: #f3262d;
                color: #fff !important;
              }
              & > .check:hover {
                background: #f43c42 !important;
              }
              .check_t {
                background: #f4f4f4;
                color: #666 !important;
                border: 1px solid #dfdfdf !important;
              }
              & > .check_t:hover {
                background: #fff !important;
              }
            }
            & > span:nth-child(1) {
              width: 398px;
              height: 99px;
              float: left;
              position: relative;
              color: #666;
              & > li:first-child {
                display: inline-block;
                width: 100px;
                height: 60px;
                background: #ccc;
                float: left;
                margin-left: 10px;
                margin-top: 18px;
              }
              & > li:nth-child(2) {
                width: 196px;
                float: left;
                line-height: 18px;
                padding-top: 16px;
                text-align: left;
                font-size: 14px;
                color: #333;
                margin-left: 10px;
              }
              & > li:nth-child(2):hover {
                color: #f3262d;
              }
              & > li:nth-child(3) {
                text-align: left;
                width: 105px;
                height: 20px;
                position: absolute;
                top: 20px;
                left: 111px;
                margin-left: 10px;
                font-size: 12px;
                line-height: 14px;
                top: 62px;
              }
              & > li:nth-child(4) {
                width: 105px;
                height: 20px;
                position: absolute;
                top: 20px;
                left: 200px;
                font-size: 12px;
                line-height: 14px;
                top: 62px;
              }
            }
            & > span:nth-child(2),
            & > span:nth-child(4) {
              width: 110px;
            }
            & > span:nth-child(3) {
              width: 78px;
            }
            & > span:nth-child(5),
            & > span:nth-child(6) {
              width: 120px;
            }
            & > span:nth-child(5) {
              & > p:nth-child(1) {
                margin-top: 22%;
                color: #999;
                cursor: pointer;
              }
              p {
                line-height: 26px;
                color: #666;
                cursor: pointer;
              }
            }
            & > span:last-child {
              width: 167px;
              border-right: 0;

              & > p:nth-child(1) {
                margin-top: 15%;
                color: #999;
                border: 1px solid #f3262d;
                width: 78px;
                height: 28px;
                line-height: 30px;
                margin-left: 24%;

                font-size: 12px;
                cursor: pointer;
                border-radius: 3px;
                .el-button--text {
                  color: #f3262d;
                  padding: 0;
                }
              }
              & > p:nth-child(1):hover {
                background: #f3262d;
                color: #fff !important;
                .el-button--text {
                  color: #fff !important;
                  padding: 0;
                }
              }
              p {
                line-height: 26px;
                color: #666;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
  .clear {
    clear: both;
  }
}
</style>
<style lang="less">
.mayOrder {
  .el-dialog__headerbtn:focus .el-dialog__close,
  .el-dialog__headerbtn:hover .el-dialog__close {
    color: #f3262d;
  }
}
.myDeposit_bot {
  // overflow: auto;
  position: relative;

  .el-input__inner:focus,
  .el-range-editor.is-active {
    border: 1px solid #5da6ff;
    outline: 0;
    box-shadow: 0px 0px 4px #5da6ff;
  }
  .el-input__inner {
    height: 34px;
  }
  .el-from {
    margin-top: 45px;
  }
  .el-form-item__content {
    line-height: 30px;
    .el-date-editor--daterange.el-input__inner {
      width: 237px;
    }

    .el-range-input {
      width: 50%;
    }
    .el-range__icon {
      line-height: 29px;
    }
    .el-range-separator {
      line-height: 28px;
    }
    .el-range-input {
      margin-left: 5px;
    }
  }
  .el-form-item {
    float: left;
    margin-right: 20px;
  }
  .user_bot {
    .el-form-item__content {
      width: 183px;
      height: 34px;
    }
  }
  .region_bot {
    margin-right: 30px;
    .el-form-item__content {
      width: 120px;
      height: 36px;
      .el-input__inner {
        background: #f7f7f7;
      }
    }
  }
  .submit {
    .el-button {
      background: #f3262d;
      border: 0;
      height: 34px;
      line-height: 12px;
    }
  }
  #block {
    width: 82%;
    float: right;
    padding: 20px;
    .el-pagination {
      float: left;
    }
    .btn-prev {
      float: left;
      margin-left: 10%;
      padding: 0 15px;
      border: 1px solid #d1d1d1;
    }
    .el-pager,
    .btn-next {
      float: left;
    }
    .el-pager {
      .number {
        background: #fff;
        border: 1px solid #d1d1d1;
      }
      & > .number:hover {
        color: #f3262d;
      }
      .active {
        border: 0;
        color: #f3262d;
      }
    }
    .btn-next {
      padding: 0 15px;
      border: 1px solid #d1d1d1;
    }
    //      .el-pagination__total{
    //       float:right;
    //  margin-right: 100px;
    //     }
    .el-pagination__jump {
      margin-left: 4px;
    }
    .sbm {
      float: right;
      /* line-height: 24px; */
      border: 1px solid #d1d1d1;
      padding: 3px 8px;
      cursor: pointer;
      font-size: 14px;
    }
  }
}
.t_money {
  .el-dialog {
    width: 32%;
    height: 352px;
    .el-dialog__header {
      text-align: left;
      background: #f5f5f5;
      padding: 15px;
      font-weight: 600;
      .el-dialog__title {
        font-size: 16px;
        color: #333;
      }
    }
    .el-dialog__body {
      text-align: left;
      position: relative;
      & > div:first-child {
        font-size: 14px;
        color: #333;
        margin-bottom: 20px;
        span {
          display: inline-block;
          margin-right: 20px;
        }
        .pay_wx {
          display: block;
          text-align: center;
          font-size: 14px;
          color: #666;
        }
        li {
          display: inline-block;
          color: #ff0027;
        }
      }
      .img_pay {
        position: relative;
        height: 150px;
        .wx_img {
          display: block;
          width: 150px;
          height: 150px;
          background: #ccc;
          position: absolute;
          left: 50%;
          top: 15px;
          margin-left: -75px;
        }
      }
      & > div:nth-child(2) {
        overflow: hidden;
        padding-bottom: 60px;
        .span_pay {
          float: left;
          margin-right: 20px;
        }

        .payment {
          float: left;
          width: 200px;
          .el-radio {
            margin-bottom: 15px;

            .pay {
              margin-right: 30px;
            }
            .pay_color {
              color: #ff0027;
            }
            .el-radio__input.is-checked + .el-radio__label {
              color: #333;
            }
          }
          .pay_bank {
            .el-radio__label {
              .pay_list {
                margin-left: 20px;
                color: #0066cc;
                font-size: 12px;
                padding: 0;
                position: relative;
                bottom: 0;
                left: 30px;
                background: #fff;
                margin: 0;
              }
            }
          }
        }
      }
      .el-button {
        padding: 10px 25px;
        position: absolute;
        bottom: 30px;
        left: 50%;
        margin-left: -40px;
        background: #f3262d;
        color: #fff;
        border: 0;
      }
    }
  }
}

.bank_money {
  .el-dialog {
    width: 440px;
    height: 284px;
  }
  .el-dialog__header {
    text-align: left;
    background: #f5f5f5;
    padding: 15px;
    font-weight: 600;
    .el-dialog__title {
      font-size: 16px;
      color: #333;
    }
  }
  .pay_b {
    position: relative;
    padding-top: 10px;
    .pay_wx {
      display: block;
      text-align: left;
      position: absolute;
      left: 50%;
      width: 270px;
      margin-left: -135px;
      color: #666;
      p {
        // position: absolute;
        display: inline;
        right: 0;
        top: 0;
        color: #ff0027;
      }
    }
  }
  .img_pay {
    margin-top: 10%;
    display: block;
    width: 270px;
    margin-left: 16%;
    text-align: left;
    padding: 20px 0 30px;
    p {
      display: inline;
      color: #333;
      font-weight: 600;
    }
  }
  .el-button {
    padding: 10px 25px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -40px;
    background: #f3262d;
    color: #fff;
    border: 0;
    transition: 0!important;
  }
}
.banList {
  .el-dialog {
    width: 750px;
    height: 430px;
  }
  .el-dialog__header {
    text-align: left;
    background: #f5f5f5;
    padding: 15px;
    font-weight: 600;
    .el-dialog__title {
      font-size: 16px;
      color: #333;
    }
  }
  .ban_b {
    margin-bottom: 60px;
    img {
      display: inline-block;
      width: 166px;
      height: 43px;
      background: #ccc;
      margin-right: 50px;
      margin-bottom: 4px;
    }
    .ban_list {
      display: inline-block;
      color: #333;
      text-align: left;
      li {
        line-height: 21px;
      }
      & > li:nth-child(2),
      & > li:nth-child(3) {
        padding-left: 14px;
      }
    }
  }
}
 .el-button {
    
    transition: 0s!important;
  }
</style>






