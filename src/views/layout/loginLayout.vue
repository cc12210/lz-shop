<template>
    <div class="main-login">
        <!-- 登录顶部区域 -->
        <div class="login-top">
            <div class="login-top-info">
                <a href="/" class="logo" :style="backgroundDiv">
                </a>
                <span class="logo-tips">欢迎登录</span>
            </div>
            <!-- 承载子组件内容 -->
            <router-view></router-view>
        </div>
        <div class="login-bottom">
            <div class="login-bottom-info"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 设置logo的背景图
            backgroundDiv: {
                background: 'url(' + require('../../assets/img/logo.jpg') + ') no-repeat center left'
            },
        }
    }
}
</script>

<style lang="less" scoped>
    .login-top {
        width: 100%;
        // background: #ccc;
        height: 95px;
        .login-top-info {
            width: 920px;
            height: 100%;
            margin: 0 auto;
            // background: #ccc;
            .logo {
                display: block;
                width: 357px;
                height: 80px;
                margin: 10px 0 0 0px;
                float: left;
                background-size: 100%;
            }
            .logo-tips {
                text-align: left;
                border-left: 1px #eee solid;
                color: #666;
                width: 290px;
                height: 44px;
                line-height: 44px;
                font-size: 28px;
                margin: 26px 0px 0px 15px;
                float: left;
                padding: 0px 15px;
            }
        }
    }
    .login-bottom {
        width: 100%;
        height: 119px;
        position: absolute;
        top: 705px;
        .login-bottom-info {
            width: 920px;
            height: 100%;
            background: #666;
            margin: 0 auto;
            clear: both;
        }
    }
</style>

