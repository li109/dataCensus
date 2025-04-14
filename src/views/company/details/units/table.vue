<template>
    <div class="app-container">
        <div class="header-container">
            <div class="left-total">指标项</div>
            <div class="right">累计值（截至2024年底）</div>
            <div class="right">年度值（2023年）</div>
            <div class="right">年度值（2024年）</div>
        </div>
        <div class="item-container">
            <div class="left-box">数据存储</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">数据存储总空间(TB)</div>
                    <div class="right-item">{{ shujucunchu.area_1.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_1.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_1.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总量(TB)</div>
                    <div class="right-item">{{ shujucunchu.area_2.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_2.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_2.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">云存储总量(TB)</div>
                    <div class="right-item">{{ shujucunchu.area_3.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_3.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_3.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">备份数据存储总量(TB)</div>
                    <div class="right-item">{{ shujucunchu.area_4.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_4.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_4.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">结构化效据存储总量(TB)</div>
                    <div class="right-item">{{ shujucunchu.area_5.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_5.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_5.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">物联感知数据存储总量(TB)</div>
                    <div class="right-item">{{ shujucunchu.area_6.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_6.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_6.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">冷数据占比(%)</div>
                    <div class="right-item">{{ shujucunchu.area_7.yearValue3 }}</div>
                    <div class="right-item">{{ shujucunchu.area_7.yearValue1 }}</div>
                    <div class="right-item">{{ shujucunchu.area_7.yearValue2 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据流通</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">数据开放总量(TB)</div>
                    <div class="right-item">{{ shujuliutong.area_9.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_9.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_9.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">开放数据集总数(个)</div>
                    <div class="right-item">{{ shujuliutong.area_10.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_10.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_10.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">占全部数据集比例(%)</div>
                    <div class="right-item">{{ shujuliutong.area_11.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_11.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_11.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">数据集平均下载次数(次)</div>
                    <div class="right-item">{{ shujuliutong.area_12.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_12.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_12.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">申请共享的数据集数量（个）</div>
                    <div class="right-item">{{ shujuliutong.area_13.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_13.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_13.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">驳回申请的数据集数量（个）</div>
                    <div class="right-item">{{ shujuliutong.area_14.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_14.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_14.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">公共数据授权运营数据总量(TB)</div>
                    <div class="right-item">{{ shujuliutong.area_15.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_15.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_15.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">公共数据授权运营收入（万元）</div>
                    <div class="right-item">{{ shujuliutong.area_16.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_16.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_16.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">签订公共数据授权运营协议的运营机构总数(个)</div>
                    <div class="right-item">{{ shujuliutong.area_17.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_17.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_17.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">公共数据授权运营机构交付的数据产品数量(个)</div>
                    <div class="right-item">{{ shujuliutong.area_18.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_18.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_18.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据资源目录数（个）</div>
                    <div class="right-item">{{ shujuliutong.area_19.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_19.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_19.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">纳入全国一体化政务服务平台管理的政务服务事项数量(个)</div>
                    <div class="right-item">{{ shujuliutong.area_20.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.area_20.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.area_20.yearValue2 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据应用</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">公共数据服务产品数量（个）</div>
                    <div class="right-item">{{ shujuyingyong.area_21.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_21.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_21.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">移动APP数量(个)</div>
                    <div class="right-item">{{ shujuyingyong.area_22.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_22.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_22.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">日均使用次数（次）</div>
                    <div class="right-item">{{ shujuyingyong.area_23.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_23.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_23.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">小程序数量(个)</div>
                    <div class="right-item">{{ shujuyingyong.area_24.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_24.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_24.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">日均使用次数(次)</div>
                    <div class="right-item">{{ shujuyingyong.area_25.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_25.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_25.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">web应用数量(个)</div>
                    <div class="right-item">{{ shujuyingyong.area_26.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_26.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_26.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">日均使用次数（次）</div>
                    <div class="right-item">{{ shujuyingyong.area_27.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_27.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_27.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">算力总规模(TFLOPS)</div>
                    <div class="right-item">{{ shujuyingyong.area_28.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_28.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_28.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">算力利用率(%)</div>
                    <div class="right-item">{{ shujuyingyong.area_29.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_29.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_29.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">智能算力规模(TFLOPS)</div>
                    <div class="right-item">{{ shujuyingyong.area_31.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_31.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_31.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">智能算力利用率(%)</div>
                    <div class="right-item">{{ shujuyingyong.area_32.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_32.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_32.yearValue2 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">部署大模型数量（个）</div>
                    <div class="right-item">{{ shujuyingyong.area_34.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_34.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.area_34.yearValue2 }}</div>
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
    name: 'UnitsTable',
    data() {
        return {
            usciCode: '',
            type: '',
            reportTypeCode: '',
            // 数据存储
            shujucunchu: {
                area_1: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_2: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_3: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_4: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_5: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_6: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_7: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_8: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
            },
            // 数据流通
            shujuliutong: {
                area_9: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_10: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_11: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_12: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_13: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_14: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_15: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_16: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_17: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_18: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_19: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_20: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
            },
            // 数据应用
            shujuyingyong: {
                area_21: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_22: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_23: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_24: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_25: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_26: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_27: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_28: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_29: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_30: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_31: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_32: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_33: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
                area_34: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: '',},
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
                    if(res.rows.resource.shujucunchu) this.handlerData('shujucunchu', res.rows.resource.shujucunchu)
                    if(res.rows.resource.shujuliutong) this.handlerData('shujuliutong', res.rows.resource.shujuliutong)
                    if(res.rows.resource.shujuyingyong) this.handlerData('shujuyingyong', res.rows.resource.shujuyingyong)
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
            width: $tableLeftTitleWidth2;
            text-align: center;
        }

        .right {
            width: calc((100% - #{$tableLeftTitleWidth2}) / 3);
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

        .left-box {
            width: 108px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 10px;
            color: $tableTitleColor;
            font-weight: 600;
            box-sizing: border-box;
        }

        .right-box {
            width: calc(100% - 108px);
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
                    width: calc(#{$tableLeftTitleWidth2} - 109px);
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
                    width: calc((100% - (#{$tableLeftTitleWidth2} - 108px)) / 3);
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
            width: $tableLeftTitleWidth2;
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