<template>
    <div class="bind-account">
        <div class="bind-container">
            <img class="user-img" src="http://temp.im/60x60" alt="">
            <div class="bind-top-info">
                <p>
                    {{userNameInfo}}欢迎你！
                </p>
                <p>请先绑定平台账号，绑定后可使用微信一键登录</p>
            </div>
            <!-- 登录注册区域 -->
            <div class="form">
                <ul class="change-way">
                    <li @mouseenter="changeWay(1)" :class="{current: index == 1}">绑定已有账号</li>
                    <li @mouseenter="changeWay(2)" :class="{current: index == 2}">注册新账号</li>
                </ul>
                <div class="main-login-inp">
                    <div class="psd-div" :style="{left: `${leftX}px`}">
                        <div class="psd-one">
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
                            <div @click="loginSubmit" class="loginSubmit">登录</div>
                        </div>
                        <div class="psd-two">
                            <div class="formTwo">
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
                                <!-- 密码框 -->
                                <div class="item-psd item">
                                    <div class="phone-box" :class="{errBox: errIndex == 3}">
                                        <img v-if="errPhoneIndex == 3" src="../assets/img/lockedErr.png" alt="">
                                        <img v-else-if="regPsdIndex == 1" src="../assets/img/lockedFocus.png" alt="">
                                        <img v-else src="../assets/img/lockedLeave.png" alt="">
                                    </div>
                                    <input 
                                    @focus="phoneFocus(1, 'regPsdIndex')"
                                    @blur="phoneFocus(0, 'regPsdIndex')"
                                    :class="{errTypeInp: errPhoneIndex == 3}"
                                    v-model="passwordTwo" 
                                    class="full-inp" 
                                    type="password" 
                                    placeholder="密 码">
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
                                <div @click="loginPhoneSubmit" class="loginSubmit">登录</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userNameInfo: '潘祖丽',
            index: 1,
            timer: null,
            leftX: 0,
            errInfoShow: false,
            warningIcon: {
                background: 'url(' + require('../assets/img/warning-icon.png') + ') no-repeat'
            },
            errInfo: '请输入手机号',
            errPhoneInfo: '请输入手机号',
            errIndex: 0,
            psdIndex: 0,
            password: '',
            userName: '',
            phoneIndex: 0,
            errPhoneInfoShow: false,
            errPhoneIndex: 0,
            userCodeIndex: 0,
            codeNum: 60,
            isGetCode: false,
            userPhone: '',
            userPhoneIndex: '',
            userCode: '',
            codeInfo: '获取验证码',
            timerCode: null,
            regPsdIndex: 0,
            errpsdIndex: 0,
            passwordTwo: '',
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
        passwordTwo(newVal) {
            if (newVal) {
                this.errPhoneIndex = 0;
            }
        },
    },
    methods: {
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
                    if (this.leftX <= -282) {
                        this.leftX = -282;
                        this.clearTimer();
                    }
                }, 25)
            }
        },
        clearTimer() {
            clearInterval(this.timer);
            this.timer = null;
        },
        phoneFocus(index, name) {
            this[name] = index;
        },
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
            // 调用绑定
        },
        loginPhoneSubmit() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userPhone))) {
                this.errPhoneInfoShow = true;
                this.errPhoneInfo = '请输入正确的手机号码';
                this.errPhoneIndex = 1;
                return;
            }else if (!this.passwordTwo) {
                this.errPhoneInfoShow = true;
                this.errPhoneInfo = '账号或密码错误';
                this.errPhoneIndex = 3;
            }else if (!this.userCode) {
                this.errPhoneInfoShow = true;
                this.errPhoneInfo = '动态密码错误';
                this.errPhoneIndex = 2;
                return;
            }
        },
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
        }
    }
}
</script>

<style lang="less" scoped>
.bind-account {
    width: 100%;
    height: 100%;
    .bind-container {
        width: 430px;
        padding-top: 47px;
        min-height: 200px;
        margin: 0 auto;
        text-align: left;
        .user-img {
            width: 60px;
            height: 60px;
            border-radius: 60%;
        }
        .bind-top-info {
            width: 351px;
            height: 35px;
            display: inline-block;
            position: relative;
            top: -10px;
            margin-left: 16px;
            font-size: 14px;
            color: #666;
            font-weight: 400;
        }
        .form {
            width: 345px;
            height: 400px;
            margin: 54px auto 27px;
            border: 1px solid #E8E8E8;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
            background: #fff;
            padding: 10px 29px 0 32px;
            box-sizing: border-box;
            .change-way {
                display: block;
                height: 40px;
                margin: 0 auto;
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
                    font-size: 16px;
                    text-indent: 5px;
                    overflow: hidden;
                    width: 50%;
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
                height: 340px;
                overflow: hidden;
                .psd-div {
                    width: 564px;
                    height: 100%;
                    position: relative;
                    >div {
                        width: 282px;
                        height: 100%;
                        float: left;
                    }
                    .psd-one, .psd-two {
                        position: relative;
                        box-sizing: border-box;
                        padding-top: 25px;
                        .warning {
                            position: absolute;
                            width: 290px;
                            height: 25px;
                            line-height: 25px;
                            box-sizing: border-box;
                            position: absolute;
                            top: 7px;
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
                            width: 282px;
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
                                width: 220px;
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
                        .loginSubmit {
                            width: 280px;
                            height: 40px;
                            color: #FFF;
                            background: #F3262D;
                            line-height: 40px;
                            text-align: center;
                            cursor: pointer;
                            margin-top: 7px;
                            &:hover {
                                background: #F43C42;
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
                                width: 94px;
                                height: 40px;
                                line-height: 40px;
                                border: 1px solid #ccc;
                                box-sizing: border-box;
                                float: right;
                                text-align: center;
                                margin-right: 10px;
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
                    }
                }
            }
        }
    }
}
</style>

