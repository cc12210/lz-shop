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
        <span>
          <router-link to="/userCenter/take_money">提现</router-link>
        </span>
        <span>
          <router-link to="/userCenter/moneyRecord">提现记录 ></router-link>
        </span>
      </div>
    </div>
    <div class="myDeposit_bot">
      <div class="block">
        <span class="demonstration">操作时间</span>
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="searcType">
        <span style="display: inline-block">类型</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div class="searchWord">
        <span style="display: inline-block">搜索</span>
        <el-input v-model="search" style="display: inline-block;width: 200px" placeholder="请输入搜索内容"></el-input>
      </div>
      <div class="dormitoryData">
        <el-table
          ref="dormitoryTable"
          :data="tables"
          tooltip-effect="dark"
          border
          filterable
          style="width: 100%"
          :header-cell-style="getcolor"
          :cell-style="getcenter"
        >
          <el-table-column width="148" label="操作时间" prop="user_time"></el-table-column>
          <el-table-column width="148" label="类型" prop="user_type"></el-table-column>
          <el-table-column width="148" label="交易金额" prop="user_money"></el-table-column>
          <el-table-column width="148" label="余额" prop="user_balance"></el-table-column>
          <el-table-column label="交易说明" prop="user_explain"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value6: "",
      value: "",
      options: [
        {
          value: "1",
          label: "买"
        },
        {
          value: "2",
          label: "卖"
        }
      ],
      dormitory: [
        {
          user_type: "买",
          user_time: "2010-09-02",
          user_money: "10",
          user_balance: "110",
          user_explain: "去"
        },
        {
          user_type: "买",
          user_time: "2010-08-02",
          user_money: "20",
          user_balance: "110",
          user_explain: "去"
        },
        {
          user_type: "买",
          user_time: "2010-07-02",
          user_money: "201",
          user_balance: "110",
          user_explain: "去"
        },
        {
          user_type: "卖",
          user_time: "2010-06-02",
          user_money: "202",
          user_balance: "110",
          user_explain: "去"
        },
        {
          user_type: "卖",
          user_time: "2010-05-02",
          user_money: "203",
          user_balance: "110",
          user_explain: "去"
        },
        {
          user_type: "卖",
          user_time: "2010-4-02",
          user_money: "204",
          user_balance: "110",
          user_explain: "去"
        },
        {
          user_type: "买",
          user_time: "2010-03-02",
          user_money: "205",
          user_balance: "110",
          user_explain: "去"
        }
      ],
      search: ""
    };
  },
  computed: {
    // 模糊搜索
    tables() {
      const search = this.search;
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.dormitory.filter(data => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some(key => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.dormitory;
    }
  },
  methods: {
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
        line-height: 28px;
        a {
          color: #f3262d;
        }
      }
      & > span:nth-child(4) {
        margin-left: 31px;
        font-size: 14px;
        a {
          color: #006699;
        }
      }
    }
  }
  .myDeposit_bot {
    padding: 0 33px;
    min-height: 468px;
    background: #fff;
    padding-top: 40px;
    .block {
      float: left;
      margin-bottom: 30px;
      span {
        font-size: 14px;
        color: #333;
      }
      .el-range-editor.el-input__inner {
        height: 34px;
        .el-range__icon {
          line-height: 30px;
        }
      }
    }
    .searcType {
      float: left;
      span {
        font-size: 14px;
        color: #333;
      }
    }
    .searchWord {
      float: left;
      span {
        font-size: 14px;
        color: #333;
      }
      .el-input__inner {
        height: 34px;
      }
    }
    .dormitoryData {
      text-align: center;
      .el-table__header-wrapper {
        background: #f8f8f8;
      }
    }
  }
}
</style>
<style lang="less">
.block {
  margin-right: 30px;
  .el-range-editor.el-input__inner {
    height: 34px;
    margin-left: 5px;
    .el-range__icon {
      line-height: 28px;
    }
    .el-range-separator {
      line-height: 28px;
    }
  }
}
.searcType {
  float: left;
  margin-right: 50px;
  .el-input__inner {
    height: 34px;
    width: 120px;
    margin-left: 5px;
    background: #f7f7f7;
  }
}
a {
    text-decoration: none;
  }
.searchWord {
  float: left;
  .el-input__inner {
    height: 34px;
    width: 183px;
    margin-left: 5px;
  }
}
</style>



