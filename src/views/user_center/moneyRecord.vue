
<!-- 提现记录 -->
<template>
  <!-- 账户余额 -->
  <div class="moneyRecord">
    <div class="myDeposit_top">
      <div class="myDeposit_cont">
        <span>提现记录</span>
        <span>
          <p>50.00</p>
          <p>累计提现</p>
        </span>
      </div>
    </div>
    <div class="myDeposit_bot">
      <el-form :inline="true" :model="formInline" class="demo-form-inline time_bot">
        <el-form-item label="操作时间">
          <el-date-picker
            v-model="formInline.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="状态" class="region_bot">
          <el-select v-model="formInline.region" placeholder="状态">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="user_bot">
          <el-input v-model="formInline.user" placeholder="关键字"></el-input>
        </el-form-item>
        <el-form-item class="submit">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="dormitoryData">
        <el-table
          ref="dormitoryTable"
          :data="dormitory"
          tooltip-effect="dark"
          border
          filterable
          style="width: 100%"
          :header-cell-style="getcolor"
          :cell-style="getcenter"
        >
          <el-table-column label="申请时间" prop="user_time"></el-table-column>
          <el-table-column label="银行账号" prop="user_bank"></el-table-column>
          <el-table-column label="提现金额" prop="user_money"></el-table-column>
          <el-table-column label="状态" prop="user_type"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        time: ""
      },
      dormitory: [
        {
          user_type: "买",
          user_time: "2010-09-02",
          user_money: "10",
          user_bank: "110"
        },
        {
          user_type: "买",
          user_time: "2010-08-02",
          user_money: "20",
          user_bank: "110"
        },
        {
          user_type: "买",
          user_time: "2010-07-02",
          user_money: "201",
          user_bank: "110"
        },
        {
          user_type: "卖",
          user_time: "2010-06-02",
          user_money: "202",
          user_bank: "110"
        },
        {
          user_type: "卖",
          user_time: "2010-05-02",
          user_money: "203",
          user_bank: "110"
        },
        {
          user_type: "卖",
          user_time: "2010-4-02",
          user_money: "204",
          user_bank: "110"
        },
        {
          user_type: "买",
          user_time: "2010-03-02",
          user_money: "205",
          user_bank: "110"
        }
      ]
    };
  },
  methods: {
    onSubmit(formName) {
      console.log(this.formInline);
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
.moneyRecord {
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
        padding-right: 36px;
        margin-right: 36px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
      }
      & > span:nth-child(2) {
        line-height: 20px;
        margin-top: 13px;
        height: 79%;
        margin-right: 93px;
        & > p:first-child {
          font-size: 20px;
          color: #333;
          font-weight: bold;
        }
        & > p:last-child {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
  .myDeposit_bot {
    padding: 0 33px;
    min-height: 468px;
    background: #fff;
    padding-top: 40px;
  }
  .dormitoryData {
    text-align: center;
    .el-table__header-wrapper {
      background: #f8f8f8;
    }
  }
}
</style>
<style lang="less">
.myDeposit_bot {
  .el-input__inner {
    height: 36px;
  }
  .el-form-item__content {
    line-height: 30px;
  }
  .el-form-item {
    float: left;
    margin-right: 20px;
  }
  .user_bot {
    .el-form-item__content {
      width: 183px;
      height: 36px;
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
      height: 36px;
    }
  }
}
</style>






