<template>
    <div class="app-container">
        <div class="header-container">
            <div class="left-total">指标</div>
            <div class="right">累计值（截至2024年底）</div>
            <div class="right">年度值（2023年）</div>
            <div class="right">年度值（2024年）</div>
        </div>
        <div class="item-container">
            <div class="right-box">
                <div class="item">
                    <div class="item-title">数据生产总量（TB）</div>
                    <div class="right-item">{{ common.sys_1.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_1.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_1.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_2.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_2.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_2.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">原始数据存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_3.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_3.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_3.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">衍生数据存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_4.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_4.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_4.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">备份数据存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_5.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_5.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_5.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">结构化数据存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_6.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_6.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_6.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">云存储总量(TB)</div>
                    <div class="right-item">{{ common.sys_7.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_7.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_7.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据边缘设备存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_8.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_8.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_8.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据终端设备存储总量（TB）</div>
                    <div class="right-item">{{ common.sys_9.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_9.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_9.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">冷数据占比（%）</div>
                    <div class="right-item">{{ common.sys_10.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_10.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_10.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">开放数据集总数（个）</div>
                    <div class="right-item">{{ common.sys_11.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_11.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_11.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">开放数据总量（TB）</div>
                    <div class="right-item">{{ common.sys_12.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_12.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_12.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">自建算力规模（TFLOPS）</div>
                    <div class="right-item">{{ common.sys_13.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_13.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_13.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">租用算力规模（TFLOPS）</div>
                    <div class="right-item">{{ common.sys_14.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_14.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_14.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">自建大模型数量（个）</div>
                    <div class="right-item">{{ common.sys_15.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_15.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_15.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">AI投入金额（万元）</div>
                    <div class="right-item">{{ common.sys_16.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_16.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_16.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">用于AI计算的数据集数据总量（TB）</div>
                    <div class="right-item">{{ common.sys_17.yearValue3 }}</div>
                    <div class="right-item">{{ common.sys_17.yearValue1 }}</div>
                    <div class="right-item">{{ common.sys_17.yearValue2 }}</div>
                </div>
            </div>
        </div>
        <div class="notes-container">
            <div class="left">备注</div>
            <div class="right">{{ beizhu.comments }}</div>
        </div>
    </div>
</template>

<script>
import { getResource } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'LabTable',
    data() {
        return {
            usciCode: '',
            type: '',
            reportTypeCode: '',
            common: {
                sys_1: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_2: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_3: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_4: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_5: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_6: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_7: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_8: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_9: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_10: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_11: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_12: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_13: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_14: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_15: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_16: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                sys_17: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
            },
            beizhu: {
                comments: ''
            }
        }
    },
    created() {
        this.usciCode = this.$route.query.usciCode
        this.type = this.$route.query.type
        this.reportTypeCode = this.$route.query.reportTypeCode
        this.getData()
    },
    methods: {
        getData() {
            const params = { 
                usciCode: this.usciCode,
                type: this.type,
                reportTypeCode: this.reportTypeCode
            }
            getResource(params).then(res => {
                if(res && res.rows && res.rows.resource) {
                    this.handlerData('common', res.rows.resource)
                    if(res.rows.resource.beizhu) this.handlerData('beizhu', res.rows.resource.beizhu)
                }
            })
        },
        handlerData(target, source) {
            if(!target || !source) return;
            Object.keys(this[target]).forEach(key => {
                if(source[key]) this[target][key] = objectMerge(this[target][key], JSON.parse(JSON.stringify(source[key], (key, value) => (value === null ? undefined : value))))
            })
        }
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