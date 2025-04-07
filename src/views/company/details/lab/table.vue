<template>
    <div class="app-container">
        <div class="header-container">
            <div class="left-total">指标</div>
            <div class="right">累计值（截至2025年底）</div>
            <div class="right">年度值（2024年）</div>
            <div class="right">年度值（2025年）</div>
        </div>
        <div class="item-container">
            <div class="right-box">
                <div class="item">
                    <div class="item-title">数据生产总量（TB）</div>
                    <div class="right-item">1</div>
                    <div class="right-item">1</div>
                    <div class="right-item">1</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title third">原始数据存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title third">衍生数据存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title third">备份数据存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title third">结构化数据存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">云存储总量(TB)</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">数据边缘设备存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">数据终端设备存储总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">冷数据占比（%）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">开放数据集总数（个）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">开放数据总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">自建算力规模（TFLOPS）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">租用算力规模（TFLOPS）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">自建大模型数量（个）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">AI投入金额（万元）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
                <div class="item">
                    <div class="item-title">用于AI计算的数据集数据总量（TB）</div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                    <div class="right-item"></div>
                </div>
            </div>
        </div>
        <div class="notes-container">
            <div class="left">备注</div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LabTable',
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
    font-size: 12px;
    color: $tableTextColor;

    .header-container {
        width: 100%;
        display: flex;
        align-items: center;
        color: $tableTitleColor;
        font-weight: 600;
        background-color: $tableBgColor;

        div {
            padding: 7px 10px;
            text-align: center;
            border: 1px solid $tableBorderColor;
            border-right: none;
            box-sizing: border-box;

            &:last-child {
                border-right: 1px solid $tableBorderColor;
            }
        }

        .left-total {
            width: $tableLeftTitleWidth3;
            text-align: center;
        }

        .right {
            width: calc((100% - #{$tableLeftTitleWidth3}) / 3);
        }
    }

    .item-container {
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid $tableBorderColor;
        border-top: none;
        background-color: $tableBgColor;
        box-sizing: border-box;

        .right-box {
            width: 100%;
            box-sizing: border-box;

            .item {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: stretch;
                box-sizing: border-box;

                .item-title {
                    display: flex;
                    align-items: center;
                    width: $tableLeftTitleWidth3;
                    padding: 7px 10px;
                    color: $tableTitleColor;
                    font-weight: 600;
                    text-align: left;
                    border-left: 1px solid $tableBorderColor;
                    border-bottom: 1px solid $tableBorderColor;
                    box-sizing: border-box;

                    &.third {
                        padding-left: 20px;
                        font-weight: 500;
                    }
                }

                .right-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc((100% - #{$tableLeftTitleWidth3}) / 3);
                    height: 1;
                    padding: 7px 10px;
                    border-left: 1px solid $tableBorderColor;
                    border-bottom: 1px solid $tableBorderColor;
                    background-color: #fff;
                    box-sizing: border-box;
                }

                &:last-child {
                    .item-title {
                        border-bottom: none;
                    }

                    .right-item {
                        border-bottom: none;
                    }
                }
            }
        }
    }

    .notes-container {
        display: flex;
        align-items: stretch;

        .left {
            width: calc(#{$tableLeftTitleWidth3} + 1px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 10px;
            color: $tableTitleColor;
            font-weight: 600;
            border: 1px solid $tableBorderColor;
            border-top: none;
            border-right: none;
            background-color: $tableBgColor;
            box-sizing: border-box;
        }

        .right {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 10px;
            border: 1px solid $tableBorderColor;
            border-top: none;
            box-sizing: border-box;
        }
    }
}
</style>