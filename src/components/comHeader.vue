<template>
  <div class="comHeader">
    <div class="header_top">
      <div class="login_header">
        <div class="login_header_left">
          <li>
            <span v-if>欢迎光临本店!</span>
            <!-- <span v-else>请登录</span> -->
          </li>
          <li class="second_li">
            <span v-if>请登录</span>
            <!-- <span v-else>请登录</span> -->
          </li>
          <li>
            <span v-if>免费登录</span>
            <!-- <span v-else>请登录</span> -->
          </li>
        </div>
        <div class="login_header_right">
          <li><router-link to="/userCenter">我的订单</router-link></li>
          <li>我是雇主</li>
          <li>我的消息()</li>
          <li>我是服务商</li>
          <li>购物车</li>
          <li>帮助中心</li>
        </div>
      </div>
    </div>
    <div class="header_center">
      <div class="header_center_logo">
        <div class="header_logo">
          <img src="../assets/headerImg/logo.jpg" alt />
          <img src="../assets/headerImg/logo.gif" alt />
        </div>
        <div class="header_ser">
          <div class="ser_left">
            <div style="margin-top: 29px;">
              <el-input placeholder="请输入内容" v-model="input" class="input-with-select sel_input">
                <el-select v-model="select" slot="prepend" placeholder="请选择" class="sel_name">
                  <el-option label="餐厅名" value="1"></el-option>
                  <el-option label="订单号" value="2"></el-option>
                  <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" class="se_search">搜索</el-button>
              </el-input>
            </div>
            <div class="header_nav">
                <li style="padding-left:0">移动广告</li>
                <li class="header_li">网络广告</li>
                <li>媒体广告</li>
                <li class="header_li">楼宇</li>
                <li>户外广告</li>
            </div>
          </div>
          <div class="text_span">或</div>
          <div class="ser_right">
              <button>发布线索需求</button>
          </div>
        </div>
      </div>
    </div>
    <div class="header_footer" v-if="$route.meta.isHeader">
        <div class="header_nav">
            <span class="nav_block">
                <div>全媒体资源分类</div>                          
                <div class="nav_all">
                    <li v-for="">
                        <span>当季热卖1</span>
                        <ul class="nav_ul">
                            <li v-for="">
                                <p>当季热卖2</p>
                                <ul class="nav_last">
                                    <li v-for="">当季热卖</li>
                                </ul>
                                
                            </li>
                        </ul>
                    </li>
                </div>
            </span>
            <div class="stor">店铺</div>
            <ul class="nav_right">
                <li>品牌平面设计/营销</li>
                <li>影视/宣传片拍摄</li>
                <li>展会/活动/地推</li>
                <li>主持/模特/礼仪</li>
                <li>全球赛事冠名招商</li>
                <li style="padding-right:0;">置换特卖</li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comHeader",
  data(){
      return{
          input:'',
          select: ''
      }
  }
};
</script>

<style lang="less" scoped>
.comHeader {
  width: 100%;
  // height: 170px;
//   background: rgba(244, 244, 244, 1);
  .header_top {
    width: 100%;
    background: #e5e5e5;
    li {
      cursor: pointer;
    }
    li:hover {
      color: #f3262d;
    }
    .login_header {
      width: 1210px;
      height: 34px;
      margin: 0 auto;
      background: #e5e5e5;
      font-size: 12px;
      color: #999;
      line-height: 34px;
      .login_header_left {
        float: left;
        li {
          float: left;
        }
        & > .second_li span {
          color: #f3262d;
          margin: 0 29px;
        }
      }
      .login_header_right {
        float: right;
        li {
          float: left;
          margin-right: 40px;
        }
        & > li:last-child {
          margin-right: 0;
        }
        & > li:nth-child(4) {
          // color: #f3262d;
        }
      }
    }
  }
  .header_center {
    width: 100%;
    height: 97px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    .header_center_logo {
      width: 1210px;
      height: 97px;
      margin: 0 auto;
      .header_logo {
        float: left;
        height: 97px;
        & > img:first-child {
          width: 342px;
          height: 60px;
          margin: 18px 23px 0 0;
        }
        & > img:last-child {
          width: 142px;
          height: 58px;
          margin-top: 19px;
        }
      }
      .header_ser {
        float: right;
        .ser_left {
            float: left;
          .sel_input {
            height: 30px;
            width: 480px;
            border: 2px solid #f3262d;
            .sel_name {
              width: 101px;
              background: #fff;
              border-right: 2px solid #f3262d;
            }
            .se_search {
              background: #f3262d;
              padding: 13px 19px;
              border-radius: 0;
              color: #fff;
            }
          }
          .header_nav{
              li{
                  float: left;
                  font-size: 12px;
                  color: #999;
                  padding: 0 16px;
                  margin-top: 10px;
                  line-height: 12px
                  
              }
              .header_li{
                  border-left: 1px solid #e8e8e8;
                  border-right: 1px solid #e8e8e8;
              }
          }
        }
        .text_span{
            float: left;
            font-size: 14px;
            color: #333;
            line-height: 97px;
            margin: 0 17px;
            font-weight: 600;
        }
        .ser_right{
            float: left;
            margin-top: 27px;
            button{
                width: 151px;
                height:38px;
                border: 0;
                background: #f3262d;
                color: #fff;
                cursor: pointer;
            }
        }
      }
    }
  }
  .header_footer{
      width: 100%;
      height: 38px;
      background: #f8f8f8;
      border-bottom: 1px solid #f3262d;
      .header_nav{
        width: 1210px;
        height: 38px;
        margin: 0 auto;
        line-height: 38px;
        position: relative;      
        span{
            float: left;
            width: 200px;
            background: #f3262d;
            color: #fff;
            &:hover {
                .nav_all {
                    display: block;
                }
            }
            .nav_all{
            position: absolute;
            left: 0;
            top: 38px;
            width: 200px;
            display: none;
            li{
                height: 38px;
                float: left;
                color: #999;
                font-size: 14px;
                span{
                    background-color: rgba(0,0,0,0.5);
                }
                &:hover{
                    .nav_ul{
                        display: block
                    }
                }
                .nav_ul{
                    width: 1010px;
                    min-height: 549px;
                    position: absolute;
                    left: 200px;
                    display: none;
                    li{
                        width: 100%;
                        height: 100%;
                        background: #fff;
                        font-size: 12px;
                        p{
                            float: left;
                            width: 100px;
                            height: 38px;
                        }                      
                        .nav_last{
                            float: left;
                            width: 909px;
                            li{
                                float: left;
                                width: 100px;
                            }
                        }
                    }
                }
            }
            }
        }
         .stor{
            float: left;
            color: #1D0800;
            height: 38px;
            line-height: 38px;
            display: inline-block;
            text-decoration: none;
            font-size: 16px;
            padding: 0px 19px;;
         }
         .nav_right{
             float: left;
             li{
                 float: left;
                 padding: 0px 21px;
             }
         }
        }
       
      }
  }
</style>

<style lang="less">
// 修改element 样式
.sel_input {
  .el-input-group__append {
    padding: 0 19px;
  }
  .el-input-group__append, .el-input-group__prepend{
      border: 0;
  }
  .el-input__inner{
      border: 0;
      height: 30px;
  }
  .el-button{
      height: 30px;
  }
  .el-input-group__append .el-button{
      margin: -2px -19px;
      line-height: 0;
  }
  .el-input__icon{
      line-height: 30px;
  }
}
</style>



