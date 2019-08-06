<template>
    <div class="login">
        <!-- 登录主体 -->
        <div class="main-content" :style="logoBanner">
            <div class="banner-bg">
                <div class="login-form">
                    <!-- <div class="erweima">
                        <img @click="changeCamera(true)" src="../assets/img/erweima.png" alt="">
                        <div class="warn-text">扫一扫登录安全便捷</div>
                    </div> -->
                    <template v-if="isCamera == 1">
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
                                            <div class="phone-box" :class="{errBox: errIndex == 1}">
                                                <img v-if="errIndex == 1" src="../assets/img/userErr.png" alt="">
                                                <img v-else-if="phoneIndex == 1" src="../assets/img/userFocus.png" alt="">
                                                <img v-else src="../assets/img/userLeave.png" alt="">
                                            </div>
                                            <input
                                            @focus="phoneFocus(1, 'phoneIndex')"
                                            @blur="phoneFocus(0, 'phoneIndex')"
                                            :class="{errTypeInp: errIndex == 1}"
                                            v-model="userName" 
                                            class="full-inp" 
                                            type="text" 
                                            placeholder="手 机 号 / 用 户 名">
                                        </div>
                                        <!-- 密码框 -->
                                        <div class="item-psd item">
                                            <div class="phone-box" :class="{errBox: errIndex == 2}">
                                                <img v-if="errIndex == 2" src="../assets/img/lockedErr.png" alt="">
                                                <img v-else-if="psdIndex == 1" src="../assets/img/lockedFocus.png" alt="">
                                                <img v-else src="../assets/img/lockedLeave.png" alt="">
                                            </div>
                                            <input 
                                            @focus="phoneFocus(1, 'psdIndex')"
                                            @blur="phoneFocus(0, 'psdIndex')"
                                            :class="{errTypeInp: errIndex == 2}"
                                            v-model="password" 
                                            class="full-inp" 
                                            type="password" 
                                            placeholder="密 码">
                                        </div>
                                        <div class="remember-psd">
                                            <input class="checked" type="checkbox" name="" id="">
                                            <span class="remember-tips">两周内免登录</span>
                                            <span class="forget-psd">
                                                <router-link to="retrievePsd">忘记密码</router-link>
                                            </span>
                                        </div>
                                        <div @click="loginSubmit" class="loginSubmit">登录</div>
                                    </div>
                                    <!-- 底部区域 -->
                                    <div class="login-bottom">
                                        <p class="login-bottom-top">
                                            <span class="left-span">使用合作方账号登录</span>
                                            <span @click="changeCamera(2)" class="right-span">注册新账号</span>
                                        </p>
                                        <p class="login-bottom-bottom">
                                            <img src="../assets/img/QQ.png" alt="">
                                            <span class="QQ-icon">
                                                QQ
                                            </span>
                                            <img src="../assets/img/weixin.png" alt="">
                                            <span @click="changeCamera(3)">
                                                微信
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <!-- 滑动第二页的登录 -->
                                <div class="phone-login">
                                    <div class="form">
                                        <div class="warning warningTwo" v-show="errPhoneInfoShow">
                                            <i :style="warningIcon"></i>
                                            <span>{{errPhoneInfo}}</span>
                                        </div>
                                        <!-- 用户名框 -->
                                        <div class="item-name item">
                                            <div class="phone-box" :class="{errBox: errPhoneIndex == 1}">
                                                <img v-if="errPhoneIndex == 1" src="../assets/img/userErr.png" alt="">
                                                <img v-else-if="userPhoneIndex == 1" src="../assets/img/userFocus.png" alt="">
                                                <img v-else src="../assets/img/userLeave.png" alt="">
                                            </div>
                                            <input
                                            @focus="phoneFocus(1, 'userPhoneIndex')"
                                            @blur="phoneFocus(0, 'userPhoneIndex')"
                                            :class="{errTypeInp: errPhoneIndex == 1}"
                                            v-model="userPhone" 
                                            class="full-inp" 
                                            type="text" 
                                            placeholder="手 机 号 码">
                                        </div>
                                        <!-- 验证码 -->
                                        <div class="code">
                                            <div class="left-inp">
                                                <div class="icon-box" :class="{errBox: errPhoneIndex == 2}">
                                                    <img v-if="errPhoneIndex == 2" src="../assets/img/codeErr.png" alt="">
                                                    <img v-else-if="userCodeIndex == 1" src="../assets/img/codeFocus.png" alt="">
                                                    <img v-else src="../assets/img/codeLeave.png" alt="">
                                                </div>
                                                <input
                                                @focus="phoneFocus(1, 'userCodeIndex')"
                                                @blur="phoneFocus(0, 'userCodeIndex')"
                                                class="code-inp"
                                                :class="{errTypeInp: errPhoneIndex == 2}"
                                                v-model="userCode" 
                                                type="text" 
                                                placeholder="验 证 码">
                                            </div>
                                            <div class="right-img">
                                                <div v-if="!isGetCode" class="code-phone" @click="getCode">
                                                    {{codeInfo}}
                                                </div>
                                                <div v-else class="getting-code">
                                                    重新获取({{codeNum}})
                                                </div>
                                            </div>
                                        </div>
                                        <p class="phone-login-tips">注 : 未 注 册 的 手 机 将 自 动 创 建 为 凌 天 众 媒 账 号 </p>
                                        <div @click="loginPhoneSubmit" class="loginSubmit">登录</div>
                                    </div>
                                    <div class="login-bottom">
                                        <!-- 底部区域 -->
                                    <div class="login-bottom">
                                        <p class="login-bottom-top">
                                            <span class="left-span">使用合作方账号登录</span>
                                            <span @click="changeCamera(2)" class="right-span">注册新账号</span>
                                        </p>
                                        <p class="login-bottom-bottom">
                                            <img src="../assets/img/QQ.png" alt="">
                                            <span class="QQ-icon">
                                                QQ
                                            </span>
                                            <img src="../assets/img/weixin.png" alt="">
                                            <span @click="changeCamera(3)">
                                                微信
                                            </span>
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!-- 手机注册 -->
                    <template v-else-if="isCamera == 2">
                        <div class="phone-reg">
                            <div class="left-reg-mask"></div>
                            <div class="right-reg-mask"></div>
                            <div class="top-title">
                                手机注册
                            </div>
                            <div class="warning" v-if="errRegShow">
                                <i :style="warningIcon"></i>
                                <span>{{errRegInfo}}</span>
                            </div>
                            <div v-else class="warning"></div>
                            <!-- 用户名框 -->
                            <div class="item-name item">
                                <div class="phone-box" :class="{errBox: errRegPhoneIndex == 1}">
                                    <img v-if="errRegPhoneIndex == 1" src="../assets/img/userErr.png" alt="">
                                    <img v-else-if="userPhoneIndex == 1" src="../assets/img/userFocus.png" alt="">
                                    <img v-else src="../assets/img/userLeave.png" alt="">
                                </div>
                                <input
                                @focus="phoneFocus(1, 'userPhoneIndex')"
                                @blur="phoneFocus(0, 'userPhoneIndex')"
                                :class="{errTypeInp: errRegPhoneIndex == 1}"
                                v-model="userRegPhone" 
                                class="full-inp" 

                                type="text" 
                                placeholder="手 机 号 码">
                            </div>
                            <!-- 用户密码 -->
                            <div class="item-name item">
                                <div class="phone-box" :class="{errBox: errRegPhoneIndex == 2}">
                                    <img v-if="errRegPhoneIndex == 2" src="../assets/img/lockedErr.png" alt="">
                                    <img v-else-if="userPsdIndex == 1" src="../assets/img/lockedFocus.png" alt="">
                                    <img v-else src="../assets/img/lockedLeave.png" alt="">
                                </div>
                                <input
                                @focus="phoneFocus(1, 'userPsdIndex')"
                                @blur="phoneFocus(0, 'userPsdIndex')"
                                :class="{errTypeInp: errRegPhoneIndex == 2}"
                                v-model="userRegPsd" 
                                class="full-inp" 
                                type="password" 
                                placeholder="密码(6-12位字母／数字／符号)">
                            </div>
                            <!-- 验证码 -->
                            <div class="code">
                                <div class="left-inp">
                                    <div class="icon-box" :class="{errBox: errRegPhoneIndex == 3}">
                                        <img v-if="errRegPhoneIndex == 3" src="../assets/img/codeErr.png" alt="">
                                        <img v-else-if="userCodeIndex == 1" src="../assets/img/codeFocus.png" alt="">
                                        <img v-else src="../assets/img/codeLeave.png" alt="">
                                    </div>
                                    <input
                                    @focus="phoneFocus(1, 'userCodeIndex')"
                                    @blur="phoneFocus(0, 'userCodeIndex')"
                                    class="code-inp"
                                    :class="{errTypeInp: errRegPhoneIndex == 3}"
                                    v-model="userRegCode" 
                                    type="text" 
                                    placeholder="验 证 码">
                                </div>
                                <div class="right-img">
                                    <div v-if="!isRegGetCode" class="code-phone" @click="getRegCode">
                                        {{codeRegInfo}}
                                    </div>
                                    <div v-else class="getting-code">
                                        重新获取({{codeRegNum}})
                                    </div>
                                </div>
                            </div>
                            <div @click="regSubmit" class="loginSubmit">登录</div>
                            <div class="reg-bottom">
                                <span>已有账户</span>
                                <span class="back-login" @click="changeCamera(1)">立即登录</span>
                            </div>
                        </div>
                    </template>
                    <!-- 微信扫码登录 -->
                    <template v-else-if="isCamera == 3">
                        <div class="we-chat-login">
                            <div class="close-confrim" @click="changeCamera(1)">
                                <img src="../assets/img/close.png" alt="">
                            </div>
                            <div class="top-title">
                                微 信 登 录
                            </div>
                            <template v-if="weChatLoad">
                                <div class="we-chat-tips">
                                    <img src="../assets/img/we-chat-camera.png" alt="">
                                    <div class="tips-info">
                                        <p>用微信<span class="deep-color">扫一扫</span></p>
                                        <p>方便快捷登录</p>
                                    </div>
                                </div>
                                <div class="we-chat-erweima">
                                    <!-- 目前先放一张假图片 -->
                                    <img src="data:image/png;base64,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" alt="">
                                </div>
                            </template>
                            <template v-else>
                                <div class="we-chat-error">
                                    <p class="deep-error">登录失败</p>
                                    <p class="deep-tips">请刷新二维码后重新扫描</p>
                                    <span class="refresh-btn">刷新二维码</span>
                                </div>
                            </template>
                        </div>
                    </template>
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
            errRegInfo: '请输入正确的手机号',
            // 用户名及密码
            userName: '',
            password: '',
            errIndex: 0,
            // 第二页的数据绑定
            errPhoneInfo: '请输入手机号',
            errPhoneInfoShow: false,
            errPhoneIndex: 0,
            userPhone: '',
            userCode: '',
            // 是否为扫码登录 1为账号密码登录 2为注册账号 3为微信扫码登录
            isCamera: 1,
            // 获取验证码的提示信息
            codeInfo: '获取验证码',
            // 是否正在获取验证码
            isGetCode: false,
            // 获取验证码倒计时
            codeNum: 60,
            // timer定时器
            timerCode: null,
            phoneIndex: 0,
            // 密码框背景图聚焦变化
            psdIndex: 0,
            userPhoneIndex: 0,
            userCodeIndex: 0,
            userPsdIndex: 0,
            // 注册页的数据集
            errRegShow: false,
            errRegPhoneIndex: 0,
            userRegPhone: '',
            userRegPsd: '',
            userRegCode: '',
            timerRegCode: null,
            codeRegNum: 60,
            isRegGetCode: false,
            codeRegInfo: '获取验证码',
            // 二维码加载状态
            weChatLoad: true,
        }
    },
    watch: {
        userName(newVal) {
            if (newVal) {
                this.errIndex = 0;
            }
        },
        password(newVal) {
            if (newVal) {
                this.errIndex = 0;
            }
        },
        userPhone(newVal) {
            if (newVal) {
                this.errPhoneIndex = 0;
            }
        },
        userCode(newVal) {
            if (newVal) {
                this.errPhoneIndex = 0;
            }
        },
        userRegPhone(newVal) {
            if (newVal) {
                this.errRegPhoneIndex = 0;
            }
        },
        userRegPsd(newVal) {
            if (newVal) {
                this.errRegPhoneIndex = 0;
            }
        },
        userRegCode(newVal) {
            if (newVal) {
                this.errRegPhoneIndex = 0;
            }
        },
    },
    methods: {
        phoneFocus(index, name) {
            this[name] = index;
        },
        // 鼠标hover切换选中登录方式
        changeWay(index) {
            if (this.timer) return;
            this.index = index;
            if (index == 1) {
                this.timer = setInterval(() => {
                    this.leftX += 32;
                    if (this.leftX >= 0) {
                        this.leftX = 0;
                        this.clearTimer();
                    }
                }, 25)
            }else {
                this.timer = setInterval(() => {
                    this.leftX -= 32;
                    if (this.leftX <= -305) {
                        this.leftX = -305;
                        this.clearTimer();
                    }
                }, 25)
            }
        },
        // 清除滑动的定时器
        clearTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },
        // 账号密码登录
        loginSubmit() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userName))) {
                this.errInfoShow = true;
                this.errInfo = '请输入正确的手机号码';
                this.errIndex = 1;
                return;
            }else if (!this.password) {
                this.errInfoShow = true;
                this.errInfo = '手机号或密码错误';
                this.errIndex = 2;
                return;
            }
            // 未注册即登录的提示
            // 该手机号码未注册，请先注册
        },
        // 手机登录
        loginPhoneSubmit() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userPhone))) {
                this.errPhoneInfoShow = true;
                this.errPhoneInfo = '请输入正确的手机号码';
                this.errPhoneIndex = 1;
                return;
            }else if (!this.userCode) {
                this.errPhoneInfoShow = true;
                this.errPhoneInfo = '动态密码错误';
                this.errPhoneIndex = 2;
                return;
            }
        },
        // 切换账号登录或扫码登录
        changeCamera(index) {
            this.isCamera = index;
        },
        // 获取验证码
        getCode() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userPhone))) {
                this.errPhoneInfoShow = true;
                this.errPhoneInfo = '请输入正确的手机号码';
                this.errPhoneIndex = 1;
                return;
            }
            this.isGetCode = true;
            // 此处发送请求
            this.timerCode = setInterval(() => {
                this.codeNum -= 1;
                if (this.codeNum <= 0) {
                    this.codeNum = 60;
                    this.isGetCode = false;
                    this.codeInfo = '重新获取';
                    clearInterval(this.timerCode);
                    this.timerCode = null;
                }
            }, 1000);
        },
        // 注册获取验证码
        getRegCode() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userRegPhone))) {
                this.errRegShow = true;
                this.errRegInfo = '请输入正确的手机号码';
                this.errRegPhoneIndex = 1;
                return;
            }
            this.isRegGetCode = true;
            // 此处发送请求
            this.timerRegCode = setInterval(() => {
                this.codeRegNum -= 1;
                if (this.codeRegNum <= 0) {
                    this.codeRegNum = 60;
                    this.isRegGetCode = false;
                    this.codeRegInfo = '重新获取';
                    clearInterval(this.timerRegCode);
                    this.timerRegCode = null;
                }
            }, 1000);
        },
        // 注册账号
        regSubmit() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userRegPhone))) {
                this.errRegShow = true;
                this.errRegInfo = '请输入正确的手机号码';
                this.errRegPhoneIndex = 1;
                return;
            }
            if (!this.userRegPhone || !this.userRegPsd || !this.userRegCode) {
                this.errRegShow = true;
                if (!this.userRegPhone) {
                    this.errRegPhoneIndex = 1;
                    this.errRegInfo = '请输入正确的手机号';
                }else if (!this.userRegPsd) {
                    this.errRegPhoneIndex = 2;
                    this.errRegInfo = '账号或密码错误';
                }else {
                    this.errRegPhoneIndex = 3;
                    this.errRegInfo = '请输入验证码';
                }
                return;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
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
                height: 395px;
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
                    // padding-top: 15px;
                    li {
                        float: left;
                        position: relative;
                        margin: 0 0 0 -1px;
                        display: block;
                        border-bottom: 1px solid #ccc;
                        float: left;
                        height: 40px;
                        line-height: 40px;
                        color: #333;
                        font-weight: bold;
                        font-family:MicrosoftYaHei-Bold;
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
                                .warningTwo {
                                    left: 308px;
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
                                    .errBox {
                                        border-color: #F3262D;
                                    }
                                    .full-inp {
                                        height: 38px;
                                        width: 240px;
                                        border: none;
                                        padding-left: 50px;
                                        border: 1px solid #C8C7C7;
                                    }
                                    .full-inp:focus {
                                        border-color: rgba(0, 0, 0, 0);
                                    }
                                    .errTypeInp {
                                        border-color: #F3262D;
                                    }
                                }
                                .phone-login-tips {
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: #999;
                                    margin-bottom: 20px;
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
                                    .remember-tips, .forget-psd >a {
                                        font-size: 12px;
                                        color: #666;
                                        font-weight: 400;
                                    }
                                    .forget-psd {
                                        float: right;
                                        margin-right: 7px;
                                        cursor: pointer;
                                        &:hover a {
                                            text-decoration: underline;
                                            color: #F3262D;
                                        }
                                    }
                                }
                                .code {
                                    width: 100%;
                                    position: relative;
                                    border: none;
                                    margin-bottom: 11px;
                                    margin-left: 7px;
                                    height: 40px;
                                    .left-inp {
                                        width: 50%;
                                        float: left;
                                        position: relative;
                                        .icon-box {
                                            width: 38px;
                                            height: 38px;
                                            position: absolute;
                                            left: 1px;
                                            top: 1px;
                                            background-color: #F4F4F4;
                                            border-right: 1px solid #ccc;
                                        }
                                        .errBox {
                                            border-color: #F3262D;
                                        }
                                        .code-inp {
                                            width: 165px;
                                            height: 40px;
                                            line-height: 40px;
                                            padding-left: 50px;
                                            border: 1px solid #ccc;
                                            box-sizing: border-box;
                                            float: left;
                                        }
                                        .code-inp:focus {
                                            border: none;
                                            border-color: transparent;
                                        }
                                    }
                                    .right-img {
                                        width: 110px;
                                        height: 40px;
                                        line-height: 40px;
                                        border: 1px solid #ccc;
                                        box-sizing: border-box;
                                        float: right;
                                        margin-right: 13px;
                                        cursor: pointer;
                                        >img {
                                            width: 100%;
                                            height: 100%;
                                        }
                                        .code-phone {
                                            width: 100%;
                                            height: 100%;
                                            background: #F3262D;
                                            color: #fff;
                                            font-size: 14px;
                                            font-weight: 400;
                                        }
                                        .getting-code {
                                            background: #E3E3E3;
                                            font-size: 14px;
                                            color: #999;
                                            font-weight: 400;
                                            cursor: not-allowed;
                                            user-select: none;
                                        }
                                    }
                                    .errTypeInp {
                                        border-color: #F3262D!important;
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
                                    >span {
                                        font-size: 12px;
                                        font-weight: 400;
                                        color: #666;
                                        position: relative;
                                        top: -3px;
                                        cursor: pointer;
                                        &:hover {
                                            text-decoration: underline;
                                            color: #F3262D;
                                        }
                                    }
                                    >img {
                                        width: 18px;
                                        height: 18px;
                                    }
                                    .QQ-icon {
                                        padding-right: 13px;
                                        border-right: 1px solid #BDBDBD;
                                        margin-right: 14px;
                                    }
                                }
                            }
                        }
                    }
                }
                // 手机注册
                .phone-reg {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    position: relative;
                    .left-reg-mask {
                        position: absolute;
                        left: -20px;
                        bottom: 0;
                        width: 30px;
                        height: 33px;
                        background: #f3f3f3;
                    }
                    .right-reg-mask {
                        position: absolute;
                        bottom: 0;
                        width: 30px;
                        height: 33px;
                        background: #f3f3f3;
                        right: -20px;
                    }
                    .top-title {
                        font-family:MicrosoftYaHei-Bold;
                        color: #333;
                        font-weight: bold;
                        padding: 10px 0;
                        border-bottom: 2px solid #F3262D;
                    }
                    .warning {
                        width: 290px;
                        height: 25px;
                        line-height: 25px;
                        box-sizing: border-box;
                        text-align: left;
                        margin: 5px 0 6px 11px;
                        i {
                            width: 15px;
                            height: 15px;
                            display: inline-block;
                            background-size: 100%;
                            color: #f3262d;
                            vertical-align: middle;
                            background-size: 100%!important;
                        }
                        span {
                            color: #f3262d;
                            text-align: left;
                            padding-left: 10px;
                            font-size: 12px;
                        }
                    }
                    .item {
                        width: 290px;
                        position: relative;
                        border: none;
                        height: 38px;
                        margin-bottom: 20px;
                        .phone-box {
                            width: 38px;
                            height: 38px;
                            position: absolute;
                            left: 1px;
                            top: 1px;
                            background-color: #F4F4F4;
                            border-right: 1px solid #ccc;
                        }
                        .errBox {
                            border-color: #F3262D;
                        }
                        .full-inp {
                            height: 38px;
                            width: 240px;
                            border: none;
                            padding-left: 50px;
                            border: 1px solid #C8C7C7;
                        }
                        .full-inp:focus {
                            border-color: rgba(0, 0, 0, 0);
                        }
                        .errTypeInp {
                            border-color: #F3262D;
                        }
                    }
                    .code {
                        width: 100%;
                        position: relative;
                        border: none;
                        margin-bottom: 11px;
                        height: 40px;
                        .left-inp {
                            width: 50%;
                            float: left;
                            position: relative;
                            .icon-box {
                                width: 38px;
                                height: 38px;
                                position: absolute;
                                left: 1px;
                                top: 1px;
                                background-color: #F4F4F4;
                                border-right: 1px solid #ccc;
                            }
                            .errBox {
                                border-color: #F3262D;
                            }
                            .code-inp {
                                width: 165px;
                                height: 40px;
                                line-height: 40px;
                                padding-left: 50px;
                                border: 1px solid #ccc;
                                box-sizing: border-box;
                                float: left;
                            }
                            .code-inp:focus {
                                border: none;
                                border-color: transparent;
                            }
                        }
                        .right-img {
                            width: 110px;
                            height: 40px;
                            line-height: 40px;
                            border: 1px solid #ccc;
                            box-sizing: border-box;
                            float: right;
                            cursor: pointer;
                            position: relative;
                            right: -6px;
                            >img {
                                width: 100%;
                                height: 100%;
                            }
                            .code-phone {
                                width: 100%;
                                height: 100%;
                                background: #F3262D;
                                color: #fff;
                                font-size: 14px;
                                font-weight: 400;
                                user-select: none;
                            }
                            .getting-code {
                                background: #E3E3E3;
                                font-size: 14px;
                                color: #999;
                                font-weight: 400;
                                cursor: not-allowed;
                                user-select: none;
                            }
                        }
                        .errTypeInp {
                            border-color: #F3262D!important;
                        }
                    }
                    .loginSubmit {
                        margin-top: 22px;
                        width: 293px;
                        height: 40px;
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
                    .reg-bottom {
                        height: 33px;
                        line-height: 50px;
                        background: #F3F3F3;
                        position: absolute;
                        bottom: 0;
                        width: 290px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #666;
                        .back-login {
                            cursor: pointer;
                            color: #F3262D;
                            margin-left: 15px;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
                // 微信扫码登录
                .we-chat-login {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    position: relative;
                    .close-confrim {
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 13px;
                        height: 13px;
                        padding: 10px;
                        >img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .top-title {
                        font-family:MicrosoftYaHei-Bold;
                        color: #333;
                        font-weight: bold;
                        padding: 10px 0;
                        border-bottom: 2px solid #F3262D;
                        margin-bottom: 18px;
                    }
                    .we-chat-tips {
                        width: 119px;
                        height: 29px;
                        margin: 0 auto;
                        >img {
                            float: left;
                            position: relative;
                            top: 4px;
                        }
                        .tips-info {
                            width: 85px;
                            height: 29px;
                            float: left;
                            margin-left: 10px;
                            font-size: 12px;
                            font-weight: 400;
                            .deep-color {
                                color: #F3262D;
                            }
                        }
                    }
                    .we-chat-erweima {
                        width: 182px;
                        height: 173px;
                        margin: 26px auto 0;
                        padding: 5px;
                        box-sizing: border-box;
                        border: 1px solid #E8E8E8;
                        >img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                    .we-chat-error {
                        width: 200px;
                        height: 400px;
                        margin: 26px auto 0;
                        .deep-error {
                            color: #F3262D;
                            font-size: 14px;
                            font-weight: 400;
                            margin-bottom: 5px;
                        }
                        .deep-tips {
                            color: #666;
                            font-size: 14px;
                            font-weight: 400;
                        }
                        .refresh-btn {
                            width: 135px;
                            height: 30px;
                            margin: 34px auto 0;
                            color: #fff;
                            display: block;
                            line-height: 30px;
                            cursor: pointer;
                            font-size: 14px;
                            background: #F3262D;
                            &:hover {
                                background: #F43C42;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

