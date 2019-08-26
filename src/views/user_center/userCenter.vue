<template>
<!-- 雇主中心左边导航 -->
  <div class="user_center">
    <comHeader />
    <div class="user">
      <div class="user_cen_left">
        <h2>雇主中心</h2>
        <div class="user_cen_top">
          <h3>交易管理</h3>
          <ul class="nav_center trading_center">
            <li>
              <router-link to="/userCenter/myOrder">我的订单</router-link>
            </li>
            <li>
              <router-link to="/userCenter/myEvaluate">我的评价</router-link>
              </li>
            <li><router-link to="/userCenter/myInvoice">我的发票</router-link></li>
            <li><router-link to="/userCenter/myRefund">我的退款</router-link></li>
          </ul>
          <h3>个人资料</h3>
          <ul class="nav_center personal_data">
            <li><router-link to="/userCenter/myData">基本资料</router-link></li>
            <li><router-link to="/userCenter/myBank">银行卡管理</router-link></li>
          </ul>
          <h3>账户管理</h3>
          <ul class="nav_center account management">
            <li><router-link to="/userCenter/realName">实名认证</router-link></li>
            <li><router-link to="/userCenter/revisionPhone">修改绑定手机</router-link></li>
            <li><router-link to="/userCenter/revisionPass">修改登录密码</router-link></li>
          </ul>
          <h3>我发布的</h3>
          <ul class="nav_center ma_issue">
            <!-- <li>我发布的任务</li> -->
            <li><router-link to="/userCenter/myThread">我发布的线索</router-link></li>
          </ul>
          <h3>消息中心</h3>
          <ul class="nav_center personal_data">
            <li><router-link to="/userCenter/tradeNews">交易消息</router-link></li>
            <li><router-link to="/userCenter/systemNews">系统消息</router-link></li>
          </ul>
        </div>
      </div>
      <div class="user_cen_right">
        <!-- <myOrder/> -->

        <router-view />
      </div>
    </div>
    <comFooter />
  </div>
</template>
<script>
import comHeader from "../../components/comHeader.vue";
import comFooter from "../../components/comFooter.vue";
// import homePage from "./myOrder.vue";
export default {
  name: "userCenter",
  components: {
    comHeader,
    comFooter
    // myOrder
  }
};
</script>
<style lang="less" scoped>
.user_center {
  width: 100%;
  // min-height: 710px;
  background: #f5f5f5;
  .user {
    width: 1210px;
    // min-height: 710px;
    margin: 0 auto;
    position: relative;
    overflow: auto;
    .user_cen_left {
      float: left;
      background: #fff;
      width: 160px;
      margin-top: 1px;
      h2 {
        font-size: 16px;
        color: #333;
        display: block;
        width: 150px;
        height: 49px;
        margin-left: 5px;
        border-bottom: 1px solid #eee;
        line-height: 49px;
      }
      .user_cen_top {
        h3 {
          font-size: 16px;
          margin-top: 9px;
        }
        .nav_center {
          margin-bottom: 20px;
          margin-top: 10px;
          li {
            color: #666;
            font-size: 14px;
            line-height: 27px;
            a {
              text-decoration: none;
              color: #666;
              &:hover {
                color: #ff0027;
              }
            }
            .router-link-active {
              color: #ff0027;
            }
          }
        }
      }
    }
    .user_cen_right {
      float: left;
      width: 1030px;
      // min-height: 645px;
      // background: #fff;
      margin-left: 20px;
      margin-top: 20px;
      overflow: auto;
    }
  }
}
</style>


