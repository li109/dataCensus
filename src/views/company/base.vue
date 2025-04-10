<template>
    <div class="app-container">
        <div class="table-container">
            <div class="table-item">
                <div class="item-title">单位名称</div>
                <div class="item-content">{{ info.unitName }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">统一社会信用代码</div>
                <div class="item-content">{{ info.usciCode }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">机构类型</div>
                <div class="item-content">{{ info.organizationType }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">单位类型</div>
                <div class="item-content">{{ info.unitType }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">政府机构类型</div>
                <div class="item-content">{{ info.govOrganizationType }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">所属行业</div>
                <div class="item-content">{{ info.industry }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">通讯地址</div>
                <div class="item-content">{{ info.address }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">详细地址</div>
                <div class="item-content">{{ info.detailAddress }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">是否开展公共数据授权运营</div>
                <div class="item-content">{{ info.isPubDataOperate }}</div>
            </div>
            <div class="card-list" v-if="info.isPubDataOperate === '是'">
                <div class="card">
                    <div class="card-item">
                        <div class="card-title">授权运营单位名称</div>
                        <div class="card-content"></div>
                    </div>
                    <div class="card-item">
                        <div class="card-title">运营主体单位性质</div>
                        <div class="card-content"></div>
                    </div>
                    <div class="card-item">
                        <div class="card-title">数据授权运营服务行业</div>
                        <div class="type-list">
                            <div class="type-item">
                                <div>农、林、牧、渔业</div>
                                <div>【农业】</div>
                            </div>
                            <div class="type-item">
                                <div>采矿业</div>
                                <div>【煤炭开采和洗选业】</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-item">
                        <div class="card-title">授权运营单位名称</div>
                        <div class="card-content">数据主管部门</div>
                    </div>
                    <div class="card-item">
                        <div class="card-title">运营主体单位性质</div>
                        <div class="card-content">事业单位</div>
                    </div>
                    <div class="card-item">
                        <div class="card-title">数据授权运营服务行业</div>
                        <div class="type-list">
                            <div class="type-item">
                                <div>农、林、牧、渔业</div>
                                <div>【农业】</div>
                            </div>
                            <div class="type-item">
                                <div>采矿业</div>
                                <div>【煤炭开采和洗选业】</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-item">
                <div class="item-title">是否在政务场景开展 AI 技术的应用</div>
                <div class="item-content">{{ info.isAi }}</div>
            </div>
            <div class="table-item" v-if="info.isAi === '是'">
                <div class="item-title">应用场景</div>
                <div class="item-content">{{ info.applicationScenarios }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">是否已经开展了本地区数据资源调查工作</div>
                <div class="item-content">{{ info.isLocalWork }}</div>
            </div>
            <div class="table-item" v-if="info.isLocalWork === '是'">
                <div class="item-title">简要填写调查工作内容和成果</div>
                <div class="item-content">{{ info.workAndResult }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">填报人员</div>
                <div class="table-box">
                    <div class="box-item">
                        <div>姓名：</div>
                        <div>{{ info.reportPersonName }}</div>
                    </div>
                    <div class="box-item">
                        <div>部门：</div>
                        <div>{{ info.department }}</div>
                    </div>
                    <div class="box-item">
                        <div>手机：</div>
                        <div>{{ info.phoneNumber }}</div>
                    </div>
                    <div class="box-item">
                        <div>职务：</div>
                        <div>{{ info.position }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBase } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'Base',
    data() {
        return {
            usciCode: '',
            type: '',
            info: {
                unitName: '', // 单位名称
                usciCode: '', // 单位编码
                organizationType: '', // 机构类型
                unitType: '', // 单位类型
                govOrganizationType: '', // 政府机构类型
                industry: '', // 所属行业
                address: '', // 通讯地址
                detailAddress: '', // 详细地址
                isPubDataOperate: '是', // 是否开展公共数据授权运营
                operateUnit: '', // 运营单位名称
                operateUnitNature: '', // 运营主体单位性质
                industryCatalogueone: '', // 数据授权运营服务行业一级目录
                industryCataloguetwo: '', // 数据授权运营服务行业二级目录
                isAi: '', // 是否在政务场景开展AI技术的应用
                applicationScenarios: '', // 应用场景
                isLocalWork: '', // 是否已经开展了本地区数据资源调查工作
                workAndResult: '', // 简要填写调查工作内容和成果
                reportPersonName: '', // 填报人姓名
                phoneNumber: '', // 填报人手机号码
                department: '', // 填报人部门
                position: '', // 填报人职务
            }
        }
    },
    created() {
        this.usciCode = this.$route.query.usciCode
        this.type = this.$route.query.type
        this.getData()
    },
    methods: {
        getData() {
            getBase({ usciCode: this.usciCode, type: this.type}).then(res => {
                console.log(res, 'res')
                if(res && res.rows && res.rows.baseInfo) {
                    this.info = objectMerge(this.info, JSON.parse(JSON.stringify(res.rows.baseInfo, (key, value) => (value === null ? undefined : value))))
                }
            })
        }
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

        .card-list {
            width: 100%;
            border-bottom: 1px solid $tableBorderColor;

            .card {
                width: calc(100% - 20px);
                border: 1px solid #ccc;
                margin: 10px 0 10px 10px;
                box-sizing: border-box;

                .card-item {
                    width: 100%;
                    display: flex;
                    border-bottom: 1px solid #ccc;

                    &:last-child {
                        border-bottom: none;
                    }

                    .card-title {
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

                    .card-content {
                        width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                        display: flex;
                        align-items: center;
                        padding: 6px 10px;
                        color: $tableTextColor;
                        box-sizing: border-box;
                    }

                    .type-list {
                        width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                        padding: 10px;
                        box-sizing: border-box;

                        .type-item {
                            width: 100%;
                            padding: 6px 10px;
                            color: $tableTextColor;
                            box-sizing: border-box;
                            border: 1px solid $tableBorderColor;
                            border-bottom: none;

                            &:last-child {
                                border-bottom: 1px solid $tableBorderColor;
                            }

                            div:nth-child(1) {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                padding-bottom: 5px;
                                border-bottom: 1px solid $tableBorderColor2;
                                box-sizing: border-box;
                            }

                            div:nth-child(2) {
                                width: 100%;
                                display: flex;
                                align-items: center;
                                padding-top: 5px;
                                box-sizing: border-box;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>