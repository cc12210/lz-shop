<template>
    <div class="login">
        <!-- 登录顶部区域 -->
        <div class="login-top">
            <div class="login-top-info">
                <a href="/" class="logo" :style="backgroundDiv">
                </a>
                <span class="logo-tips">欢迎登录</span>
            </div>
        </div>
        <!-- 登录主体 -->
        <div class="main-content" :style="logoBanner">
            <div class="banner-bg">
                <div class="login-form">
                    <div class="erweima">
                        <img src="../assets/img/erweima.png" alt="">
                        <div class="warn-text">扫一扫登录安全便捷</div>
                    </div>
                    <div class="left-mask"></div>
                    <div class="right-mask"></div>
                    <ul class="change-way">
                        <li @mouseenter="changeWay(1)" :class="{current: index == 1}">账号密码登录</li>
                        <li @mouseenter="changeWay(2)" :class="{current: index == 2}">手机动态登录</li>
                    </ul>
                    <div class="main-login-inp">
                        <div class="pad-phone-div" :style="{left: `${leftX}px`}">
                            <!-- 通过密码登录 -->
                            <div class="psd-login">
                                <div class="form">
                                    <div class="warning" v-show="errInfoShow">
                                        <i :style="warningIcon"></i>
                                        <span>{{errInfo}}</span>
                                    </div>
                                    <!-- 用户名框 -->
                                    <div class="item-name item">
                                        <div class="phone-box"></div>
                                        <input v-model="userName" class="full-inp" type="text" placeholder="手 机 号 / 用 户 名">
                                    </div>
                                    <!-- 密码框 -->
                                    <div class="item-psd item">
                                        <div class="phone-box"></div>
                                        <input v-model="password" class="full-inp" type="password" placeholder="密 码">
                                    </div>
                                    <div class="remember-psd">
                                        <input class="checked" type="checkbox" name="" id="">
                                        <span class="remember-tips">两周内免登录</span>
                                        <span class="forget-psd">忘记密码</span>
                                    </div>
                                    <!-- 验证码 -->
                                    <!-- <div class="code">
                                        <div class="left-inp">
                                            <input type="text" placeholder="验 证 码">
                                        </div>
                                        <div class="right-img"></div>
                                    </div> -->
                                    <div @click="loginSubmit" class="loginSubmit">登录</div>
                                </div>
                                
                                <div class="login-bottom">
                                    <p class="login-bottom-top">
                                        <span class="left-span">使用合作方账号登录</span>
                                        <span class="right-span">注册新账号</span>
                                    </p>
                                    <p class="login-bottom-bottom">
                                        <span>QQ</span>
                                        <span>微信</span>
                                    </p>
                                </div>
                            </div>
                            <!-- 滑动第二页的登录 -->
                            <div class="phone-login">
                                <div class="login-bottom">
                                    123
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
    data() {
        return {
            // 设置logo的背景图
            backgroundDiv: {
                background: 'url(' + require('../assets/img/logo.jpg') + ') no-repeat center left'
            },
            // logo-banner
            logoBanner: {
                background: 'url(' + require('../assets/img/login-banner.jpg') + ') repeat-x center center'
            },
            // warning图标
            warningIcon: {
                background: 'url(' + require('../assets/img/warning-icon.png') + ') no-repeat'
            },
            // 默认选中第一个登录
            index: 1,
            // 设定滑动的初始值
            leftX: 0,
            // 设定滑动的定时器
            timer: null,
            // 登录出错提示控制显示
            errInfoShow: false,
            // 错误类型
            errInfo: '请输入账户名',
            // 用户名及密码
            userName: '',
            password: '',
            errIndex: 0
        }
    },
    watch: {
        userName(newVal, oldVal) {
            if (newVal) {
                this.errIndex = 0;
            }
        },
        password(newVal, oldVal) {
            if (newVal) {
                this.errIndex = 0;
            }
        },
    },
    methods: {
        // 鼠标hover切换选中登录方式
        changeWay(index) {
            if (this.timer) return;
            this.index = index;
            if (index == 1) {
                this.timer = setInterval(() => {
                    this.leftX += 30;
                    if (this.leftX >= 0) {
                        this.leftX = 0;
                        this.clearTimer();
                    }
                }, 25)
            }else {
                this.timer = setInterval(() => {
                    this.leftX -= 30;
                    if (this.leftX <= -305) {
                        this.leftX = -305;
                        this.clearTimer();
                    }
                }, 25)
            }
        },
        // 清除滑动的定时器
        clearTimer() {
            clearInterval(this.timer)
            this.timer = null;
        },
        // 登录
        loginSubmit() {
            if (!this.userName || !this.password) {
                this.errInfoShow = true;
                this.errInfo = !this.userName ? '请输入账户名' : '请输入密码';
                // 此处是为了控制红色警告框的出现
                this.errIndex = !this.userName ? 1 : 2;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
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
                background: #924242;
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
    .main-content {
        width: 100%;
        min-width: 1400px;
        height: 610px;
        background-size: 100%;
        .banner-bg {
            width: 990px;
            margin: 0 auto;
            height: 475px;
            position: relative;
            .login-form {
                position: absolute;
                z-index: 1;
                width: 306px;
                height: 410px;
                background: #fff;
                padding: 20px 20px 0 20px;
                overflow: visible;
                top: 90px;
                right: -200px;
                border-bottom: 15px solid #F3F3F3;
                .erweima {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
                    z-index: 999;
                    img {
                        width: 56px;
                        height: 56px;
                    }
                }
                .left-mask {
                    position: absolute;
                    width: 20px;
                    height: 67px;
                    background: #f3f3f3;
                    left: 0;
                    bottom: 0;
                }
                .right-mask {
                    position: absolute;
                    width: 21px;
                    height: 67px;
                    background: #f3f3f3;
                    right: 0;
                    bottom: 0;
                }
                .warn-text {
                    width: 140px;
                    height: 22px;
                    padding-left: 18px;
                    line-height: 22px;
                    font-size: 13px;
                    color: #f3262d;
                    background-size: 140px 22px;
                    position: absolute;
                    top: 0;
                    right: 60px;
                }
                .change-way {
                    display: block;
                    height: 40px;
                    margin-bottom: 5px;
                    padding-top: 15px;
                    li {
                        float: left;
                        position: relative;
                        margin: 0 0 0 -1px;
                        display: block;
                        border-bottom: 1px solid #ccc;
                        float: left;
                        height: 40px;
                        line-height: 40px;
                        color: #999;
                        font-size: 16px;
                        text-indent: 5px;
                        overflow: hidden;
                        width: 146px;
                        cursor: pointer;
                        text-align: center;
                    }
                    .current {
                        color: #333333;
                        font-weight: 700;
                        border-bottom: 2px solid #f3262d;
                        transition: all .3s;
                    }
                }
                .main-login-inp {
                    width: 100%;
                    height: 350px;
                    overflow: hidden;
                    .pad-phone-div {
                        position: relative;
                        width: 610px;
                        height: 100%;
                        >div {
                            width: 305px;
                            height: 100%;
                            float: left;
                        }
                        .psd-login, .phone-login {
                            .form {
                                padding: 20px 0 20px;
                                .warning {
                                    width: 290px;
                                    height: 25px;
                                    line-height: 25px;
                                    box-sizing: border-box;
                                    position: absolute;
                                    top: 3px;
                                    left: 7px;
                                    i {
                                        width: 15px;
                                        height: 15px;
                                        display: inline-block;
                                        background-size: 100%;
                                        position: absolute;
                                        left: 5px;
                                        top: 4px;
                                        color: #f3262d;
                                        vertical-align: middle;
                                        background-size: 100%!important;
                                    }
                                    span {
                                        color: #f3262d;
                                        text-align: left;
                                        display: block;
                                        padding-left: 30px;
                                        font-size: 12px;
                                    }
                                }
                                .item-name {
                                    margin-top: 15px;
                                }
                                .item {
                                    width: 290px;
                                    position: relative;
                                    border: none;
                                    height: 38px;
                                    margin-bottom: 20px;
                                    margin-left: 7px;
                                    .phone-box {
                                        width: 38px;
                                        height: 38px;
                                        position: absolute;
                                        left: 1px;
                                        top: 1px;
                                        background-color: #F4F4F4;
                                        border-right: 1px solid #ccc;
                                    }
                                    .full-inp {
                                        height: 38px;
                                        width: 240px;
                                        border: none;
                                        padding-left: 50px;
                                        border: 1px solid #C8C7C7;
                                    }
                                }
                                .remember-psd {
                                    text-align: left;
                                    margin-bottom: 20px;
                                    margin-left: 7px;
                                    .checked {
                                        position: relative;
                                        top: 2px;
                                        margin-right: 5px;
                                    }
                                    .remember-tips, .forget-psd {
                                        font-size: 12px;
                                        color: #666;
                                        font-weight: 400;
                                    }
                                    .forget-psd {
                                        float: right;
                                        margin-right: 7px;
                                        cursor: pointer;
                                        &:hover {
                                            text-decoration: underline;
                                            color: #F3262D;
                                        }
                                    }
                                }
                                .code {
                                    width: 100%;
                                    position: relative;
                                    border: none;
                                    margin-bottom: 20px;
                                    margin-left: 7px;
                                    height: 40px;
                                    .left-inp {
                                        width: 50%;
                                        float: left;
                                        >input {
                                            width: 165px;
                                            height: 40px;
                                            line-height: 40px;
                                            border: 1px solid #ccc;
                                            box-sizing: border-box;
                                            padding-left: 10px;
                                            float: left;
                                        }
                                    }
                                    .right-img {
                                        width: 110px;
                                        height: 40px;
                                        line-height: 40px;
                                        border: 1px solid #ccc;
                                        box-sizing: border-box;
                                        padding-left: 10px;
                                        float: right;
                                        margin-right: 13px;
                                        cursor: pointer;
                                    }
                                }
                                .loginSubmit {
                                    width: 293px;
                                    height: 40px;
                                    margin-left: 7px;
                                    background: #F3262D;
                                    font-size: 16px;
                                    color: #FFF;
                                    text-align: center;
                                    line-height: 40px;
                                    text-decoration: none;
                                    cursor: pointer;
                                    border: none;
                                    &:hover {
                                        background: #F43C42;
                                    }
                                }
                            }
                            .login-bottom {
                                width: 305px;
                                height: 67px;
                                background: #F3F3F3;
                                position: absolute;
                                bottom: 0;
                                .login-bottom-top {
                                    height: 12px;
                                    margin: 17px 0 13px;
                                    .left-span {
                                        font-size: 12px;
                                        color: #999;
                                        font-weight: 400;
                                        float: left;
                                        margin-left: 10px;
                                    }
                                    .right-span {
                                        color: #F3262D;
                                        font-size: 12px;
                                        font-weight: 400;
                                        float: right;
                                        cursor: pointer;
                                        &:hover {
                                            text-decoration: underline;
                                        }
                                    }
                                }
                                .login-bottom-bottom {
                                    text-align: left;
                                    padding-left: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

