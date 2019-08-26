<template>
  <!-- 交易消息 -->
  <div class="tradeNews">
    <div class="tradeNews_top">
      <span>
        有
        <p>{{title}}</p>条交易通知未读
      </span>
      <span>全部设为已读</span>
    </div>
    <div class="tradeNews_cont">
      <ul>
        <li v-for="(item, index) in coachExplainList" :key="index" class="tradeNews_li">
          <div class="tradeNews_left">
            <div class="dot">
              <p></p>凌客有笔一亿的生意邀您合作，约吗？
              <span>{{read_time}}</span>
            </div>

            <div class="coach-explain-wrap">
              <!--  {{item | explainLen}} 通过数据的filter内部判断来控制展示的字数 -->
              <!--   v-show="item.coachExplain.length >= 111" 判断开始评论字数（此时字数界限是111），决定显不显示 “全文、收起”按钮 -->
              {{item | explainLen}}
            </div>
            <a
              class="btn-pick-up"
              v-show="item.coachExplain.length >= 180"
              @click.stop="togglePickUp(item,$event)"
            >{{item.isExpand?'收起':'展开'}}</a>
          </div>

          <div class="tradeNews_right">
            <span class="submit">
              <el-button type="text" @click="submint" class="www">删除</el-button>
            </span>
            <span>已读</span>
          </div>
        </li>
      </ul>
      <!-- <div class="submit">
          <span>消息删除后不可恢复，确定删除吗？</span>
          <div class="but">
              <span></span>
          </div>
      </div>-->
    </div>
    <div class="pagination">
      <el-pagination :page-size="4" background layout="prev, pager, next" :total="20"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "2",
      coachExplainList: [
        {
          // explainerName: '蒋军成',
          coachExplain:
            "凌天众的方式放大沙发上水电费水电费水电费水电费沙发上水电费水电费水电费水电费沙发上水电费水电费水电费水电费水电费水电费水费水电费媒进军【IT解决方案】市凡是打发士大夫士大夫场，邀您共商千亿级创业大计。商机再次来临，整理好武器与行囊，面对行业解决方案市场这一块浩瀚千亿级蓝海，您是选择孤军奋战，还是选择携手凌天众媒网一起做时代的弄潮儿？找专业人做专业事，准备好用你的专业征服客户了吗？首次招商，名额有限，详情请点击：",
          isExpand: false //false显示收起  true 显示全文
        },
        {
          // explainerName: '蒋军成',
          coachExplain:
            "凌天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还天众媒计。商瀚千亿级蓝海，您是选择孤军奋战，还是选择携手凌天众媒网一起做时代的弄潮儿？找专业人做专业事，准备好用你的专业征服客户了吗？首次招商，名额有限，详情请点击：",
          isExpand: false //false显示收起  true 显示全文
        },
        {
          // explainerName: '蒋军成',
          coachExplain:
            "凌天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商瀚千亿级蓝海？首次招商，名额有限，详情请点击：",
          isExpand: false //false显示收起  true 显示全文
        },
        {
          // explainerName: '蒋军成',
          coachExplain:
            "凌天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商天众媒计。商瀚千亿级蓝海，您是选择孤军您商瀚千亿级蓝蓝千亿商瀚千亿级蓝海？首次招商，名额有限，详情请点击：",
          isExpand: false //false显示收起  true 显示全文
        }
      ],
      read_time: "2019-09-09   12:23:34"
    };
  },
  methods: {
    togglePickUp(item, e) {
      let target = e.target.parentNode; //点击后获取当前评论
      item.isExpand = !item.isExpand; //切换状态
      if (item.isExpand) {
        //true
        //当下全文状态
        target.style = "min-height:128px";
      } else {
        //false
        // 当下收起状态
        target.style.height = "120px"; //收起状态的容器高度
        //收起状态的高度
      }
    },
    submint() {
      this.$confirm("消息删除后不可恢复，确定删除吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  filters: {
    explainLen: function(item) {
      if (!item.coachExplain) return;
      if (item.isExpand) {
        //当下全文状态
        return item.coachExplain.substr(0, item.coachExplain.length - 1); //字符串截取
      } else {
        // 当下收起状态
        return item.coachExplain.substr(0, 165); //字符串截取100个字
      }
    }
  }
};
</script>
<style lang="less" scoped>
.user_cen_right {
  background: #fff;
}
.tradeNews {
  a {
    text-decoration: none;
  }
  width: 100%;
  min-height: 620px;
  background: #fff;
  .tradeNews_top {
    height: 65px;
    padding: 0 20px;
    span {
      float: left;
      overflow: auto;
      font-size: 14px;
      color: #666;
      line-height: 65px;
      margin-right: 30px;
      p {
        display: inline;
        color: #f3262d;
      }
    }
  }
  .tradeNews_cont {
    background: #fff;
    ul {
      min-height: 614px;
      position: relative;
      & > li:last-child {
        margin-bottom: 20px;
      }
      .tradeNews_li {
        min-height: 128px;
        border-top: 1px solid #eee;
        display: inline-block;
        float: left;
        width: 1030px;
        padding: 20px 0 0 0px;
        &:hover {
          background: #fafafa;

          & > .tradeNews_right {
            & > span:first-child {
              visibility: visible;
            }
          }
        }
        .tradeNews_left {
          width: 812px;
          float: left;
          overflow: auto;
          &:hover {
            background: #fafafa;
          }
          .dot {
            text-align: left;
            font-size: 14px;
            color: #333;
            padding-left: 20px;
            p {
              display: inline-block;
              height: 10px;
              width: 10px;
              background: #999;
              border-radius: 50%;
              margin-right: 10px;
            }
            span {
              color: #999;
              margin-left: 100px;
            }
          }
          .coach-explain-wrap {
            font-size: 14px;
            margin-left: 18px;
            margin-top: 10px;
            text-align: left;
            color: #999;
            padding-left: 20px;
          }
          a {
            float: left;
            overflow: auto;
            margin-left: 38px;
            margin-top: 10px;
            cursor: pointer;
            padding: 2px 10px;
            background: #f0f0f0;
            border: 1px solid #ccc;
            font-size: 12px;
            color: #333;
            margin-bottom: 10px;
          }
        }
        .tradeNews_right {
          height: 65px;
          margin-left: 812px;
          position: relative;

          span {
            font-size: 12px;
            color: #999;
            margin-top: 20px;
          }
          & > span:first-child {
            visibility: hidden;
            margin-right: 10px;
            display: inline-block;
            width: 44px;
            height: 22px;
            line-height: 22px;
            &:hover {
              margin-top: 19px;
              width: 42px;
              height: 20px;
              border: 1px solid #f3262d;

              // padding: 3px 8px;
            }
          }
        }
      }
    }
    .pagination {
      display: block;
      width: 100%;
      height: 30px;
      float: left;
      margin: 20px auto;

      .el-pagination {
        white-space: pre-wrap;
      }
    }
  }
}
</style>
<style lang="less">
.tradeNews_right {
  & > span:first-child {
    &:hover {
      .el-button {
        color: #f3262d;
      }
    }
    .el-button--text {
      color: #999;
    }
    .el-button {
      line-height: 0;
      padding: 0;
    }
  }
}
.el-popup-parent--hidden {
  .el-message-box__wrapper {
    .el-message-box {
      width: 379px;
      height: 197px;
      background: rgba(51, 51, 51, 1);
      opacity: 0.84;
      border-radius: 2px;
      padding: 0;

      .el-message-box__content {
        margin-bottom: 30px;
      }
      .el-message-box__btns {
        width: 170px;
        margin: 0 auto;
        & > button:first-child {
          float: right;
          color: #333;
          border: none;
          &:hover {
            background: #fff;
          }
        }
        & > button:last-child {
          float: right;
          margin: 0 38px 0 0;
          background: #fff;
          color: #333;
          border: none;
          &:hover {
            color: #fff;
            background: #f3262d;
          }
        }

        .el-button--small {
          padding: 7px 21px;
        }
      }
    }
    .el-message-box__title {
      display: none;
    }
  }
  .el-message-box__content {
    .el-message-box__message {
      color: #fff;
    }
  }
  .v-modal {
    display: none;
  }
}

.pagination {
  padding-bottom: 20px;
  .el-pagination {
    white-space: pre-wrap;
  }
}
</style>



