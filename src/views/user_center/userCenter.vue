<template>
  <div class="user_center">
    <comHeader/>
    <div class="user">
      <div class="user_cen_left">
        <h2>雇主中心</h2>
        <div class="user_cen_top">
          <h3>交易管理</h3>
          <ul class="nav_center trading_center">
            <li> <router-link to="/userCenter/myOrder">我的订单</router-link></li>
            <li>我的评价</li>
            <li>我的发票</li>
            <li>我的退款</li>
          </ul>
          <h3>个人资料</h3>
          <ul class="nav_center personal_data">
            <li>基本资料</li>
            <li>银行卡管理</li>
          </ul>
          <h3>账户管理</h3>
          <ul class="nav_center account management">
            <li>实名认证</li>
            <li>修改绑定手机</li>
            <li>修改登录密码</li>
          </ul>
          <h3>我发布的</h3>
          <ul class="nav_center ma_issue">
            <li>我发布的任务</li>
            <li>我发布的线索</li>
          </ul>
          <h3>消息中心</h3>
          <ul class="nav_center personal_data">
            <li>交易中心</li>
            <li>系统消息</li>
          </ul>
        </div>
      </div>
      <div class="user_cen_right">
        <!-- <myOrder/> -->
        
        <router-view/>
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
    comFooter,
    // myOrder
  }
};
</script>
<style lang="less" scoped>
.user_center {
  width: 100%;
  // min-height: 710px;
  background: #F4F4F4;
    .user {
    width: 1210px;
    // min-height: 710px;
    margin: 0 auto;
    position: relative;
    .user_cen_left {
      float: left;
      background: #fff;
      width: 160px;
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
      .user_cen_top{
        h3{
          font-size: 16px;
          margin-top: 9px;
        }
        .nav_center{
          margin-bottom: 20px;
          margin-top: 10px;
          li{
                color: #666;
                font-size: 14px;
                line-height: 27px;
              }
        }
       
      }
    }
    .user_cen_right{
      float: left;
      width: 1030px;
      // min-height: 645px;
      background: #fff;
      margin-left: 20px;
      margin-top: 20px;
      overflow: auto;
    }
  }
}
</style>


