<template>
    <div class="app-container">
        <div class="table-container">
            <div class="table-item">
                <div class="item-title">单位名称</div>
                <div class="item-content">XXXXXX单位</div>
            </div>
            <div class="table-item">
                <div class="item-title">统一社会信用代码</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">机构类型</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">单位类型</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">主要经济指标（万元）</div>
                <div class="item-list">
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2024年营收:</span></div>
                            <div>16800000</div>
                        </div>
                        <div class="item">
                            <div><span>*</span><span>其中：主营业务收入</span></div>
                            <div>16800000</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2024年资产总计:</span></div>
                            <div>16800000</div>
                        </div>
                        <div class="item">
                            <div><span>*</span><span>2024年营业利润：</span></div>
                            <div>16800000</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2023年营收:</span></div>
                            <div>16800000</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2022年营收:</span></div>
                            <div>16800000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-item-line">
                <div class="line-item">
                    <div class="item-title">人员数量</div>
                    <div class="item-content">666</div>
                </div>
                <div class="line-item">
                    <div class="item-title"><span> * </span><span>其中：女性（人）</span></div>
                    <div class="item-content">123</div>
                </div>
            </div>
            <div class="table-item">
                <div class="item-title">单位简介</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">通讯地址</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">详细地址</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">应用场景</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">是否开放共享数据</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">是否用于研发数据产品</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">填报人员</div>
                <div class="table-box">
                    <div class="box-item">
                        <div>姓名：</div>
                        <div>张三</div>
                    </div>
                    <div class="box-item">
                        <div>部门：</div>
                        <div>XXXXXX部门</div>
                    </div>
                    <div class="box-item">
                        <div>手机：</div>
                        <div>188XXXXXX</div>
                    </div>
                    <div class="box-item">
                        <div>职务：</div>
                        <div>XXXXXX</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TradeBase',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";

.app-container {
    .table-container {
        width: 100%;
        font-size: 12px;
        border: 1px solid $tableBorderColor;

        .table-item {
            width: 100%;
            display: flex;
            border-bottom: 1px solid $tableBorderColor;

            &:last-child {
                border-bottom: none;
            }

            &.first-item {
                border-top: 1px solid $tableBorderColor;
            }

            .item-title {
                width: $tableLeftTitleWidth;
                display: flex;
                align-items: center;
                padding: 6px 10px;
                font-weight: 600;
                color: $tableTitleColor;
                background-color: $tableBgColor;
                border-right: 1px solid $tableBorderColor;
                box-sizing: border-box;
            }

            .item-content {
                width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                display: flex;
                align-items: center;
                padding: 6px 10px;
                color: $tableTextColor;
                box-sizing: border-box;
            }

            .item-list {
                width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                display: flex;
                flex-direction: column;
                padding: 6px 10px;
                color: $tableTextColor;
                box-sizing: border-box;

                .line {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    color: $tableTextColor;
                    box-sizing: border-box;

                    .item {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: $tableTextColor;
                        box-sizing: border-box;

                        div:nth-child(1) {
                            width: 160px;
                            padding: 6px 10px;
                            margin-right: 6px;
                            color: $tableTextColor2;
                            font-weight: bold;
                            background-color: $tableBgColor;

                            span:nth-child(1) {
                                display: inline-block;
                                margin-right: 2px;
                                color: red;
                            }
                        }

                        div:nth-child(2) {
                            width: 160px;
                            margin-right: 20px;
                        }
                    }
                }
            }

            .table-box {
                width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                display: flex;
                align-items: center;
                padding: 6px 10px;
                color: $tableTextColor;
                box-sizing: border-box;

                .box-item {
                    width: calc(100% / 4 - 2px);
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    color: $tableTextColor;
                    box-sizing: border-box;

                    div:nth-child(1) {
                        margin-right: 6px;
                        color: $tableTextColor2;
                        font-weight: bold;
                    }
                }
            }
        }

        .table-item-line {
            width: 100%;
            display: flex;
            border-bottom: 1px solid $tableBorderColor;

            &:last-child {
                border-bottom: none;
            }

            .line-item {
                width: calc(100% / 2 - 2px);
                display: flex;
                border-right: 1px solid $tableBorderColor;

                &:last-child {
                    border-right: none;
                }

                .item-title {
                    width: $tableLeftTitleWidth;
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    font-weight: 600;
                    color: $tableTitleColor;
                    border-right: 1px solid $tableBorderColor;
                    background-color: $tableBgColor;
                    box-sizing: border-box;
                    span:nth-child(1) {
                        display: inline-block;
                        margin-right: 2px;
                    }
                }

                .item-content {
                    width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    color: $tableTextColor;
                    box-sizing: border-box;
                }
            }
        }
    }
}
</style>