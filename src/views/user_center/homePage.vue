<template>
<!-- 雇主中心首页 -->
  <div class="first_page">
    <!-- <div class="fir_scroll">我是滚动消息</div> -->
    <!-- 个人资料 -->
    <div class="fir_data">
      <div class="triangle_down"></div>
      <div class="triangle_up"></div>
      <div class="user_data">
        <div class="user_data_top">
          <img src alt="头像" class="user_img" />
          <div class="user_name">
            <span>潘祖丽</span>
          </div>
          <div class="chang">
            <!-- <span>修改资料</span> -->
          </div>
        </div>
        <div class="user_data_bottom">
          <p class="user_news">
            未读站内信<i>(3)</i>
          </p>
          <span class="user_news_in"> 进入消息中心 ></span>
        </div>
      </div>
      <div class="user_money">
        <div class="balance">
          <span class="balance_one">111.11</span>
          <span class="balance_two">
          <router-link to="/userCenter/myDeposit">账户余额</router-link> </span>
        </div>
        <div class="tack_maney">提现</div>
      </div>
      <div class="user_banner"></div>
    </div>
    <!-- 交易订单 我的购物车 -->
    <div class="fir_order_car">
      <div class="fir_order">
        <div class="fir_order_head">
          <span class="order">交易订单</span>
          <span class="more">全部订单 ></span>
        </div>
        <ul v-if="orderList.length==0" class="shop_none order_none">
            <img src="" alt="暂无数据">
           <span>您还没有交易订单哦</span>
           <el-button class="shop_but">去找服务</el-button>
        </ul>
        <ul v-else>
          <!-- <li>
            <div class="order_name">
              <span>我是服务</span>
              <span>￥100</span>
            </div>
            <div class="order_state">托管</div>
            <div class="order_data">订单详情</div>
          </li> -->
          <li v-for="(item_order,index) in orderList" :key="index">
              <div class="order_name">
              <span>{{item_order.orderName}}</span>
              <span>{{item_order.orderMoney}}</span>
            </div>
            <div class="order_state">托管</div>
            <div class="order_data">订单详情</div>
          </li>
        </ul>
      </div>
      <div class="my_car">
        <div class="shop_car">
            <span>我的购物车</span>
            <span>查看全部 ></span>
        </div >
        <div class="shop_data shop_none" v-if="shopItem.length==0">
           <img src="" alt="暂无数据">
           <span>您还没有服务加入购物车哦</span>
           <el-button class="shop_but">去找服务</el-button>
        </div>

        <div class="shop_data" v-else>
          <ul>
            <li v-for="(shop_item ,index) in shopItem" :key="index">
              <img src="" alt="h商品" class="shop_img" />
              <span class="shop_name">{{shop_item.shopName}}</span>
              <span class="shop_money">￥{{shop_item.shopMoney}}</span>
            </li>
            <!-- <li v-for="">

            </li>-->
          </ul>
        </div>
        <el-button class="shop_but" v-if="shopItem.length!=0" >去购物车</el-button>
      </div>
    </div>
    <!-- <div class="my_task">
      <div class="my_task_head">
        <span>我发布的任务</span>
        <span>查看全部 ></span>
      </div>
      <div class="my_task_content">
        <ul>
          <li>
            <div class="my_task_name">
              <span>
                <p>￥800</p>LED大屏全国广场地标价招商昭和那个登山泛水
              </span>
              <span>
                <p>21人</p>浏览
              </span>
              <span>
                <p>8人</p>已投标
              </span>
            </div>
            <div class="classify">
                <span>招标任务</span>
                <span>发布时间：2019-09-08</span>
            </div>
            <div class="task_details">
                任务详情
            </div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="my_clue">
        <div class="my_task_head">
        <span>我发布的线索</span>
        <span>查看全部 ></span>
      </div>
       <div class="my_task_content shop_none" v-if="tastItem.length==0">
           <img src="" alt="暂无数据">
           <span>您还没发过线索哦</span>
           <el-button class="shop_but">去找服务</el-button>
       </div>
      <div class="my_task_content" v-else>
        <ul>
          <li v-for="(tast_item,index) in tastItem" :key="index">
            <div class="my_task_name">
              <span>
                <p>￥{{tast_item.tastMoney}}</p>{{tast_item.tastName}}
              </span>
              <span>
                <p>{{tast_item.tastLook}}人</p>浏览
              </span>
              <span>
                <p>{{tast_item.tastJoin}}人</p>已投标
              </span>
            </div>
            <div class="classify">
                <span>{{tast_item.tastPeo}}</span>
                <span>发布时间：{{tast_item.tastTime}}</span>
            </div>
            <div class="task_details">
                线索详情
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        // 交易订单数据
        orderList:[
            // {orderName:"我是服务名称我是服务名称我是服务名称我是我是服务名称我是服务名",orderMoney:"￥110"},
            //  {orderName:"温热温热荣威哦认为日文平日物品",orderMoney:"￥1102"},
            //   {orderName:"我是服务名称我是服务名称我是服务名称我是我是",orderMoney:"￥1120"}
        ],
        shopItem:[
            {shopImg:"img",shopName:"LED大屏全国广场地标价招商低价詹松",shopMoney:"111"},
             {shopImg:"img",shopName:"标价招商低价詹松",shopMoney:"112221"},
              {shopImg:"img",shopName:"LED大屏全国广场地标价招商低价詹松",shopMoney:"111"}
        ],
        tastItem:[
            // {tastMoney:"1002",tastName:"LED大屏全国广场",tastLook:"12",tastJoin:"20",tastPeo:"直客",tastTime:"2019-09-08"},
            // {tastMoney:"1003",tastName:"LED大屏全国广场地标价招商昭和那个反倒对双方发生",tastLook:"124",tastJoin:"20",tastPeo:"直客",tastTime:"2019-09-08"},
            // {tastMoney:"1020",tastName:"LED大屏全国广场地标价招商昭和标价招商昭和那个反倒对双方发生",tastLook:"123",tastJoin:"20",tastPeo:"中间商（非A）",tastTime:"2019-09-08"},
            // {tastMoney:"1500",tastName:"LED大屏全国广场地标价招商昭和那个反倒对双方发生",tastLook:"12",tastJoin:"20",tastPeo:"直客",tastTime:"2019-09-08"}
        ]

    };
  },
//  methods:{
//    change(){
//      this.$router.push({ path:'/userCenter/homePage/myDeposit'})
//    }
//  }
};
</script>
<style lang="less" scoped>
.first_page {
  width: 100%;
  .fir_scroll {
    position: absolute;
    top: 0;
  }
  .fir_data {
    width: 100%;
    height: 215px;
    margin-bottom: 21px;
    .triangle_down {
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 9px solid #f5f5f5;
      position: absolute;
      left: 448px;
    }
     .triangle_up {
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 9px solid #f5f5f5;
        position: absolute;
        left: 448px;
        bottom: 0;
        top: 226px;
    }
    .user_data {
      width: 275px;
      height: 215px;
      float: left;
      background: #fff;
      border-right: 1px dashed #e8e8e8;
      .user_data_top {
        width: 100%;
        height: 158px;
        .user_img {
          //   float: left;
          display: block;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #999;
          margin: 18px auto;
        }
        .user_name {
          width: 140px;
          height: 50px;
          //   float: left;
          margin: 0 auto;
          background: blueviolet;
          //   margin-top: 30px;
          span {
            font-size: 14px;
            color: #f3262d;
          }
        }
        .chang {
          line-height: 34px;
          font-size: 12px;
        }
      }
      .user_data_bottom {
        width: 100%;
        height: 20px;
        font-size: 12px;
        .user_news {
          //   float: left;
          display: inline-block;
          margin-top: 5px;
          i {
            color: #f3262d;
          }
        }
        .user_news_in {
          //   float: left;
          cursor: pointer;
          color: #0066cc;
        }
      }
    }
    .user_money {
      width: 275px;
      height: 215px;
      float: left;
      background: #fff;
      .balance {
        margin-top: 27%;
        span {
          display: block;
        }
        .balance_one {
          font-size: 26px;
          color: #333;
          font-weight: 600;
        }
        .balance_two {
          font-size: 14px;
          color: #666;
        }
      }
      .tack_maney {
        margin-top: 20px;
        cursor: pointer;
        color: #0066cc;
        font-size: 14px;
      }
    }
    .user_banner {
      float: left;
      width: 471px;
      height: 215px;
      margin-left: 8px;
      background: #ffdcdc;
    }
  }
  .fir_order_car {
    width: 100%;
    min-height: 500px;
    // background: #ccc;
    .fir_order {
      width: 659px;
      height: 500px;
      float: left;
      background: #fff;
      .fir_order_head {
        width: 100%;
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        // border-bottom: 1px solid #e8e8e8;
        .order {
          float: left;
          margin-left: 20px;
          color: #222;
          font-size: 16px;
        }
        .more {
          float: right;
          margin-right: 30px;
          color: #999;
          font-size: 12px;
          cursor: pointer;
          &:hover{

              color: #ff0027;
          }
        }
      }
      ul {
          padding: 0 20px;
        li {
          width: 100%;
          height: 118px;
          font-size: 14px;
          border-top: 1px solid #eee;
          .order_name {
            float: left;
            width: 400px;
            height: 118px;
            span {
              text-align: left;
              margin-left: 20px;
              display: block;
              font-size: 14px;
              color: #333;
            }
            & > span:first-child {
              margin-top: 30px;
              margin-bottom: 8px;
            }
            & > span:last-child {
              color: #ff0027;
              font-size: 16px;
            }
          }
          .order_state {
            margin-left: 20px;
            line-height: 118px;
           
          }
          .order_data {
            line-height: 118px;
            float: right;
            margin-right: 30px;
             color: #0066cc;
             cursor: pointer;
            &:hover{
                color: #ff0027;
            }
          }
        }
      }

      .order_state {
        float: left;
      }
    }
    .my_car {
      width: 351px;
      height: 500px;
      float: left;
      margin-left: 20px;
      background: #fff;
      .shop_car {
        width: 331px;
        height: 46px;
        display: block;
        //   border-bottom: 1px solid #e8e8e8;
        text-align: left;
        line-height: 46px;
        margin-left: 20px;
        font-size: 14px;
        &>span:last-child{
            float: right;
            margin-right: 10px;
            color: #999;
            font-size: 12px;
            cursor: pointer;
            &:hover{
                color: #ff0027;
            }
        }
      }
      .shop_data {
        width: 100%;
        height: 400px;
        // border-top: 1px solid #eee;
        ul {
            padding: 0 20px;
          li {
            width: 100%;
            height: 106px;
            border-top: 1px solid #eee;
            .shop_img {
              width: 142px;
              height: 86px;
              float: left;
              background: goldenrod;
              margin: 10px 13px 0 0px;
            }
            .shop_name {
              display: block;
              width: 153px;
            //   float: left;
              font-size: 14px;
              color: #333;
              margin-left: 155px;
              text-align: left;
            //   margin-top: 22px;
            padding-top: 10px;
            }
            .shop_money {
            //   display: block;
            //   float: left;
              width: 30px;
              height: 14px;
              color: #f3262d;
              margin-top: 15px;
              font-weight: 600;
              float: left;
            }
          }
        }
      }
     
      .shop_but {
        margin-top: 13px;
        line-height: 8px;
      }
    }
  }
  .my_task,.my_clue {
    width: 100%;
    min-height: 537px;
    margin-top: 21px;
    background: #fff;
    .my_task_head {
      width: 100%;
      height: 46px;
      span {
        line-height: 46px;
      }
      & > span:first-child {
        float: left;
        margin-left: 20px;
        font-size: 16px;
        color: #222;
      }
      & > span:last-child {
        float: right;
        margin-right: 105px;
        font-size: 12px;
        color: #999;
      }
    }
    .my_task_content {
      ul {
        padding: 0 20px;
        li {
          width: 100%;
          height: 96px;
          border-top: 1px solid #eee;
          .my_task_name {
            width: 302px;
            height: 100%;
            float: left;
            span {
              float: left;
              line-height: 32px;
              
              p {
                float: left;
              }
            }
            & > span:first-child {
              float: left;
              width: 280px;
              text-align: left;
              margin-left: 10px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #333;
              font-size: 14px;
              margin-top: 18px;
              p {
                float: left;
                color: #f3262d;
                margin-right: 6px;
              }
            }
             & > span:nth-child(2){
                 margin-right: 11px;
                 margin-left: 10px;
             }
            & > span:nth-child(2), & > span:nth-child(3) {
                color: #999;
                font-size: 12px;
                line-height: 18px;
              p {
                  color: #f3262d;
              }
            }
          }
          .classify{
            //   width: 554px;
              height: 100%;
              float: left;
              margin-left: 220px;
              span{
                  text-align: left;
              }
              &>span:first-child{
                  display: block;
                  margin-top: 22px;
                  color: #333;
                  font-size: 14px;
              }
               &>span:last-child{
                   display: block;
                  font-size: 12px;
                  color: #999;
                //   margin-left: 65px;
              }
          }
          .task_details{
              float: right;
              margin-right: 86px;
              line-height: 97px;
              font-size: 14px;
              color: #0066cc;
          }
        }
      }
    }
  }
  .my_clue{
       .classify{
            &>span:last-child{
                  font-size: 12px;
                  color: #999;
                //   margin-left: 91px!important;
              }
       }
  }
}
 .shop_none{
     
          img{
              display: inline-block;
              width: 90px;
              height: 115px;
              background: gold;
              margin-top: 28%;
          }
          span{
              display: block;
              font-size: 14px;
              line-height: 30px;
              color: #666;
          }

      }
.order_none{
    img{
        margin-top: 16%;
    }
}
.my_task_content{
    
     img{
        margin-top: 14%;
    }
}
</style>
<style <style lang="less">
.shop_but {
  width: 105px;
  height: 32px;
  color: #f3262d;
  border-radius: 0;
  border: 1px solid #f3262d;
  &:hover{
      background: #f3262d;
      color: #fff;
      border: none;
  }
}
.shop_none{
    .shop_but{
        margin-top: 10px;
        width: 104px;
        height: 30px;
        line-height: 5px!important;
    }
}
</style>



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    