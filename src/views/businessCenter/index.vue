<template>
    <div class="business-center">
        <div class="main-business-container">
            <div class="left-nav">
                <div class="left-nav-title">
                    服务商中心
                </div>
                <p class="nav-small-title">店铺信息</p>
                <ul class="nav-items">
                    <li><router-link to="/businessCenter/businessHome">欢迎您</router-link></li>
                    <li><router-link to="/businessCenter/businessInfo">店铺资料</router-link></li>
                    <li><router-link to="/businessCenter/businessSkill">店铺技能</router-link></li>
                    <li><router-link to="/businessCenter/authenticationName">认证中心</router-link></li>
                    <li><router-link to="/businessCenter/payDeposit">缴纳保证金</router-link></li>
                    <!-- 下面三个为为跳转，不属于当前路由下 -->
                    <li><router-link to="/123">我的店铺</router-link></li>
                    <li><router-link to="/123">店铺评价</router-link></li>
                </ul>
            </div>
            <div class="right-content">
                <!-- 子路由放置位置 -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.business-center {
    width: 100%;
    height: 100%;
    .main-business-container {
        width: 1210px;
        margin: 0 auto;
        overflow: auto;
        padding-bottom: 50px;
        .left-nav {
            width:208px;
            height:990px;
            background:#FFF;
            float: left;
            .left-nav-title {
                width: 100%;
                height: 64px;
                background: #F3262D;
                line-height: 64px;
                text-align: center;
                color: #fff;
                font-size: 20px;
                font-weight: 400;
            }
            .nav-small-title {
                width: 65px;
                height: 15px;
                color: #333;
                font-weight: 400;
                margin: 27px 0 22px 60px;
            }
            .nav-items {
                >li {
                    display: block;
                    width: 96px;
                    height: 15px;
                    margin-left: 60px;
                    margin-bottom: 20px;
                    text-align: left;
                    user-select: none;
                    a {
                        text-decoration: none;
                        color: #666;
                        font-size: 14px;
                    }
                    .router-link-active {
                        color: #F3262D;
                    }
                }
            }
        }
        .right-content {
            width: 980px;
            min-height: 988px;
            // background: #ccc;
            float: left;
            margin-left: 22px;
        }
    }
}
</style>

