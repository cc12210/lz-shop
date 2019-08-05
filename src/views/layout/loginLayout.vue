<template>
    <div class="main-login">
        <!-- 登录顶部区域 -->
        <div class="login-top">
            <div class="login-top-info">
                <a href="/" class="logo" :style="backgroundDiv">
                </a>
                <span class="logo-tips">{{this.$route.meta.title}}</span>
            </div>
        </div>
        <!-- 承载子组件内容 -->
        <router-view></router-view>
        <div class="login-bottom">
            <div class="login-bottom-info">
                <p class="bottom-list">
                    <a>关于我们</a>
                    <em>|</em>
                    <a>联系我们</a>
                    <em>|</em>
                    <a>商家入驻</a>
                    <em>|</em>
                    <a>友情链接</a>
                    <em>|</em>
                    <a>站点地图</a>
                    <em>|</em>
                    <a>手机商城</a>
                    <em>|</em>
                    <a>销售联盟</a>
                    <em>|</em>
                    <a>商城社区</a>
                    <em>|</em>
                    <a>企业文化</a>
                    <em>|</em>
                    <a>帮助中心</a>
                    <em>|</em>
                    <a>留言板</a>
                    <a>粤ICP备18040617号-1</a>
                </p>
                <p class="bottom-simple-info">© 2005-{{new Date().getFullYear()}} 凌天众媒 版权所有，并保留所有权利。广东 深圳 E-mail: Service@zhongmei66.com</p>
            </div>
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
        margin-top: 55px;
        .login-bottom-info {
            // width: 1000px;
            height: 100%;
            // background: rgb(161, 143, 143);
            margin: 0 auto;
            clear: both;
            .bottom-list {
                >a {
                    // float: left;
                    // user-select: none;
                    font-size: 12px;
                    color: #666;
                    padding: 0 8px;
                    text-decoration: none;
                    &:hover {
                        color: #F3262D;
                        cursor: pointer;
                    }
                }
                >em {
                    font-size: 12px;
                    color: #666;
                }
            }
            .bottom-simple-info {
                font-size: 12px;
                color: #666;
                margin-top: 5px;
            }
        }
    }
</style>

