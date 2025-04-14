<template>
    <div class="app-container">
        <div class="table-container">
            <div class="header-container">
                <div class="left-total">指标</div>
                <div class="middle-box">
                    <div class="middle">交易总额（万元）</div>
                    <div class="little-list">
                        <div>2024年</div>
                        <div>2025年</div>
                    </div>
                </div>
                <div class="middle-box">
                    <div class="middle">交易次数（次）</div>
                    <div class="little-list">
                        <div>2024年</div>
                        <div>2025年</div>
                    </div>
                </div>
                <div class="large-box">
                    <div class="large">数据集</div>
                    <div class="middle-list">
                        <div>可交易数量（个）</div>
                        <div>交易数量（个）</div>
                        <div>交易金额（万元）</div>
                        <div>交易次数（次）</div>
                        <div>省内购买方数量（个）</div>
                        <div>省外购买方数量（个）</div>
                        <div>省内供给方数量（个）</div>
                        <div>省外供给方数量（个）</div>
                    </div>
                    <div class="little-list">
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                    </div>
                </div>
                <div class="large-box last">
                    <div class="large">数据产品和服务</div>
                    <div class="middle-list">
                        <div>可交易数量（个）</div>
                        <div>交易数量（个）</div>
                        <div>交易金额（万元）</div>
                        <div>交易次数（次）</div>
                        <div>省内购买方数量（个）</div>
                        <div>省外购买方数量（个）</div>
                        <div>省内供给方数量（个）</div>
                        <div>省外供给方数量（个）</div>
                    </div>
                    <div class="little-list">
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                        <div>2024年</div>
                        <div>2025年</div>
                    </div>
                </div>
            </div>
            <!-- <div class="body-container">
                <div class="body-list" v-for="(item, index) in list" :key="item.name">
                    <div class="left-total">{{ item.name }}</div>
                    <div class="body-item" v-for="(k, i) in item.value" :key="i">                    
                        <div>{{ k }}</div>
                    </div>
                </div>
            </div> -->
            <div class="test-container">
                <div class="body-list" v-for="(item, index) in list" :key="item.name">
                    <div class="left-total">{{ item.name }}</div>
                    <div class="body-item" v-for="(k, i) in item.value" :key="i">                    
                        {{ k }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getResource } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'TradeTable',
    data() {
        return {
            usciCode: '',
            type: '',
            reportTypeCode: '',
            list: [
                {
                    name: '农、林、牧、渔业',
                    value: ['168', '1681231212126616812312121266', 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '采矿业',
                    value: [168, '168123456', 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '制造业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '电力、热力、燃气及水生产和供应业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '建筑业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '批发和零售业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '交通运输、仓储和邮政业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '住宿和餐饮业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '信息传输、软件和信息技术服务业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '金融业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
                {
                    name: '房地产业',
                    value: [168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168, 168],
                },
            ]
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
                console.log(res, 'res')
                // if(res && res.rows && res.rows.resource) {
                //     if(res.rows.resource.shujucunchu) this.handlerData('shujucunchu', res.rows.resource.shujucunchu)
                //     if(res.rows.resource.shujuliutong) this.handlerData('shujuliutong', res.rows.resource.shujuliutong)
                //     if(res.rows.resource.shujuyingyong) this.handlerData('shujuyingyong', res.rows.resource.shujuyingyong)
                //     if(res.rows.resource.beizhu) this.handlerData('beizhu', res.rows.resource.beizhu)
                // }
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

    .table-container {
        width: 100%;
        padding-right: 20px;
        margin-right: 20px;
        overflow-x: scroll;
        overflow-y: hidden;
        box-sizing: border-box;

        .header-container {
            height: calc(#{$bigTableCellHeight} * 3);
            display: flex;
            align-items: center;
            box-sizing: border-box;

            .left-total {
                width: $bigTableTitleWidth;
                height: calc(#{$bigTableCellHeight} * 3);
                flex: 0 0 $bigTableTitleWidth;
                line-height: calc(#{$bigTableCellHeight} * 3);
                font-size: 12px;
                font-weight: 600;
                border: 1px solid $tableBorderColor;
                border-right: none;
                border-bottom: none;
                text-align: center;
                box-sizing: border-box;
            }

            .large-box {
                height: calc(#{$bigTableCellHeight} * 3);
                border: 1px solid $tableBorderColor;
                border-right: none;
                border-bottom: none;
                box-sizing: border-box;

                &.last {
                    margin-left: -0.5px;
                    border-right: 1px solid $tableBorderColor;
                }

                .large {
                    height: calc(#{$bigTableCellHeight} * 1);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: calc(#{$bigTableCellHeight} * 1);
                    border-bottom: 1px solid $tableBorderColor;
                    text-align: center;
                    box-sizing: border-box;
                }

                .middle-list {
                    height: calc(#{$bigTableCellHeight} * 1);
                    display: flex;
                    align-items: center;
                    box-sizing: border-box;

                    div {
                        width: calc(#{$bigTableCellWidth} * 2);
                        height: calc(#{$bigTableCellHeight} * 1);
                        line-height: calc(#{$bigTableCellHeight} * 1);
                        font-size: 12px;
                        font-weight: 600;
                        border-right: 1px solid $tableBorderColor;
                        text-align: center;
                        box-sizing: border-box;

                        &:last-child {
                            border-right: none;
                        }
                    }
                }
            }

            .little-list {
                height: calc(#{$bigTableCellHeight} * 1);
                display: flex;
                align-items: center;
                box-sizing: border-box;

                div {
                    width: calc(#{$bigTableCellWidth} * 1);
                    height: calc(#{$bigTableCellHeight} * 1);
                    line-height: calc(#{$bigTableCellHeight} * 1);
                    font-size: 12px;
                    font-weight: 600;
                    border-top: 1px solid $tableBorderColor;
                    border-right: 1px solid $tableBorderColor;
                    text-align: center;
                    box-sizing: border-box;

                    &:last-child {
                        border-right: none;
                    }
                }
            }

            .middle-box {
                width: calc(#{$bigTableCellWidth} * 2);
                height: calc(#{$bigTableCellHeight} * 3);
                border: 1px solid $tableBorderColor;
                border-right: none;
                border-bottom: none;
                box-sizing: border-box;

                .middle {
                    height: calc(#{$bigTableCellHeight} * 2);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: calc(#{$bigTableCellHeight} * 2);
                    text-align: center;
                    box-sizing: border-box;
                }

                .little-list {
                    div:first-child {
                        width: calc(#{$bigTableCellWidth} * 1 + 1px);
                    }
                }

            }
        }

        .body-container {
            width: fit-content;
            margin-bottom: 20px;
            border-bottom: 1px solid $tableBorderColor;
            box-sizing: border-box;

            .body-list {
                // height: calc(#{$bigTableCellHeight} * 1);
                // height: fit-content;
                display: flex;
                align-items: center;
                box-sizing: border-box;

                .left-total {
                    width: $bigTableTitleWidth;
                    // height: calc(#{$bigTableCellHeight} * 1);
                    // flex: 0 0 calc(#{$bigTableTitleWidth} + 1px);
                    // margin-top: 0.5px;
                    line-height: calc(#{$bigTableCellHeight} * 1);
                    font-size: 12px;
                    font-weight: 600;
                    border: 1px solid $tableBorderColor;
                    border-bottom: none;
                    text-align: center;
                    box-sizing: border-box;
                }

                .body-item {
                    width: $bigTableCellWidth;
                    display: flex;
                    flex-wrap: wrap;
                    // height: calc(#{$bigTableCellHeight} * 1);
                    // flex: 0 0 $bigTableCellWidth;
                    line-height: calc(#{$bigTableCellHeight} * 1);
                    font-size: 12px;
                    border-top: 1px solid $tableBorderColor;
                    border-right: 1px solid $tableBorderColor;
                    text-align: center;
                    box-sizing: border-box;
                }
            }
        }

        .test-container {
            width: auto;
            margin-bottom: 20px;
            // border-bottom: 1px solid $tableBorderColor;
            box-sizing: border-box;
            
            .body-list{
                display: flex;
                white-space: nowrap;
                .left-total {
                    width: calc(#{$bigTableTitleWidth} + 1px);
                    min-height: $bigTableCellHeight;
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    font-size: 12px;
                    font-weight: 600;
                    border: 1px solid $tableBorderColor;
                    border-bottom: none;
                    padding: 0 6px;
                    box-sizing: border-box;
                }
                .body-item {
                    width: $bigTableCellWidth;
                    min-height: $bigTableCellHeight;
                    display: flex;
                    align-items: center;
                    padding: 2px 6px;
                    flex-shrink: 0; 
                    border-top: 1px solid $tableBorderColor;
                    border-right: 1px solid $tableBorderColor;
                    box-sizing: border-box;
                    overflow-wrap: break-word;
                    word-break: break-word;
                    white-space: normal;
                }
            }

            .body-list:last-child {
                .left-total {
                    border-bottom: 1px solid $tableBorderColor;
                }
                .body-item {
                    border-bottom: 1px solid $tableBorderColor;
                }
            }
        }
    }
}
</style>