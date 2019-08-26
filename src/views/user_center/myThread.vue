
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
            range-separator=""
            start-placeholder="选择日期"
            range-separator="至"
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
                <p>托管赏金</p>
                <p>取消订单</p>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage3: '',
      formInline: {
        user: "",
        region: "",
        time: ""
      },
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
    }
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
    .order_f{
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
                line-height: 28px;
                margin-left: 24%;
                color: #f3262d;
                font-size: 12px;
                cursor: pointer;
                border-radius: 3px;
              }
              & > p:nth-child(1):hover {
                background: #f3262d;
                color: #fff;
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
  .clear{
    clear: both;
  }
}
</style>
<style lang="less">
.myDeposit_bot {
  // overflow: auto;
  position: relative;
   .el-input__inner:focus,.el-range-editor.is-active{
           border:1px solid #5DA6FF;
    outline: 0;
          box-shadow: 0px 0px 4px #5DA6FF;
        }
  .el-input__inner {
    height: 34px;
  }
  .el-from{
    margin-top: 45px;
  }
  .el-form-item__content {
    line-height: 30px;
    .el-date-editor--daterange.el-input__inner{
      width: 237px;
    }
    
    .el-range-input{
      width: 50%;
    }
    .el-range__icon{
      line-height: 29px;
    }
    .el-range-separator{
      line-height: 28px;
    }
    .el-range-input{
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
  #block{
    width: 82%;
    float: right;
        padding: 20px;
        .el-pagination{
          float: left;
        }
    .btn-prev{
      float: left;
      margin-left: 10%;
      padding: 0 15px;
      border: 1px solid #d1d1d1;
    }
    .el-pager,.btn-next{
       float: left;
    }
    .el-pager{
      .number{
        background: #fff;
        border: 1px solid #d1d1d1;
      }
      &>.number:hover{
        color: #f3262d;
      }
      .active{
         border:0;
        color: #f3262d;
      }
    }
    .btn-next{
      padding: 0 15px;
      border: 1px solid #d1d1d1;

    }
//      .el-pagination__total{
//       float:right;
//  margin-right: 100px;
//     }
    .el-pagination__jump{
       margin-left: 4px;
       
    }
   .sbm{
     float: right;
    /* line-height: 24px; */
    border: 1px solid #d1d1d1;
    padding: 3px 8px;
    cursor: pointer;
    font-size: 14px;
   }
    
  }
}
</style>






