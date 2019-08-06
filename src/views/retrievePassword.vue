<template>
    <div class="retrieve-password">
        <div class="retrieve-container">
            <!-- 进度条 -->
            <div class="progress">
                <!-- 高亮圆圈 -->
                <div class="progress-circle">
                    2
                </div>
                <!-- 高亮线条 -->
                <div class="light-line"></div>
                <!-- 正在修改的页面 -->
                <template v-if="!showSuccess">
                    <span class="progress-arrow">>></span>
                    <div class="gray-line"></div>
                    <div class="gray-circle">
                        3
                    </div>
                </template>
                <!-- 已经完成修改了 -->
                <template v-else>
                    <span class="progress-arrow lighe-arrow">>></span>
                    <div class="light-line"></div>
                    <div class="progress-circle success-circle">
                        3
                    </div>
                </template>
                <p class="progress-tips">
                    <span class="light-tips-item">验证并设置新密码</span>
                    <span class="gray-tips-item" v-if="!showSuccess">设置完成</span>
                    <span class="gray-tips-item success-tips" v-else>设置完成</span>
                </p>
            </div>
            <div class="retrieve-input" v-if="!showSuccess">
                <el-alert
                    v-if="messageTips"
                    :closable="false"
                    class="message-tips"
                    :title="messageTitle"
                    type="success"
                    show-icon>
                </el-alert>
                <div class="form">
                    <div class="item">
                        <label for="phone">手机号码</label>
                        <input v-model="userPhone" class="item-inp" type="text" id="phone" placeholder="请输入您绑定的手机">
                        <span class="warning-tips" v-if="errPhoneInfoShow">
                            <span class="warning-icon">!</span>
                            <span class="warning-info">你输入的手机号格式不对</span>
                        </span>
                    </div>
                    <div class="item code">
                        <label for="code">验证码</label>
                        <input v-model="codeNum" class="item-inp" type="text" id="code" placeholder="请输入验证码">
                        <div class="get-code" v-if="!isGetCode" @click="getCode">{{codeInfo}}</div>
                        <div v-else class="get-code getting-code">
                            重新获取({{codeNum}})
                        </div>
                    </div>
                    <div class="item">
                        <label for="password">设置新密码</label>
                        <input v-model="userPsd" class="item-inp" type="password" id="password" placeholder="请输入新密码">
                        <span class="warning-tips" v-if="errPsdInfoShow">
                            <span class="warning-icon">!</span>
                            <span class="warning-info">密码只能是6-16位字母、数字或符号组成</span>
                        </span>
                    </div>
                    <div class="item">
                        <label></label>
                        <div class="next-step" @click="submitPsd">下一步</div>
                    </div>
                </div>
            </div>
            <div v-else class="success-retrieve">
                <p class="success-info">
                    <img src="../assets/img/success.png" alt="">
                    <span>修改成功，请牢记新的登录密码</span>
                </p>
                <p class="login-again">
                    <span><router-link to="/loginLayout">重新登录</router-link></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            codeInfo: '获取验证码',
            // 是否正在获取验证码
            isGetCode: false,
            // 定时时间
            codeNum: 60,
            // 定时器
            timerCode: null,
            // 用户手机号
            userPhone: '',
            // 用户密码
            userPsd: '',
            // 错误手机号显示
            errPhoneInfoShow: false,
            // 显示短信发送成功的提示
            messageTips: false,
            //提示信息
            messageTitle: '',
            // 密码错误
            errPsdInfoShow: false,
            // 显示已经修改成功
            showSuccess: false,
        }
    },
    methods: {
        formatterPhone(tel){
            let reg = /^(\d{3})\d{4}(\d{4})$/;  
            return (
              "验证码已发送至您的绑定手机" + tel.replace(reg, "$1****$2") + "，请注意查收！"
            );
        },
        getCode() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userPhone))) {
                this.errPhoneInfoShow = true;
                return;
            }
            this.isGetCode = true;
            this.messageTips = true;
            this.errPhoneInfoShow = false;
            this.messageTitle = this.formatterPhone(this.userPhone);
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
        // 点击下一步
        submitPsd() {
            if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userPhone))) {
                this.errPhoneInfoShow = true;
                return;
            }
            if (!this.codeNum) {
                return;
            }
            if (!(/^[\w]{6,16}$/.test(this.userPsd))) {
                this.errPsdInfoShow = true;
                return;
            }else {
                this.errPsdInfoShow = false;
            }
            // 此处发送请求 回调提示成功
            this.showSuccess = true;
        }
    }
}
</script>

<style lang="less" scoped>
.retrieve-password {
    width: 100%;
    height: 100%;
    .retrieve-container {
        width: 898px;
        height: 613px;
        border: 1px solid #E8E8E8;
        margin: 10px auto 0;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
        .progress {
            width: 748px;
            height: 114px;
            margin: 43px auto 0;
            border-bottom:1px solid #E8E8E8;
            user-select: none;
            .progress-circle, .gray-circle {
                width: 22px;
                height: 22px;
                background: #F3262D;
                border-radius: 50%;
                line-height: 22px;
                font-size: 14px;
                font-weight: 400;
                border: 5px solid #FBBDC0;
                color: #fff;
                float: left;
                margin-left: 187px;
            }
            .gray-circle {
                border-color: #E9EBEF;
                background: #D0D5DD;
                margin: 0;
            }
            .success-circle {
                margin: 0;
            }
            .light-line, .gray-line {
                width: 144px;
                height: 1px;
                border-bottom: 3px dashed #F3262D;
                float: left;
                padding-top: 12px;
            }
            .gray-line {
                border-color: #ccc;
            }
            .progress-arrow {
                float: left;
                padding-top: 2px;
                font-size: 22px;
                padding: 2px 10px 0;
                color: #E7E7E7;
            }
            .lighe-arrow {
                color: #F3262D;
            }
            .progress-tips {
                clear: both;
                text-align: left;
                padding-top: 11px;
                font-weight: 400;
                .light-tips-item, .gray-tips-item {
                    color: #F3262D;
                    font-size: 14px;
                    margin-left: 150px;
                }
                .gray-tips-item {
                    color: #999;
                    margin: 0;
                    float: right;
                    margin-right: 150px;
                }
                .success-tips {
                    color: #F3262D;
                }
            }
        }
        .retrieve-input {
            width: 100%;
            .message-tips {
                width: 496px;
                height: 28px;
                margin: 22px auto 0;
            }
            .form {
                text-align: left;
                width: 650px;
                min-height: 200px;
                position: absolute;
                left: 50%;
                margin-top: 30px;
                margin-left: -250px;
                box-sizing: border-box;
                .item {
                    margin-bottom: 22px;
                    label {
                        margin-right: 14px;
                        font-size: 14px;
                        color: #333;
                        font-weight: 400;
                        display: inline-block;
                        width: 75px;
                        text-align: right;
                        padding-top: 10px;
                    }
                    .item-inp {
                        width: 247px;
                        padding-left: 10px;
                        height: 36px;
                        border: 1px solid #BDBDBD;
                        vertical-align: top;
                    }
                    input::-webkit-input-placeholder {
                        color: #999;
                        font-size: 12px;
                    }
                    .warning-tips {
                        .warning-icon {
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            color: #fff;
                            background: #FFC600;
                            border-radius: 50%;
                            text-align: center;
                            line-height: 18px;
                            font-size: 18px;
                            margin: 0 6px 0 14px;
                        }
                        .warning-info {
                            color: #F3262D;
                            font-size: 12px;
                            font-weight: 400;
                        }
                    }
                    .get-code {
                        width: 84px;
                        height: 36px;
                        border: 1px solid #DFDFDF;
                        display: inline-block;
                        font-size: 12px;
                        color: #666;
                        text-align: center;
                        line-height: 36px;
                        user-select: none;
                        cursor: pointer;
                        margin-left: 10px;
                        position: relative;
                        top: -2px;
                        background: #fff;
                        &:hover {
                            background: #F4F4F4;
                        }
                    }
                    .getting-code {
                        background: #F4F4F4;
                        cursor: not-allowed;
                    }
                    .next-step {
                        background: #F3262D;
                        color: #fff;
                        width: 100px;
                        height: 36px;
                        text-align: center;
                        line-height: 36px;
                        border-radius: 4px;
                        font-size: 14px;
                        display: inline-block;
                        margin-top: 27px;
                        cursor: pointer;
                        &:hover {
                            background: #F43C42;
                        }
                    }
                }
                .code {
                    .item-inp {
                        width: 151px;
                    }
                }
            }
        }
        .success-retrieve {
            margin-top: 87px;
            .success-info {
                font-size: 14px;
                color: #26A571;
                font-weight: 400;
                >img {
                    margin-right: 11px;
                }
                >span {
                    position: relative;
                    top: -6px;
                }
            }
            .login-again {
                margin-top: 40px;
                >span a {
                    width:100px;
                    height:36px;
                    background:#f3262d;
                    border-radius:4px;
                    display: inline-block;
                    color: #fff;
                    line-height: 36px;
                    font-size: 14px;
                    font-weight: 400;
                    cursor: pointer;
                    text-decoration: none;
                    &:hover {
                        background: #F43C42;
                    }
                }
            }
        }
    }
}
</style>

