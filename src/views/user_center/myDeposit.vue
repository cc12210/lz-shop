<template>
  <!-- 账户余额 -->
  <div class="myDeposit">
    <div class="myDeposit_top">
      <div class="myDeposit_cont">
        <span>账户余额</span>
        <span>
          <p>50.00</p>
          <p>资金</p>
        </span>
        <span>提现</span>
        <span>提现记录 ></span>
      </div>
    </div>
    <div class="myDeposit_bot">
      <div class="searchWord">
        <div style="display: inline-block">搜索：</div>
        <el-input
          v-model="search"
          style="display: inline-block;width: 1300px"
          placeholder="请输入搜索内容"
        ></el-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.myDeposit {
  .myDeposit_top {
    width: 100%;
    height: 136px;
    background: #fff;
    position: relative;
    margin-bottom: 14px;
    .myDeposit_cont {
      height: 62px;
      padding: 0 43px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      span {
        float: left;
        height: 100%;
        line-height: 62px;
      }
      & > span:first-child {
        border-right: 1px solid #eee;
        padding-right: 21px;
        margin-right: 21px;
        font-size: 16px;
        color: #333;
      }
      & > span:nth-child(2) {
        line-height: 20px;
        margin-top: 13px;
        height: 79%;
        margin-right: 93px;
        & > p:first-child {
          font-size: 24px;
          color: #333;
        }
        & > p:last-child {
          font-size: 14px;
          color: #666;
        }
      }
      & > span:nth-child(3) {
        width: 66px;
        height: 28px;
        margin-top: 16px;
        border: 1px solid #f3262d;
        border-radius: 4px;
        color: #f3262d;
        font-size: 14px;
        line-height: 26px;
      }
      & > span:nth-child(4) {
        margin-left: 31px;
        font-size: 14px;
        color: #006699;
      }
    }
  }
  .myDeposit_bot {
    width: 100%;
    min-height: 468px;
    background: #fff;
  }
}
</style>


