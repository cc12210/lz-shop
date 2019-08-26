<template>
    <div class="business-home">
        <!-- 弹窗提示 -->
        <div class="alert-mask" v-if="isAlertShow">
            <div class="alert-box">
                <p class="alert-title">温馨提示</p>
                <p class="alert-info">
                    您的店铺开通申请已提交，管理员会在5个工作日内完成审核，请耐心等待。
                </p>
                <p class="alert-close">
                    <span @click="isAlertShow = false">确定</span>
                </p>
            </div>
        </div>
        <!-- 补缴诚信保证金的弹框 -->
        <div class="is-pay-back" v-if="isPayBack">
            <div class="alert-box">
                <p class="pay-back-title">
                    <img src="../../assets/img/money-safe.png" alt="">
                    补缴诚信保证金
                    <span class="right-close-icon" @click="isPayBack= false">x</span>
                </p>
                <p class="pay-back-titTop">
                    <span>您需要补缴的金额：</span>
                    <span>
                        点击查看
                        <a>保证金的管理和使用></a>
                    </span>
                </p>
                <p class="pay-money">
                    <span>
                        <span class="money-unit">￥</span>
                        {{needDepositNum}}
                    </span>
                    <span v-if="showOther" @click="showOther = false">关闭其他金额</span>
                    <span v-else  @click="showOther = true">展开其他金额</span>
                </p>
                <div class="choose-money" v-if="showOther">
                    <div class="main-choose">
                        <div class="arrow-down"></div>
                        <p class="main-choose-title">
                            您还可以选择其他金额：
                        </p>
                        <!-- 自定义金额 -->
                        <input type="text" v-model="inputMoney" class="choose-input" placeholder="不得少于5千元">
                        <!-- 筛选金额按钮 -->
                        <div class="choose-button">
                            <div class="choose-button-item"
                            :class="{isChoose: chooseIndex == index}"
                            @click="clickChooseMoney(item.value, index)" 
                            v-for="(item, index) in chooseMoney"
                            :key="index">
                                {{item.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 这个是隐藏其他金额之后才出现的占位div -->
                <div v-else class="choose-money"></div>
                <!-- 缴费方式切换 -->
                <div class="pay-way">
                    <el-radio size="medium" class="choose-pay-radio" v-model="radioPay" label="0">支付宝支付</el-radio>
                    <el-radio size="medium" class="choose-pay-radio" v-model="radioPay" label="1">微信支付</el-radio>
                    <el-radio size="medium" class="choose-pay-radio third-choose-radio" v-model="radioPay" label="3">
                        余额支付
                        <span class="radio-bottom-info">
                            <span>可用余额：</span>
                            <span>￥{{restMoney}}</span>
                        </span>
                    </el-radio>
                    <el-radio size="medium" class="choose-pay-radio" v-model="radioPay" label="4">
                        线下转账支付
                        <span class="radio-bottom-info">
                            <span class="check-pay-bank">查看线下支付银行</span>
                        </span>
                    </el-radio>
                </div>
                <!-- 点击补缴按钮 -->
                <div class="submit-pay">
                    <span @click="submitPay" class="submit-button">
                        立即补缴
                    </span>
                </div>
            </div>
        </div>
        <!-- 用户信息块 -->
        <div class="business-user">
            <!-- 用户头像 -->
            <div class="user-img">
                <img src="http://temp.im/85x85" alt="">
            </div>
            <!-- 用户信息 -->
            <div class="user-info">
                <p class="user-name">
                    <span class="userName">{{userName}}</span>
                    <span class="user-icon">凌六十级</span>
                    <span class="user-icon">个人</span>
                </p>
                <p class="business-state">
                    <!-- 用户的几种其他状态暂时未做  没有后台数据不好做 -->
                    <!-- 店铺的开通申请点击之后出现弹框已经做了，在第四行可以看得到 -->
                    <span>店铺状态：</span>
                    <span class="user-state">已开通</span>
                    <span>会员截止时间：</span>
                    <span>{{vipTime}}</span>
                </p>
                <p class="user-explain">
                    <span>
                        当前剩余技术服务免费额度¥{{freeMoney}}
                    </span>
                    <!-- 这个需要加一个跳转  或者显示技术费率详情的事件 -->
                    <router-link to="/" class="free-detail">
                        技术费率详情>
                    </router-link>
                </p>
            </div>
            <!-- 右侧保证金 -->
            <div class="user-deposit">
                <!-- 需补交保证金 -->
                <div class="need-deposit">
                    <p class="deposit-title">需补交保证金</p>
                    <p class="deposit-size">
                        <span class="need-deposit-size">{{needDepositNum}}</span>
                        <span>元</span>
                    </p>
                    <p class="deposit-edit">
                        <span class="need-deposit-edit" @click="payProMoney">缴纳保证金</span>
                    </p>
                </div>
                <!-- 当前保证金 -->
                <div class="now-deposit">
                    <p class="deposit-title">当前保证金</p>
                    <p class="deposit-size">
                        <span>{{nowDepositNum}}</span>
                        <span>元</span>
                    </p>
                    <p class="deposit-edit">
                        <span class="now-deposit-edit">退回</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 新手任务 -->
        <div class="user-new">
            <p class="user-new-title">
                新手任务
            </p>
            <p class="user-new-info">
                <img src="../../assets/img/horn-message.png" alt=""> 提示：请根据指引完成新手任务后，您就能获取店铺经营权！
            </p>
        </div>
        <div class="task-flow">
            <p class="task-flow-title">
                完善店铺资料
            </p>
            <p class="task-flow-info">
                <span>说明：</span>
                <span>完善店铺资料，增加您的实力，让雇主更加相信你。</span>
            </p>
            <p class="task-flow-now">
                <span>进度：</span>
                <span class="task-flow-state">未完成</span>
            </p>
            <span class="task-flow-submit" @click="goDetail('businessInfo')">
                立即完善
            </span>
        </div>
        <!-- 完善擅长技能 -->
        <div class="task-flow">
            <p class="task-flow-title">
                完善擅长技能
            </p>
            <p class="task-flow-info">
                <span>说明：</span>
                <span>完善店铺资料，增加您的实力，让雇主更加相信你。</span>
            </p>
            <p class="task-flow-now">
                <span>进度：</span>
                <span class="task-flow-state">未完成</span>
            </p>
            <span class="task-flow-submit" @click="goDetail('businessSkill')">
                立即完善
            </span>
        </div>
        <!-- 申请实名认证 -->
        <div class="task-flow">
            <p class="task-flow-title">
                申请实名认证
            </p>
            <p class="task-flow-info">
                <span>说明：</span>
                <span>完善店铺资料，增加您的实力，让雇主更加相信你。</span>
            </p>
            <p class="task-flow-now">
                <span>进度：</span>
                <span class="task-flow-state">未完成</span>
            </p>
            <span class="task-flow-submit" @click="goDetail('authenticationName')">
                立即申请
            </span>
        </div>
        <!-- 缴纳保证金 -->
        <div class="task-flow">
            <p class="task-flow-title">
                缴纳保证金
            </p>
            <p class="task-flow-info">
                <span>说明：</span>
                <span>完善店铺资料，增加您的实力，让雇主更加相信你。</span>
            </p>
            <p class="task-flow-now">
                <span>进度：</span>
                <span class="task-flow-state">未完成</span>
            </p>
            <span class="task-flow-submit">
                立即缴纳
            </span>
        </div>
        <!-- 底部交易动态及我的违规信息等 -->
        <div class="bottom-info">
            <div class="bottom-info-left">
                <p class="bottom-info-title">交易动态</p>
                <div class="bottom-info-item first-item">
                    <p>0</p>
                    <p>待付款</p>
                </div>
                <div class="bottom-info-item">
                    <p>0</p>
                    <p>待跟单</p>
                </div>
                <div class="bottom-info-item">
                    <p>0</p>
                    <p>待选标</p>
                </div>
                <div class="bottom-info-item last-item">
                    <p>0</p>
                    <p>待收款</p>
                </div>
            </div>
            <div class="bottom-info-right">
                <div class="bottom-info-title bottom-title-right">
                    我的违规
                    <div class="right-tips">
                        此功能暂未开放，敬请期待！
                        <div class="arrow-down">
                            <div class="line-left"></div>
                            <div class="line-right"></div>
                        </div>
                    </div>
                </div>
                <div class="bottom-info-item-right first-right-item">
                    <p>0</p>
                    <p>待付款</p>
                </div>
                <div class="bottom-info-item-right last-right-item">
                    <p>0</p>
                    <p>待跟单</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 用户名称
            userName: 'chuangwei',
            // 免费额度
            freeMoney: 2000,
            // 当前已缴的保证金
            nowDepositNum: '5000.00',
            // 需要补缴的保证金
            needDepositNum: '5000.00',
            // 对用户进行已提示的弹框消息
            isAlertShow: false,
            // 控制缴纳保证金弹框显示
            isPayBack: false,
            // 会员剩下时间
            vipTime: '2019-01-01',
            // 用户账户剩余
            restMoney: '3583.25',
            // 筛选的金额
            chooseMoney: [
                {
                    name: '1万元',
                    value: 100000
                },
                {
                    name: '2万元',
                    value: 200000
                },
                {
                    name: '4万元',
                    value: 400000
                },
                {
                    name: '7万元',
                    value: 700000
                },
            ],
            // 自定义输入的金额
            inputMoney: '',
            // 选中的按钮  进行变色及赋值输入框处理，默认是-1不选中
            chooseIndex: -1,
            // 是否显示其他金额
            showOther: true,
            // 区分为支付宝支付或微信支付等
            radioPay: '0',
        }
    },
    watch: {
        // 此处对用户的自定义金额做一个监听 空值高亮取消
        inputMoney(newVal) {
            if (!newVal) {
                this.chooseIndex = -1;
            }
        }
    },
    methods: {
        // 点击按钮切换金额
        clickChooseMoney(value, index) {
            // 如果当前点击的按钮未被选中则进行赋值处理
            if (this.chooseIndex != index) {
                this.chooseIndex = index;
                this.inputMoney = value;
            }else { // 如果已经被选中再次点击 则取消按钮的选中效果并将输入框的值置空
                this.chooseIndex = -1;
                this.inputMoney = '';
            }
        },
        // 点击跳转到对应路由
        goDetail(name, query) {
            this.$router.push({
                name: name,
                query: query || {}
            })
        },
        // 立即补缴提交请求
        submitPay() {
            this.isPayBack = false;
            // 发送请求提交补缴金额的请求
        },
        // 缴纳保证金
        payProMoney() {
            this.isPayBack = true;
            // 发送请求获取用户余额之类的操作
        }
    }
}
</script>

<style lang="less" scoped>
.business-home {
    width: 100%;
    height: 100%;
    .alert-mask, .is-pay-back {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 5;
        .alert-box {
            width: 638px;
            height: 313px;
            border: 1px solid #f5f5f5;
            background: #FFF;
            position: absolute;
            top: 50%; /*偏移*/
            margin-top: -150px;
            left: 50%;
            transform: translateX(-50%);
            font-weight: 400;
            border-radius: 8px;
            .alert-title {
                margin-top: 50px;
                color: #333;
            }
            .alert-info {
                margin-top: 63px;
                margin-bottom: 70px;
                color: #666;
                font-size: 14px;
            }
            .alert-close {
                span {
                    padding: 11px 36px;
                    background: #F3262D;
                    color: #fff;
                    font-size: 14px;
                    cursor: pointer;
                    &:hover {
                        background: #F43C42;
                    }
                }
            }
        }
    }
    .is-pay-back {
        text-align: left;
        .alert-box {
            width: 640px;
            height: 610px;
            top: 30%;
            box-sizing: border-box;
            padding: 40px 46px 40px 40px;
            font-weight: 400;
            border-radius: 8px;
            .pay-back-title {
                padding-bottom: 30px;
                border-bottom: 1px solid #E8E8E8;
                color: #333;
                position: relative;
                >img {
                    width: 20px;
                    height: 20px;
                    position: relative;
                    top: 5px;
                    margin-right: 2px;
                }
                .right-close-icon {
                    position: absolute;
                    right: -20px;
                    top: -20px;
                    color: #999;
                    font-size: 24px;
                    padding: 10px;
                    cursor: pointer;
                    user-select: none;
                }
            }
            .pay-back-titTop {
                margin: 25px 0 38px;
                span:nth-child(1) {
                    color: #FE3A08;
                    font-size: 14px;
                }
                span:nth-child(2) {
                    float: right;
                    font-size: 12px;
                    color: #999;
                    >a {
                        font-size: 12px;
                        color: #0066CC;
                        text-decoration: none;
                        cursor: pointer;
                    }
                }
            }
            .pay-money {
                >span:nth-child(1) {
                    margin: 0 10px 0 45px;
                    font-size: 36px;
                    color: #F3262D;
                }
                .money-unit {
                    font-size: 20px!important;
                    margin: 0!important;
                    position: relative;
                    left: 5px;
                }
                >span:nth-child(2) {
                    font-size: 12px;
                    color: #0066CC;
                    cursor: pointer;
                    user-select: none;
                    &:hover {
                        color: #F3262D;
                    }
                }
            }
            .choose-money {
                height: 170px;
                box-sizing: border-box;
                padding: 0 5px;
                margin-top: 10px;
                .main-choose {
                    width: 100%;
                    height: 100%;
                    background: #F5F5F5;
                    position: relative;
                    box-sizing: border-box;
                    padding: 22px 26px 22px 25px;
                    font-weight: 400;
                    .arrow-down {
                        width: 0;
                        height: 0;
                        border-left: 15px solid #fff;
                        border-right: 15px solid #fff;
                        border-bottom: 15px solid #f5f5f5;
                        position: absolute;
                        left: 50%;
                        top: -15px;
                        margin-left: -35px;
                    }
                    .main-choose-title {
                        font-size: 14px;
                        color: #666;
                        margin-bottom: 18px;
                    }
                    .choose-input {
                        width: 100%;
                        border: 0;
                        height: 38px;
                        background: #FFF;
                        padding: 0 14px;
                        box-sizing: border-box;
                        margin-bottom: 14px;
                    }
                    .choose-input::-webkit-input-placeholder { /* WebKit browsers */
                        color: #989898;
                        font-size: 14px;
                    }
                    .choose-input::-moz-placeholder { /* Mozilla Firefox 19+ */
                        color: #989898;
                        font-size: 14px;
                    }
                    .choose-input:-ms-input-placeholder { /* Internet Explorer 10+ */
                        color: #989898;
                        font-size: 14px;
                    }
                    .choose-button {
                        height: 38px;
                        .choose-button-item {
                            width: 113px;
                            height: 36px;
                            background: #fff;
                            border:1px solid rgba(232,232,232,1);
                            border-radius:4px;
                            cursor: pointer;
                            float: left;
                            line-height: 36px;
                            text-align: center;
                            color: #666;
                            font-size: 14px;
                            margin-right: 10px;
                            user-select: none;
                        }
                        .isChoose {
                            color: #FFF;
                            background: #F3262D;
                        }
                        div:nth-child(4) {
                            margin-right: 0;
                        }
                    }
                }
            }
            .pay-way {
                height: 60px;
                border-top: 1px solid #E8E8E8;
                margin-top: 29px;
                box-sizing: border-box;
                padding-top: 26px;
            }
            .submit-pay {
                text-align: center;
                margin-top: 35px;
                .submit-button {
                    display: inline-block;
                    width: 120px;
                    height: 40px;
                    border-radius: 4px;
                    line-height: 40px;
                    text-align: center;
                    color: #fff;
                    background: #F3262D;
                    cursor: pointer;
                    user-select: none;
                    &:hover {
                        background: #FE3A08;
                    }
                }
            }
        }
    }
    .business-user {
        height: 123px;
        background: #FFF;
        margin-top: 20px;
        box-sizing: border-box;
        padding: 19px 26px 15px 23px;
        >div {
            float: left;
        }
        .user-img {
            width: 85px;
            height: 85px;
            >img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .user-info {
            width: 440px;
            height: 100%;
            margin-left: 24px;
            text-align: left;
            >p {
                margin-bottom: 12px;
            }
            .user-name {
                .userName {
                    font-size: 18px;
                    color: #333;
                    font-weight: 400;
                    margin-right: 10px;
                    position: relative;
                    top: 2px;
                }
                .user-icon {
                    padding: 5px 5px;
                    text-align: center;
                    background:linear-gradient(36deg,rgba(255,110,0,1),rgba(254,157,0,1));
                    border-radius:4px;
                    font-size: 12px;
                    color: #fff;
                    margin-right: 6px;
                }
            }
            .business-state {
                span:nth-child(1) {
                    font-size: 14px;
                    color: #999;
                }
                span:nth-child(2) {
                    color: #F3262D;
                    font-weight: 400;
                }
                span:nth-child(3) {
                    font-size: 12px;
                    margin-left: 28px;
                }
                span:nth-child(4) {
                    font-size: 12px;
                }
            }
            .user-explain {
                font-size: 14px;
                span:nth-child(1) {
                    color: #999;
                }
                .free-detail {
                    color: #0066CC;
                    text-decoration: none;
                    font-size: 12px;
                }
            }
        }
        .user-deposit {
            width: 320px;
            height: 100%;
            float: right;
            text-align: left;
            >div {
                width: 115px;
                height: 100%;
                float: right;
                font-weight: 400;
                .deposit-title {
                    font-size: 12px;
                    color: 898989;
                }
                .deposit-size {
                    margin-top: 3px;
                    span:nth-child(1) {
                        color: #50D285;
                        font-size: 26px;
                        margin-right: 5px;
                    }
                    span:nth-child(2) {
                        color: #898989;
                        font-size: 12px;
                    }
                    .need-deposit-size {
                        color: #F3262D!important;
                    }
                }
                .deposit-edit {
                    >span {
                        display: inline-block;
                        width: 107px;
                        height: 28px;
                        line-height: 30px;
                        color: #666;
                        border-radius: 4px;
                        text-align: center;
                        border: 1px solid #E3E3E3;
                        font-size: 14px;
                        margin-top: 5px;
                        cursor: pointer;
                    }
                    .need-deposit-edit {
                        background: #F3262D;
                        color: #FFF;
                        &:hover {
                            background: #F43C42;
                        }
                    }
                    .now-deposit-edit {
                        &:hover {
                            border-color: #F3262D;
                            color: #F3262D;
                        }
                    }
                }
            }
            .need-deposit {
                margin-left: 79px;
            }
        }
    }
    .user-new {
        height: 97px;
        background: #FFF;
        margin-top: 20px;
        text-align: left;
        box-sizing: border-box;
        padding: 22px 24px;
        font-weight: 400;
        .user-new-title {
            margin-bottom: 12px;
            font-size: 18px;
            color: #333;
        }
        .user-new-info {
            color: #F3262D;
            font-size: 12px;
            >img {
                position: relative;
                top: 2px;
                margin-right: 10px;
                width: 25px;
                height: 17px;
            }
        }
    }
    .task-flow {
        height: 128px;
        background: #FFF;
        margin-top: 10px;
        box-sizing: border-box;
        padding: 20px 40px;
        text-align: left;
        font-weight: 400;
        position: relative;
        .task-flow-title {
            color: #333;
            margin-bottom: 14px;
        }
        .task-flow-info {
            font-size: 14px;
            color: #999;
            margin-bottom: 14px;
            span:nth-child(2) {
                color: #666;
            }
        }
        .task-flow-now {
            font-size: 14px;
            span:nth-child(1) {
                color: #999;
            }
            .task-flow-state {
                color: #F3262D;
            }
        }
        .task-flow-submit {
            width: 86px;
            height: 37px;
            border: 1px solid #F3262D;
            border-radius: 4px;
            color: #F3262D;
            background: #FFF;
            position: absolute;
            right: 40px;
            top: 46px;
            line-height: 37px;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
            user-select: none;
            &:hover {
                background: #F3262D;
                color: #FFF;
            }
        }
    }
    .bottom-info {
        height: 158px;
        margin-top: 20px;
        >div {
            float: left;
            font-weight: 400;
            background: #FFF;
            width: 480px;
            height: 100%;
            box-sizing: border-box;
            padding: 18px 20px;
            text-align: left;
            .bottom-info-title {
                padding-bottom: 13px;
                border-bottom: 1px dashed #2F7FEF;
            }
            .bottom-title-right {
                border-bottom: 1px solid #F3262D;
                position: relative;
                .right-tips {
                    position: absolute;
                    width: 220px;
                    height: 30px;
                    line-height: 30px;
                    color: #666;
                    font-size: 14px;
                    text-align: center;
                    background:#FFF;
                    border: 1px solid #DDDDDD;
                    border-radius: 4px;
                    left: 111px;
                    top: -10px;
                    .arrow-down {
                        width: 0;
                        height: 0;
                        border-left: 10px solid #fff;
                        border-right: 10px solid #fff;
                        border-top: 10px solid #fff;
                        position: absolute;
                        left: 100px;
                        top: 29px;
                        .line-left, .line-right {
                            width: 1px;
                            height: 14px;
                            background: #ddd;
                            position: absolute;
                            left: -5px;
                            top: -10px;
                            transform: rotate(-45deg);
                        }
                        .line-right {
                            transform: rotate(45deg);
                            left: 4px;
                            top: -11px;
                        }
                    }
                }
            }
            .bottom-info-item, .bottom-info-item-right {
                width: 78px;
                height: 30px;
                border-right: 1px solid #ccc;
                float: left;
                margin-top: 37px;
                position: relative;
                margin-right: 30px;
                p:nth-child(1) {
                    position: relative;
                    top: -5px;
                    font-size: 20px;
                    color: #0066CC;
                    padding-left: 15px;
                }
                p:nth-child(2) {
                    font-size: 14px;
                    color: #666;
                }
            }
            .first-item {
                margin-left: 30px;
            }
            .last-item {
                margin-right: 0;
                border: 0;
            }
            .bottom-info-item-right {
                width: 140px;
                margin-left: 72px;
                margin-right: 0;
                p:nth-child(1) {
                    color: #F3262D;
                }
            }
            .first-right-item {
                margin-left: 72px;
                margin-right: 0;
            }
            .last-right-item {
                border: 0;
            }
        }
        .bottom-info-left {
            margin-right: 20px;
        }
    }
}
</style>

<style lang="less">
// 修改饿了么的组件样式
.choose-pay-radio {
    position: relative;
    margin-right: 30px;
    .radio-bottom-info {
        position: absolute;
        top: 20px;
        left: 28px;
        font-size: 14px;
        color: #333;
        span:nth-child(2) {
            color: #F3262D;
        }
        .check-pay-bank {
            color: #0066CC;
            user-select: none;
            cursor: pointer;
        }
    }
    .el-radio__input.is-checked+.el-radio__label {
        color: #333;
    }
    .el-radio__label {
        color: #333;
    }
    .el-radio__input.is-checked .el-radio__inner {
        border-color: #F3262D;
        background: #F3262D;
    }
}
.third-choose-radio {
    margin-right: 105px;
}
</style>
